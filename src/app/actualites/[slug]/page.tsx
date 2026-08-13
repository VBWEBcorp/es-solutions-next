import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getBlogPost, listBlogPosts, toClientPost } from '@/lib/blog';
import BlogArticle from '@/components/pages/BlogArticle';
import { SITE_URL, BUSINESS_CONFIG } from '@/config/business';

export const revalidate = 60;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  if (!post) return { title: 'Article introuvable' };

  const cover = post.coverImage || post.featuredImage;
  const title = post.meta?.title || post.title;
  const description = post.meta?.description || post.excerpt;

  return {
    title,
    description,
    alternates: { canonical: `/actualites/${post.slug}` },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.excerpt,
      url: `${SITE_URL}/actualites/${post.slug}`,
      images: cover ? [cover] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: cover ? [cover] : undefined,
    },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  if (!post) notFound();

  const all = await listBlogPosts();
  const relatedPosts = all
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 3)
    .map(toClientPost);

  const clientPost = toClientPost(post);
  const cover = clientPost.coverImage;
  const authorName =
    typeof post.author === 'object' && post.author ? post.author.name : (post.author as string) || BUSINESS_CONFIG.name;
  const authorRole =
    typeof post.author === 'object' && post.author ? post.author.role : undefined;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: cover ? (cover.startsWith('http') ? cover : `${SITE_URL}${cover}`) : undefined,
    datePublished: clientPost.publishedAt,
    dateModified: post.updatedAt ? new Date(post.updatedAt).toISOString() : clientPost.publishedAt,
    author: { '@type': 'Person', name: authorName, ...(authorRole ? { jobTitle: authorRole } : {}) },
    publisher: {
      '@type': 'Organization',
      name: BUSINESS_CONFIG.name,
      logo: { '@type': 'ImageObject', url: BUSINESS_CONFIG.logo },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/actualites/${post.slug}` },
    keywords: (post.tags || []).join(', '),
  };

  // JSON-LD fourni par PHARE s'il existe (stocké tel quel sur l'article), sinon
  // celui généré ci-dessus. `</script>` échappé pour ne pas casser la balise.
  const articleLd = (
    (post as { jsonLd?: string }).jsonLd || JSON.stringify(jsonLd)
  ).replace(/</g, '\\u003c');

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: articleLd }}
      />
      <BlogArticle post={clientPost} relatedPosts={relatedPosts} />
    </>
  );
}
