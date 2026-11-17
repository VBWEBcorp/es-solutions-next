import type { PageSchema } from '../pageSchemaTypes';

// Page d'accueil. La section Héro est deja branchee (src/components/home/HeroSection.tsx).
// Les autres sections (Genesis, Vision, Mission, Services, Temoignages, References, CTA)
// sont ajoutees ici au fur et a mesure de leur branchement.
const schema: PageSchema = {
  slug: 'accueil',
  title: "Page d'accueil",
  url: '/',
  sections: [
    {
      title: 'Section Héro',
      fields: [
        { key: 'hero_badge', label: 'Sous-titre / accroche (sous le titre)', type: 'text', placeholder: 'Notre consultant integre' },
        { key: 'hero_title', label: 'Titre principal (H1)', type: 'text', placeholder: 'Votre solution pour vos besoins' },
        { key: 'hero_highlight', label: 'Domaines (separes par ·)', type: 'text', placeholder: 'Communication · Marketing · Evenementiel' },
        { key: 'hero_subtitle', label: 'Texte de la carte (description)', type: 'textarea', placeholder: 'Directement dans vos locaux pour une communication impactante et des resultats concrets' },
        { key: 'hero_cta_label', label: 'Libelle du bouton principal', type: 'text', placeholder: 'Decouvrir notre offre' },
        { key: 'hero_cta_href', label: 'Lien du bouton principal', type: 'url', placeholder: '/nos-offres' },
        { key: 'hero_image', label: 'Logo / image du héro', type: 'image' },
      ],
    },
    {
      title: 'Section Références (logos clients)',
      fields: [
        { key: 'reference_badge', label: 'Label de section', type: 'text', placeholder: 'Références' },
        { key: 'reference_title', label: 'Titre de section', type: 'text', placeholder: 'ILS NOUS FONT CONFIANCE' },
        { key: 'reference_1_image', label: 'Logo client 1 (src)', type: 'image', placeholder: 'https://pub-1eef308d0a754271b1c96b38618969fe.r2.dev/images/spsPZsBK-michelin.jpg' },
        { key: 'reference_1_alt', label: 'Logo client 1 (alt)', type: 'text', placeholder: 'Michelin' },
        { key: 'reference_2_image', label: 'Logo client 2 (src)', type: 'image', placeholder: 'https://pub-1eef308d0a754271b1c96b38618969fe.r2.dev/images/8LRw2hMX-suchet-couverture.png' },
        { key: 'reference_2_alt', label: 'Logo client 2 (alt)', type: 'text', placeholder: 'Suchet' },
        { key: 'reference_3_image', label: 'Logo client 3 (src)', type: 'image', placeholder: 'https://pub-1eef308d0a754271b1c96b38618969fe.r2.dev/images/VWDvJMBf-mister-pool.png' },
        { key: 'reference_3_alt', label: 'Logo client 3 (alt)', type: 'text', placeholder: 'Mister Pool' },
        { key: 'reference_4_image', label: 'Logo client 4 (src)', type: 'image', placeholder: 'https://pub-1eef308d0a754271b1c96b38618969fe.r2.dev/images/7Jqxyq6z-montrognon-traiteur-passion.webp' },
        { key: 'reference_4_alt', label: 'Logo client 4 (alt)', type: 'text', placeholder: 'Montrognon Traiteur' },
        { key: 'reference_5_image', label: 'Logo client 5 (src)', type: 'image', placeholder: '/Logo AM_ Fond blanc.png' },
        { key: 'reference_5_alt', label: 'Logo client 5 (alt)', type: 'text', placeholder: 'Auvergne Marée' },
        { key: 'reference_6_image', label: 'Logo client 6 (src)', type: 'image', placeholder: '/JCE-Biotechnology-logo-full-color-rgb-900px (4).png' },
        { key: 'reference_6_alt', label: 'Logo client 6 (alt)', type: 'text', placeholder: 'JCE Biotechnology' },
        { key: 'reference_7_image', label: 'Logo client 7 (src)', type: 'image', placeholder: '/LOGO-CMB-2025 (002).png' },
        { key: 'reference_7_alt', label: 'Logo client 7 (alt)', type: 'text', placeholder: 'CMB' },
      ],
    },
    {
      title: 'Section Genèse',
      fields: [
        { key: 'genesis_badge', label: 'Label de section', type: 'text', placeholder: 'A propos' },
        { key: 'genesis_title', label: 'Titre H2', type: 'text', placeholder: 'La genese de l\'entreprise' },
        { key: 'genesis_founder_name', label: 'Nom du fondateur', type: 'text', placeholder: 'Edouard Suchet' },
        { key: 'genesis_founder_role', label: 'Rôle du fondateur', type: 'text', placeholder: 'Fondateur et dirigeant' },
        { key: 'genesis_founder_bio', label: 'Biographie du fondateur', type: 'textarea', placeholder: 'Fort de plus de 10 annees d\'experience en communication, Edouard Suchet a exerce au sein de structures variees -- multinationales, PME, start-up et associations -- developpant ainsi une vision globale, strategique et operationnelle du metier. Il a notamment occupe le poste de Responsable Communication & Evenementiel au sein du Groupe Michelin.' },
        { key: 'genesis_quote_1', label: 'Citation 1', type: 'textarea', placeholder: '"Trop souvent reservee aux grandes structures, la communication est pourtant un levier de performance puissant pour toutes les PME."' },
        { key: 'genesis_quote_2', label: 'Citation 2', type: 'textarea', placeholder: '"L\'importance reside dans le sens a donner a cette communication pour qu\'elle soit au service du developpement."' },
        { key: 'genesis_stat_label', label: 'Statistique (carte photo)', type: 'text', placeholder: '10+ annees' },
        { key: 'genesis_stat_text', label: 'Description de la stat', type: 'text', placeholder: 'd\'expertise en communication' },
        { key: 'genesis_image', label: 'Photo du fondateur', type: 'image', placeholder: '/©denisgrudet0025_alb09195--.jpg' },
        { key: 'genesis_image_alt', label: 'Alt de la photo', type: 'text', placeholder: 'Edouard Suchet - Fondateur' },
      ],
    },
    {
      title: 'Section Vision',
      fields: [
        { key: 'vision_badge', label: 'Label de section', type: 'text', placeholder: 'Notre vision' },
        { key: 'vision_quote', label: 'Citation principale', type: 'textarea', placeholder: 'La communication au service du commerce' },
      ],
    },
    {
      title: 'Section Mission / Engagement',
      fields: [
        { key: 'mission_badge', label: 'Label de section (engagement)', type: 'text', placeholder: 'Notre engagement' },
        { key: 'mission_title', label: 'Titre H2 (engagement)', type: 'text', placeholder: 'Notre engagement' },
        { key: 'mission_text', label: 'Texte (engagement)', type: 'textarea', placeholder: 'Penser une communication impactante, en parfaite coherence avec votre strategie commerciale, pour enrichir l\'experience client a chaque interaction. Notre mission : Vous aider a vous demarquer a chaque etape de la relation client.' },
        { key: 'mission_values_badge', label: 'Label de section (valeurs)', type: 'text', placeholder: 'Nos valeurs' },
        { key: 'mission_values_title', label: 'Titre H2 (valeurs)', type: 'text', placeholder: 'Nos valeurs' },
        { key: 'mission_values_subtitle', label: 'Sous-titre (valeurs)', type: 'text', placeholder: 'Une approche...' },
        { key: 'mission_value_1_title', label: 'Valeur 1 — Titre', type: 'text', placeholder: 'CONCRETE' },
        { key: 'mission_value_1_text', label: 'Valeur 1 — Description', type: 'text', placeholder: 'Des solutions pratiques et adaptees a vos besoins reels' },
        { key: 'mission_value_2_title', label: 'Valeur 2 — Titre', type: 'text', placeholder: 'HUMAINE' },
        { key: 'mission_value_2_text', label: 'Valeur 2 — Description', type: 'text', placeholder: 'Une approche centree sur l\'humain et les relations' },
        { key: 'mission_value_3_title', label: 'Valeur 3 — Titre', type: 'text', placeholder: 'SINCERE' },
        { key: 'mission_value_3_text', label: 'Valeur 3 — Description', type: 'text', placeholder: 'Une communication authentique et transparente' },
      ],
    },
    {
      title: 'Section Services — Consulting',
      fields: [
        { key: 'services_consulting_badge', label: 'Label de section', type: 'text', placeholder: 'Consulting' },
        { key: 'services_consulting_title', label: 'Titre H2', type: 'text', placeholder: 'NOTRE OFFRE CONSULTING' },
        // Carte 1 : STARTER PACK ES
        { key: 'services_1_title', label: 'Offre 1 — Titre', type: 'text', placeholder: 'STARTER PACK ES' },
        { key: 'services_1_badge', label: 'Offre 1 — Badge watermark', type: 'text', placeholder: 'START' },
        { key: 'services_1_item_1', label: 'Offre 1 — Item 1', type: 'text', placeholder: 'STRATEGIE MARKETING' },
        { key: 'services_1_item_2', label: 'Offre 1 — Item 2', type: 'text', placeholder: 'COMMUNICATION EXTERNE' },
        // Carte 2 : PACK BOOST ES
        { key: 'services_2_title', label: 'Offre 2 — Titre', type: 'text', placeholder: 'PACK BOOST ES' },
        { key: 'services_2_badge', label: 'Offre 2 — Badge watermark', type: 'text', placeholder: 'BOOST' },
        { key: 'services_2_item_1', label: 'Offre 2 — Item 1', type: 'text', placeholder: 'STRATEGIE MARKETING' },
        { key: 'services_2_item_2', label: 'Offre 2 — Item 2', type: 'text', placeholder: 'COMMUNICATION EXTERNE' },
        { key: 'services_2_item_3', label: 'Offre 2 — Item 3', type: 'text', placeholder: 'EVENEMENTIEL' },
        // Carte 3 : PACK ES 360°
        { key: 'services_3_title', label: 'Offre 3 — Titre', type: 'text', placeholder: 'PACK ES 360°' },
        { key: 'services_3_badge', label: 'Offre 3 — Badge watermark', type: 'text', placeholder: '360°' },
        { key: 'services_3_item_1', label: 'Offre 3 — Item 1', type: 'text', placeholder: 'STRATEGIE MARKETING' },
        { key: 'services_3_item_2', label: 'Offre 3 — Item 2', type: 'text', placeholder: 'COMMUNICATION INTERNE' },
        { key: 'services_3_item_3', label: 'Offre 3 — Item 3', type: 'text', placeholder: 'COMMUNICATION EXTERNE' },
        { key: 'services_3_item_4', label: 'Offre 3 — Item 4', type: 'text', placeholder: 'EVENEMENTIEL' },
      ],
    },
    {
      title: 'Section Services — Stratégie (ASP)',
      fields: [
        { key: 'services_strategy_badge', label: 'Label de section', type: 'text', placeholder: 'Strategie' },
        { key: 'services_strategy_title', label: 'Titre H2', type: 'text', placeholder: 'NOTRE OFFRE STRATEGIE' },
        { key: 'services_asp_title', label: 'Offre ASP — Titre', type: 'text', placeholder: 'ASP' },
        { key: 'services_asp_item_1', label: 'Offre ASP — Item 1', type: 'text', placeholder: 'AUDIT' },
        { key: 'services_asp_item_2', label: 'Offre ASP — Item 2', type: 'text', placeholder: 'STRATEGIE' },
        { key: 'services_asp_item_3', label: 'Offre ASP — Item 3', type: 'text', placeholder: 'PILOTAGE' },
      ],
    },
    {
      title: 'Section Témoignages',
      fields: [
        { key: 'testimonial_badge', label: 'Label de section', type: 'text', placeholder: 'Témoignages' },
        { key: 'testimonial_title', label: 'Titre H2', type: 'text', placeholder: 'Ils nous font confiance' },
        // Témoignage 1
        { key: 'testimonial_1_name', label: 'Témoignage 1 — Nom', type: 'text', placeholder: 'Cécile LATOUR' },
        { key: 'testimonial_1_role', label: 'Témoignage 1 — Rôle', type: 'textarea', placeholder: 'Directrice IT,\nsolutions ERP et RH,\ngroupe Michelin' },
        { key: 'testimonial_1_avatar', label: 'Témoignage 1 — Avatar (src)', type: 'image', placeholder: 'https://pub-1eef308d0a754271b1c96b38618969fe.r2.dev/images/GvsK0sgY-cecile-pro-nov2022.jpg' },
        { key: 'testimonial_1_logo', label: 'Témoignage 1 — Logo entreprise (src)', type: 'image', placeholder: 'https://pub-1eef308d0a754271b1c96b38618969fe.r2.dev/images/spsPZsBK-michelin.jpg' },
        { key: 'testimonial_1_logo_alt', label: 'Témoignage 1 — Logo alt', type: 'text', placeholder: 'Michelin' },
        { key: 'testimonial_1_quote', label: 'Témoignage 1 — Citation', type: 'textarea', placeholder: 'Une journée mémorable organisée par ES Solutions gravée dans les mémoires de nos équipes' },
        { key: 'testimonial_1_context', label: 'Témoignage 1 — Contexte', type: 'text', placeholder: '(À propos d\'un événement annuel d\'équipe, organisé pour l\'équipe DOT/BS/ES du groupe Michelin)' },
        // Témoignage 2
        { key: 'testimonial_2_name', label: 'Témoignage 2 — Nom', type: 'text', placeholder: 'Bruno CHAMPOUX' },
        { key: 'testimonial_2_role', label: 'Témoignage 2 — Rôle', type: 'textarea', placeholder: 'Dirigeant,\nMontrognon Traiteur' },
        { key: 'testimonial_2_avatar', label: 'Témoignage 2 — Avatar (src)', type: 'image', placeholder: 'https://pub-1eef308d0a754271b1c96b38618969fe.r2.dev/images/d0wssQ5j-bruno-champoux.jpg' },
        { key: 'testimonial_2_logo', label: 'Témoignage 2 — Logo entreprise (src)', type: 'image', placeholder: 'https://pub-1eef308d0a754271b1c96b38618969fe.r2.dev/images/7Jqxyq6z-montrognon-traiteur-passion.webp' },
        { key: 'testimonial_2_logo_alt', label: 'Témoignage 2 — Logo alt', type: 'text', placeholder: 'Montrognon Traiteur' },
        { key: 'testimonial_2_quote', label: 'Témoignage 2 — Citation', type: 'textarea', placeholder: 'Cette collaboration nous enchante [...] Car elle repousse notre horizon, et va nous offrir de nouvelles opportunités de mettre en lumière le talent de nos fidèles collaborateurs, la sincérité de nos engagements RSE, la précision et la performance de nos prestations.' },
        { key: 'testimonial_2_context', label: 'Témoignage 2 — Contexte', type: 'text', placeholder: '(À propos de l\'accompagnement communication de Montrognon Traiteur)' },
      ],
    },
    {
      title: 'Section CTA (appel à l\'action)',
      fields: [
        { key: 'cta_title', label: 'Titre H2', type: 'textarea', placeholder: 'Prêts à faire de votre communication un réel levier de PERFORMANCE ?' },
        { key: 'cta_subtitle', label: 'Sous-titre', type: 'text', placeholder: 'Découvrez pourquoi notre approche unique fonctionne déjà pour nos clients' },
        { key: 'cta_button_label', label: 'Libellé du bouton', type: 'text', placeholder: 'Construisons ensemble votre stratégie' },
      ],
    },
  ],
};

export default schema;
