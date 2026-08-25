import type { Metadata } from 'next';
import Marketing from '@/components/pages/Marketing';
import { fetchPageData } from '@/lib/pages';

// La page lit ses textes et ses images dans la base : sans revalidation elle resterait
// figee sur l'etat de la derniere construction, et les modifications faites dans l'espace
// admin ne partiraient jamais en ligne. Meme reglage que /actualites, qui lui fonctionne.
export const revalidate = 60;

export const metadata: Metadata = {
  title: 'Expertise marketing',
  description:
    "Stratégie et pilotage marketing pour PME : positionnement, génération de leads, veille concurrentielle. ES Solutions met le marketing au service de vos ventes.",
  alternates: { canonical: '/expertise/marketing' },
};

export default async function Page() {
  const data = await fetchPageData('marketing');
  return <Marketing data={data ?? undefined} />;
}
