import type { Metadata } from 'next';
import Realisations from '@/components/pages/Realisations';
import { fetchPageData } from '@/lib/pages';

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
