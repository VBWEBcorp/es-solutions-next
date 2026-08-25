import type { Metadata } from 'next';
import LegalNotice from '@/components/pages/LegalNotice';
import { fetchPageData } from '@/lib/pages';

// La page lit ses textes et ses images dans la base : sans revalidation elle resterait
// figee sur l'etat de la derniere construction, et les modifications faites dans l'espace
// admin ne partiraient jamais en ligne. Meme reglage que /actualites, qui lui fonctionne.
export const revalidate = 60;

export const metadata: Metadata = {
  title: 'Mentions légales',
  description: 'Mentions légales du site ES Solutions Communication.',
  alternates: { canonical: '/mentions-legales' },
};

export default async function Page() {
  const data = await fetchPageData('mentions-legales');
  return <LegalNotice data={data ?? undefined} />;
}
