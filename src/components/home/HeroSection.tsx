'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import ContactModal from '../ContactModal';

const HeroSection = ({ data }: { data?: Record<string, string> }) => {
  const [showContactModal, setShowContactModal] = useState(false);

  // Valeurs surchargeables depuis l'admin. Si le champ est vide, on garde la
  // valeur par defaut EXACTE -> le rendu public reste identique tant que rien
  // n'est saisi dans /admin/pages/accueil.
  const heroImage = data?.hero_image || 'https://pub-e1e97dba7b2643bc9151a20668a49e5e.r2.dev/images/Q34j8xCF-logo-officiel-bleu-fonc.png';
  const heroBadge = data?.hero_badge || 'Notre consultant integre';
  const heroTitle = data?.hero_title || 'Votre solution pour vos besoins';
  const heroHighlight = data?.hero_highlight || '';
  const heroSubtitle =
    data?.hero_subtitle ||
    'Directement dans vos locaux pour une communication impactante et des resultats concrets';
  const heroCtaLabel = data?.hero_cta_label || 'Decouvrir notre offre';
  const heroCtaHref = data?.hero_cta_href || '/nos-offres';

  // Domaines affiches sous le titre. Par defaut on conserve le JSX d'origine
  // (avec les separateurs styles). Si l'admin saisit une valeur, on la decoupe
  // sur "·" pour appliquer le meme style a chaque element.
  const highlightItems = heroHighlight
    ? heroHighlight.split('·').map((s) => s.trim()).filter(Boolean)
    : null;

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 sm:pt-40 lg:pt-48 pb-16 sm:pb-20 md:pb-24 lg:pb-28">
        <div className="absolute inset-0 bg-[#012A43]">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2274&q=80')] bg-cover bg-center opacity-[0.03]" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#012A43] via-[#012A43]/95 to-[#012A43]" />
          <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#012A43] to-transparent" />

          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-[#EB6718]/[0.02] blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-[#023654]/30 blur-[100px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="mb-10 sm:mb-14 relative"
          >
            {/* Halo doux derriere le medaillon */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[140%] w-[140%] rounded-full bg-[#EB6718]/[0.06] blur-3xl" />
            <div className="relative mx-auto flex items-center justify-center h-36 w-36 sm:h-44 sm:w-44 md:h-52 md:w-52 lg:h-64 lg:w-64 xl:h-72 xl:w-72 rounded-full overflow-hidden bg-[#023654] ring-1 ring-white/10 shadow-[0_8px_40px_rgba(0,0,0,0.35),0_0_60px_rgba(235,103,24,0.12)]">
              <img
                src={heroImage}
                alt="ES Solutions"
                className="h-full w-full object-contain p-4 sm:p-5"
              />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white font-bold mb-10 sm:mb-14 px-2"
          >
            <div className="mb-4 sm:mb-5 md:mb-6 font-semibold leading-tight tracking-tight">
              {heroTitle}
            </div>
            <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-normal block">
              {highlightItems ? (
                highlightItems.map((item, i) => (
                  <span key={i}>
                    {i > 0 && (
                      <span className="text-[#EB6718]/60 mx-2 sm:mx-3">&middot;</span>
                    )}
                    <span className="text-white/50">{item}</span>
                  </span>
                ))
              ) : (
                <>
                  <span className="text-white/50">Communication</span>
                  <span className="text-[#EB6718]/60 mx-2 sm:mx-3">&middot;</span>
                  <span className="text-white/50">Marketing</span>
                  <span className="text-[#EB6718]/60 mx-2 sm:mx-3">&middot;</span>
                  <span className="text-white/50">Evenementiel</span>
                </>
              )}
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="glass-card p-5 sm:p-7 md:p-9 rounded-2xl sm:rounded-3xl mb-10 sm:mb-14 max-w-xl sm:max-w-2xl mx-auto"
          >
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-[#EB6718] mb-2 sm:mb-3">
              {heroBadge}
            </p>
            <p className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed font-normal px-2">
              {heroSubtitle}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center w-full space-y-4 px-4"
          >
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
              <Link
                href={heroCtaHref}
                className="w-full sm:w-auto inline-flex items-center justify-center px-7 sm:px-9 py-3.5 sm:py-4 bg-[#EB6718] text-white text-base sm:text-lg font-semibold rounded-full hover:bg-[#d45a14] transition-all duration-500 shadow-[0_4px_24px_rgba(235,103,24,0.3)] hover:shadow-[0_8px_32px_rgba(235,103,24,0.4)] hover:-translate-y-0.5"
              >
                {heroCtaLabel}
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center px-7 sm:px-9 py-3.5 sm:py-4 bg-white/[0.06] text-white text-base sm:text-lg font-medium rounded-full hover:bg-white/[0.12] transition-all duration-500 border border-white/10 hover:border-white/20 hover:-translate-y-0.5"
              >
                Nous contacter
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
