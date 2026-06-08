// Source unique de verite pour les infos entreprise (SEO, schema.org, footer...).

export const BUSINESS_CONFIG = {
  name: 'ES Solutions Communication',
  shortName: 'ES Solutions',
  legalName: 'ES Solutions',
  url: process.env.SITE_URL || 'https://es-solutions-communication.fr',
  logo: 'https://i.ibb.co/yBWBdDGV/Ic-ne-logo-fonc.png',
  description:
    "ES Solutions Communication : votre consultant intégré directement dans vos locaux. Communication externe, marketing digital, événementiel et communication interne pour PME.",
  email: 'contact@es-solutions.fr',
  phone: '+33 6 88 10 84 46',
  phoneRaw: '+33688108446',
  address: {
    street: '30 rue Faidherbe',
    city: 'Vichy',
    postalCode: '03200',
    region: 'Auvergne-Rhône-Alpes',
    country: 'FR',
  },
  founder: {
    name: 'Edouard Suchet',
    role: 'Fondateur',
    email: 'Edouard@es-solutions.fr',
  },
  social: {
    linkedin: 'https://www.linkedin.com/company/es-solutions-communication',
  },
  googleSiteVerification: 'hl5SL3dGSIBd2jrgV60ky9XHaQS8MtQx-p5mcWjIc5s',
  themeColor: '#023654',
} as const;

export const SITE_URL = BUSINESS_CONFIG.url;
