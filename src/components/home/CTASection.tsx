'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight } from 'lucide-react';
import ContactModal from '../ContactModal';

const CTASection = ({ data }: { data?: Record<string, string> }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [showContactModal, setShowContactModal] = useState(false);

  const customTitle = data?.cta_title;
  const ctaSubtitle = data?.cta_subtitle || 'Découvrez pourquoi notre approche unique fonctionne déjà pour nos clients';
  const ctaButtonLabel = data?.cta_button_label || 'Construisons ensemble votre stratégie';

  return (
    <section ref={ref} className="py-16 sm:py-20 md:py-28 bg-[#012A43] relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-[600px] h-[600px] rounded-full bg-[#EB6718]/[0.02] blur-[150px]"></div>
        <div className="absolute bottom-0 right-1/3 w-[400px] h-[400px] rounded-full bg-[#023654]/30 blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="glass-card p-8 sm:p-10 md:p-14 rounded-2xl sm:rounded-3xl text-center max-w-4xl mx-auto relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#EB6718]/30 to-transparent"></div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight mb-4 sm:mb-6 px-2 leading-snug">
            {customTitle ? (
              customTitle
            ) : (
              <>
                Prêts à faire de votre communication un réel levier de{' '}
                <span className="text-[#EB6718]">PERFORMANCE</span> ?
              </>
            )}
          </h2>
          <p className="text-base sm:text-lg text-gray-400 mb-8 sm:mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            {ctaSubtitle}
          </p>
          <button
            onClick={() => setShowContactModal(true)}
            className="inline-flex items-center px-7 sm:px-9 py-3.5 sm:py-4 bg-[#EB6718] text-white text-base sm:text-lg font-semibold rounded-full hover:bg-[#d45a14] transition-all duration-500 shadow-[0_4px_24px_rgba(235,103,24,0.3)] hover:shadow-[0_8px_32px_rgba(235,103,24,0.4)] hover:-translate-y-0.5 cursor-pointer"
          >
            {ctaButtonLabel}
            <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
          </button>
        </motion.div>
      </div>

      <ContactModal
        isOpen={showContactModal}
        onClose={() => setShowContactModal(false)}
      />
    </section>
  );
};

export default CTASection;
