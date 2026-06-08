import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';
import { getDb } from '@/lib/mongodb';
import { listBlogPosts } from '@/lib/blog';

// Combining diacritical marks U+0300..U+036F (construit sans caracteres non-ASCII).
const DIACRITICS = new RegExp(
  '[' + String.fromCharCode(0x300) + '-' + String.fromCharCode(0x36f) + ']',
  'g',
);

function slugify(s: string): string {
  return s
    .trim()
    .toLowerCase()
    .normalize('NFD')
    .replace(DIACRITICS, '')
    .replace(/[^a-z0-9-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

// GET /api/admin/blog -> liste TOUS les articles (publies + brouillons)
export async function GET() {
  try {
    const posts = await listBlogPosts(true);
    return NextResponse.json({
      posts: posts.map((p) => ({
        slug: p.slug,
        title: p.title,
        category: p.category || '',
        published: p.published !== false,
        publishedAt: p.publishedAt ?? null,
        updatedAt: p.updatedAt ?? null,
        coverImage: p.coverImage || '',
        featuredImage: p.featuredImage || '',
        excerpt: p.excerpt || '',
      })),
    });
  } catch (e) {
    return NextResponse.json(
      { error: 'Erreur', details: (e as Error).message },
      { status: 500 },
    );
  }
}

// POST /api/admin/blog -> cree un nouvel article (doc minimal)
export async function POST(req: NextRequest) {
  let body: { slug?: string; title?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Body JSON invalide' }, { status: 400 });
  }

  const title = (body.title || '').trim();
  if (!title) {
    return NextResponse.json({ error: 'Titre obligatoire' }, { status: 400 });
  }

  // Slug fourni, sinon derive du titre
  const slug = slugify(body.slug || title);
  if (!slug) {
    return NextResponse.json({ error: 'Slug obligatoire' }, { status: 400 });
  }

  try {
    const db = await getDb();
    const existing = await db.collection('blog').findOne({ slug });
    if (existing) {
      return NextResponse.json(
        { error: 'Ce slug est déjà utilisé' },
        { status: 409 },
      );
    }

    const now = new Date();
    await db.collection('blog').insertOne({
      slug,
      title,
      content: '',
      excerpt: '',
      category: '',
      tags: [],
      published: false,
      createdAt: now,
      updatedAt: now,
    });

    try {
      revalidatePath('/actualites');
      revalidatePath(`/actualites/${slug}`);
    } catch {}

    return NextResponse.json({ success: true, slug });
  } catch (e) {
    return NextResponse.json(
      { error: 'Erreur de création', details: (e as Error).message },
      { status: 500 },
    );
  }
}
