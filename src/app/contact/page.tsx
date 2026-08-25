import type { Metadata } from 'next';
import Contact from '@/components/pages/Contact';
import { fetchPageData } from '@/lib/pages';

// La page lit ses textes et ses images dans la base : sans revalidation elle resterait
// figee sur l'etat de la derniere construction, et les modifications faites dans l'espace
// admin ne partiraient jamais en ligne. Meme reglage que /actualites, qui lui fonctionne.
export const revalidate = 60;

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
