import { getDb } from './mongodb';

export interface BlogContentBlock {
  type: 'heading' | 'paragraph' | 'image' | 'gallery' | 'list' | 'quote';
  text?: string;
  level?: 2 | 3 | 4;
  url?: string;
  alt?: string;
  images?: { url: string; alt: string }[];
  style?: 'ordered' | 'unordered';
  items?: string[];
}

export interface BlogAuthor {
  name: string;
  role?: string;
  avatar?: string;
}

export interface BlogPostDoc {
  slug: string;
  title: string;
  excerpt?: string;
  content: BlogContentBlock[] | string;
  featuredImage?: string;
  coverImage?: string;
  category?: string;
  tags?: string[];
  author?: string | BlogAuthor;
  readTime?: number;
  publishedAt?: Date | string | null;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  published?: boolean;
  viewCount?: number;
  meta?: {
    title?: string;
    description?: string;
  };
}

function serialize(doc: Record<string, unknown> & { _id?: unknown }): BlogPostDoc {
  const { _id, ...rest } = doc;
  void _id;
  return rest as unknown as BlogPostDoc;
}

export async function listBlogPosts(includeDrafts = false): Promise<BlogPostDoc[]> {
  const db = await getDb();
  const filter = includeDrafts ? {} : { published: { $ne: false } };
  const docs = await db
    .collection('blog')
    .find(filter)
    .sort({ publishedAt: -1, createdAt: -1 })
    .toArray();
  return docs.map(serialize);
}

export async function getBlogPost(slug: string): Promise<BlogPostDoc | null> {
  const db = await getDb();
  const doc = await db.collection('blog').findOne({ slug });
  return doc ? serialize(doc) : null;
}

// Convertit un tableau de ContentBlock en HTML editable par Tiptap.
// Sert au pre-remplissage de l'editeur pour les anciens articles importes.
export function blocksToHtml(blocks: BlogContentBlock[]): string {
  return blocks
    .map((b) => {
      switch (b.type) {
        case 'paragraph':
          return `<p>${b.text || ''}</p>`;
        case 'heading': {
          const lvl = b.level || 2;
          return `<h${lvl}>${b.text || ''}</h${lvl}>`;
        }
        case 'list': {
          const tag = b.style === 'ordered' ? 'ol' : 'ul';
          const items = (b.items || []).map((i) => `<li>${i}</li>`).join('');
          return `<${tag}>${items}</${tag}>`;
        }
        case 'image':
          return `<p><img src="${b.url || ''}" alt="${b.alt || ''}" /></p>`;
        case 'gallery':
          return (b.images || [])
            .map((i) => `<p><img src="${i.url}" alt="${i.alt || ''}" /></p>`)
            .join('');
        case 'quote':
          return `<blockquote><p>${b.text || ''}</p></blockquote>`;
        default:
          return '';
      }
    })
    .join('\n');
}

export function contentToEditableHtml(content: BlogContentBlock[] | string | undefined): string {
  if (!content) return '';
  if (typeof content === 'string') return content;
  if (Array.isArray(content)) return blocksToHtml(content);
  return '';
}

const FALLBACK_AVATAR = 'https://i.ibb.co/yBWBdDGV/Ic-ne-logo-fonc.png';

// Transforme un document MongoDB en objet "plat" serialisable pour un composant client
// (dates -> ISO string, auteur normalise en objet, image de couverture unifiee).
export function toClientPost(p: BlogPostDoc) {
  const author =
    p.author && typeof p.author === 'object'
      ? p.author
      : { name: (p.author as string) || 'ES Solutions', role: '', avatar: FALLBACK_AVATAR };
  return {
    slug: p.slug,
    title: p.title,
    excerpt: p.excerpt || '',
    content: typeof p.content === 'string' ? p.content : contentToEditableHtml(p.content),
    coverImage: p.coverImage || p.featuredImage || '',
    category: p.category || '',
    tags: p.tags || [],
    author,
    readTime: p.readTime || 5,
    publishedAt: p.publishedAt ? new Date(p.publishedAt).toISOString() : null,
  };
}

export type ClientPost = ReturnType<typeof toClientPost>;
