import type { PageSchema } from '../pageSchemaTypes';

const schema: PageSchema = {
  slug: 'comm-externe',
  title: 'Communication externe & marketing',
  url: '/nos-offres/communication-externe-marketing',
  sections: [
    {
      title: 'Section Héro',
      fields: [
        { key: 'hero_image', label: 'Icône / image du héro', type: 'image', placeholder: 'https://pub-e1e97dba7b2643bc9151a20668a49e5e.r2.dev/images/1Y3wCStk-com-externe.png' },
        { key: 'hero_title_part1', label: 'Titre – partie 1 (avant la couleur)', type: 'text', placeholder: 'COMMUNICATION' },
        { key: 'hero_title_part2', label: 'Titre – partie 2 (en orange)', type: 'text', placeholder: 'EXTERNE' },
        { key: 'hero_subtitle', label: 'Sous-titre / accroche', type: 'textarea', placeholder: 'Développez votre image de marque et maximisez votre impact sur vos marchés cibles' },
      ],
    },
    {
      title: 'Service 1 – Stratégie de communication',
      fields: [
        { key: 'service_1_title', label: 'Titre de la carte', type: 'text', placeholder: 'Stratégie de communication' },
        { key: 'service_1_description', label: 'Description', type: 'textarea', placeholder: "Élaboration d'une stratégie cohérente alignée sur vos objectifs commerciaux" },
        { key: 'service_1_feature_1', label: 'Point 1', type: 'text', placeholder: 'Analyse de marché' },
        { key: 'service_1_feature_2', label: 'Point 2', type: 'text', placeholder: 'Positionnement de marque' },
        { key: 'service_1_feature_3', label: 'Point 3', type: 'text', placeholder: 'Plan de communication' },
        { key: 'service_1_feature_4', label: 'Point 4', type: 'text', placeholder: 'KPIs et objectifs' },
      ],
    },
    {
      title: 'Service 2 – Marketing Digital',
      fields: [
        { key: 'service_2_title', label: 'Titre de la carte', type: 'text', placeholder: 'Marketing Digital' },
        { key: 'service_2_description', label: 'Description', type: 'textarea', placeholder: 'Optimisation de votre présence en ligne et de votre visibilité digitale' },
        { key: 'service_2_feature_1', label: 'Point 1', type: 'text', placeholder: 'Stratégie réseaux sociaux' },
        { key: 'service_2_feature_2', label: 'Point 2', type: 'text', placeholder: 'Content marketing' },
        { key: 'service_2_feature_3', label: 'Point 3', type: 'text', placeholder: 'SEO / SEA' },
        { key: 'service_2_feature_4', label: 'Point 4', type: 'text', placeholder: 'Email marketing' },
      ],
    },
    {
      title: 'Service 3 – Relations Publiques',
      fields: [
        { key: 'service_3_title', label: 'Titre de la carte', type: 'text', placeholder: 'Relations Publiques' },
        { key: 'service_3_description', label: 'Description', type: 'textarea', placeholder: 'Gestion de votre image et de vos relations avec vos parties prenantes' },
        { key: 'service_3_feature_1', label: 'Point 1', type: 'text', placeholder: 'Relations presse' },
        { key: 'service_3_feature_2', label: 'Point 2', type: 'text', placeholder: 'Communication corporate' },
        { key: 'service_3_feature_3', label: 'Point 3', type: 'text', placeholder: 'Gestion de crise' },
        { key: 'service_3_feature_4', label: 'Point 4', type: 'text', placeholder: 'Relations influenceurs' },
      ],
    },
    {
      title: 'Section Approche',
      fields: [
        { key: 'approach_title', label: 'Titre de la section', type: 'text', placeholder: 'NOTRE APPROCHE' },
        { key: 'approach_subtitle', label: 'Sous-titre', type: 'textarea', placeholder: 'Une méthodologie éprouvée pour des résultats concrets' },
        { key: 'approach_image', label: 'Image de la section (côté gauche)', type: 'image', placeholder: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80' },
      ],
    },
    {
      title: 'Étape 1 – Audit & Analyse',
      fields: [
        { key: 'step_1_title', label: 'Titre de l\'étape', type: 'text', placeholder: 'Audit & Analyse' },
        { key: 'step_1_description', label: 'Description', type: 'textarea', placeholder: 'Analyse approfondie de votre situation actuelle, de vos objectifs et de votre marché' },
      ],
    },
    {
      title: 'Étape 2 – Stratégie & Planning',
      fields: [
        { key: 'step_2_title', label: 'Titre de l\'étape', type: 'text', placeholder: 'Stratégie & Planning' },
        { key: 'step_2_description', label: 'Description', type: 'textarea', placeholder: "Élaboration d'une stratégie sur-mesure et d'un plan d'action détaillé" },
      ],
    },
    {
      title: 'Étape 3 – Mise en œuvre',
      fields: [
        { key: 'step_3_title', label: 'Titre de l\'étape', type: 'text', placeholder: 'Mise en œuvre' },
        { key: 'step_3_description', label: 'Description', type: 'textarea', placeholder: 'Déploiement des actions et création de contenus impactants' },
      ],
    },
    {
      title: 'Étape 4 – Mesure & Optimisation',
      fields: [
        { key: 'step_4_title', label: 'Titre de l\'étape', type: 'text', placeholder: 'Mesure & Optimisation' },
        { key: 'step_4_description', label: 'Description', type: 'textarea', placeholder: 'Suivi des performances et optimisation continue des actions' },
      ],
    },
    {
      title: 'Section CTA',
      fields: [
        { key: 'cta_title_part1', label: 'Titre CTA – partie 1 (avant la couleur)', type: 'text', placeholder: 'PRÊT À TRANSFORMER VOTRE' },
        { key: 'cta_title_part2', label: 'Titre CTA – partie 2 (en orange)', type: 'text', placeholder: 'COMMUNICATION' },
        { key: 'cta_title_part3', label: 'Titre CTA – partie 3 (après la couleur)', type: 'text', placeholder: ' ?' },
        { key: 'cta_subtitle', label: 'Texte descriptif du CTA', type: 'textarea', placeholder: 'Découvrez comment notre expertise en communication externe peut vous aider à atteindre vos objectifs' },
        { key: 'cta_button_label', label: 'Libellé du bouton', type: 'text', placeholder: 'Discutons de votre projet' },
      ],
    },
  ],
};

export default schema;
