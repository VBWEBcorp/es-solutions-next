// =============================================================================
// Agregateur des schemas de pages editables (textes + images).
//
// Le back-office /admin/pages lit PAGE_SCHEMAS pour generer les formulaires.
// Les valeurs saisies sont stockees dans MongoDB (collection `pages`,
// un document { slug, data, updatedAt } par page). Tant qu'un champ est vide,
// le composant public affiche sa valeur par defaut codee en dur -> rendu identique.
//
// Chaque page a son propre fichier dans ./schemas/<slug>.ts (export default).
// Pour ajouter une page : creer ./schemas/<slug>.ts puis l'importer ici.
// =============================================================================

export type { FieldType, FieldDef, SectionDef, PageSchema } from './pageSchemaTypes';
import type { PageSchema } from './pageSchemaTypes';

import accueil from './schemas/accueil';
import offres from './schemas/offres';
import commExterne from './schemas/comm-externe';
import commInterne from './schemas/comm-interne';
import evenementiel from './schemas/evenementiel';
import expertise from './schemas/expertise';
import marketing from './schemas/marketing';
import realisations from './schemas/realisations';
import equipe from './schemas/equipe';
import contact from './schemas/contact';
import mentionsLegales from './schemas/mentions-legales';
import confidentialite from './schemas/confidentialite';
import global from './schemas/global';

export const PAGE_SCHEMAS: PageSchema[] = [
  accueil,
  offres,
  commExterne,
  commInterne,
  evenementiel,
  expertise,
  marketing,
  realisations,
  equipe,
  contact,
  mentionsLegales,
  confidentialite,
  global,
];

export function getPageSchema(slug: string): PageSchema | undefined {
  return PAGE_SCHEMAS.find((p) => p.slug === slug);
}
