import type { PageSchema } from '../pageSchemaTypes';

const schema: PageSchema = {
  slug: 'mentions-legales',
  title: 'Mentions légales',
  url: '/mentions-legales',
  sections: [
    {
      title: 'En-tête de page',
      fields: [
        { key: 'page_title_part1', label: 'Titre H1 – partie blanche', type: 'text', placeholder: 'MENTIONS' },
        { key: 'page_title_part2', label: 'Titre H1 – partie colorée (accent)', type: 'text', placeholder: 'LÉGALES' },
      ],
    },
    {
      title: 'Corps de la page',
      fields: [
        {
          key: 'page_body',
          label: 'Corps complet de la page (HTML)',
          type: 'richtext',
          placeholder: 'Contenu complet des mentions légales en HTML',
        },
      ],
    },
  ],
};

export default schema;
