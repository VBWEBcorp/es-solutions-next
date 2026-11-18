import { randomUUID } from 'node:crypto';
import { NextRequest, NextResponse } from 'next/server';
import { uploadToR2 } from '@/lib/r2';

// POST /api/candidature/upload
// Formulaire de candidature : le CV et la lettre de motivation sont rangés dans le stockage
// Cloudflare R2 d'ES Solutions (dossier « candidatures »), à une adresse impossible à deviner.
// FormData : { file: Blob }. Réponse : { url }.
const TYPES = new Set([
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'application/vnd.oasis.opendocument.text',
  'image/jpeg',
  'image/png',
]);
const MAX_MO = 5;

export async function POST(req: NextRequest) {
  try {
    const form = await req.formData();
    const file = form.get('file');
    if (!(file instanceof Blob)) return NextResponse.json({ error: 'Fichier manquant' }, { status: 400 });
    if (file.size > MAX_MO * 1024 * 1024) return NextResponse.json({ error: `Fichier trop lourd (${MAX_MO} Mo maximum)` }, { status: 413 });
    if (!TYPES.has(file.type)) return NextResponse.json({ error: 'Format accepté : PDF, Word, ODT, JPG ou PNG' }, { status: 415 });

    const nomOrigine = (file as File).name || 'document';
    const propre = nomOrigine.normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-zA-Z0-9._-]+/g, '-').slice(-80);
    const url = await uploadToR2(Buffer.from(await file.arrayBuffer()), `candidatures-${randomUUID()}-${propre}`, file.type);
    return NextResponse.json({ url });
  } catch (e) {
    console.error('[candidature] upload', (e as Error).message);
    return NextResponse.json({ error: "Échec de l'envoi du fichier" }, { status: 500 });
  }
}

export const runtime = 'nodejs';
