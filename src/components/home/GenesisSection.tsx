'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const GenesisSection = ({ data }: { data?: Record<string, string> }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const badge = data?.genesis_badge || 'A propos';
  const customTitle = data?.genesis_title;
  const founderName = data?.genesis_founder_name || 'Edouard Suchet';
  const founderRole = data?.genesis_founder_role || 'Fondateur et dirigeant';
  const founderBio = data?.genesis_founder_bio || 'Fort de plus de 10 annees d\'experience en communication, Edouard Suchet a exerce au sein de structures variees -- multinationales, PME, start-up et associations -- developpant ainsi une vision globale, strategique et operationnelle du metier. Il a notamment occupe le poste de Responsable Communication & Evenementiel au sein du Groupe Michelin.';
  const quote1 = data?.genesis_quote_1 || '"Trop souvent reservee aux grandes structures, la communication est pourtant un levier de performance puissant pour toutes les PME."';
  const quote2 = data?.genesis_quote_2 || '"L\'importance reside dans le sens a donner a cette communication pour qu\'elle soit au service du developpement."';
  const statLabel = data?.genesis_stat_label || '10+ annees';
  const statText = data?.genesis_stat_text || 'd\'expertise en communication';
  const image = data?.genesis_image || '/©denisgrudet0025_alb09195--.jpg';
  const imageAlt = data?.genesis_image_alt || 'Edouard Suchet - Fondateur';

  return (
    <section ref={ref} className="py-16 sm:py-20 md:py-28 bg-[#012A43] text-white section-divider">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="grid md:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center"
        >
          <div className="md:col-span-7 relative order-2 md:order-1">
            <div className="flex items-center mb-3 sm:mb-4 justify-center md:justify-start">
              <div className="w-8 h-px bg-[#EB6718]/40 mr-3"></div>
              <span className="text-[#EB6718] text-xs sm:text-sm font-medium uppercase tracking-[0.2em]">{badge}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight mb-8 sm:mb-10 text-center md:text-left">
              {customTitle ? (
                customTitle
              ) : (
                <>
                  La genese de{' '}
                  <span className="text-[#EB6718]">l&apos;entreprise</span>
                </>
              )}
            </h2>

            <div className="glass-card p-5 sm:p-7 md:p-8 rounded-2xl mb-6 sm:mb-8">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#EB6718] mb-1.5">{founderName}</h3>
              <p className="text-sm sm:text-base font-medium mb-4 sm:mb-5 text-white/50">{founderRole}</p>
              <p className="text-gray-300 leading-[1.8] text-sm sm:text-base font-normal">
                {founderBio}
              </p>
            </div>

            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="relative pl-5 border-l-2 border-[#EB6718]/20 py-3"
              >
                <p className="text-white/80 leading-relaxed text-sm sm:text-base md:text-lg italic font-light">
                  {quote1}
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="relative pl-5 border-l-2 border-[#EB6718]/20 py-3"
              >
                <p className="text-white/80 leading-relaxed text-sm sm:text-base md:text-lg italic font-light">
                  {quote2}
                </p>
              </motion.div>
            </div>
          </div>

          <motion.div
            className="md:col-span-5 relative order-1 md:order-2"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="aspect-[3/4] rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_24px_64px_rgba(0,0,0,0.3)] max-w-sm mx-auto md:max-w-none relative group">
              <img
                src={image}
                alt={imageAlt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#012A43]/70 via-transparent to-transparent" />

              <div className="absolute bottom-5 sm:bottom-7 left-5 sm:left-7 right-5 sm:right-7">
                <div className="glass-card p-4 sm:p-5 rounded-xl">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-2 h-2 bg-[#EB6718] rounded-full"></div>
                    <div className="h-px bg-gradient-to-r from-[#EB6718]/40 to-transparent flex-1"></div>
                  </div>
                  <p className="text-white font-medium text-sm sm:text-base leading-tight">
                    <span className="text-[#EB6718] font-semibold">{statLabel}</span><br />
                    {statText}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default GenesisSection;
