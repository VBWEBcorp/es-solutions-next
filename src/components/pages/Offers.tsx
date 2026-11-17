'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, FileCheck, Users, Calendar, PenTool, BarChart, FileText, BarChart3, MessageSquare, Briefcase } from 'lucide-react';
import PricingModal from '@/components/PricingModal';

const Offers = ({ data }: { data?: Record<string, string> }) => {
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [selectedService, setSelectedService] = useState<number | null>(null);

  // ── Héro ──────────────────────────────────────────────────────────────────
  const heroTitleWhite  = data?.hero_title_white  || 'NOS';
  const heroTitleOrange = data?.hero_title_orange || 'OFFRES';
  const heroSubtitle    = data?.hero_subtitle     ||
    'Nous concevons votre plan de communication multicanal en lien constant avec votre stratégie commerciale. Chaque action est pensée pour apporter des éléments différenciants dans la relation client et pour aller au-delà de vos objectifs de développement commercial.';

  // ── "Pourquoi ça fonctionne" ──────────────────────────────────────────────
  const whyTitleWhite  = data?.why_title_white  || 'POURQUOI ÇA';
  const whyTitleOrange = data?.why_title_orange || 'FONCTIONNE';
  const whyAdvantages = [
    data?.why_advantage_1 || "Notre consultant intégré à votre équipe, sur votre lieu de travail. Cela permet une connaissance approfondie de votre entreprise, de vos enjeux et facilite le partage d'informations ainsi que l'intégration.",
    data?.why_advantage_2 || 'Un contact unique pour tous vos besoins en communication, marketing et événementiel.',
    data?.why_advantage_3 || "Un gain de temps pour vos collaborateurs, qui n'ont plus besoin de traiter les tâches liées à la communication et qui sont soutenus au quotidien dans la stratégie de communication.",
    data?.why_advantage_4 || 'Une administration simplifiée, par le recours à une prestation externe.',
    data?.why_advantage_5 || "Une expertise constamment challengée : Le consultant bénéficie de la synergie d'une équipe de communicants au sein de ES Solutions.",
  ];
  const whyImage = data?.why_image ||
    'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80';

  // ── Bloc description services ─────────────────────────────────────────────
  const servicesDesc1 = data?.services_desc_1 ||
    'Nos consultants polyvalents conçoivent et déploient une communication impactante, parfaitement alignée avec votre stratégie commerciale, pour enrichir chaque interaction avec vos parties prenantes.';
  const servicesDesc2 = data?.services_desc_2 ||
    'Nous plaçons le commerce au cœur de la communication, avec une vision très concrète et adaptée aux besoins réels des entreprises, pour que la communication soit un vrai levier commercial.';

  // ── Cartes offres ─────────────────────────────────────────────────────────
  const pack1TitleWhite  = data?.pack_1_title_white  || 'NOTRE OFFRE ';
  const pack1TitleOrange = data?.pack_1_title_orange || 'STRATEGIE';
  const pack1Category1   = data?.pack_1_category_1   || 'AUDIT';
  const pack1Category2   = data?.pack_1_category_2   || 'STRATÉGIE';
  const pack1Category3   = data?.pack_1_category_3   || 'PILOTAGE';
  const pack1Subtitle    = data?.pack_1_subtitle     || 'Une approche complète et intégrée';

  const pack2TitleOrange = data?.pack_2_title_orange || 'STARTER';
  const pack2TitleWhite  = data?.pack_2_title_white  || ' PACK ES';
  const pack2Category1   = data?.pack_2_category_1   || 'STRATÉGIE MARKETING';
  const pack2Category2   = data?.pack_2_category_2   || 'COMMUNICATION EXTERNE';
  const pack2Subtitle    = data?.pack_2_subtitle     || 'Niveau de responsabilité +';

  const pack3TitleWhitePre  = data?.pack_3_title_white_pre  || 'PACK ';
  const pack3TitleOrange    = data?.pack_3_title_orange     || 'BOOST';
  const pack3TitleWhitePost = data?.pack_3_title_white_post || ' ES';
  const pack3Category1      = data?.pack_3_category_1      || 'STRATÉGIE MARKETING';
  const pack3Category2      = data?.pack_3_category_2      || 'COMMUNICATION EXTERNE';
  const pack3Category3      = data?.pack_3_category_3      || 'ÉVÉNEMENTIEL';
  const pack3Subtitle       = data?.pack_3_subtitle        || 'Niveau de responsabilité ++';

  const pack4TitleWhite  = data?.pack_4_title_white  || 'PACK ES ';
  const pack4TitleOrange = data?.pack_4_title_orange || '360°';
  const pack4Category1   = data?.pack_4_category_1   || 'STRATÉGIE MARKETING';
  const pack4Category2   = data?.pack_4_category_2   || 'COMMUNICATION INTERNE';
  const pack4Category3   = data?.pack_4_category_3   || 'COMMUNICATION EXTERNE';
  const pack4Category4   = data?.pack_4_category_4   || 'ÉVÉNEMENTIEL';
  const pack4Subtitle    = data?.pack_4_subtitle     || 'Niveau de responsabilité +++';

  const cardCtaLabel = data?.card_cta_label || 'En savoir plus';

  // ── Collaboration ─────────────────────────────────────────────────────────
  const collabTitleWhite  = data?.collab_title_white  || 'NOTRE';
  const collabTitleOrange = data?.collab_title_orange || 'COLLABORATION';
  const collabSubtitle    = data?.collab_subtitle     || 'Un processus clair et efficace pour une collaboration performante';

  const collabSteps = [
    {
      title: data?.collab_step_1_title || 'Définition des besoins',
      description: data?.collab_step_1_desc || "Définition ensemble de vos besoins en communication et du nombre de jours de présence du consultant au sein de votre entreprise.",
      position: 'left',
      step: 1,
    },
    {
      title: data?.collab_step_2_title || 'Validation du contrat',
      description: data?.collab_step_2_desc || 'Envoi du Devis, définition du TJM du consultant et validation du contrat.',
      position: 'right',
      step: 2,
    },
    {
      title: data?.collab_step_3_title || 'Présentation du consultant',
      description: data?.collab_step_3_desc || "Présentation du consultant et planification de son emploi du temps.",
      position: 'left',
      step: 3,
    },
    {
      title: data?.collab_step_4_title || 'Plan de communication',
      description: data?.collab_step_4_desc || "Le consultant: échange avec l'ensemble des parties-prenantes, captation d'informations et proposition du plan de communication.",
      position: 'right',
      step: 4,
    },
    {
      title: data?.collab_step_5_title || 'Réalisation mensuelle',
      description: data?.collab_step_5_desc || 'Réalisation du plan de communication, point mensuel avec le consultant.',
      position: 'left',
      step: 5,
    },
    {
      title: data?.collab_step_6_title || 'Bilan annuel',
      description: data?.collab_step_6_desc || "Bilan annuel et validation du plan de communication de l'année suivante",
      position: 'right',
      step: 6,
    },
  ];

  // ── Static data for PricingModal (modal internals unchanged) ──────────────
  const serviceData = [
    {
      title: "NOTRE OFFRE STRATEGIE",
      subtitle: "Une approche complète et intégrée",
      features: [
        "AUDIT:",
        "Analyse complète de vos actions et de vos supports existants pour identifier vos forces, vos axes d'amélioration et les opportunités de développement.",
        "",
        "STRATEGIE:",
        "Définition des axes et actions stratégiques & tactiques qui guideront vos actions futures pour renforcer / atteindre vos objectifs.",
        "",
        "PILOTAGE:",
        "Assurer la mise en œuvre, le suivi et l'ajustement de votre stratégie de communication. Elle garantit la cohérence des actions, le respect des objectifs et l'optimisation continue des résultats tout au long du projet."
      ]
    },
    {
      title: "STARTER PACK ES",
      subtitle: "Niveau de responsabilité +",
      features: [
        "Stratégie Marketing :",
        "Élaboration de la stratégie marketing globale (positionnement, veille concurrentielle, définition des cibles et des canaux de communication)",
        "",
        "Communication externe:",
        "Gestion de l'image de l'entreprise :",
        "Création d'une identité graphique",
        "Création de supports de communication",
        "Déploiement de campagnes multi-canal (emailing, SEA, réseaux)",
        "Elaboration et mise en place du plan de communication global",
        "Gestion des réseaux sociaux:",
        "Création de contenus",
        "Community Management",
        "Optimisation du parcours client, valorisation de l'offre à chaque étape du processus commercial",
        "Suivi et analyse des KPIs"
      ]
    },
    {
      title: "PACK BOOST ES",
      subtitle: "Niveau de responsabilité ++",
      features: [
        "Stratégie Marketing :",
        "Élaboration de la stratégie marketing globale (positionnement, veille concurrentielle, définition des cibles et des canaux de communication)",
        "Pilotage de campagnes Ads",
        "",
        "Communication Externe :",
        "Gestion de l'image de l'entreprise :",
        "Création d'une identité graphique",
        "Création de supports de communication",
        "Déploiement de campagnes multi-canal (emailing, SEA, réseaux)",
        "Elaboration et mise en place du plan de communication global",
        "Gestion des réseaux sociaux:",
        "Supervisation de la production de contenus",
        "Community Management",
        "Optimisation du parcours client, valorisation de l'offre à chaque étape du processus commercial",
        "Suivi et analyse des KPIs",
        "",
        "Evénementiel :",
        "Organisation complète d'événements (stratégie, logistique, animation)",
        "Gestion du budget, des prestataires et du planning",
        "Animation des réunions de préparation et bilans post-événement"
      ]
    },
    {
      title: "PACK ES 360°",
      subtitle: "Niveau de responsabilité +++",
      features: [
        "Stratégie Marketing :",
        "Élaboration de la stratégie marketing globale (positionnement, acquisition, fidélisation)",
        "Pilotage de campagnes Ads",
        "Supervision des équipes marketing ou des agences",
        "",
        "Communication Interne :",
        "Organisation et supervision du partage d'informations",
        "Création de supports de communication internes",
        "Accompagnement à la mise en place de la stratégie de communication interne",
        "",
        "Communication Externe :",
        "Gestion de l'image de l'entreprise :",
        "Création d'une identité graphique",
        "Création de supports de communication",
        "Déploiement de campagnes multi-canal (emailing, SEA, réseaux)",
        "Elaboration et mise en place du plan de communication global",
        "Gestion des réseaux sociaux:",
        "Supervisation de la production de contenus",
        "Community Management",
        "Optimisation du parcours client, valorisation de l'offre à chaque étape du processus commercial",
        "Suivi et analyse des KPIs",
        "",
        "Conseil et accompagnement de l'équipe de direction",
        "Gestion de la communication de crise, communication sensible",
        "",
        "Conseil et accompagnement de l'équipe de direction",
        "Gestion de la communication de crise, communication sensible",
        "",
        "Evénementiel :",
        "Organisation complète d'événements (stratégie, logistique, animation)",
        "Gestion du budget, des prestataires et du planning",
        "Encadrement des équipes",
        "Animation des réunions de préparation et bilans post-événement"
      ]
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-[#023654] py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-norwester mb-8">
              {heroTitleWhite} <span className="text-[#EB6718]">{heroTitleOrange}</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-5xl mx-auto">
              {heroSubtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Consulting Advantages */}
      <section ref={ref1} className="py-24 bg-[#012A43]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView1 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-norwester text-white mb-8">
                {whyTitleWhite} <span className="text-[#EB6718]">{whyTitleOrange}</span> ?
              </h2>
              <div className="space-y-6">
                {whyAdvantages.map((advantage, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView1 ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start space-x-4 text-white"
                  >
                    <img
                      src="https://pub-1eef308d0a754271b1c96b38618969fe.r2.dev/images/YB3Fypbs-coche-1.png"
                      alt="Checkmark"
                      className="h-6 w-6 flex-shrink-0 mt-1"
                    />
                    <p className="text-gray-300">{advantage}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={inView1 ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5 }}
                className="aspect-[4/3] rounded-2xl overflow-hidden"
              >
                <img
                  src={whyImage}
                  alt="Consulting"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-[#023654]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView2 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <div className="bg-gradient-to-br from-[#012A43]/80 via-[#023654]/60 to-[#012A43]/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.3)] relative overflow-hidden hover:border-[#EB6718]/50 transition-all duration-500 hover:scale-[1.01] max-w-5xl mx-auto">
              {/* Accent décoratif en haut */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#EB6718] to-transparent opacity-60"></div>

              <div className="relative z-10 space-y-4">
                <p className="text-lg lg:text-xl text-gray-200 leading-relaxed">
                  {servicesDesc1}
                </p>

                {/* Ligne de séparation élégante */}
                <div className="flex items-center justify-center py-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-0.5 bg-gradient-to-r from-transparent to-[#EB6718]/60"></div>
                    <div className="w-2 h-2 rounded-full bg-[#EB6718]/60"></div>
                    <div className="w-6 h-0.5 bg-gradient-to-l from-transparent to-[#EB6718]/60"></div>
                  </div>
                </div>

                <p className="text-lg lg:text-xl text-gray-300 leading-relaxed italic font-light">
                  {servicesDesc2}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section ref={ref2} className="pt-0 pb-24 bg-[#023654]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView2 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {/* Card 1 — Notre offre Stratégie */}
            <motion.div
              key="pack-strategie"
              initial={{ opacity: 0, y: 20 }}
              animate={inView2 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0 }}
              className="group bg-gradient-to-br from-[#023654] to-[#012A43] p-8 rounded-2xl border border-white/10 hover:border-[#EB6718]/50 hover:scale-[1.02] transition-all duration-300 cursor-pointer relative overflow-hidden"
            >
              <div className="absolute top-4 right-4 pointer-events-none">
                <span className="text-white/5 font-norwester text-4xl md:text-5xl lg:text-6xl select-none">
                  STRAT
                </span>
              </div>

              {/* Pack Title */}
              <div className="mb-8 relative z-10">
                <h3 className="text-2xl font-norwester mb-2">
                  <span className="text-white">{pack1TitleWhite}</span>
                  <span className="text-[#EB6718]">{pack1TitleOrange}</span>
                </h3>
              </div>

              {/* Main Categories */}
              <div className="space-y-2 mb-8 relative z-10">
                <div className="text-white font-norwester text-sm tracking-wide">{pack1Category1}</div>
                <div className="text-white font-norwester text-sm tracking-wide">{pack1Category2}</div>
                <div className="text-white font-norwester text-sm tracking-wide">{pack1Category3}</div>
              </div>

              {/* Responsibility Level */}
              <div className="mb-8 relative z-10">
                <span className="inline-block px-3 py-1 bg-white/10 text-white text-xs font-norwester rounded-full border border-white/20">
                  {pack1Subtitle}
                </span>
              </div>

              <motion.a
                onClick={() => setSelectedService(0)}
                className="inline-flex items-center justify-center w-full px-8 py-3 mt-8 bg-white/10 text-white rounded-full hover:bg-white/20 transition-all duration-300 font-norwester text-sm relative z-10"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {cardCtaLabel}
                <ArrowRight className="ml-2 h-5 w-5" />
              </motion.a>
            </motion.div>

            {/* Card 2 — Starter Pack ES */}
            <motion.div
              key="pack-starter"
              initial={{ opacity: 0, y: 20 }}
              animate={inView2 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group bg-gradient-to-br from-[#023654] to-[#012A43] p-8 rounded-2xl border border-white/10 hover:border-[#EB6718]/50 hover:scale-[1.02] transition-all duration-300 cursor-pointer relative overflow-hidden"
            >
              <div className="absolute top-4 right-4 pointer-events-none">
                <span className="text-white/5 font-norwester text-4xl md:text-5xl lg:text-6xl select-none">
                  START
                </span>
              </div>

              {/* Pack Title */}
              <div className="mb-8 relative z-10">
                <h3 className="text-2xl font-norwester mb-2">
                  <span className="text-[#EB6718]">{pack2TitleOrange}</span>
                  <span className="text-white">{pack2TitleWhite}</span>
                </h3>
              </div>

              {/* Main Categories */}
              <div className="space-y-2 mb-8 relative z-10">
                <div className="text-white font-norwester text-sm tracking-wide">{pack2Category1}</div>
                <div className="text-white font-norwester text-sm tracking-wide">{pack2Category2}</div>
              </div>

              {/* Responsibility Level */}
              <div className="mb-8 relative z-10">
                <span className="inline-block px-3 py-1 bg-white/10 text-white text-xs font-norwester rounded-full border border-white/20">
                  {pack2Subtitle}
                </span>
              </div>

              <motion.a
                onClick={() => setSelectedService(1)}
                className="inline-flex items-center justify-center w-full px-8 py-3 mt-8 bg-white/10 text-white rounded-full hover:bg-white/20 transition-all duration-300 font-norwester text-sm relative z-10"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {cardCtaLabel}
                <ArrowRight className="ml-2 h-5 w-5" />
              </motion.a>
            </motion.div>

            {/* Card 3 — Pack Boost ES */}
            <motion.div
              key="pack-boost"
              initial={{ opacity: 0, y: 20 }}
              animate={inView2 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="group bg-gradient-to-br from-[#023654] to-[#012A43] p-8 rounded-2xl border border-white/10 hover:border-[#EB6718]/50 hover:scale-[1.02] transition-all duration-300 cursor-pointer relative overflow-hidden"
            >
              <div className="absolute top-4 right-4 pointer-events-none">
                <span className="text-white/5 font-norwester text-4xl md:text-5xl lg:text-6xl select-none">
                  BOOST
                </span>
              </div>

              {/* Pack Title */}
              <div className="mb-8 relative z-10">
                <h3 className="text-2xl font-norwester mb-2">
                  <span className="text-white">{pack3TitleWhitePre}</span>
                  <span className="text-[#EB6718]">{pack3TitleOrange}</span>
                  <span className="text-white">{pack3TitleWhitePost}</span>
                </h3>
              </div>

              {/* Main Categories */}
              <div className="space-y-2 mb-8 relative z-10">
                <div className="text-white font-norwester text-sm tracking-wide">{pack3Category1}</div>
                <div className="text-white font-norwester text-sm tracking-wide">{pack3Category2}</div>
                <div className="text-white font-norwester text-sm tracking-wide">{pack3Category3}</div>
              </div>

              {/* Responsibility Level */}
              <div className="mb-8 relative z-10">
                <span className="inline-block px-3 py-1 bg-white/10 text-white text-xs font-norwester rounded-full border border-white/20">
                  {pack3Subtitle}
                </span>
              </div>

              <motion.a
                onClick={() => setSelectedService(2)}
                className="inline-flex items-center justify-center w-full px-8 py-3 mt-8 bg-white/10 text-white rounded-full hover:bg-white/20 transition-all duration-300 font-norwester text-sm relative z-10"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {cardCtaLabel}
                <ArrowRight className="ml-2 h-5 w-5" />
              </motion.a>
            </motion.div>

            {/* Card 4 — Pack ES 360° */}
            <motion.div
              key="pack-360"
              initial={{ opacity: 0, y: 20 }}
              animate={inView2 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="group bg-gradient-to-br from-[#023654] to-[#012A43] p-8 rounded-2xl border border-white/10 hover:border-[#EB6718]/50 hover:scale-[1.02] transition-all duration-300 cursor-pointer relative overflow-hidden"
            >
              <div className="absolute top-4 right-4 pointer-events-none">
                <span className="text-white/5 font-norwester text-4xl md:text-5xl lg:text-6xl select-none">
                  360°
                </span>
              </div>

              {/* Pack Title */}
              <div className="mb-8 relative z-10">
                <h3 className="text-2xl font-norwester mb-2">
                  <span className="text-white">{pack4TitleWhite}</span>
                  <span className="text-[#EB6718]">{pack4TitleOrange}</span>
                </h3>
              </div>

              {/* Main Categories */}
              <div className="space-y-2 mb-8 relative z-10">
                <div className="text-white font-norwester text-sm tracking-wide">{pack4Category1}</div>
                <div className="text-white font-norwester text-sm tracking-wide">{pack4Category2}</div>
                <div className="text-white font-norwester text-sm tracking-wide">{pack4Category3}</div>
                <div className="text-white font-norwester text-sm tracking-wide">{pack4Category4}</div>
              </div>

              {/* Responsibility Level */}
              <div className="mb-8 relative z-10">
                <span className="inline-block px-3 py-1 bg-white/10 text-white text-xs font-norwester rounded-full border border-white/20">
                  {pack4Subtitle}
                </span>
              </div>

              <motion.a
                onClick={() => setSelectedService(3)}
                className="inline-flex items-center justify-center w-full px-8 py-3 mt-8 bg-white/10 text-white rounded-full hover:bg-white/20 transition-all duration-300 font-norwester text-sm relative z-10"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {cardCtaLabel}
                <ArrowRight className="ml-2 h-5 w-5" />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Collaboration Timeline */}
      <section ref={ref3} className="py-24 bg-[#012A43] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView3 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-norwester text-white mb-6">
              {collabTitleWhite} <span className="text-[#EB6718]">{collabTitleOrange}</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {collabSubtitle}
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-[28px] sm:left-1/2 top-0 bottom-0 w-px bg-[#EB6718]/20 transform sm:-translate-x-px" />

            {collabSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: step.position === "left" ? -50 : 50 }}
                animate={inView3 ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="flex items-start mb-8"
              >
                <div className="flex items-center mr-4 sm:mr-6">
                  <div className="w-8 h-8 sm:w-12 sm:h-12 bg-[#EB6718] rounded-full flex items-center justify-center text-white font-norwester text-lg sm:text-2xl flex-shrink-0">
                    {step.step}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="bg-[#023654] p-6 sm:p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-[1.02]">
                    <h3 className="text-xl sm:text-2xl font-norwester text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-300">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Detail Modals */}
      {selectedService !== null && (
        <PricingModal
          isOpen={selectedService !== null}
          onClose={() => setSelectedService(null)}
          title={serviceData[selectedService].title}
          price={(serviceData[selectedService] as any).price}
          subtitle={serviceData[selectedService].subtitle}
          features={serviceData[selectedService].features}
        />
      )}
    </div>
  );
};

export default Offers;
