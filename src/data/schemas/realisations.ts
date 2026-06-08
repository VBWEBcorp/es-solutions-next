import type { PageSchema } from '../pageSchemaTypes';

const schema: PageSchema = {
  slug: 'realisations',
  title: 'Nos réalisations',
  url: '/nos-realisations',
  sections: [
    {
      title: 'Section Héro',
      fields: [
        {
          key: 'hero_title_plain',
          label: 'Titre — partie normale (avant la partie colorée)',
          type: 'text',
          placeholder: 'NOS ',
        },
        {
          key: 'hero_title_highlight',
          label: 'Titre — partie colorée (orange)',
          type: 'text',
          placeholder: 'RÉALISATIONS',
        },
        {
          key: 'hero_subtitle',
          label: 'Sous-titre / accroche',
          type: 'text',
          placeholder: 'Découvrez nos projets et les résultats obtenus avec nos clients',
        },
      ],
    },
    {
      title: 'Réalisation 1',
      fields: [
        {
          key: 'project_1_title',
          label: 'Titre du projet',
          type: 'text',
          placeholder: "Une offre de communication complète, comprenant l'organisation de vos évènements.",
        },
        {
          key: 'project_1_description',
          label: 'Description / texte',
          type: 'textarea',
          placeholder:
            "ES Solutions a eu le plaisir d'organiser une journée d'exception pour l'Entité BS/ES du groupe Michelin, dans le cadre de sa mission de gestion de la communication et de l'évènementiel de cette entité. Cette journée annuelle d'entité, réunissait plus de 230 collaborateurs en présentiel en France, et autant d'équipes internationales connectées à distance, et cela en plein milieu du Parc des Volcans d'Auvergne. Une immersion dans la thématique de l'événement \"We Play Wild: The Collective Instinct\" avec au programme: Un moment d'inspiration avec notre intervenant du jour Louis Saillans, Une plénière enrichissante, Puis une après-midi d'activités autour de la survie collective.",
        },
        {
          key: 'project_1_embed_url',
          label: "URL d'intégration YouTube (embed)",
          type: 'url',
          placeholder: 'https://www.youtube.com/embed/ySrmfqRLYWo?si=94jlul8JgYiIw7Iw&autoplay=1&mute=1',
        },
      ],
    },
    {
      title: 'Réalisation 2',
      fields: [
        {
          key: 'project_2_title',
          label: 'Titre du projet',
          type: 'text',
          placeholder: "Inauguration des bureaux de l'entreprise SUCHET dans le cadre de notre offre événementielle",
        },
        {
          key: 'project_2_description',
          label: 'Description / texte',
          type: 'textarea',
          placeholder:
            "ES Solutions a eu l'opportunité d'accompagner l'entreprise SUCHET dans une étape importante pour eux : la rénovation et le réaménagement de leurs bureaux à Cusset. Pour marquer cette évolution, l'entreprise a créé avec eux une journée dédiée à la présentation de cet espace transformé. Une occasion de mettre en valeur le parcours de l'entreprise ainsi que son développement, porté par des valeurs d'exigence, d'engagement et de responsabilité.",
        },
        {
          key: 'project_2_embed_url',
          label: "URL d'intégration YouTube (embed)",
          type: 'url',
          placeholder: 'https://www.youtube.com/embed/1cG2CaDqD7I?si=rB7c8RlS7y9iK8va&autoplay=1&mute=1',
        },
      ],
    },
  ],
};

export default schema;
