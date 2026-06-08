import type { PageSchema } from '../pageSchemaTypes';

// Contenus globaux (coordonnees reutilisables : footer, etc.).
const schema: PageSchema = {
  slug: 'global',
  title: 'Coordonnées (global)',
  url: '/',
  sections: [
    {
      title: 'Coordonnées',
      fields: [
        { key: 'phone', label: 'Téléphone', type: 'text', placeholder: '+33 ...' },
        { key: 'email', label: 'Email', type: 'text', placeholder: 'contact@es-solutions.fr' },
        { key: 'address', label: 'Adresse', type: 'textarea' },
        { key: 'linkedin', label: 'LinkedIn', type: 'url', placeholder: 'https://www.linkedin.com/...' },
        { key: 'youtube', label: 'YouTube', type: 'url', placeholder: 'https://www.youtube.com/...' },
      ],
    },
  ],
};

export default schema;
