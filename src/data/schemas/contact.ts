import type { PageSchema } from '../pageSchemaTypes';

const schema: PageSchema = {
  slug: 'contact',
  title: 'Page Contact',
  url: '/contact',
  sections: [
    {
      title: 'Section Héro',
      fields: [
        { key: 'hero_title_part1', label: 'Titre H1 – partie colorée (orange)', type: 'text', placeholder: 'CONTACTEZ' },
        { key: 'hero_title_part2', label: 'Titre H1 – partie blanche (après l\'orange)', type: 'text', placeholder: 'NOUS' },
        { key: 'hero_subtitle', label: 'Sous-titre de la section héro', type: 'text', placeholder: 'Discutons de votre projet ou rejoignez notre équipe' },
      ],
    },
    {
      title: 'Barre d\'informations de contact',
      fields: [
        { key: 'contact_phone', label: 'Numéro de téléphone (texte affiché)', type: 'text', placeholder: '06 88 10 84 46' },
        { key: 'contact_phone_href', label: 'Numéro de téléphone (lien tel:)', type: 'url', placeholder: 'tel:0688108446' },
        { key: 'contact_email', label: 'Email (texte affiché)', type: 'text', placeholder: 'Edouard@es-solutions.fr' },
        { key: 'contact_email_href', label: 'Email (lien mailto:)', type: 'url', placeholder: 'mailto:Edouard@es-solutions.fr' },
        { key: 'contact_address', label: 'Adresse postale', type: 'text', placeholder: '30 RUE FAIDHERBE, 03200 VICHY' },
      ],
    },
    {
      title: 'Onglets de navigation',
      fields: [
        { key: 'tab_contact_label', label: 'Libellé onglet – Projet de communication', type: 'text', placeholder: 'Projet de communication' },
        { key: 'tab_join_label', label: 'Libellé onglet – Nous rejoindre', type: 'text', placeholder: 'Nous rejoindre' },
      ],
    },
    {
      title: 'Formulaire – Projet de communication',
      fields: [
        { key: 'form_contact_title_part1', label: 'Titre du formulaire – partie blanche', type: 'text', placeholder: 'PARLONS DE VOTRE' },
        { key: 'form_contact_title_part2', label: 'Titre du formulaire – partie orange', type: 'text', placeholder: 'PROJET' },
        { key: 'form_contact_intro', label: 'Introduction du formulaire', type: 'text', placeholder: 'Quelques informations pour mieux comprendre vos besoins' },
        { key: 'form_step1_title', label: 'Titre étape 1', type: 'text', placeholder: 'Votre entreprise' },
        { key: 'form_step2_title', label: 'Titre étape 2', type: 'text', placeholder: 'Vos coordonnées' },
        { key: 'form_step3_title', label: 'Titre étape 3', type: 'text', placeholder: 'Vos besoins' },
        { key: 'form_step4_title', label: 'Titre étape 4', type: 'text', placeholder: 'Votre message' },
        { key: 'form_btn_next', label: 'Bouton Suivant', type: 'text', placeholder: 'Suivant' },
        { key: 'form_btn_prev', label: 'Bouton Précédent', type: 'text', placeholder: 'Précédent' },
        { key: 'form_btn_send', label: 'Bouton Envoyer', type: 'text', placeholder: 'Envoyer' },
        { key: 'form_btn_sending', label: 'Bouton en cours d\'envoi', type: 'text', placeholder: 'Envoi...' },
        { key: 'form_success_title', label: 'Message de succès – titre', type: 'text', placeholder: 'Message envoyé !' },
        { key: 'form_success_body', label: 'Message de succès – corps', type: 'text', placeholder: 'Nous vous recontacterons très prochainement.' },
      ],
    },
    {
      title: 'Formulaire – Nous rejoindre (candidature)',
      fields: [
        { key: 'form_join_title_part1', label: 'Titre du formulaire candidature – partie blanche', type: 'text', placeholder: 'REJOIGNEZ' },
        { key: 'form_join_title_part2', label: 'Titre du formulaire candidature – partie orange', type: 'text', placeholder: 'NOTRE ÉQUIPE' },
        { key: 'form_join_intro', label: 'Introduction du formulaire candidature', type: 'text', placeholder: 'Candidature spontanée - Envoyez-nous votre CV et lettre de motivation' },
        { key: 'form_join_btn_send', label: 'Bouton envoyer la candidature', type: 'text', placeholder: 'Envoyer ma candidature' },
        { key: 'form_join_btn_sending', label: 'Bouton en cours d\'envoi candidature', type: 'text', placeholder: 'Envoi en cours...' },
        { key: 'form_join_success_title', label: 'Succès candidature – titre', type: 'text', placeholder: 'Candidature envoyée !' },
        { key: 'form_join_success_body', label: 'Succès candidature – corps', type: 'textarea', placeholder: 'Nous étudierons votre profil et vous recontacterons si votre candidature correspond à nos besoins.' },
      ],
    },
  ],
};

export default schema;
