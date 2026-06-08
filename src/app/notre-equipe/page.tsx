import type { Metadata } from 'next';
import Team from '@/components/pages/Team';
import { fetchPageData } from '@/lib/pages';

export const metadata: Metadata = {
  title: 'Notre équipe',
  description:
    "Rencontrez l'équipe ES Solutions, votre partenaire consulting en communication, marketing et événementiel, dirigée par Edouard Suchet.",
  alternates: { canonical: '/notre-equipe' },
};

export default async function Page() {
  const data = await fetchPageData('equipe');
  return <Team data={data ?? undefined} />;
}
