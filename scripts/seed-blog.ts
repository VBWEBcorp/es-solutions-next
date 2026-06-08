/**
 * Seed des articles de blog existants dans MongoDB.
 * Usage : npx tsx scripts/seed-blog.ts
 */
import { MongoClient } from 'mongodb';
import { readFileSync } from 'fs';
import path from 'path';
import { blogPosts } from '../src/data/blog-posts';

// Chargement manuel de .env.local (pas de Next ici)
function loadEnv(): Record<string, string> {
  const env: Record<string, string> = {};
  try {
    const raw = readFileSync(path.join(process.cwd(), '.env.local'), 'utf8');
    for (const line of raw.split(/\r?\n/)) {
      const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
      if (m) env[m[1]] = m[2].trim();
    }
  } catch {
    // ignore
  }
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
  const col = db.collection('blog');

  let count = 0;
  for (const p of blogPosts) {
    const published = new Date(p.publishedAt);
    const doc = {
      slug: p.slug,
      title: p.title,
      excerpt: p.excerpt,
      content: p.content, // HTML
      featuredImage: p.coverImage,
      coverImage: p.coverImage,
      category: p.category,
      tags: p.tags,
      author: p.author, // { name, role, avatar }
      readTime: p.readTime,
      publishedAt: published,
      published: true,
      meta: { title: p.title, description: p.excerpt },
      updatedAt: new Date(),
    };
    await col.updateOne(
      { slug: p.slug },
      { $set: doc, $setOnInsert: { createdAt: published } },
      { upsert: true },
    );
    count++;
    console.log(`  ✓ ${p.slug}`);
  }

  await col.createIndex({ slug: 1 }, { unique: true });
  const total = await col.countDocuments();
  console.log(`\nSeed terminé : ${count} articles traités. Total en base (${dbName}.blog) : ${total}`);
  await client.close();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
