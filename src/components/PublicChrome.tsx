'use client';

import { usePathname } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import FloatingContact from '@/components/FloatingContact';

// Affiche l'habillage public (header/footer/cookies/contact) partout SAUF dans /admin.
export default function PublicChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  if (pathname?.startsWith('/admin')) {
    return <>{children}</>;
  }
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <CookieConsent />
      <FloatingContact />
    </>
  );
}
