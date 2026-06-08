'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import ContactModal from './ContactModal';

interface PricingModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  price?: string;
  subtitle?: string;
  features: string[];
}

const strategieContent = {
  sections: [
    {
      title: "AUDIT",
      description: "Analyse complète de vos actions et de vos supports existants pour identifier vos forces, vos axes d'amélioration et les opportunités de développement."
    },
    {
      title: "STRATEGIE",
      description: "Définition des axes et actions stratégiques & tactiques qui guideront vos actions futures pour renforcer / atteindre vos objectifs."
    },
    {
      title: "PILOTAGE",
      description: "Assurer la mise en œuvre, le suivi et l'ajustement de votre stratégie de communication. Elle garantit la cohérence des actions, le respect des objectifs et l'optimisation continue des résultats tout au long du projet."
    }
  ]
};

const PricingModal = ({ isOpen, onClose, title, subtitle, features }: PricingModalProps) => {
  const [showContactModal, setShowContactModal] = useState(false);

  const isStrategieOffer = title.includes('STRATEGIE') || title === 'ASP';

  const organizeFeatures = () => {
    const sections: { [key: string]: string[] } = {};
    let currentSection = '';

    features.forEach(feature => {
      if (feature.trim() === '') return;

      if (feature.endsWith(':')) {
        currentSection = feature.replace(':', '');
        sections[currentSection] = [];
      } else if (currentSection) {
        sections[currentSection].push(feature);
      }
    });

    return sections;
  };

  const sections = organizeFeatures();

  const renderTitle = () => {
    if (title === 'ASP') {
      return (
        <>
          <span className="text-[#EB6718]">A</span>
          <span className="text-white">UDIT </span>
          <span className="text-[#EB6718]">S</span>
          <span className="text-white">TRATÉGIE </span>
          <span className="text-[#EB6718]">P</span>
          <span className="text-white">ILOTAGE</span>
        </>
      );
    }
    if (title.includes('STRATEGIE')) {
      return (
        <>
          <span className="text-white">NOTRE OFFRE </span>
          <span className="text-[#EB6718]">STRATEGIE</span>
        </>
      );
    }
    if (title.includes('STARTER')) {
      return (
        <>
          <span className="text-[#EB6718]">STARTER</span>
          <span className="text-white"> PACK ES</span>
        </>
      );
    }
    if (title.includes('BOOST')) {
      return (
        <>
          <span className="text-white">PACK </span>
          <span className="text-[#EB6718]">BOOST</span>
          <span className="text-white"> ES</span>
        </>
      );
    }
    if (title.includes('360')) {
      return (
        <>
          <span className="text-white">PACK ES </span>
          <span className="text-[#EB6718]">360°</span>
        </>
      );
    }
    return <span className="text-white">{title}</span>;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="relative w-[95%] max-w-4xl max-h-[90vh] overflow-y-auto bg-[#012A43] rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors z-10 p-2"
            >
              <X className="h-6 w-6" />
            </button>

            <div className="p-8 pb-4 pr-16">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
                <h2 className="text-3xl font-norwester text-white mb-4 sm:mb-0">
                  {renderTitle()}
                </h2>
                {subtitle && (
                  <div className="text-right">
                    <div className="text-white/60 text-sm mt-1">{subtitle}</div>
                  </div>
                )}
              </div>
            </div>

            <div className="px-8 pb-8">
              <div className="bg-[#023654]/50 backdrop-blur-sm rounded-xl p-6 space-y-8">
                {isStrategieOffer ? (
                  strategieContent.sections.map((section, index) => (
                    <div key={index} className="border-l-4 border-[#EB6718] pl-6 py-4">
                      <h3 className="text-[#EB6718] font-norwester text-lg mb-3 uppercase tracking-wide">
                        {section.title}
                      </h3>
                      <p className="text-white leading-relaxed text-base">
                        {section.description}
                      </p>
                    </div>
                  ))
                ) : (
                  Object.entries(sections).map(([sectionTitle, sectionFeatures], sectionIndex) => (
                    <div key={sectionIndex}>
                      <h3 className="text-[#EB6718] font-norwester text-xl mb-4 uppercase tracking-wide">
                        {sectionTitle}
                      </h3>
                      <div className="space-y-3">
                        {sectionFeatures.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start">
                            <span className="text-[#EB6718] mr-3 mt-1 text-lg">•</span>
                            <span className="text-white leading-relaxed">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>

            <div className="px-8 pb-8">
              <motion.button
                onClick={() => setShowContactModal(true)}
                className="w-full inline-flex items-center justify-center px-8 py-4 bg-[#EB6718] text-white text-lg font-norwester rounded-full hover:bg-[#EB6718]/80 transition-colors duration-300"
                whileHover={{ scale: 1.02 }}
              >
                Démarrer avec ce profil
                <ArrowRight className="ml-2 h-5 w-5" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      )}
      <ContactModal
        isOpen={showContactModal}
        onClose={() => setShowContactModal(false)}
        defaultOffer={[title.toLowerCase().includes('strategie') ? 'strategie' : title.toLowerCase().includes('starter') ? 'externe' : title.toLowerCase().includes('boost') ? 'externe' : 'interne']}
      />
    </AnimatePresence>
  );
};

export default PricingModal;
