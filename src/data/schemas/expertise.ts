import type { PageSchema } from '../pageSchemaTypes';

const schema: PageSchema = {
  slug: 'expertise',
  title: 'Page Expertise',
  url: '/expertise',
  sections: [
    {
      title: 'Section Héro',
      fields: [
        { key: 'hero_title_plain', label: 'Titre H1 — partie normale', type: 'text', placeholder: 'NOTRE' },
        { key: 'hero_title_highlight', label: 'Titre H1 — partie colorée', type: 'text', placeholder: 'EXPERTISE' },
        { key: 'hero_subtitle', label: 'Sous-titre', type: 'textarea', placeholder: 'Une approche globale et intégrée de la communication pour des résultats concrets' },
      ],
    },
    {
      title: 'Carte expertise 1 — Création de contenu',
      fields: [
        { key: 'card_1_title', label: 'Titre', type: 'text', placeholder: 'CRÉATION DE CONTENU' },
        { key: 'card_1_text', label: 'Description', type: 'textarea', placeholder: 'Création de contenus visuels et rédactionnels adaptés à vos besoins et à votre image de marque.' },
      ],
    },
    {
      title: 'Carte expertise 2 — Réseaux sociaux',
      fields: [
        { key: 'card_2_title', label: 'Titre', type: 'text', placeholder: 'RÉSEAUX SOCIAUX' },
        { key: 'card_2_text', label: 'Description', type: 'textarea', placeholder: 'Gestion et animation de vos réseaux sociaux pour une présence digitale optimale.' },
      ],
    },
    {
      title: 'Carte expertise 3 — Image de marque',
      fields: [
        { key: 'card_3_title', label: 'Titre', type: 'text', placeholder: 'IMAGE DE MARQUE' },
        { key: 'card_3_text', label: 'Description', type: 'textarea', placeholder: 'Développement et maintien d\'une image de marque cohérente et impactante.' },
      ],
    },
    {
      title: 'Carte expertise 4 — Polyvalence',
      fields: [
        { key: 'card_4_title', label: 'Titre', type: 'text', placeholder: 'POLYVALENCE' },
        { key: 'card_4_text', label: 'Description', type: 'textarea', placeholder: 'Capacité à gérer plusieurs projets simultanément avec efficacité.' },
      ],
    },
    {
      title: 'Carte expertise 5 — Présence terrain',
      fields: [
        { key: 'card_5_title', label: 'Titre', type: 'text', placeholder: 'PRESENCE TERRAIN' },
        { key: 'card_5_text', label: 'Description', type: 'textarea', placeholder: 'Présence sur le terrain pour une compréhension approfondie de vos enjeux.' },
      ],
    },
    {
      title: 'Carte expertise 6 — Gestion de projet',
      fields: [
        { key: 'card_6_title', label: 'Titre', type: 'text', placeholder: 'GESTION DE PROJET' },
        { key: 'card_6_text', label: 'Description', type: 'textarea', placeholder: 'Pilotage complet de vos projets de communication de A à Z.' },
      ],
    },
    {
      title: 'Carte expertise 7 — Événementiel',
      fields: [
        { key: 'card_7_title', label: 'Titre', type: 'text', placeholder: 'ÉVÉNEMENTIEL' },
        { key: 'card_7_text', label: 'Description', type: 'textarea', placeholder: 'Organisation et gestion d\'événements professionnels sur-mesure.' },
      ],
    },
    {
      title: 'Carte expertise 8 — Commerce',
      fields: [
        { key: 'card_8_title', label: 'Titre', type: 'text', placeholder: 'COMMERCE' },
        { key: 'card_8_text', label: 'Description', type: 'textarea', placeholder: 'Une approche en lien constant avec votre stratégie commerciale. « La communication au service du commerce ».' },
      ],
    },
    {
      title: 'Section CTA',
      fields: [
        { key: 'cta_title_plain', label: 'Titre CTA — partie normale', type: 'text', placeholder: 'Prêts à faire de votre communication un réel levier de' },
        { key: 'cta_title_highlight', label: 'Titre CTA — partie colorée', type: 'text', placeholder: 'performance' },
        { key: 'cta_title_suffix', label: 'Titre CTA — suite après la partie colorée', type: 'text', placeholder: ' ?' },
        { key: 'cta_subtitle', label: 'Sous-titre CTA', type: 'textarea', placeholder: 'Découvrez pourquoi notre approche unique fonctionne déjà pour nos clients' },
        { key: 'cta_button_label', label: 'Libellé du bouton', type: 'text', placeholder: 'Discutons de votre projet' },
      ],
    },
  ],
};

export default schema;
