import type { PageSchema } from '../pageSchemaTypes';

const schema: PageSchema = {
  slug: 'equipe',
  title: 'Notre équipe',
  url: '/notre-equipe',
  sections: [
    {
      title: 'Section Héro',
      fields: [
        {
          key: 'hero_title_plain',
          label: 'Titre — partie normale',
          type: 'text',
          placeholder: 'Notre ',
        },
        {
          key: 'hero_title_highlight',
          label: 'Titre — partie colorée (orange)',
          type: 'text',
          placeholder: 'Equipe',
        },
        {
          key: 'hero_subtitle',
          label: "Texte d'introduction (héro)",
          type: 'textarea',
          placeholder:
            "Notre equipe de consultants est experte dans les domaines du marketing, de la communication, et de l'evenementiel.",
        },
      ],
    },
    {
      title: 'Section intro équipe',
      fields: [
        {
          key: 'team_intro',
          label: "Paragraphe d'introduction avant les membres",
          type: 'textarea',
          placeholder:
            "ES Solutions vous propose une approche novatrice du consulting (conseil ou sous-traitance), specifiquement adaptee aux enjeux de la communication.",
        },
      ],
    },
    {
      title: 'Membre 1',
      fields: [
        {
          key: 'member_1_name',
          label: 'Nom',
          type: 'text',
          placeholder: 'Edouard Suchet',
        },
        {
          key: 'member_1_role',
          label: 'Rôle / titre principal',
          type: 'text',
          placeholder: 'Fondateur et dirigeant',
        },
        {
          key: 'member_1_subtitle',
          label: 'Sous-titre / spécialité',
          type: 'text',
          placeholder: 'Responsable Communication',
        },
        {
          key: 'member_1_photo',
          label: 'Photo',
          type: 'image',
          placeholder: '/©denisgrudet0024_alb09193-- copy copy.jpg',
        },
      ],
    },
    {
      title: 'Membre 2',
      fields: [
        {
          key: 'member_2_name',
          label: 'Nom',
          type: 'text',
          placeholder: 'Maelane Chabert',
        },
        {
          key: 'member_2_role',
          label: 'Rôle / titre principal',
          type: 'text',
          placeholder: 'Consultante en Communication',
        },
        {
          key: 'member_2_subtitle',
          label: 'Sous-titre / spécialité',
          type: 'text',
          placeholder: 'Chargee de developpement',
        },
        {
          key: 'member_2_photo',
          label: 'Photo',
          type: 'image',
          placeholder: '/©denisgrudet_alb09234-_1.jpg',
        },
      ],
    },
    {
      title: 'Membre 3',
      fields: [
        {
          key: 'member_3_name',
          label: 'Nom',
          type: 'text',
          placeholder: 'Marie-Leone Mazuel',
        },
        {
          key: 'member_3_role',
          label: 'Rôle / titre principal',
          type: 'text',
          placeholder: 'Consultante en Communication',
        },
        {
          key: 'member_3_subtitle',
          label: 'Sous-titre / spécialité',
          type: 'text',
          placeholder: 'Chargee de developpement',
        },
        {
          key: 'member_3_photo',
          label: 'Photo',
          type: 'image',
          placeholder: '/©denisgrudet0008_alb09277--.jpg',
        },
      ],
    },
    {
      title: 'Valeurs',
      fields: [
        {
          key: 'values_title_plain',
          label: 'Titre valeurs — partie normale',
          type: 'text',
          placeholder: 'NOS ',
        },
        {
          key: 'values_title_highlight',
          label: 'Titre valeurs — partie colorée (orange)',
          type: 'text',
          placeholder: 'VALEURS',
        },
        {
          key: 'values_intro',
          label: 'Sous-titre / accroche des valeurs',
          type: 'text',
          placeholder: 'Une approche...',
        },
        {
          key: 'value_1_title',
          label: 'Valeur 1 — titre',
          type: 'text',
          placeholder: 'CONCRETE',
        },
        {
          key: 'value_1_description',
          label: 'Valeur 1 — description',
          type: 'textarea',
          placeholder: 'Des solutions pratiques et adaptees a vos besoins reels',
        },
        {
          key: 'value_2_title',
          label: 'Valeur 2 — titre',
          type: 'text',
          placeholder: 'HUMAINE',
        },
        {
          key: 'value_2_description',
          label: 'Valeur 2 — description',
          type: 'textarea',
          placeholder: "Une approche centree sur l'humain et les relations",
        },
        {
          key: 'value_3_title',
          label: 'Valeur 3 — titre',
          type: 'text',
          placeholder: 'SINCERE',
        },
        {
          key: 'value_3_description',
          label: 'Valeur 3 — description',
          type: 'textarea',
          placeholder: 'Une communication authentique et transparente',
        },
      ],
    },
    {
      title: 'Section CTA bas de page',
      fields: [
        {
          key: 'cta_title_plain',
          label: 'Titre CTA — partie normale',
          type: 'text',
          placeholder: 'Prets a faire de votre communication un reel levier de ',
        },
        {
          key: 'cta_title_highlight',
          label: 'Titre CTA — partie colorée (orange)',
          type: 'text',
          placeholder: 'PERFORMANCE',
        },
        {
          key: 'cta_title_suffix',
          label: 'Titre CTA — suite après la partie colorée',
          type: 'text',
          placeholder: ' ?',
        },
        {
          key: 'cta_subtitle',
          label: 'Sous-titre du CTA',
          type: 'text',
          placeholder:
            'Decouvrez pourquoi notre approche unique fonctionne deja pour nos clients.',
        },
        {
          key: 'cta_button_label',
          label: 'Libellé du bouton CTA',
          type: 'text',
          placeholder: 'Construisons ensemble votre strategie de communication',
        },
        {
          key: 'cta_button_href',
          label: 'Lien du bouton CTA',
          type: 'url',
          placeholder: '/contact',
        },
      ],
    },
  ],
};

export default schema;
