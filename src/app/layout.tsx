import type { Metadata, Viewport } from 'next';
import { Inter, Quicksand, Dancing_Script } from 'next/font/google';
import './globals.css';
import PublicChrome from '@/components/PublicChrome';
import { BUSINESS_CONFIG, SITE_URL } from '@/config/business';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});
const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-quicksand',
  display: 'swap',
});
const dancing = Dancing_Script({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-dancing',
  display: 'swap',
});

const TITLE =
  'ES solutions communication - Consultant intégré | Communication Marketing Événementiel';
const DESCRIPTION =
  'ES solutions communication : votre consultant intégré directement dans vos locaux. Communication externe, marketing digital, événementiel et communication interne pour PME.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: '%s | ES Solutions',
  },
  description: DESCRIPTION,
  keywords: [
    'ES solutions communication',
    'consultant communication',
    'agence communication',
    'communication externe',
    'marketing digital',
    'événementiel',
    'communication interne',
    'consultant intégré',
  ],
  authors: [{ name: 'ES Solutions Communication' }],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    title: TITLE,
    description: DESCRIPTION,
    siteName: 'ES Solutions Communication',
    locale: 'fr_FR',
    images: [BUSINESS_CONFIG.logo],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    creator: '@ES_Solutions',
    images: [BUSINESS_CONFIG.logo],
  },
  robots: 'index, follow',
  icons: { icon: BUSINESS_CONFIG.logo },
  verification: { google: BUSINESS_CONFIG.googleSiteVerification },
};

export const viewport: Viewport = {
  themeColor: BUSINESS_CONFIG.themeColor,
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: BUSINESS_CONFIG.name,
  url: SITE_URL,
  logo: BUSINESS_CONFIG.logo,
  description: BUSINESS_CONFIG.description,
  address: {
    '@type': 'PostalAddress',
    streetAddress: BUSINESS_CONFIG.address.street,
    addressLocality: BUSINESS_CONFIG.address.city,
    postalCode: BUSINESS_CONFIG.address.postalCode,
    addressCountry: BUSINESS_CONFIG.address.country,
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: BUSINESS_CONFIG.phone,
    contactType: 'customer service',
    email: BUSINESS_CONFIG.email,
  },
  founder: { '@type': 'Person', name: BUSINESS_CONFIG.founder.name },
  sameAs: [BUSINESS_CONFIG.social.linkedin],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${inter.variable} ${quicksand.variable} ${dancing.variable}`}>
      <body className="min-h-screen bg-[#012A43] text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <PublicChrome>{children}</PublicChrome>
      </body>
    </html>
  );
}
