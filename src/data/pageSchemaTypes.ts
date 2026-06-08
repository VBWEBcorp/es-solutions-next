// Types partages des schemas de pages editables.
// (Fichier separe pour eviter les imports circulaires entre pageSchemas.ts
//  et les fichiers de schema individuels dans ./schemas/.)

export type FieldType = 'text' | 'textarea' | 'richtext' | 'image' | 'url';

export interface FieldDef {
  key: string; // cle stockee dans Mongo et lue cote public (data?.<key>)
  label: string; // libelle affiche au-dessus du champ
  type: FieldType;
  placeholder?: string;
  charLimit?: { min?: number; max?: number };
}

export interface SectionDef {
  title: string;
  fields: FieldDef[];
}

export interface PageSchema {
  slug: string; // identifiant Mongo (ex: 'accueil', 'offres')
  title: string; // nom affiche dans l'admin
  url: string; // URL publique (lien "Voir la page" + revalidatePath)
  sections: SectionDef[];
}
