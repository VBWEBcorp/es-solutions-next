import type { PageSchema } from '../pageSchemaTypes';

const schema: PageSchema = {
  slug: 'comm-interne',
  title: 'Communication interne',
  url: '/nos-offres/communication-interne',
  sections: [
    {
      title: 'Section Héro',
      fields: [
        { key: 'hero_image', label: 'Icône / image du héro', type: 'image', placeholder: 'https://i.ibb.co/C5n48TcF/Com-interne.png' },
        { key: 'hero_title_part1', label: 'Titre – partie 1 (avant la couleur)', type: 'text', placeholder: 'COMMUNICATION' },
        { key: 'hero_title_part2', label: 'Titre – partie 2 (en orange)', type: 'text', placeholder: 'INTERNE' },
        { key: 'hero_subtitle', label: 'Sous-titre / accroche', type: 'textarea', placeholder: "Renforcez la cohésion d'équipe et optimisez le partage d'information au sein de votre entreprise" },
      ],
    },
    {
      title: 'Service 1 – Vision & Culture',
      fields: [
        { key: 'service_1_title', label: 'Titre de la carte', type: 'text', placeholder: 'Vision & Culture' },
        { key: 'service_1_description', label: 'Description', type: 'textarea', placeholder: "Développement et diffusion de la culture d'entreprise" },
        { key: 'service_1_feature_1', label: 'Point 1', type: 'text', placeholder: "Valeurs d'entreprise" },
        { key: 'service_1_feature_2', label: 'Point 2', type: 'text', placeholder: 'Vision partagée' },
        { key: 'service_1_feature_3', label: 'Point 3', type: 'text', placeholder: 'Objectifs communs' },
        { key: 'service_1_feature_4', label: 'Point 4', type: 'text', placeholder: 'Engagement collectif' },
      ],
    },
    {
      title: 'Service 2 – Communication Collaborative',
      fields: [
        { key: 'service_2_title', label: 'Titre de la carte', type: 'text', placeholder: 'Communication Collaborative' },
        { key: 'service_2_description', label: 'Description', type: 'textarea', placeholder: 'Mise en place d\'outils et processus de communication efficaces' },
        { key: 'service_2_feature_1', label: 'Point 1', type: 'text', placeholder: 'Outils collaboratifs' },
        { key: 'service_2_feature_2', label: 'Point 2', type: 'text', placeholder: 'Newsletters internes' },
        { key: 'service_2_feature_3', label: 'Point 3', type: 'text', placeholder: 'Intranet dynamique' },
        { key: 'service_2_feature_4', label: 'Point 4', type: 'text', placeholder: "Réunions d'équipe" },
      ],
    },
    {
      title: 'Service 3 – Engagement & Bien-être',
      fields: [
        { key: 'service_3_title', label: 'Titre de la carte', type: 'text', placeholder: 'Engagement & Bien-être' },
        { key: 'service_3_description', label: 'Description', type: 'textarea', placeholder: 'Création d\'un environnement de travail positif et engageant' },
        { key: 'service_3_feature_1', label: 'Point 1', type: 'text', placeholder: 'Team building' },
        { key: 'service_3_feature_2', label: 'Point 2', type: 'text', placeholder: 'Reconnaissance' },
        { key: 'service_3_feature_3', label: 'Point 3', type: 'text', placeholder: 'Feedback continu' },
        { key: 'service_3_feature_4', label: 'Point 4', type: 'text', placeholder: 'Bien-être au travail' },
      ],
    },
    {
      title: 'Section Approche',
      fields: [
        { key: 'approach_title', label: 'Titre de la section', type: 'text', placeholder: 'NOTRE APPROCHE' },
        { key: 'approach_subtitle', label: 'Sous-titre', type: 'textarea', placeholder: "Une méthodologie centrée sur l'humain pour une communication interne efficace" },
        { key: 'approach_image', label: 'Image de la section (côté gauche)', type: 'image', placeholder: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80' },
      ],
    },
    {
      title: 'Étape 1 – Diagnostic',
      fields: [
        { key: 'step_1_title', label: "Titre de l'étape", type: 'text', placeholder: 'Diagnostic' },
        { key: 'step_1_description', label: 'Description', type: 'textarea', placeholder: 'Analyse des besoins et des pratiques actuelles de communication interne' },
      ],
    },
    {
      title: 'Étape 2 – Co-construction',
      fields: [
        { key: 'step_2_title', label: "Titre de l'étape", type: 'text', placeholder: 'Co-construction' },
        { key: 'step_2_description', label: 'Description', type: 'textarea', placeholder: "Élaboration collaborative d'une stratégie adaptée à votre culture" },
      ],
    },
    {
      title: 'Étape 3 – Déploiement',
      fields: [
        { key: 'step_3_title', label: "Titre de l'étape", type: 'text', placeholder: 'Déploiement' },
        { key: 'step_3_description', label: 'Description', type: 'textarea', placeholder: 'Mise en place progressive des outils et processus' },
      ],
    },
    {
      title: 'Étape 4 – Accompagnement',
      fields: [
        { key: 'step_4_title', label: "Titre de l'étape", type: 'text', placeholder: 'Accompagnement' },
        { key: 'step_4_description', label: 'Description', type: 'textarea', placeholder: 'Suivi et ajustement continu pour une adoption réussie' },
      ],
    },
    {
      title: 'Section CTA',
      fields: [
        { key: 'cta_title_part1', label: 'Titre CTA – partie 1 (avant la couleur)', type: 'text', placeholder: 'RENFORCEZ VOTRE' },
        { key: 'cta_title_part2', label: 'Titre CTA – partie 2 (en orange)', type: 'text', placeholder: "COHÉSION D'ÉQUIPE" },
        { key: 'cta_subtitle', label: 'Texte descriptif du CTA', type: 'textarea', placeholder: 'Découvrez comment notre approche de la communication interne peut transformer votre organisation' },
        { key: 'cta_button_label', label: 'Libellé du bouton', type: 'text', placeholder: 'Discutons de votre projet' },
      ],
    },
  ],
};

export default schema;
