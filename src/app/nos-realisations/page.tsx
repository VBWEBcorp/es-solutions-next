import type { Metadata } from 'next';
import Realisations from '@/components/pages/Realisations';
import { fetchPageData } from '@/lib/pages';

// La page lit ses textes et ses images dans la base : sans revalidation elle resterait
// figee sur l'etat de la derniere construction, et les modifications faites dans l'espace
// admin ne partiraient jamais en ligne. Meme reglage que /actualites, qui lui fonctionne.
export const revalidate = 60;

export const metadata: Metadata = {
  title: 'Nos réalisations',
  description:
    "Découvrez les réalisations et projets accompagnés par ES Solutions en communication, marketing et événementiel auprès de PME et ETI.",
  alternates: { canonical: '/nos-realisations' },
};

export default async function Page() {
  const data = await fetchPageData('realisations');
  return <Realisations data={data ?? undefined} />;
}
