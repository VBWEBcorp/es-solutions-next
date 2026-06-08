'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Realisations = ({ data }: { data?: Record<string, string> }) => {
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.1 });

  const heroTitlePlain = data?.hero_title_plain || 'NOS ';
  const heroTitleHighlight = data?.hero_title_highlight || 'RÉALISATIONS';
  const heroSubtitle =
    data?.hero_subtitle || 'Découvrez nos projets et les résultats obtenus avec nos clients';

  const realisations = [
    {
      id: 1,
      title:
        data?.project_1_title ||
        "Une offre de communication complète, comprenant l'organisation de vos évènements.",
      description:
        data?.project_1_description ||
        "ES Solutions a eu le plaisir d'organiser une journée d'exception pour l'Entité BS/ES du groupe Michelin, dans le cadre de sa mission de gestion de la communication et de l'évènementiel de cette entité. Cette journée annuelle d'entité, réunissait plus de 230 collaborateurs en présentiel en France, et autant d'équipes internationales connectées à distance, et cela en plein milieu du Parc des Volcans d'Auvergne. Une immersion dans la thématique de l'événement \"We Play Wild: The Collective Instinct\" avec au programme: Un moment d'inspiration avec notre intervenant du jour Louis Saillans, Une plénière enrichissante, Puis une après-midi d'activités autour de la survie collective.",
      embedUrl:
        data?.project_1_embed_url ||
        'https://www.youtube.com/embed/ySrmfqRLYWo?si=94jlul8JgYiIw7Iw&autoplay=1&mute=1',
    },
    {
      id: 2,
      title:
        data?.project_2_title ||
        "Inauguration des bureaux de l'entreprise SUCHET dans le cadre de notre offre événementielle",
      description:
        data?.project_2_description ||
        "ES Solutions a eu l'opportunité d'accompagner l'entreprise SUCHET dans une étape importante pour eux : la rénovation et le réaménagement de leurs bureaux à Cusset. Pour marquer cette évolution, l'entreprise a créé avec eux une journée dédiée à la présentation de cet espace transformé. Une occasion de mettre en valeur le parcours de l'entreprise ainsi que son développement, porté par des valeurs d'exigence, d'engagement et de responsabilité.",
      embedUrl:
        data?.project_2_embed_url ||
        'https://www.youtube.com/embed/1cG2CaDqD7I?si=rB7c8RlS7y9iK8va&autoplay=1&mute=1',
    },
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-[#023654] py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2274&q=80')] bg-cover bg-center opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-norwester mb-8">
              {heroTitlePlain}<span className="text-[#EB6718]">{heroTitleHighlight}</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {heroSubtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Réalisations */}
      <section ref={ref1} className="py-24 bg-[#012A43]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {realisations.map((realisation, index) => (
              <motion.div
                key={realisation.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView1 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.3 }}
                className="bg-[#023654] rounded-xl p-8 shadow-[0_0_25px_rgba(0,0,0,0.2)]"
              >
                <h2 className="text-lg md:text-2xl font-norwester text-white mb-4 text-center">
                  {realisation.title}
                </h2>

                <div className="aspect-video rounded-lg overflow-hidden mb-6 shadow-lg">
                  <iframe
                    width="100%"
                    height="100%"
                    src={realisation.embedUrl}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>

                <p className="text-gray-300 text-sm md:text-base leading-normal text-center">
                  {realisation.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Realisations;
