import type { PageSchema } from '../pageSchemaTypes';

const schema: PageSchema = {
  slug: 'evenementiel',
  title: 'Événementiel d\'entreprise',
  url: '/nos-offres/evenementiel',
  sections: [
    {
      title: 'Section Héro',
      fields: [
        { key: 'hero_image', label: 'Icône / image du héro', type: 'image', placeholder: 'https://pub-1eef308d0a754271b1c96b38618969fe.r2.dev/images/Y4hFfPTG-evenementiel.png' },
        { key: 'hero_title_part1', label: 'Titre – partie 1 (avant la couleur)', type: 'text', placeholder: 'COMMUNICATION' },
        { key: 'hero_title_part2', label: 'Titre – partie 2 (en orange)', type: 'text', placeholder: 'ÉVÉNEMENTIELLE' },
        { key: 'hero_subtitle', label: 'Sous-titre / accroche', type: 'textarea', placeholder: 'Créez des moments mémorables et impactants pour votre entreprise' },
      ],
    },
    {
      title: 'Service 1 – Conception Stratégique',
      fields: [
        { key: 'service_1_title', label: 'Titre de la carte', type: 'text', placeholder: 'Conception Stratégique' },
        { key: 'service_1_description', label: 'Description', type: 'textarea', placeholder: 'Création d\'événements alignés sur vos objectifs' },
        { key: 'service_1_feature_1', label: 'Point 1', type: 'text', placeholder: 'Définition des objectifs' },
        { key: 'service_1_feature_2', label: 'Point 2', type: 'text', placeholder: 'Concept créatif' },
        { key: 'service_1_feature_3', label: 'Point 3', type: 'text', placeholder: 'Planning détaillé' },
        { key: 'service_1_feature_4', label: 'Point 4', type: 'text', placeholder: 'Budget prévisionnel' },
      ],
    },
    {
      title: 'Service 2 – Gestion Logistique',
      fields: [
        { key: 'service_2_title', label: 'Titre de la carte', type: 'text', placeholder: 'Gestion Logistique' },
        { key: 'service_2_description', label: 'Description', type: 'textarea', placeholder: 'Organisation complète de vos événements' },
        { key: 'service_2_feature_1', label: 'Point 1', type: 'text', placeholder: 'Recherche de lieu' },
        { key: 'service_2_feature_2', label: 'Point 2', type: 'text', placeholder: 'Coordination prestataires' },
        { key: 'service_2_feature_3', label: 'Point 3', type: 'text', placeholder: 'Gestion technique' },
        { key: 'service_2_feature_4', label: 'Point 4', type: 'text', placeholder: "Planning d'exécution" },
      ],
    },
    {
      title: 'Service 3 – Animation & Coordination',
      fields: [
        { key: 'service_3_title', label: 'Titre de la carte', type: 'text', placeholder: 'Animation & Coordination' },
        { key: 'service_3_description', label: 'Description', type: 'textarea', placeholder: 'Gestion professionnelle le jour J' },
        { key: 'service_3_feature_1', label: 'Point 1', type: 'text', placeholder: 'Accueil participants' },
        { key: 'service_3_feature_2', label: 'Point 2', type: 'text', placeholder: 'Coordination équipes' },
        { key: 'service_3_feature_3', label: 'Point 3', type: 'text', placeholder: 'Gestion imprévus' },
        { key: 'service_3_feature_4', label: 'Point 4', type: 'text', placeholder: 'Suivi timing' },
      ],
    },
    {
      title: 'Section Approche',
      fields: [
        { key: 'approach_title', label: 'Titre de la section', type: 'text', placeholder: 'NOTRE APPROCHE' },
        { key: 'approach_subtitle', label: 'Sous-titre', type: 'textarea', placeholder: 'Une méthodologie éprouvée pour des événements réussis' },
        { key: 'approach_image', label: 'Image de la section (côté gauche)', type: 'image', placeholder: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80' },
      ],
    },
    {
      title: 'Étape 1 – Briefing & Conception',
      fields: [
        { key: 'step_1_title', label: "Titre de l'étape", type: 'text', placeholder: 'Briefing & Conception' },
        { key: 'step_1_description', label: 'Description', type: 'textarea', placeholder: "Compréhension de vos besoins et création d'un concept unique" },
      ],
    },
    {
      title: 'Étape 2 – Planification',
      fields: [
        { key: 'step_2_title', label: "Titre de l'étape", type: 'text', placeholder: 'Planification' },
        { key: 'step_2_description', label: 'Description', type: 'textarea', placeholder: 'Organisation détaillée et coordination des prestataires' },
      ],
    },
    {
      title: 'Étape 3 – Réalisation',
      fields: [
        { key: 'step_3_title', label: "Titre de l'étape", type: 'text', placeholder: 'Réalisation' },
        { key: 'step_3_description', label: 'Description', type: 'textarea', placeholder: 'Gestion professionnelle le jour J pour un événement réussi' },
      ],
    },
    {
      title: 'Étape 4 – Bilan & Analyse',
      fields: [
        { key: 'step_4_title', label: "Titre de l'étape", type: 'text', placeholder: 'Bilan & Analyse' },
        { key: 'step_4_description', label: 'Description', type: 'textarea', placeholder: 'Évaluation des résultats et recommandations futures' },
      ],
    },
    {
      title: 'Section CTA',
      fields: [
        { key: 'cta_title_part1', label: 'Titre CTA – partie 1 (avant la couleur)', type: 'text', placeholder: 'CRÉEZ DES ÉVÉNEMENTS' },
        { key: 'cta_title_part2', label: 'Titre CTA – partie 2 (en orange)', type: 'text', placeholder: 'MÉMORABLES' },
        { key: 'cta_subtitle', label: 'Texte descriptif du CTA', type: 'textarea', placeholder: 'Découvrez comment nous pouvons transformer vos événements en expériences uniques' },
        { key: 'cta_button_label', label: 'Libellé du bouton', type: 'text', placeholder: 'Discutons de votre projet' },
      ],
    },
  ],
};

export default schema;
