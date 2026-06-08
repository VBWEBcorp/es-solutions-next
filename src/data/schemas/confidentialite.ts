import type { PageSchema } from '../pageSchemaTypes';

const schema: PageSchema = {
  slug: 'confidentialite',
  title: 'Politique de confidentialité',
  url: '/politique-confidentialite',
  sections: [
    {
      title: 'En-tête de page',
      fields: [
        { key: 'page_title_part1', label: 'Titre H1 – partie blanche', type: 'text', placeholder: 'POLITIQUE DE' },
        { key: 'page_title_part2', label: 'Titre H1 – partie colorée (accent)', type: 'text', placeholder: 'CONFIDENTIALITÉ' },
      ],
    },
    {
      title: 'Corps de la page',
      fields: [
        {
          key: 'page_body',
          label: 'Corps complet de la page (HTML) – la date de mise à jour est toujours calculée dynamiquement',
          type: 'richtext',
          placeholder: 'Contenu complet de la politique de confidentialité en HTML',
        },
      ],
    },
  ],
};

export default schema;
