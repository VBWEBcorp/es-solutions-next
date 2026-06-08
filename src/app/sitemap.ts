import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/config/business';
import { listBlogPosts } from '@/lib/blog';

export const revalidate = 3600;

const STATIC_ROUTES: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'] }[] = [
  { path: '/', priority: 1.0, changeFrequency: 'weekly' },
  { path: '/nos-offres', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/nos-offres/communication-externe-marketing', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/nos-offres/communication-interne', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/nos-offres/evenementiel', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/expertise', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/expertise/marketing', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/nos-realisations', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/notre-equipe', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/actualites', priority: 0.8, changeFrequency: 'weekly' },
  { path: '/contact', priority: 0.6, changeFrequency: 'yearly' },
  { path: '/mentions-legales', priority: 0.3, changeFrequency: 'yearly' },
  { path: '/politique-confidentialite', priority: 0.3, changeFrequency: 'yearly' },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((r) => ({
    url: `${SITE_URL}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));

  let postEntries: MetadataRoute.Sitemap = [];
  try {
    const posts = await listBlogPosts();
    postEntries = posts.map((p) => ({
      url: `${SITE_URL}/actualites/${p.slug}`,
      lastModified: p.updatedAt ? new Date(p.updatedAt) : p.publishedAt ? new Date(p.publishedAt) : now,
      changeFrequency: 'monthly',
      priority: 0.7,
    }));
  } catch {
    // Si la base est indisponible, on renvoie au moins les pages statiques.
  }

  return [...staticEntries, ...postEntries];
}
