'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const VisionSection = ({ data }: { data?: Record<string, string> }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const badge = data?.vision_badge || 'Notre vision';
  const customQuote = data?.vision_quote;

  return (
    <section ref={ref} className="py-16 sm:py-20 md:py-28 bg-[#012A43] text-white section-divider">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <div className="flex items-center justify-center mb-3 sm:mb-4">
            <div className="w-8 h-px bg-[#EB6718]/40 mr-3"></div>
            <span className="text-[#EB6718] text-xs sm:text-sm font-medium uppercase tracking-[0.2em]">{badge}</span>
            <div className="w-8 h-px bg-[#EB6718]/40 ml-3"></div>
          </div>

          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="glass-card rounded-2xl sm:rounded-3xl p-8 sm:p-12 md:p-16 lg:p-20 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#EB6718]/30 to-transparent"></div>

                <div className="absolute top-4 left-6 sm:top-6 sm:left-8 md:top-8 md:left-10 text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#EB6718]/10 font-serif leading-none select-none">
                  &laquo;
                </div>
                <div className="absolute bottom-4 right-6 sm:bottom-6 sm:right-8 md:bottom-8 md:right-10 text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#EB6718]/10 font-serif leading-none select-none">
                  &raquo;
                </div>

                <div className="relative z-10">
                  <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white leading-snug mb-6">
                    {customQuote ? (
                      customQuote
                    ) : (
                      <>
                        La communication au service du{' '}
                        <span className="text-[#EB6718]">commerce</span>
                      </>
                    )}
                  </p>
                  <div className="w-12 sm:w-16 h-0.5 bg-gradient-to-r from-[#EB6718] to-[#EB6718]/20 mx-auto"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VisionSection;
