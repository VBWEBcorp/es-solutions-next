'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

type Logo = { src: string; alt: string; extraClass?: string; isCMB?: boolean };

const defaultLogos: Logo[] = [
  { src: 'https://pub-e1e97dba7b2643bc9151a20668a49e5e.r2.dev/images/spsPZsBK-michelin.jpg', alt: 'Michelin' },
  { src: 'https://pub-e1e97dba7b2643bc9151a20668a49e5e.r2.dev/images/8LRw2hMX-suchet-couverture.png', alt: 'Suchet', extraClass: 'bg-white p-2' },
  { src: 'https://pub-e1e97dba7b2643bc9151a20668a49e5e.r2.dev/images/VWDvJMBf-mister-pool.png', alt: 'Mister Pool' },
  { src: 'https://pub-e1e97dba7b2643bc9151a20668a49e5e.r2.dev/images/7Jqxyq6z-montrognon-traiteur-passion.webp', alt: 'Montrognon Traiteur' },
  { src: '/Logo AM_ Fond blanc.png', alt: 'Auvergne Marée' },
  { src: '/JCE-Biotechnology-logo-full-color-rgb-900px (4).png', alt: 'JCE Biotechnology' },
  { src: '/LOGO-CMB-2025 (002).png', alt: 'CMB', isCMB: true },
];

const LogoItem = ({ logo }: { logo: Logo }) => {
  const sizeClass = logo.isCMB ? 'max-h-14 sm:max-h-16 md:max-h-20' : 'max-h-10 sm:max-h-12 md:max-h-14';

  return (
    <div className="flex items-center justify-center min-w-[160px] sm:min-w-[180px] md:min-w-[200px] h-16 sm:h-20 md:h-24 bg-white/[0.06] rounded-xl p-3 sm:p-4">
      <img
        src={logo.src}
        alt={logo.alt}
        className={`${sizeClass} w-auto object-contain rounded-md ${logo.extraClass || ''}`}
      />
    </div>
  );
};

const ReferencesSection = ({ data }: { data?: Record<string, string> }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const badge = data?.reference_badge || 'Références';
  const customTitle = data?.reference_title;

  // Build logos array from data, falling back to defaults per slot
  const logos = defaultLogos.map((def, i) => {
    const n = i + 1;
    return {
      src: data?.[`reference_${n}_image`] || def.src,
      alt: data?.[`reference_${n}_alt`] || def.alt,
      extraClass: def.extraClass,
      isCMB: def.isCMB,
    };
  });

  return (
    <section ref={ref} className="py-10 sm:py-12 md:py-16 bg-[#012A43] overflow-hidden section-divider">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-8 sm:mb-10"
        >
          <div className="flex items-center justify-center mb-3 sm:mb-4">
            <div className="w-8 h-px bg-[#EB6718]/40 mr-3"></div>
            <span className="text-[#EB6718] text-xs sm:text-sm font-medium uppercase tracking-[0.2em]">{badge}</span>
            <div className="w-8 h-px bg-[#EB6718]/40 ml-3"></div>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
            {customTitle ? (
              customTitle
            ) : (
              <>ILS NOUS FONT <span className="text-[#EB6718]">CONFIANCE</span></>
            )}
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-[#012A43] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-[#012A43] to-transparent z-10 pointer-events-none"></div>

          <div className="flex animate-scroll space-x-6 sm:space-x-8 md:space-x-10">
            {logos.map((logo, i) => (
              <LogoItem key={`a-${i}`} logo={logo} />
            ))}
            {logos.map((logo, i) => (
              <LogoItem key={`b-${i}`} logo={logo} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReferencesSection;
