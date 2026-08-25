import type { Metadata } from 'next';
import PrivacyPolicy from '@/components/pages/PrivacyPolicy';
import { fetchPageData } from '@/lib/pages';

// La page lit ses textes et ses images dans la base : sans revalidation elle resterait
// figee sur l'etat de la derniere construction, et les modifications faites dans l'espace
// admin ne partiraient jamais en ligne. Meme reglage que /actualites, qui lui fonctionne.
export const revalidate = 60;

export const metadata: Metadata = {
  title: 'Politique de confidentialité',
  description: 'Politique de confidentialité et gestion des données personnelles du site ES Solutions Communication.',
  alternates: { canonical: '/politique-confidentialite' },
};

export default async function Page() {
  const data = await fetchPageData('confidentialite');
  return <PrivacyPolicy data={data ?? undefined} />;
}
