import type { Metadata } from 'next';
import CommunicationInterne from '@/components/pages/CommunicationInterne';
import { fetchPageData } from '@/lib/pages';

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
