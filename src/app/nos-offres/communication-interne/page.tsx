import type { Metadata } from 'next';
import CommunicationInterne from '@/components/pages/CommunicationInterne';
import { fetchPageData } from '@/lib/pages';

// La page lit ses textes et ses images dans la base : sans revalidation elle resterait
// figee sur l'etat de la derniere construction, et les modifications faites dans l'espace
// admin ne partiraient jamais en ligne. Meme reglage que /actualites, qui lui fonctionne.
export const revalidate = 60;

export const metadata: Metadata = {
  title: 'Communication interne',
  description:
    "Renforcez la cohésion de vos équipes : ES Solutions structure votre communication interne, vos outils collaboratifs et votre culture d'entreprise.",
  alternates: { canonical: '/nos-offres/communication-interne' },
};

export default async function Page() {
  const data = await fetchPageData('comm-interne');
  return <CommunicationInterne data={data ?? undefined} />;
}
