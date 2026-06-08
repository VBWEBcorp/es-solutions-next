import type { Metadata } from 'next';
import PrivacyPolicy from '@/components/pages/PrivacyPolicy';
import { fetchPageData } from '@/lib/pages';

export const metadata: Metadata = {
  title: 'Politique de confidentialité',
  description: 'Politique de confidentialité et gestion des données personnelles du site ES Solutions Communication.',
  alternates: { canonical: '/politique-confidentialite' },
};

export default async function Page() {
  const data = await fetchPageData('confidentialite');
  return <PrivacyPolicy data={data ?? undefined} />;
}
