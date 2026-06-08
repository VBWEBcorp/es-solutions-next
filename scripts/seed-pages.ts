/**
 * Seed du contenu REEL des pages statiques dans MongoDB (collection `pages`).
 * Chaque page : { slug, data: { <key>: <vrai texte actuel> }, updatedAt }.
 * Apres ce seed, l'admin /admin/pages affiche le vrai texte pre-rempli et editable.
 *
 * Usage : npx tsx scripts/seed-pages.ts
 */
import { MongoClient } from 'mongodb';
import { readFileSync } from 'fs';
import path from 'path';
import { PAGE_SCHEMAS } from '../src/data/pageSchemas';

import accueil from '../src/data/defaults/accueil';
import offres from '../src/data/defaults/offres';
import commExterne from '../src/data/defaults/comm-externe';
import commInterne from '../src/data/defaults/comm-interne';
import evenementiel from '../src/data/defaults/evenementiel';
import expertise from '../src/data/defaults/expertise';
import marketing from '../src/data/defaults/marketing';
import realisations from '../src/data/defaults/realisations';
import equipe from '../src/data/defaults/equipe';
import contact from '../src/data/defaults/contact';
import mentionsLegales from '../src/data/defaults/mentions-legales';
import confidentialite from '../src/data/defaults/confidentialite';
import globalDef from '../src/data/defaults/global';

const DEFAULTS: Record<string, Record<string, string>> = {
  accueil,
  offres,
  'comm-externe': commExterne,
  'comm-interne': commInterne,
  evenementiel,
  expertise,
  marketing,
  realisations,
  equipe,
  contact,
  'mentions-legales': mentionsLegales,
  confidentialite,
  global: globalDef,
};

// Cles de la page d'accueil dont le rendu par defaut est DECORATIF (mot en orange
// via un <span> code en dur) UNIQUEMENT quand le champ est vide. Les seeder
// remplacerait le rendu stylise par du texte plat -> on les laisse vides
// (le composant garde son titre stylise ; le champ reste editable cote admin).
const ACCUEIL_SKIP = new Set([
  'reference_title',
  'genesis_title',
  'vision_quote',
  'mission_title',
  'mission_values_title',
  'services_consulting_title',
  'services_strategy_title',
  'testimonial_title',
  'cta_title',
]);

function loadEnv(): Record<string, string> {
  const env: Record<string, string> = {};
  try {
    const raw = readFileSync(path.join(process.cwd(), '.env.local'), 'utf8');
    for (const line of raw.split(/\r?\n/)) {
      const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
      if (m) env[m[1]] = m[2].trim();
    }
  } catch {}
  return env;
}

async function main() {
  const env = loadEnv();
  const uri = env.MONGODB_URI || process.env.MONGODB_URI;
  const dbName = env.MONGODB_DB || process.env.MONGODB_DB || 'es-solutions';
  if (!uri) throw new Error('MONGODB_URI introuvable (.env.local)');

  const client = new MongoClient(uri);
  await client.connect();
  const db = client.db(dbName);
  const col = db.collection('pages');

  let totalKeys = 0;
  for (const schema of PAGE_SCHEMAS) {
    const def = DEFAULTS[schema.slug];
    if (!def) {
      console.log(`  · ${schema.slug} : (pas de defaults) ignore`);
      continue;
    }
    const allowed = new Set(schema.sections.flatMap((s) => s.fields.map((f) => f.key)));
    const data: Record<string, string> = {};
    for (const [k, v] of Object.entries(def)) {
      if (!allowed.has(k)) continue;
      if (schema.slug === 'accueil' && ACCUEIL_SKIP.has(k)) continue;
      if (typeof v === 'string' && v.length > 0) data[k] = v;
    }
    await col.updateOne(
      { slug: schema.slug },
      { $set: { slug: schema.slug, data, updatedAt: new Date() } },
      { upsert: true },
    );
    const n = Object.keys(data).length;
    totalKeys += n;
    console.log(`  ✓ ${schema.slug.padEnd(18)} ${n} champs / ${allowed.size} schema`);
  }

  console.log(`\nSeed pages termine : ${totalKeys} champs ecrits dans ${dbName}.pages`);
  await client.close();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
