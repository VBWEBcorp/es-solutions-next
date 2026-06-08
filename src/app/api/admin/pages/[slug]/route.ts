import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';
import { getDb } from '@/lib/mongodb';
import { getPageSchema } from '@/data/pageSchemas';

/** Cles autorisees pour une page = celles definies dans son schema. */
function allowedKeys(slug: string): Set<string> | null {
  const schema = getPageSchema(slug);
  if (!schema) return null;
  return new Set(schema.sections.flatMap((s) => s.fields.map((f) => f.key)));
}

// GET /api/admin/pages/[slug] -> contenus stockes (filtres aux cles du schema).
export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;

  const keys = allowedKeys(slug);
  if (!keys) {
    return NextResponse.json({ error: 'Page inconnue' }, { status: 404 });
  }

  try {
    const db = await getDb();
    const doc = await db.collection('pages').findOne({ slug });
    const stored = (doc?.data as Record<string, unknown>) ?? {};

    // On ne renvoie que les cles definies dans le schema.
    const data: Record<string, unknown> = {};
    for (const k of keys) {
      if (stored[k] !== undefined) data[k] = stored[k];
    }

    return NextResponse.json({
      slug,
      data,
      updatedAt: doc?.updatedAt ?? null,
    });
  } catch (e) {
    return NextResponse.json(
      { error: 'Erreur de connexion à la base', details: (e as Error).message },
      { status: 500 },
    );
  }
}

// PUT /api/admin/pages/[slug] -> upsert des contenus puis revalidation.
export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;

  const schema = getPageSchema(slug);
  if (!schema) {
    return NextResponse.json({ error: 'Page inconnue' }, { status: 404 });
  }

  let body: { data?: Record<string, unknown> };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Body JSON invalide' }, { status: 400 });
  }
  if (!body.data || typeof body.data !== 'object') {
    return NextResponse.json({ error: 'Champ "data" requis' }, { status: 400 });
  }

  // Securite : on ne garde que les cles definies dans le schema.
  const keys = new Set(schema.sections.flatMap((s) => s.fields.map((f) => f.key)));
  const data: Record<string, unknown> = {};
  for (const [k, v] of Object.entries(body.data)) {
    if (keys.has(k)) data[k] = v;
  }

  try {
    const db = await getDb();
    await db.collection('pages').updateOne(
      { slug },
      { $set: { slug, data, updatedAt: new Date() } },
      { upsert: true },
    );

    // Rafraichit la page publique correspondante.
    try {
      revalidatePath(schema.url);
    } catch {
      // revalidatePath peut echouer en dev : on ignore.
    }

    return NextResponse.json({ success: true, slug });
  } catch (e) {
    return NextResponse.json(
      { error: 'Erreur de sauvegarde', details: (e as Error).message },
      { status: 500 },
    );
  }
}
