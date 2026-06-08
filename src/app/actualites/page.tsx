import type { Metadata } from 'next';
import { listBlogPosts, toClientPost } from '@/lib/blog';
import BlogList from '@/components/pages/BlogList';

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'Actualités',
  description:
    "Découvrez les derniers articles, conseils et études de cas ES Solutions en communication, marketing, événementiel et stratégie pour PME.",
  alternates: { canonical: '/actualites' },
};

export default async function Page() {
  const posts = (await listBlogPosts()).map(toClientPost);
  return <BlogList posts={posts} />;
}
