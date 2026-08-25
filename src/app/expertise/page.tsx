import type { Metadata } from 'next';
import Expertise from '@/components/pages/Expertise';
import { fetchPageData } from '@/lib/pages';

// La page lit ses textes et ses images dans la base : sans revalidation elle resterait
// figee sur l'etat de la derniere construction, et les modifications faites dans l'espace
// admin ne partiraient jamais en ligne. Meme reglage que /actualites, qui lui fonctionne.
export const revalidate = 60;

export const metadata: Metadata = {
  title: 'Notre expertise',
  description:
    "L'expertise ES Solutions : un consultant intégré qui structure votre communication, votre marketing et votre événementiel avec une méthode orientée résultats.",
  alternates: { canonical: '/expertise' },
};

export default async function Page() {
  const data = await fetchPageData('expertise');
  return <Expertise data={data ?? undefined} />;
}
