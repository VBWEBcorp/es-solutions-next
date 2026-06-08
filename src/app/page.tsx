import HomeContent from '@/components/pages/HomeContent';
import { fetchPageData } from '@/lib/pages';

export default async function Page() {
  const data = await fetchPageData('accueil');
  return <HomeContent data={data ?? undefined} />;
}
