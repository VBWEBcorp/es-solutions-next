import type { Metadata } from 'next';
import Offers from '@/components/pages/Offers';
import { fetchPageData } from '@/lib/pages';

// La page lit ses textes et ses images dans la base : sans revalidation elle resterait
// figee sur l'etat de la derniere construction, et les modifications faites dans l'espace
// admin ne partiraient jamais en ligne. Meme reglage que /actualites, qui lui fonctionne.
export const revalidate = 60;

export const metadata: Metadata = {
  title: 'Nos offres',
  description:
    "Découvrez les offres d'accompagnement ES Solutions : Starter Pack ES, Pack Boost ES et Pack ES 360° en communication, marketing et événementiel pour PME.",
  alternates: { canonical: '/nos-offres' },
};

export default async function Page() {
  const data = await fetchPageData('offres');
  return <Offers data={data ?? undefined} />;
}
