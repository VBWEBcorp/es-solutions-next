'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, BarChart3, Target, Users, Search } from 'lucide-react';
import ContactModal from '@/components/ContactModal';

const Marketing = ({ data }: { data?: Record<string, string> }) => {
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [showContactModal, setShowContactModal] = useState(false);

  const heroImage          = data?.hero_image          || 'https://pub-1eef308d0a754271b1c96b38618969fe.r2.dev/images/1Y3wCStk-com-externe.png';
  const heroTitlePlain     = data?.hero_title_plain     || 'EXPERTISE';
  const heroTitleHighlight = data?.hero_title_highlight || 'MARKETING';
  const heroSubtitle       = data?.hero_subtitle        || 'Développez votre stratégie marketing et maximisez vos performances commerciales';

  const services = [
    {
      icon: Target,
      title:       data?.service_1_title       || 'Stratégie Marketing Globale',
      description: data?.service_1_description || "Élaboration d'une stratégie marketing complète adaptée à vos objectifs",
      features: [
        data?.service_1_feature_1 || 'Positionnement de marque',
        data?.service_1_feature_2 || "Stratégie d'acquisition",
        data?.service_1_feature_3 || 'Stratégie de fidélisation',
        data?.service_1_feature_4 || 'Définition des cibles',
      ],
    },
    {
      icon: BarChart3,
      title:       data?.service_2_title       || 'Pilotage de Campagnes',
      description: data?.service_2_description || 'Gestion et optimisation de vos campagnes publicitaires digitales',
      features: [
        data?.service_2_feature_1 || 'Pilotage de campagnes Ads',
        data?.service_2_feature_2 || 'Suivi des performances',
        data?.service_2_feature_3 || 'Optimisation ROI',
        data?.service_2_feature_4 || 'Analyse des résultats',
      ],
    },
    {
      icon: Users,
      title:       data?.service_3_title       || "Supervision d'Équipes",
      description: data?.service_3_description || 'Accompagnement et supervision de vos équipes marketing',
      features: [
        data?.service_3_feature_1 || 'Supervision des équipes marketing',
        data?.service_3_feature_2 || 'Coordination avec les agences',
        data?.service_3_feature_3 || 'Formation et accompagnement',
        data?.service_3_feature_4 || 'Pilotage de projets',
      ],
    },
    {
      icon: Search,
      title:       data?.service_4_title       || 'Veille Concurrentielle',
      description: data?.service_4_description || 'Analyse continue du marché et de la concurrence',
      features: [
        data?.service_4_feature_1 || 'Analyse de la concurrence',
        data?.service_4_feature_2 || 'Veille marché',
        data?.service_4_feature_3 || 'Benchmarking',
        data?.service_4_feature_4 || "Identification d'opportunités",
      ],
    },
  ];

  const approachTitlePlain     = data?.approach_title_plain     || 'NOTRE';
  const approachTitleHighlight = data?.approach_title_highlight || 'APPROCHE';
  const approachSubtitle       = data?.approach_subtitle        || 'Une méthodologie structurée pour une stratégie marketing efficace';
  const approachImage          = data?.approach_image           || 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80';

  const steps = [
    {
      title:       data?.step_1_title       || 'Analyse & Audit',
      description: data?.step_1_description || 'Analyse de votre situation actuelle et de votre marché',
    },
    {
      title:       data?.step_2_title       || 'Stratégie',
      description: data?.step_2_description || "Élaboration d'une stratégie marketing sur-mesure",
    },
    {
      title:       data?.step_3_title       || 'Mise en œuvre',
      description: data?.step_3_description || 'Déploiement et pilotage des actions marketing',
    },
    {
      title:       data?.step_4_title       || 'Suivi & Optimisation',
      description: data?.step_4_description || 'Mesure des performances et amélioration continue',
    },
  ];

  const ctaTitlePlain     = data?.cta_title_plain     || 'BOOSTEZ VOTRE';
  const ctaTitleHighlight = data?.cta_title_highlight || 'PERFORMANCE MARKETING';
  const ctaSubtitle       = data?.cta_subtitle        || 'Découvrez comment notre expertise marketing peut transformer votre approche commerciale';
  const ctaButtonLabel    = data?.cta_button_label    || 'Discutons de votre projet';

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-[#023654] py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80')] bg-cover bg-center opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex justify-center mb-8">
            <img
              src={heroImage}
              alt="Marketing"
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
              {heroTitlePlain} <span className="text-[#EB6718]">{heroTitleHighlight}</span>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
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
                        src="https://pub-1eef308d0a754271b1c96b38618969fe.r2.dev/images/YB3Fypbs-coche-1.png"
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
              {approachTitlePlain} <span className="text-[#EB6718]">{approachTitleHighlight}</span>
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
                  alt="Notre approche marketing"
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
                      <h3 className="text-xl font-norwester text-white hover:text-[#EB6718] transition-colors duration-300 mb-2">{step.title}</h3>
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
              {ctaTitlePlain} <span className="text-[#EB6718]">{ctaTitleHighlight}</span>
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
        defaultOffer={['externe']}
      />
    </div>
  );
};

export default Marketing;
