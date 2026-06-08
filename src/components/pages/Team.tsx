'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Target, Heart, MessageCircle } from 'lucide-react';

const Team = ({ data }: { data?: Record<string, string> }) => {
  const heroTitlePlain = data?.hero_title_plain || 'Notre ';
  const heroTitleHighlight = data?.hero_title_highlight || 'Equipe';
  const heroSubtitle =
    data?.hero_subtitle ||
    "Notre equipe de consultants est experte dans les domaines du marketing, de la communication, et de l'evenementiel.";

  const teamIntro =
    data?.team_intro ||
    "ES Solutions vous propose une approche novatrice du consulting (conseil ou sous-traitance), specifiquement adaptee aux enjeux de la communication.";

  const teamMembers = [
    {
      name: data?.member_1_name || 'Edouard Suchet',
      role: data?.member_1_role || 'Fondateur et dirigeant',
      subtitle: data?.member_1_subtitle || 'Responsable Communication',
      image: data?.member_1_photo || '/©denisgrudet0024_alb09193-- copy copy.jpg',
    },
    {
      name: data?.member_2_name || 'Maelane Chabert',
      role: data?.member_2_role || 'Consultante en Communication',
      subtitle: data?.member_2_subtitle || 'Chargee de developpement',
      image: data?.member_2_photo || '/©denisgrudet_alb09234-_1.jpg',
    },
    {
      name: data?.member_3_name || 'Marie-Leone Mazuel',
      role: data?.member_3_role || 'Consultante en Communication',
      subtitle: data?.member_3_subtitle || 'Chargee de developpement',
      image: data?.member_3_photo || '/©denisgrudet0008_alb09277--.jpg',
    },
  ];

  const valuesTitlePlain = data?.values_title_plain || 'NOS ';
  const valuesTitleHighlight = data?.values_title_highlight || 'VALEURS';
  const valuesIntro = data?.values_intro || 'Une approche...';

  const values = [
    {
      icon: Target,
      title: data?.value_1_title || 'CONCRETE',
      description: data?.value_1_description || 'Des solutions pratiques et adaptees a vos besoins reels',
    },
    {
      icon: Heart,
      title: data?.value_2_title || 'HUMAINE',
      description: data?.value_2_description || "Une approche centree sur l'humain et les relations",
    },
    {
      icon: MessageCircle,
      title: data?.value_3_title || 'SINCERE',
      description: data?.value_3_description || 'Une communication authentique et transparente',
    },
  ];

  const ctaTitlePlain = data?.cta_title_plain || 'Prets a faire de votre communication un reel levier de ';
  const ctaTitleHighlight = data?.cta_title_highlight || 'PERFORMANCE';
  const ctaTitleSuffix = data?.cta_title_suffix || ' ?';
  const ctaSubtitle =
    data?.cta_subtitle ||
    'Decouvrez pourquoi notre approche unique fonctionne deja pour nos clients.';
  const ctaButtonLabel =
    data?.cta_button_label || 'Construisons ensemble votre strategie de communication';
  const ctaButtonHref = data?.cta_button_href || '/contact';

  return (
    <div className="min-h-screen bg-[#012A43]">
      <section className="pt-32 pb-16 bg-gradient-to-b from-[#012A43] to-[#023654]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              {heroTitlePlain}<span className="text-[#EB6718]">{heroTitleHighlight}</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {heroSubtitle}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[#023654]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              {teamIntro}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-2xl bg-[#012A43] aspect-[3/4] mb-6 shadow-lg">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#012A43]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="text-center">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                    {member.name}
                  </h3>
                  <p className="text-[#EB6718] font-semibold mb-1">{member.role}</p>
                  <p className="text-gray-400">{member.subtitle}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[#012A43]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {valuesTitlePlain}<span className="text-[#EB6718]">{valuesTitleHighlight}</span>
            </h2>
            <p className="text-gray-300 text-lg">{valuesIntro}</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-[#EB6718]/40 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-[#EB6718]/20 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-[#EB6718]/30 transition-colors duration-300">
                  <value.icon className="h-8 w-8 text-[#EB6718]" />
                </div>
                <h3 className="text-xl font-bold text-[#EB6718] text-center mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-300 text-center leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-b from-[#023654] to-[#012A43]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
              {ctaTitlePlain}
              <br className="hidden sm:block" />
              <span className="text-[#EB6718]">{ctaTitleHighlight}</span>{ctaTitleSuffix}
            </h2>
            <p className="text-gray-300 mb-8 text-lg">
              {ctaSubtitle}
            </p>
            <Link
              href={ctaButtonHref}
              className="inline-flex items-center px-8 py-4 bg-[#EB6718] text-white font-semibold rounded-full hover:bg-white hover:text-[#012A43] transition-all duration-300 shadow-lg hover:shadow-xl group"
            >
              {ctaButtonLabel}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Team;
