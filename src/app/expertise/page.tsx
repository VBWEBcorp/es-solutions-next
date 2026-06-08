import type { Metadata } from 'next';
import Expertise from '@/components/pages/Expertise';
import { fetchPageData } from '@/lib/pages';

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
