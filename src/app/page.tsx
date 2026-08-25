import HomeContent from '@/components/pages/HomeContent';
import { fetchPageData } from '@/lib/pages';

// La page lit ses textes et ses images dans la base : sans revalidation elle resterait
// figee sur l'etat de la derniere construction, et les modifications faites dans l'espace
// admin ne partiraient jamais en ligne. Meme reglage que /actualites, qui lui fonctionne.
export const revalidate = 60;

export default async function Page() {
  const data = await fetchPageData('accueil');
  return <HomeContent data={data ?? undefined} />;
}
