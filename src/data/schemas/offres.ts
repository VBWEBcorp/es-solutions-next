import type { PageSchema } from '../pageSchemaTypes';

const schema: PageSchema = {
  slug: 'offres',
  title: 'Page Nos offres',
  url: '/nos-offres',
  sections: [
    {
      title: 'Héro',
      fields: [
        {
          key: 'hero_title_white',
          label: 'Titre H1 — partie blanche',
          type: 'text',
          placeholder: 'NOS',
        },
        {
          key: 'hero_title_orange',
          label: 'Titre H1 — partie orange',
          type: 'text',
          placeholder: 'OFFRES',
        },
        {
          key: 'hero_subtitle',
          label: 'Texte sous le titre',
          type: 'textarea',
          placeholder:
            'Nous concevons votre plan de communication multicanal en lien constant avec votre stratégie commerciale. Chaque action est pensée pour apporter des éléments différenciants dans la relation client et pour aller au-delà de vos objectifs de développement commercial.',
        },
      ],
    },
    {
      title: 'Section "Pourquoi ça fonctionne"',
      fields: [
        {
          key: 'why_title_white',
          label: 'Titre H2 — partie blanche',
          type: 'text',
          placeholder: 'POURQUOI ÇA',
        },
        {
          key: 'why_title_orange',
          label: 'Titre H2 — partie orange',
          type: 'text',
          placeholder: 'FONCTIONNE',
        },
        {
          key: 'why_advantage_1',
          label: 'Avantage 1',
          type: 'textarea',
          placeholder:
            "Notre consultant intégré à votre équipe, sur votre lieu de travail. Cela permet une connaissance approfondie de votre entreprise, de vos enjeux et facilite le partage d'informations ainsi que l'intégration.",
        },
        {
          key: 'why_advantage_2',
          label: 'Avantage 2',
          type: 'textarea',
          placeholder:
            'Un contact unique pour tous vos besoins en communication, marketing et événementiel.',
        },
        {
          key: 'why_advantage_3',
          label: 'Avantage 3',
          type: 'textarea',
          placeholder:
            "Un gain de temps pour vos collaborateurs, qui n'ont plus besoin de traiter les tâches liées à la communication et qui sont soutenus au quotidien dans la stratégie de communication.",
        },
        {
          key: 'why_advantage_4',
          label: 'Avantage 4',
          type: 'textarea',
          placeholder: 'Une administration simplifiée, par le recours à une prestation externe.',
        },
        {
          key: 'why_advantage_5',
          label: 'Avantage 5',
          type: 'textarea',
          placeholder:
            "Une expertise constamment challengée : Le consultant bénéficie de la synergie d'une équipe de communicants au sein de ES Solutions.",
        },
        {
          key: 'why_image',
          label: 'Image consulting (droite)',
          type: 'image',
        },
      ],
    },
    {
      title: 'Bloc description services',
      fields: [
        {
          key: 'services_desc_1',
          label: 'Premier paragraphe',
          type: 'textarea',
          placeholder:
            'Nos consultants polyvalents conçoivent et déploient une communication impactante, parfaitement alignée avec votre stratégie commerciale, pour enrichir chaque interaction avec vos parties prenantes.',
        },
        {
          key: 'services_desc_2',
          label: 'Second paragraphe (italique)',
          type: 'textarea',
          placeholder:
            'Nous plaçons le commerce au cœur de la communication, avec une vision très concrète et adaptée aux besoins réels des entreprises, pour que la communication soit un vrai levier commercial.',
        },
      ],
    },
    {
      title: 'Carte 1 — Notre offre Stratégie',
      fields: [
        {
          key: 'pack_1_title_white',
          label: 'Titre carte — partie blanche',
          type: 'text',
          placeholder: 'NOTRE OFFRE ',
        },
        {
          key: 'pack_1_title_orange',
          label: 'Titre carte — partie orange',
          type: 'text',
          placeholder: 'STRATEGIE',
        },
        {
          key: 'pack_1_category_1',
          label: 'Catégorie 1',
          type: 'text',
          placeholder: 'AUDIT',
        },
        {
          key: 'pack_1_category_2',
          label: 'Catégorie 2',
          type: 'text',
          placeholder: 'STRATÉGIE',
        },
        {
          key: 'pack_1_category_3',
          label: 'Catégorie 3',
          type: 'text',
          placeholder: 'PILOTAGE',
        },
        {
          key: 'pack_1_subtitle',
          label: 'Badge niveau de responsabilité',
          type: 'text',
          placeholder: 'Une approche complète et intégrée',
        },
      ],
    },
    {
      title: 'Carte 2 — Starter Pack ES',
      fields: [
        {
          key: 'pack_2_title_orange',
          label: 'Titre carte — partie orange',
          type: 'text',
          placeholder: 'STARTER',
        },
        {
          key: 'pack_2_title_white',
          label: 'Titre carte — partie blanche',
          type: 'text',
          placeholder: ' PACK ES',
        },
        {
          key: 'pack_2_category_1',
          label: 'Catégorie 1',
          type: 'text',
          placeholder: 'STRATÉGIE MARKETING',
        },
        {
          key: 'pack_2_category_2',
          label: 'Catégorie 2',
          type: 'text',
          placeholder: 'COMMUNICATION EXTERNE',
        },
        {
          key: 'pack_2_subtitle',
          label: 'Badge niveau de responsabilité',
          type: 'text',
          placeholder: 'Niveau de responsabilité +',
        },
      ],
    },
    {
      title: 'Carte 3 — Pack Boost ES',
      fields: [
        {
          key: 'pack_3_title_white_pre',
          label: 'Titre carte — partie blanche (avant)',
          type: 'text',
          placeholder: 'PACK ',
        },
        {
          key: 'pack_3_title_orange',
          label: 'Titre carte — partie orange',
          type: 'text',
          placeholder: 'BOOST',
        },
        {
          key: 'pack_3_title_white_post',
          label: 'Titre carte — partie blanche (après)',
          type: 'text',
          placeholder: ' ES',
        },
        {
          key: 'pack_3_category_1',
          label: 'Catégorie 1',
          type: 'text',
          placeholder: 'STRATÉGIE MARKETING',
        },
        {
          key: 'pack_3_category_2',
          label: 'Catégorie 2',
          type: 'text',
          placeholder: 'COMMUNICATION EXTERNE',
        },
        {
          key: 'pack_3_category_3',
          label: 'Catégorie 3',
          type: 'text',
          placeholder: 'ÉVÉNEMENTIEL',
        },
        {
          key: 'pack_3_subtitle',
          label: 'Badge niveau de responsabilité',
          type: 'text',
          placeholder: 'Niveau de responsabilité ++',
        },
      ],
    },
    {
      title: 'Carte 4 — Pack ES 360°',
      fields: [
        {
          key: 'pack_4_title_white',
          label: 'Titre carte — partie blanche',
          type: 'text',
          placeholder: 'PACK ES ',
        },
        {
          key: 'pack_4_title_orange',
          label: 'Titre carte — partie orange',
          type: 'text',
          placeholder: '360°',
        },
        {
          key: 'pack_4_category_1',
          label: 'Catégorie 1',
          type: 'text',
          placeholder: 'STRATÉGIE MARKETING',
        },
        {
          key: 'pack_4_category_2',
          label: 'Catégorie 2',
          type: 'text',
          placeholder: 'COMMUNICATION INTERNE',
        },
        {
          key: 'pack_4_category_3',
          label: 'Catégorie 3',
          type: 'text',
          placeholder: 'COMMUNICATION EXTERNE',
        },
        {
          key: 'pack_4_category_4',
          label: 'Catégorie 4',
          type: 'text',
          placeholder: 'ÉVÉNEMENTIEL',
        },
        {
          key: 'pack_4_subtitle',
          label: 'Badge niveau de responsabilité',
          type: 'text',
          placeholder: 'Niveau de responsabilité +++',
        },
      ],
    },
    {
      title: 'Bouton des cartes',
      fields: [
        {
          key: 'card_cta_label',
          label: 'Libellé du bouton "En savoir plus" (commun aux 4 cartes)',
          type: 'text',
          placeholder: 'En savoir plus',
        },
      ],
    },
    {
      title: 'Section Collaboration',
      fields: [
        {
          key: 'collab_title_white',
          label: 'Titre H2 — partie blanche',
          type: 'text',
          placeholder: 'NOTRE',
        },
        {
          key: 'collab_title_orange',
          label: 'Titre H2 — partie orange',
          type: 'text',
          placeholder: 'COLLABORATION',
        },
        {
          key: 'collab_subtitle',
          label: 'Sous-titre',
          type: 'text',
          placeholder: 'Un processus clair et efficace pour une collaboration performante',
        },
        {
          key: 'collab_step_1_title',
          label: 'Étape 1 — Titre',
          type: 'text',
          placeholder: 'Définition des besoins',
        },
        {
          key: 'collab_step_1_desc',
          label: 'Étape 1 — Description',
          type: 'textarea',
          placeholder:
            "Définition ensemble de vos besoins en communication et du nombre de jours de présence du consultant au sein de votre entreprise.",
        },
        {
          key: 'collab_step_2_title',
          label: 'Étape 2 — Titre',
          type: 'text',
          placeholder: 'Validation du contrat',
        },
        {
          key: 'collab_step_2_desc',
          label: 'Étape 2 — Description',
          type: 'textarea',
          placeholder: 'Envoi du Devis, définition du TJM du consultant et validation du contrat.',
        },
        {
          key: 'collab_step_3_title',
          label: 'Étape 3 — Titre',
          type: 'text',
          placeholder: 'Présentation du consultant',
        },
        {
          key: 'collab_step_3_desc',
          label: 'Étape 3 — Description',
          type: 'textarea',
          placeholder: "Présentation du consultant et planification de son emploi du temps.",
        },
        {
          key: 'collab_step_4_title',
          label: 'Étape 4 — Titre',
          type: 'text',
          placeholder: 'Plan de communication',
        },
        {
          key: 'collab_step_4_desc',
          label: 'Étape 4 — Description',
          type: 'textarea',
          placeholder:
            "Le consultant: échange avec l'ensemble des parties-prenantes, captation d'informations et proposition du plan de communication.",
        },
        {
          key: 'collab_step_5_title',
          label: 'Étape 5 — Titre',
          type: 'text',
          placeholder: 'Réalisation mensuelle',
        },
        {
          key: 'collab_step_5_desc',
          label: 'Étape 5 — Description',
          type: 'textarea',
          placeholder: 'Réalisation du plan de communication, point mensuel avec le consultant.',
        },
        {
          key: 'collab_step_6_title',
          label: 'Étape 6 — Titre',
          type: 'text',
          placeholder: 'Bilan annuel',
        },
        {
          key: 'collab_step_6_desc',
          label: 'Étape 6 — Description',
          type: 'textarea',
          placeholder:
            "Bilan annuel et validation du plan de communication de l'année suivante",
        },
      ],
    },
  ],
};

export default schema;
