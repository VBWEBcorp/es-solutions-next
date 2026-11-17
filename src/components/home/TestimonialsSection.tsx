'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Quote } from 'lucide-react';

const TestimonialsSection = ({ data }: { data?: Record<string, string> }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const badge = data?.testimonial_badge || 'Témoignages';
  const customTitle = data?.testimonial_title;

  const testimonials = [
    {
      name: data?.testimonial_1_name || 'Cécile LATOUR',
      role: data?.testimonial_1_role || 'Directrice IT,\nsolutions ERP et RH,\ngroupe Michelin',
      avatar: data?.testimonial_1_avatar || 'https://pub-1eef308d0a754271b1c96b38618969fe.r2.dev/images/GvsK0sgY-cecile-pro-nov2022.jpg',
      logo: data?.testimonial_1_logo || 'https://pub-1eef308d0a754271b1c96b38618969fe.r2.dev/images/spsPZsBK-michelin.jpg',
      logoAlt: data?.testimonial_1_logo_alt || 'Michelin',
      quote: data?.testimonial_1_quote || 'Une journée mémorable organisée par ES Solutions gravée dans les mémoires de nos équipes',
      context: data?.testimonial_1_context || '(À propos d\'un événement annuel d\'équipe, organisé pour l\'équipe DOT/BS/ES du groupe Michelin)',
      direction: -20,
    },
    {
      name: data?.testimonial_2_name || 'Bruno CHAMPOUX',
      role: data?.testimonial_2_role || 'Dirigeant,\nMontrognon Traiteur',
      avatar: data?.testimonial_2_avatar || 'https://pub-1eef308d0a754271b1c96b38618969fe.r2.dev/images/d0wssQ5j-bruno-champoux.jpg',
      logo: data?.testimonial_2_logo || 'https://pub-1eef308d0a754271b1c96b38618969fe.r2.dev/images/7Jqxyq6z-montrognon-traiteur-passion.webp',
      logoAlt: data?.testimonial_2_logo_alt || 'Montrognon Traiteur',
      quote: data?.testimonial_2_quote || 'Cette collaboration nous enchante [...] Car elle repousse notre horizon, et va nous offrir de nouvelles opportunités de mettre en lumière le talent de nos fidèles collaborateurs, la sincérité de nos engagements RSE, la précision et la performance de nos prestations.',
      context: data?.testimonial_2_context || '(À propos de l\'accompagnement communication de Montrognon Traiteur)',
      direction: 20,
    },
  ];

  return (
    <section ref={ref} className="py-16 sm:py-20 md:py-28 bg-[#012A43] relative overflow-hidden section-divider">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-10 sm:mb-14"
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
              <>Ils nous font <span className="text-[#EB6718]">confiance</span></>
            )}
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, x: t.direction }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15 + index * 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="glass-card rounded-2xl p-5 sm:p-7 relative">
                <Quote className="absolute top-4 right-4 sm:top-5 sm:right-5 w-8 h-8 sm:w-10 sm:h-10 text-[#EB6718]/[0.08]" />

                <div className="flex items-start space-x-4 mb-5">
                  <div className="flex-shrink-0">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="h-14 w-14 sm:h-16 sm:w-16 rounded-full object-cover border-2 border-white/10"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base sm:text-lg font-semibold text-white mb-0.5">{t.name}</h3>
                    <p className="text-gray-400 text-xs sm:text-sm font-light whitespace-pre-line leading-relaxed">
                      {t.role}
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <img
                      src={t.logo}
                      alt={t.logoAlt}
                      className="h-8 sm:h-10 w-auto object-contain rounded-md bg-white/[0.06] p-1.5"
                    />
                  </div>
                </div>

                <p className="text-white/90 italic text-base sm:text-lg leading-[1.8] mb-3 font-light">
                  &laquo;{t.quote}&raquo;
                </p>
                <p className="text-white/30 text-xs sm:text-sm font-light">
                  {t.context}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
