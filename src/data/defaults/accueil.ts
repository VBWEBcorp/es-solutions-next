// Valeurs reelles actuelles de la page d'accueil.
const defaults: Record<string, string> = {
  // ── Héro ──────────────────────────────────────────────────────────────────
  "hero_image": "https://pub-e1e97dba7b2643bc9151a20668a49e5e.r2.dev/images/Q34j8xCF-logo-officiel-bleu-fonc.png",
  "hero_badge": "Notre consultant integre",
  "hero_title": "Votre solution pour vos besoins",
  "hero_highlight": "Communication · Marketing · Evenementiel",
  "hero_subtitle": "Directement dans vos locaux pour une communication impactante et des resultats concrets",
  "hero_cta_label": "Decouvrir notre offre",
  "hero_cta_href": "/nos-offres",

  // ── Références ────────────────────────────────────────────────────────────
  "reference_badge": "Références",
  "reference_title": "ILS NOUS FONT CONFIANCE",
  "reference_1_image": "https://pub-e1e97dba7b2643bc9151a20668a49e5e.r2.dev/images/spsPZsBK-michelin.jpg",
  "reference_1_alt": "Michelin",
  "reference_2_image": "https://pub-e1e97dba7b2643bc9151a20668a49e5e.r2.dev/images/8LRw2hMX-suchet-couverture.png",
  "reference_2_alt": "Suchet",
  "reference_3_image": "https://pub-e1e97dba7b2643bc9151a20668a49e5e.r2.dev/images/VWDvJMBf-mister-pool.png",
  "reference_3_alt": "Mister Pool",
  "reference_4_image": "https://pub-e1e97dba7b2643bc9151a20668a49e5e.r2.dev/images/7Jqxyq6z-montrognon-traiteur-passion.webp",
  "reference_4_alt": "Montrognon Traiteur",
  "reference_5_image": "/Logo AM_ Fond blanc.png",
  "reference_5_alt": "Auvergne Marée",
  "reference_6_image": "/JCE-Biotechnology-logo-full-color-rgb-900px (4).png",
  "reference_6_alt": "JCE Biotechnology",
  "reference_7_image": "/LOGO-CMB-2025 (002).png",
  "reference_7_alt": "CMB",

  // ── Genèse ────────────────────────────────────────────────────────────────
  "genesis_badge": "A propos",
  "genesis_title": "La genese de l'entreprise",
  "genesis_founder_name": "Edouard Suchet",
  "genesis_founder_role": "Fondateur et dirigeant",
  "genesis_founder_bio": "Fort de plus de 10 annees d'experience en communication, Edouard Suchet a exerce au sein de structures variees -- multinationales, PME, start-up et associations -- developpant ainsi une vision globale, strategique et operationnelle du metier. Il a notamment occupe le poste de Responsable Communication & Evenementiel au sein du Groupe Michelin.",
  "genesis_quote_1": "\"Trop souvent reservee aux grandes structures, la communication est pourtant un levier de performance puissant pour toutes les PME.\"",
  "genesis_quote_2": "\"L'importance reside dans le sens a donner a cette communication pour qu'elle soit au service du developpement.\"",
  "genesis_stat_label": "10+ annees",
  "genesis_stat_text": "d'expertise en communication",
  "genesis_image": "/©denisgrudet0025_alb09195--.jpg",
  "genesis_image_alt": "Edouard Suchet - Fondateur",

  // ── Vision ────────────────────────────────────────────────────────────────
  "vision_badge": "Notre vision",
  "vision_quote": "La communication au service du commerce",

  // ── Mission / Engagement ──────────────────────────────────────────────────
  "mission_badge": "Notre engagement",
  "mission_title": "Notre engagement",
  "mission_text": "Penser une communication impactante, en parfaite coherence avec votre strategie commerciale, pour enrichir l'experience client a chaque interaction. Notre mission : Vous aider a vous demarquer a chaque etape de la relation client.",
  "mission_values_badge": "Nos valeurs",
  "mission_values_title": "Nos valeurs",
  "mission_values_subtitle": "Une approche...",
  "mission_value_1_title": "CONCRETE",
  "mission_value_1_text": "Des solutions pratiques et adaptees a vos besoins reels",
  "mission_value_2_title": "HUMAINE",
  "mission_value_2_text": "Une approche centree sur l'humain et les relations",
  "mission_value_3_title": "SINCERE",
  "mission_value_3_text": "Une communication authentique et transparente",

  // ── Services — Consulting ─────────────────────────────────────────────────
  "services_consulting_badge": "Consulting",
  "services_consulting_title": "NOTRE OFFRE CONSULTING",
  "services_1_title": "STARTER PACK ES",
  "services_1_badge": "START",
  "services_1_item_1": "STRATEGIE MARKETING",
  "services_1_item_2": "COMMUNICATION EXTERNE",
  "services_2_title": "PACK BOOST ES",
  "services_2_badge": "BOOST",
  "services_2_item_1": "STRATEGIE MARKETING",
  "services_2_item_2": "COMMUNICATION EXTERNE",
  "services_2_item_3": "EVENEMENTIEL",
  "services_3_title": "PACK ES 360°",
  "services_3_badge": "360°",
  "services_3_item_1": "STRATEGIE MARKETING",
  "services_3_item_2": "COMMUNICATION INTERNE",
  "services_3_item_3": "COMMUNICATION EXTERNE",
  "services_3_item_4": "EVENEMENTIEL",

  // ── Services — Stratégie (ASP) ────────────────────────────────────────────
  "services_strategy_badge": "Strategie",
  "services_strategy_title": "NOTRE OFFRE STRATEGIE",
  "services_asp_title": "ASP",
  "services_asp_item_1": "AUDIT",
  "services_asp_item_2": "STRATEGIE",
  "services_asp_item_3": "PILOTAGE",

  // ── Témoignages ───────────────────────────────────────────────────────────
  "testimonial_badge": "Témoignages",
  "testimonial_title": "Ils nous font confiance",
  "testimonial_1_name": "Cécile LATOUR",
  "testimonial_1_role": "Directrice IT,\nsolutions ERP et RH,\ngroupe Michelin",
  "testimonial_1_avatar": "https://pub-e1e97dba7b2643bc9151a20668a49e5e.r2.dev/images/GvsK0sgY-cecile-pro-nov2022.jpg",
  "testimonial_1_logo": "https://pub-e1e97dba7b2643bc9151a20668a49e5e.r2.dev/images/spsPZsBK-michelin.jpg",
  "testimonial_1_logo_alt": "Michelin",
  "testimonial_1_quote": "Une journée mémorable organisée par ES Solutions gravée dans les mémoires de nos équipes",
  "testimonial_1_context": "(À propos d'un événement annuel d'équipe, organisé pour l'équipe DOT/BS/ES du groupe Michelin)",
  "testimonial_2_name": "Bruno CHAMPOUX",
  "testimonial_2_role": "Dirigeant,\nMontrognon Traiteur",
  "testimonial_2_avatar": "https://pub-e1e97dba7b2643bc9151a20668a49e5e.r2.dev/images/d0wssQ5j-bruno-champoux.jpg",
  "testimonial_2_logo": "https://pub-e1e97dba7b2643bc9151a20668a49e5e.r2.dev/images/7Jqxyq6z-montrognon-traiteur-passion.webp",
  "testimonial_2_logo_alt": "Montrognon Traiteur",
  "testimonial_2_quote": "Cette collaboration nous enchante [...] Car elle repousse notre horizon, et va nous offrir de nouvelles opportunités de mettre en lumière le talent de nos fidèles collaborateurs, la sincérité de nos engagements RSE, la précision et la performance de nos prestations.",
  "testimonial_2_context": "(À propos de l'accompagnement communication de Montrognon Traiteur)",

  // ── CTA ───────────────────────────────────────────────────────────────────
  "cta_title": "Prêts à faire de votre communication un réel levier de PERFORMANCE ?",
  "cta_subtitle": "Découvrez pourquoi notre approche unique fonctionne déjà pour nos clients",
  "cta_button_label": "Construisons ensemble votre stratégie",
};

export default defaults;
