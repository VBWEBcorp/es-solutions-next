'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Target, Heart, Shield } from 'lucide-react';

const MissionSection = ({ data }: { data?: Record<string, string> }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.1 });

  const missionBadge = data?.mission_badge || 'Notre engagement';
  const customMissionTitle = data?.mission_title;
  const missionText = data?.mission_text || 'Penser une communication impactante, en parfaite coherence avec votre strategie commerciale, pour enrichir l\'experience client a chaque interaction. Notre mission : Vous aider a vous demarquer a chaque etape de la relation client.';

  const valuesBadge = data?.mission_values_badge || 'Nos valeurs';
  const customValuesTitle = data?.mission_values_title;
  const valuesSubtitle = data?.mission_values_subtitle || 'Une approche...';

  const values = [
    {
      icon: Target,
      title: data?.mission_value_1_title || 'CONCRETE',
      description: data?.mission_value_1_text || 'Des solutions pratiques et adaptees a vos besoins reels',
    },
    {
      icon: Heart,
      title: data?.mission_value_2_title || 'HUMAINE',
      description: data?.mission_value_2_text || 'Une approche centree sur l\'humain et les relations',
    },
    {
      icon: Shield,
      title: data?.mission_value_3_title || 'SINCERE',
      description: data?.mission_value_3_text || 'Une communication authentique et transparente',
    },
  ];

  return (
    <>
      <section ref={ref} className="py-16 sm:py-20 md:py-24 bg-[#012A43] text-white section-divider">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center mb-3 sm:mb-4">
              <div className="w-8 h-px bg-[#EB6718]/40 mr-3"></div>
              <span className="text-[#EB6718] text-xs sm:text-sm font-medium uppercase tracking-[0.2em]">{missionBadge}</span>
              <div className="w-8 h-px bg-[#EB6718]/40 ml-3"></div>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight mb-6 sm:mb-8">
              {customMissionTitle ? (
                customMissionTitle
              ) : (
                <>Notre <span className="text-[#EB6718]">engagement</span></>
              )}
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 font-light leading-[1.8]">
              {missionText}
            </p>
          </motion.div>
        </div>
      </section>

      <section ref={ref2} className="py-16 sm:py-20 md:py-24 bg-[#012A43] text-white section-divider">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView2 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-10 sm:mb-14"
          >
            <div className="flex items-center justify-center mb-3 sm:mb-4">
              <div className="w-8 h-px bg-[#EB6718]/40 mr-3"></div>
              <span className="text-[#EB6718] text-xs sm:text-sm font-medium uppercase tracking-[0.2em]">{valuesBadge}</span>
              <div className="w-8 h-px bg-[#EB6718]/40 ml-3"></div>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight mb-3">
              {customValuesTitle ? (
                customValuesTitle
              ) : (
                <>Nos <span className="text-[#EB6718]">valeurs</span></>
              )}
            </h2>
            <p className="text-sm sm:text-base text-white/40 font-light">{valuesSubtitle}</p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 24 }}
                  animate={inView2 ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
                  className="glass-card rounded-2xl p-6 sm:p-8 text-center group"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-5 rounded-xl bg-[#EB6718]/10 flex items-center justify-center group-hover:bg-[#EB6718]/20 transition-colors duration-500">
                    <value.icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#EB6718]" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-[#EB6718] mb-3 sm:mb-4 tracking-wide">
                    {value.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed text-sm sm:text-base font-light">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MissionSection;
