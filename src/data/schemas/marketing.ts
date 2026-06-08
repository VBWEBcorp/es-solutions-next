import type { PageSchema } from '../pageSchemaTypes';

const schema: PageSchema = {
  slug: 'marketing',
  title: 'Page Expertise Marketing',
  url: '/expertise/marketing',
  sections: [
    {
      title: 'Section Héro',
      fields: [
        { key: 'hero_image', label: 'Image / logo du héro', type: 'image' },
        { key: 'hero_title_plain', label: 'Titre H1 — partie normale', type: 'text', placeholder: 'EXPERTISE' },
        { key: 'hero_title_highlight', label: 'Titre H1 — partie colorée', type: 'text', placeholder: 'MARKETING' },
        { key: 'hero_subtitle', label: 'Sous-titre', type: 'textarea', placeholder: 'Développez votre stratégie marketing et maximisez vos performances commerciales' },
      ],
    },
    {
      title: 'Service 1 — Stratégie Marketing Globale',
      fields: [
        { key: 'service_1_title', label: 'Titre', type: 'text', placeholder: 'Stratégie Marketing Globale' },
        { key: 'service_1_description', label: 'Description', type: 'textarea', placeholder: 'Élaboration d\'une stratégie marketing complète adaptée à vos objectifs' },
        { key: 'service_1_feature_1', label: 'Point 1', type: 'text', placeholder: 'Positionnement de marque' },
        { key: 'service_1_feature_2', label: 'Point 2', type: 'text', placeholder: 'Stratégie d\'acquisition' },
        { key: 'service_1_feature_3', label: 'Point 3', type: 'text', placeholder: 'Stratégie de fidélisation' },
        { key: 'service_1_feature_4', label: 'Point 4', type: 'text', placeholder: 'Définition des cibles' },
      ],
    },
    {
      title: 'Service 2 — Pilotage de Campagnes',
      fields: [
        { key: 'service_2_title', label: 'Titre', type: 'text', placeholder: 'Pilotage de Campagnes' },
        { key: 'service_2_description', label: 'Description', type: 'textarea', placeholder: 'Gestion et optimisation de vos campagnes publicitaires digitales' },
        { key: 'service_2_feature_1', label: 'Point 1', type: 'text', placeholder: 'Pilotage de campagnes Ads' },
        { key: 'service_2_feature_2', label: 'Point 2', type: 'text', placeholder: 'Suivi des performances' },
        { key: 'service_2_feature_3', label: 'Point 3', type: 'text', placeholder: 'Optimisation ROI' },
        { key: 'service_2_feature_4', label: 'Point 4', type: 'text', placeholder: 'Analyse des résultats' },
      ],
    },
    {
      title: "Service 3 — Supervision d'Équipes",
      fields: [
        { key: 'service_3_title', label: 'Titre', type: 'text', placeholder: "Supervision d'Équipes" },
        { key: 'service_3_description', label: 'Description', type: 'textarea', placeholder: 'Accompagnement et supervision de vos équipes marketing' },
        { key: 'service_3_feature_1', label: 'Point 1', type: 'text', placeholder: 'Supervision des équipes marketing' },
        { key: 'service_3_feature_2', label: 'Point 2', type: 'text', placeholder: 'Coordination avec les agences' },
        { key: 'service_3_feature_3', label: 'Point 3', type: 'text', placeholder: 'Formation et accompagnement' },
        { key: 'service_3_feature_4', label: 'Point 4', type: 'text', placeholder: 'Pilotage de projets' },
      ],
    },
    {
      title: 'Service 4 — Veille Concurrentielle',
      fields: [
        { key: 'service_4_title', label: 'Titre', type: 'text', placeholder: 'Veille Concurrentielle' },
        { key: 'service_4_description', label: 'Description', type: 'textarea', placeholder: 'Analyse continue du marché et de la concurrence' },
        { key: 'service_4_feature_1', label: 'Point 1', type: 'text', placeholder: 'Analyse de la concurrence' },
        { key: 'service_4_feature_2', label: 'Point 2', type: 'text', placeholder: 'Veille marché' },
        { key: 'service_4_feature_3', label: 'Point 3', type: 'text', placeholder: 'Benchmarking' },
        { key: 'service_4_feature_4', label: 'Point 4', type: 'text', placeholder: "Identification d'opportunités" },
      ],
    },
    {
      title: 'Section Notre Approche',
      fields: [
        { key: 'approach_title_plain', label: 'Titre — partie normale', type: 'text', placeholder: 'NOTRE' },
        { key: 'approach_title_highlight', label: 'Titre — partie colorée', type: 'text', placeholder: 'APPROCHE' },
        { key: 'approach_subtitle', label: 'Sous-titre', type: 'textarea', placeholder: 'Une méthodologie structurée pour une stratégie marketing efficace' },
        { key: 'approach_image', label: 'Image illustrative', type: 'image' },
        { key: 'step_1_title', label: 'Étape 1 — Titre', type: 'text', placeholder: 'Analyse & Audit' },
        { key: 'step_1_description', label: 'Étape 1 — Description', type: 'textarea', placeholder: 'Analyse de votre situation actuelle et de votre marché' },
        { key: 'step_2_title', label: 'Étape 2 — Titre', type: 'text', placeholder: 'Stratégie' },
        { key: 'step_2_description', label: 'Étape 2 — Description', type: 'textarea', placeholder: "Élaboration d'une stratégie marketing sur-mesure" },
        { key: 'step_3_title', label: 'Étape 3 — Titre', type: 'text', placeholder: 'Mise en œuvre' },
        { key: 'step_3_description', label: 'Étape 3 — Description', type: 'textarea', placeholder: 'Déploiement et pilotage des actions marketing' },
        { key: 'step_4_title', label: 'Étape 4 — Titre', type: 'text', placeholder: 'Suivi & Optimisation' },
        { key: 'step_4_description', label: 'Étape 4 — Description', type: 'textarea', placeholder: 'Mesure des performances et amélioration continue' },
      ],
    },
    {
      title: 'Section CTA',
      fields: [
        { key: 'cta_title_plain', label: 'Titre CTA — partie normale', type: 'text', placeholder: 'BOOSTEZ VOTRE' },
        { key: 'cta_title_highlight', label: 'Titre CTA — partie colorée', type: 'text', placeholder: 'PERFORMANCE MARKETING' },
        { key: 'cta_subtitle', label: 'Sous-titre CTA', type: 'textarea', placeholder: 'Découvrez comment notre expertise marketing peut transformer votre approche commerciale' },
        { key: 'cta_button_label', label: 'Libellé du bouton', type: 'text', placeholder: 'Discutons de votre projet' },
      ],
    },
  ],
};

export default schema;
