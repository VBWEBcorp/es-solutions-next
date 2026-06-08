'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight } from 'lucide-react';
import PricingModal from '../PricingModal';

const ServicesSection = ({ data }: { data?: Record<string, string> }) => {
  const [refConsulting, inViewConsulting] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [refStrategy, inViewStrategy] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const [selectedStrategyService, setSelectedStrategyService] = useState<number | null>(null);

  // Section labels
  const consultingBadge = data?.services_consulting_badge || 'Consulting';
  const customConsultingTitle = data?.services_consulting_title;
  const strategyBadge = data?.services_strategy_badge || 'Strategie';
  const customStrategyTitle = data?.services_strategy_title;

  const consultingData = [
    {
      title: data?.services_1_title || 'STARTER PACK ES',
      subtitle: 'Niveau de responsabilite +',
      badge: data?.services_1_badge || 'START',
      items: [
        data?.services_1_item_1 || 'STRATEGIE MARKETING',
        data?.services_1_item_2 || 'COMMUNICATION EXTERNE',
      ],
      features: [
        'Strategie Marketing :',
        'Elaboration de la strategie marketing globale (positionnement, veille concurrentielle, definition des cibles et des canaux de communication)',
        '',
        'Communication externe:',
        'Gestion de l\'image de l\'entreprise :',
        'Creation d\'une identite graphique',
        'Creation de supports de communication',
        'Deploiement de campagnes multi-canal (emailing, SEA, reseaux)',
        'Elaboration et mise en place du plan de communication global',
        'Gestion des reseaux sociaux:',
        'Creation de contenus',
        'Community Management',
        'Optimisation du parcours client, valorisation de l\'offre a chaque etape du processus commercial',
        'Suivi et analyse des KPIs',
      ],
    },
    {
      title: data?.services_2_title || 'PACK BOOST ES',
      subtitle: 'Niveau de responsabilite ++',
      badge: data?.services_2_badge || 'BOOST',
      items: [
        data?.services_2_item_1 || 'STRATEGIE MARKETING',
        data?.services_2_item_2 || 'COMMUNICATION EXTERNE',
        data?.services_2_item_3 || 'EVENEMENTIEL',
      ],
      features: [
        'Strategie Marketing :',
        'Elaboration de la strategie marketing globale (positionnement, veille concurrentielle, definition des cibles et des canaux de communication)',
        'Pilotage de campagnes Ads',
        '',
        'Communication Externe :',
        'Gestion de l\'image de l\'entreprise :',
        'Creation d\'une identite graphique',
        'Creation de supports de communication',
        'Deploiement de campagnes multi-canal (emailing, SEA, reseaux)',
        'Elaboration et mise en place du plan de communication global',
        'Gestion des reseaux sociaux:',
        'Supervisation de la production de contenus',
        'Community Management',
        'Optimisation du parcours client, valorisation de l\'offre a chaque etape du processus commercial',
        'Suivi et analyse des KPIs',
        '',
        'Evenementiel :',
        'Organisation complete d\'evenements (strategie, logistique, animation)',
        'Gestion du budget, des prestataires et du planning',
        'Animation des reunions de preparation et bilans post-evenement',
      ],
    },
    {
      title: data?.services_3_title || 'PACK ES 360°',
      subtitle: 'Niveau de responsabilite +++',
      badge: data?.services_3_badge || '360°',
      items: [
        data?.services_3_item_1 || 'STRATEGIE MARKETING',
        data?.services_3_item_2 || 'COMMUNICATION INTERNE',
        data?.services_3_item_3 || 'COMMUNICATION EXTERNE',
        data?.services_3_item_4 || 'EVENEMENTIEL',
      ],
      features: [
        'Strategie Marketing :',
        'Elaboration de la strategie marketing globale (positionnement, acquisition, fidelisation)',
        'Pilotage de campagnes Ads',
        'Supervision des equipes marketing ou des agences',
        '',
        'Communication Interne :',
        'Organisation et supervision du partage d\'informations',
        'Creation de supports de communication internes',
        'Accompagnement a la mise en place de la strategie de communication interne',
        '',
        'Communication Externe :',
        'GESTION DE L\'IMAGE DE L\'ENTREPRISE :',
        'Creation d\'une identite graphique',
        'Creation de supports de communication',
        'Deploiement de campagnes multi-canal (emailing, SEA, reseaux)',
        'Elaboration et mise en place du plan de communication global',
        'GESTION DES RESEAUX SOCIAUX :',
        'Supervisation de la production de contenus',
        'Community Management',
        'Optimisation du parcours client, valorisation de l\'offre a chaque etape du processus commercial',
        'Suivi et analyse des KPIs',
        'Conseil et accompagnement de l\'equipe de direction',
        'Gestion de la communication de crise, communication sensible',
        '',
        'Evenementiel :',
        'Organisation complete d\'evenements (strategie, logistique, animation)',
        'Gestion du budget, des prestataires et du planning',
        'Encadrement des equipes',
        'Animation des reunions de preparation et bilans post-evenement',
      ],
    },
  ];

  const aspTitle = data?.services_asp_title || 'ASP';
  const strategyData = [
    {
      title: aspTitle,
      subtitle: 'Audit - Strategie - Pilotage',
      summaryItems: [
        data?.services_asp_item_1 || 'AUDIT',
        data?.services_asp_item_2 || 'STRATEGIE',
        data?.services_asp_item_3 || 'PILOTAGE',
      ],
      features: [
        'AUDIT',
        'Analyse complete de vos actions et de vos supports existants pour identifier vos forces, vos axes d\'amelioration et les opportunites de developpement.',
        '',
        'STRATEGIE',
        'Definition des axes et actions strategiques & tactiques qui guideront vos actions futures pour renforcer / atteindre vos objectifs.',
        '',
        'PILOTAGE',
        'Assurer la mise en oeuvre, le suivi et l\'ajustement de votre strategie de communication. Elle garantit la coherence des actions, le respect des objectifs et l\'optimisation continue des resultats tout au long du projet.',
      ],
    },
  ];

  const renderTitle = (title: string) => {
    if (title === 'STARTER PACK ES') {
      return <><span className="text-[#EB6718]">STARTER</span><span className="text-white"> PACK ES</span></>;
    }
    if (title === 'PACK BOOST ES') {
      return <><span className="text-white">PACK </span><span className="text-[#EB6718]">BOOST</span><span className="text-white"> ES</span></>;
    }
    if (title === 'PACK ES 360°') {
      return <><span className="text-white">PACK ES </span><span className="text-[#EB6718]">360&deg;</span></>;
    }
    // Custom title from admin: render plain
    return <span className="text-white">{title}</span>;
  };

  return (
    <>
      <section ref={refConsulting} className="py-16 sm:py-20 md:py-28 bg-[#012A43] text-white section-divider">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inViewConsulting ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-10 sm:mb-14 max-w-5xl mx-auto"
          >
            <div className="flex items-center justify-center mb-3 sm:mb-4">
              <div className="w-8 h-px bg-[#EB6718]/40 mr-3"></div>
              <span className="text-[#EB6718] text-xs sm:text-sm font-medium uppercase tracking-[0.2em]">{consultingBadge}</span>
              <div className="w-8 h-px bg-[#EB6718]/40 ml-3"></div>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
              {customConsultingTitle ? (
                customConsultingTitle
              ) : (
                <>NOTRE OFFRE <span className="text-[#EB6718]">CONSULTING</span></>
              )}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
            {consultingData.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                animate={inViewConsulting ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="glass-card p-5 sm:p-6 md:p-7 rounded-2xl flex flex-col h-full min-h-[280px] sm:min-h-[320px] relative overflow-hidden group"
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#EB6718]/20 to-transparent"></div>

                <div className="absolute top-3 right-3 pointer-events-none">
                  <span className="text-white/[0.04] font-bold text-3xl sm:text-4xl select-none">
                    {service.badge}
                  </span>
                </div>

                <div className="text-left mb-5 sm:mb-6 relative z-10">
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2">
                    {renderTitle(service.title)}
                  </h3>
                </div>

                <div className="space-y-2.5 relative z-10 flex-grow">
                  {service.items.filter(Boolean).map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-2.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#EB6718]/40 flex-shrink-0"></div>
                      <span className="text-white/70 font-normal text-xs sm:text-sm tracking-wide">{item}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => setSelectedService(index)}
                  className="inline-flex items-center justify-center w-full py-2.5 sm:py-3 mt-auto pt-5 sm:pt-6 text-white/60 hover:text-[#EB6718] transition-colors duration-500 font-medium text-sm sm:text-base relative z-10"
                >
                  En savoir plus
                  <ArrowRight className="ml-2 h-3.5 w-3.5 sm:h-4 sm:w-4 group-hover:translate-x-1 transition-transform duration-500" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section ref={refStrategy} className="py-16 sm:py-20 md:py-28 bg-[#012A43] text-white section-divider">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inViewStrategy ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-10 sm:mb-14 max-w-5xl mx-auto"
          >
            <div className="flex items-center justify-center mb-3 sm:mb-4">
              <div className="w-8 h-px bg-[#EB6718]/40 mr-3"></div>
              <span className="text-[#EB6718] text-xs sm:text-sm font-medium uppercase tracking-[0.2em]">{strategyBadge}</span>
              <div className="w-8 h-px bg-[#EB6718]/40 ml-3"></div>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
              {customStrategyTitle ? (
                customStrategyTitle
              ) : (
                <>NOTRE OFFRE <span className="text-[#EB6718]">STRATEGIE</span></>
              )}
            </h2>
          </motion.div>

          <div className="flex justify-center">
            {strategyData.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                animate={inViewStrategy ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="glass-card p-5 sm:p-6 md:p-7 rounded-2xl flex flex-col w-full max-w-md min-h-[280px] sm:min-h-[320px] relative overflow-hidden group"
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#EB6718]/20 to-transparent"></div>

                <div className="absolute top-3 right-3 pointer-events-none">
                  <span className="text-white/[0.04] font-bold text-3xl sm:text-4xl select-none">{service.title}</span>
                </div>

                <div className="text-left mb-5 sm:mb-6 relative z-10">
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2">
                    <span className="text-[#EB6718]">A</span>
                    <span className="text-white">UDIT </span>
                    <span className="text-[#EB6718]">S</span>
                    <span className="text-white">TRATEGIE </span>
                    <span className="text-[#EB6718]">P</span>
                    <span className="text-white">ILOTAGE</span>
                  </h3>
                </div>

                <div className="space-y-2.5 relative z-10 flex-grow">
                  {service.summaryItems.map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-2.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#EB6718]/40 flex-shrink-0"></div>
                      <span className="text-white/70 font-normal text-xs sm:text-sm tracking-wide">{item}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => setSelectedStrategyService(index)}
                  className="inline-flex items-center justify-center w-full py-2.5 sm:py-3 mt-auto pt-5 sm:pt-6 text-white/60 hover:text-[#EB6718] transition-colors duration-500 font-medium text-sm sm:text-base relative z-10"
                >
                  En savoir plus
                  <ArrowRight className="ml-2 h-3.5 w-3.5 sm:h-4 sm:w-4 group-hover:translate-x-1 transition-transform duration-500" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {selectedService !== null && (
        <PricingModal
          isOpen={selectedService !== null}
          onClose={() => setSelectedService(null)}
          title={consultingData[selectedService].title}
          subtitle={consultingData[selectedService].subtitle}
          features={consultingData[selectedService].features}
        />
      )}

      {selectedStrategyService !== null && (
        <PricingModal
          isOpen={selectedStrategyService !== null}
          onClose={() => setSelectedStrategyService(null)}
          title={strategyData[selectedStrategyService].title}
          subtitle={strategyData[selectedStrategyService].subtitle}
          features={strategyData[selectedStrategyService].features}
        />
      )}
    </>
  );
};

export default ServicesSection;
