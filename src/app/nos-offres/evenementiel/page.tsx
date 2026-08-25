import type { Metadata } from 'next';
import CommunicationEvenementielle from '@/components/pages/CommunicationEvenementielle';
import { fetchPageData } from '@/lib/pages';

// La page lit ses textes et ses images dans la base : sans revalidation elle resterait
// figee sur l'etat de la derniere construction, et les modifications faites dans l'espace
// admin ne partiraient jamais en ligne. Meme reglage que /actualites, qui lui fonctionne.
export const revalidate = 60;

export const metadata: Metadata = {
  title: "Événementiel d'entreprise",
  description:
    "Organisation et gestion de vos événements professionnels : séminaires, salons, portes ouvertes. ES Solutions transforme vos événements en leviers de croissance.",
  alternates: { canonical: '/nos-offres/evenementiel' },
};

export default async function Page() {
  const data = await fetchPageData('evenementiel');
  return <CommunicationEvenementielle data={data ?? undefined} />;
}
