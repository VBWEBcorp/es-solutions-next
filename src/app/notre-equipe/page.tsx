import type { Metadata } from 'next';
import Team from '@/components/pages/Team';
import { fetchPageData } from '@/lib/pages';

// La page lit ses textes et ses images dans la base : sans revalidation elle resterait
// figee sur l'etat de la derniere construction, et les modifications faites dans l'espace
// admin ne partiraient jamais en ligne. Meme reglage que /actualites, qui lui fonctionne.
export const revalidate = 60;

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
