'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Calendar, Users, Target, Briefcase } from 'lucide-react';
import ContactModal from '@/components/ContactModal';

const CommunicationEvenementielle = ({ data }: { data?: Record<string, string> }) => {
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [showContactModal, setShowContactModal] = useState(false);

  const heroImage = data?.hero_image || 'https://pub-e1e97dba7b2643bc9151a20668a49e5e.r2.dev/images/Y4hFfPTG-evenementiel.png';
  const heroTitlePart1 = data?.hero_title_part1 || 'COMMUNICATION';
  const heroTitlePart2 = data?.hero_title_part2 || 'ÉVÉNEMENTIELLE';
  const heroSubtitle = data?.hero_subtitle || 'Créez des moments mémorables et impactants pour votre entreprise';

  const service1Title = data?.service_1_title || 'Conception Stratégique';
  const service1Description = data?.service_1_description || "Création d'événements alignés sur vos objectifs";
  const service1Feature1 = data?.service_1_feature_1 || 'Définition des objectifs';
  const service1Feature2 = data?.service_1_feature_2 || 'Concept créatif';
  const service1Feature3 = data?.service_1_feature_3 || 'Planning détaillé';
  const service1Feature4 = data?.service_1_feature_4 || 'Budget prévisionnel';

  const service2Title = data?.service_2_title || 'Gestion Logistique';
  const service2Description = data?.service_2_description || 'Organisation complète de vos événements';
  const service2Feature1 = data?.service_2_feature_1 || 'Recherche de lieu';
  const service2Feature2 = data?.service_2_feature_2 || 'Coordination prestataires';
  const service2Feature3 = data?.service_2_feature_3 || 'Gestion technique';
  const service2Feature4 = data?.service_2_feature_4 || "Planning d'exécution";

  const service3Title = data?.service_3_title || 'Animation & Coordination';
  const service3Description = data?.service_3_description || 'Gestion professionnelle le jour J';
  const service3Feature1 = data?.service_3_feature_1 || 'Accueil participants';
  const service3Feature2 = data?.service_3_feature_2 || 'Coordination équipes';
  const service3Feature3 = data?.service_3_feature_3 || 'Gestion imprévus';
  const service3Feature4 = data?.service_3_feature_4 || 'Suivi timing';

  const approachTitle = data?.approach_title || 'NOTRE APPROCHE';
  const approachSubtitle = data?.approach_subtitle || 'Une méthodologie éprouvée pour des événements réussis';
  const approachImage = data?.approach_image || 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80';

  const step1Title = data?.step_1_title || 'Briefing & Conception';
  const step1Description = data?.step_1_description || "Compréhension de vos besoins et création d'un concept unique";
  const step2Title = data?.step_2_title || 'Planification';
  const step2Description = data?.step_2_description || 'Organisation détaillée et coordination des prestataires';
  const step3Title = data?.step_3_title || 'Réalisation';
  const step3Description = data?.step_3_description || 'Gestion professionnelle le jour J pour un événement réussi';
  const step4Title = data?.step_4_title || 'Bilan & Analyse';
  const step4Description = data?.step_4_description || 'Évaluation des résultats et recommandations futures';

  const ctaTitlePart1 = data?.cta_title_part1 || 'CRÉEZ DES ÉVÉNEMENTS';
  const ctaTitlePart2 = data?.cta_title_part2 || 'MÉMORABLES';
  const ctaSubtitle = data?.cta_subtitle || 'Découvrez comment nous pouvons transformer vos événements en expériences uniques';
  const ctaButtonLabel = data?.cta_button_label || 'Discutons de votre projet';

  const services = [
    {
      icon: Target,
      title: service1Title,
      description: service1Description,
      features: [service1Feature1, service1Feature2, service1Feature3, service1Feature4],
    },
    {
      icon: Calendar,
      title: service2Title,
      description: service2Description,
      features: [service2Feature1, service2Feature2, service2Feature3, service2Feature4],
    },
    {
      icon: Users,
      title: service3Title,
      description: service3Description,
      features: [service3Feature1, service3Feature2, service3Feature3, service3Feature4],
    },
  ];

  const steps = [
    { title: step1Title, description: step1Description },
    { title: step2Title, description: step2Description },
    { title: step3Title, description: step3Description },
    { title: step4Title, description: step4Description },
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-[#023654] py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80')] bg-cover bg-center opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex justify-center mb-8">
            <img
              src={heroImage}
              alt="Communication Événementielle"
              className="h-24 w-24 object-contain"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-norwester mb-8">
              {heroTitlePart1} <span className="text-[#EB6718]">{heroTitlePart2}</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {heroSubtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section ref={ref1} className="py-24 bg-[#012A43]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView1 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-[#023654] rounded-xl p-8 shadow-[0_0_25px_rgba(0,0,0,0.2)] transform transition-all duration-300 hover:scale-[1.02] group"
              >
                <service.icon className="h-12 w-12 text-[#EB6718] mb-6" />
                <h3 className="text-2xl font-norwester text-white group-hover:text-[#EB6718] transition-colors duration-300 mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-300">
                      <img
                        src="https://pub-e1e97dba7b2643bc9151a20668a49e5e.r2.dev/images/YB3Fypbs-coche-1.png"
                        alt="Checkmark"
                        className="h-5 w-5 mr-3 flex-shrink-0"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section ref={ref2} className="py-24 bg-[#023654]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView2 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-norwester text-white mb-6">
              {approachTitle.includes('APPROCHE') ? (
                <>
                  NOTRE <span className="text-[#EB6718]">APPROCHE</span>
                </>
              ) : (
                approachTitle
              )}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {approachSubtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView2 ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img
                  src={approachImage}
                  alt="Notre approche"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView2 ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {steps.map((step, index) => (
                <div key={step.title} className="bg-[#012A43] rounded-xl p-6">
                  <div className="flex items-start">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#EB6718] text-white font-norwester text-lg mr-4">
                      {index + 1}
                    </span>
                    <div>
                      <h3 className="text-xl font-norwester text-white mb-2">{step.title}</h3>
                      <p className="text-gray-300">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#012A43]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-[#023654] rounded-xl p-12 shadow-[0_0_25px_rgba(0,0,0,0.2)] text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-norwester text-white mb-6">
              {ctaTitlePart1} <span className="text-[#EB6718]">{ctaTitlePart2}</span>
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              {ctaSubtitle}
            </p>
            <motion.button
              onClick={() => setShowContactModal(true)}
              className="inline-flex items-center px-8 py-4 bg-[#EB6718] text-white text-lg font-norwester rounded-full hover:bg-white hover:text-[#023654] transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
            >
              {ctaButtonLabel}
              <ArrowRight className="ml-2 h-5 w-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      <ContactModal
        isOpen={showContactModal}
        onClose={() => setShowContactModal(false)}
        defaultOffer={['evenementiel']}
      />
    </div>
  );
};

export default CommunicationEvenementielle;
