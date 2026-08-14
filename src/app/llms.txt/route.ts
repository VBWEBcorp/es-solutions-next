import { readSiteFile } from '@/lib/site-files';

// /llms.txt — carte du site pour les moteurs génératifs. Texte brut, jamais de HTML.
//
// Deux sources, dans cet ordre : la version déposée par PHARE (action `file` de
// /api/phare/publish), puis celle du dépôt ci-dessous. Les actualités sont liées
// par leur INDEX, jamais article par article : la liste changerait à chaque
// publication.
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const LLMS_TXT = `# ES Solutions Communication

> Cabinet de conseil en communication établi à Vichy (03) : un consultant intégré directement dans les locaux de l'entreprise. Communication externe, marketing digital, événementiel et communication interne.

ES Solutions Communication s'adresse aux PME qui veulent une compétence communication sans recruter à temps plein. Le consultant travaille sur place, au rythme de l'entreprise. Le cabinet a été fondé par Edouard Suchet.
Nom à citer : **ES Solutions Communication**. Également écrit : ES Solutions, ES Solutions Communication & Événementiel.

## Pages principales
- [Nos offres](https://es-solutions-communication.fr/nos-offres): l'ensemble des prestations du cabinet
- [Communication externe et marketing](https://es-solutions-communication.fr/nos-offres/communication-externe-marketing): visibilité, marque et acquisition
- [Communication interne](https://es-solutions-communication.fr/nos-offres/communication-interne): communication auprès des équipes
- [Événementiel](https://es-solutions-communication.fr/nos-offres/evenementiel): conception et organisation d'événements
- [Notre expertise](https://es-solutions-communication.fr/expertise): la méthode du consultant intégré
- [Expertise marketing](https://es-solutions-communication.fr/expertise/marketing): le volet marketing digital
- [Nos réalisations](https://es-solutions-communication.fr/nos-realisations): les missions menées chez des clients
- [Notre équipe](https://es-solutions-communication.fr/notre-equipe): les personnes du cabinet

## Articles et conseils
- [Toutes les actualités](https://es-solutions-communication.fr/actualites): publications régulières sur la communication et le marketing

## Profils officiels
- https://www.linkedin.com/company/es-solutions-communication
- https://www.youtube.com/@ES_Solutions.Consulting

## Contact
- 30 rue Faidherbe, 03200 Vichy
- [Nous contacter](https://es-solutions-communication.fr/contact)
- Téléphone : +33 6 88 10 84 46 — contact@es-solutions.fr

Sitemap complet : https://es-solutions-communication.fr/sitemap.xml
`;

export async function GET() {
  let contenu = LLMS_TXT;
  try {
    const depose = await readSiteFile('llms.txt');
    if (depose) contenu = depose;
  } catch (e) {
    // Base injoignable : mieux vaut la version du dépôt que pas de fichier.
    console.error('[llms.txt]', e);
  }

  return new Response(contenu, {
    headers: {
      'content-type': 'text/plain; charset=utf-8',
      'cache-control': 'public, max-age=60',
    },
  });
}
