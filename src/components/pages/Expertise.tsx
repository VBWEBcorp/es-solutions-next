'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight } from 'lucide-react';
import ContactModal from '@/components/ContactModal';

const Expertise = ({ data }: { data?: Record<string, string> }) => {
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [showContactModal, setShowContactModal] = useState(false);

  const heroTitlePlain     = data?.hero_title_plain     || 'NOTRE';
  const heroTitleHighlight = data?.hero_title_highlight || 'EXPERTISE';
  const heroSubtitle       = data?.hero_subtitle        || 'Une approche globale et intégrée de la communication pour des résultats concrets';

  const expertiseData = [
    {
      title:       data?.card_1_title || 'CRÉATION DE CONTENU',
      description: data?.card_1_text  || 'Création de contenus visuels et rédactionnels adaptés à vos besoins et à votre image de marque.',
    },
    {
      title:       data?.card_2_title || 'RÉSEAUX SOCIAUX',
      description: data?.card_2_text  || 'Gestion et animation de vos réseaux sociaux pour une présence digitale optimale.',
    },
    {
      title:       data?.card_3_title || 'IMAGE DE MARQUE',
      description: data?.card_3_text  || 'Développement et maintien d\'une image de marque cohérente et impactante.',
    },
    {
      title:       data?.card_4_title || 'POLYVALENCE',
      description: data?.card_4_text  || 'Capacité à gérer plusieurs projets simultanément avec efficacité.',
    },
    {
      title:       data?.card_5_title || 'PRESENCE TERRAIN',
      description: data?.card_5_text  || 'Présence sur le terrain pour une compréhension approfondie de vos enjeux.',
    },
    {
      title:       data?.card_6_title || 'GESTION DE PROJET',
      description: data?.card_6_text  || 'Pilotage complet de vos projets de communication de A à Z.',
    },
    {
      title:       data?.card_7_title || 'ÉVÉNEMENTIEL',
      description: data?.card_7_text  || 'Organisation et gestion d\'événements professionnels sur-mesure.',
    },
    {
      title:       data?.card_8_title || 'COMMERCE',
      description: data?.card_8_text  || 'Une approche en lien constant avec votre stratégie commerciale. « La communication au service du commerce ».',
    },
  ];

  // cta_title_suffix default is ' ?' to reproduce the space-then-? from the original markup.
  const ctaTitlePlain     = data?.cta_title_plain     || 'Prêts à faire de votre communication un réel levier de';
  const ctaTitleHighlight = data?.cta_title_highlight || 'performance';
  const ctaTitleSuffix    = data?.cta_title_suffix    || ' ?';
  const ctaSubtitle       = data?.cta_subtitle        || 'Découvrez pourquoi notre approche unique fonctionne déjà pour nos clients';
  const ctaButtonLabel    = data?.cta_button_label    || 'Discutons de votre projet';

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-[#023654] py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80')] bg-cover bg-center opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-norwester mb-8">
              {heroTitlePlain} <span className="text-[#EB6718]">{heroTitleHighlight}</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              {heroSubtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Expertise Details */}
      <section ref={ref1} className="py-24 bg-[#012A43]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {expertiseData.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView1 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-[#023654] rounded-xl p-6 h-full transform transition-all duration-300 hover:scale-[1.02] hover:bg-[#034872] relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-12 h-12 bg-[#EB6718]/10 rounded-br-full transform -translate-x-6 -translate-y-6" />
                  <h3 className="text-xl font-norwester text-white mb-4 relative z-10">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 relative z-10">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ref2} className="py-24 bg-[#023654] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView2 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="bg-[#012A43] rounded-xl p-12 shadow-[0_0_25px_rgba(0,0,0,0.2)] text-center max-w-4xl mx-auto transform transition-all duration-300 hover:scale-[1.02]"
          >
            <h2 className="text-3xl sm:text-4xl font-norwester font-bold text-white mb-6 tracking-wide uppercase">
             {ctaTitlePlain} <span className="text-[#EB6718]">{ctaTitleHighlight} </span>{ctaTitleSuffix}
            </h2>
            <p className="text-lg sm:text-xl text-gray-200 mb-8 sm:mb-12">
              {ctaSubtitle}
            </p>
            <motion.a
              onClick={() => setShowContactModal(true)}
              className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-[#EB6718] text-white text-base sm:text-lg font-norwester rounded-full hover:bg-[#023654] transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {ctaButtonLabel}
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </motion.a>
          </motion.div>
        </div>
      </section>
      <ContactModal
        isOpen={showContactModal}
        onClose={() => setShowContactModal(false)}
      />
    </div>
  );
};

export default Expertise;
