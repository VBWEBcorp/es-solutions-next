import type { Metadata } from 'next';
import Marketing from '@/components/pages/Marketing';
import { fetchPageData } from '@/lib/pages';

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
