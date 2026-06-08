import type { Metadata } from 'next';
import Contact from '@/components/pages/Contact';
import { fetchPageData } from '@/lib/pages';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    "Contactez ES Solutions pour structurer votre communication, votre marketing et votre événementiel. Diagnostic gratuit pour les PME et ETI.",
  alternates: { canonical: '/contact' },
};

export default async function Page() {
  const data = await fetchPageData('contact');
  return <Contact data={data ?? undefined} />;
}
