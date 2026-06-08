import type { Metadata } from 'next';
import CommunicationEvenementielle from '@/components/pages/CommunicationEvenementielle';
import { fetchPageData } from '@/lib/pages';

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
