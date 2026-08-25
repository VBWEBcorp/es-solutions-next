import type { Metadata } from 'next';
import CommunicationExterne from '@/components/pages/CommunicationExterne';
import { fetchPageData } from '@/lib/pages';

// La page lit ses textes et ses images dans la base : sans revalidation elle resterait
// figee sur l'etat de la derniere construction, et les modifications faites dans l'espace
// admin ne partiraient jamais en ligne. Meme reglage que /actualites, qui lui fonctionne.
export const revalidate = 60;

export const metadata: Metadata = {
  title: 'Communication externe & marketing',
  description:
    "Stratégie de communication externe, image de marque, marketing digital et réseaux sociaux : ES Solutions met votre communication au service de votre développement commercial.",
  alternates: { canonical: '/nos-offres/communication-externe-marketing' },
};

export default async function Page() {
  const data = await fetchPageData('comm-externe');
  return <CommunicationExterne data={data ?? undefined} />;
}
