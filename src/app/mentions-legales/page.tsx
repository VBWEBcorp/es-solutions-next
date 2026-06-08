import type { Metadata } from 'next';
import LegalNotice from '@/components/pages/LegalNotice';
import { fetchPageData } from '@/lib/pages';

export const metadata: Metadata = {
  title: 'Mentions légales',
  description: 'Mentions légales du site ES Solutions Communication.',
  alternates: { canonical: '/mentions-legales' },
};

export default async function Page() {
  const data = await fetchPageData('mentions-legales');
  return <LegalNotice data={data ?? undefined} />;
}
