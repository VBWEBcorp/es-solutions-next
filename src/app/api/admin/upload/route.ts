import { NextRequest, NextResponse } from 'next/server';
import { uploadToR2 } from '@/lib/r2';

// POST /api/admin/upload
// FormData: { file: Blob, filename?: string }
// Repond { url: string } avec l'URL publique du fichier dans R2.
export async function POST(req: NextRequest) {
  try {
    const form = await req.formData();
    const file = form.get('file');
    const overrideName = form.get('filename');

    if (!(file instanceof Blob)) {
      return NextResponse.json({ error: 'Fichier manquant' }, { status: 400 });
    }

    const sizeMb = file.size / 1024 / 1024;
    if (sizeMb > 10) {
      return NextResponse.json(
        { error: 'Fichier trop lourd (max 10 Mo)' },
        { status: 413 },
      );
    }

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const filename =
      typeof overrideName === 'string' && overrideName.length > 0
        ? overrideName
        : (file as File).name || 'image';

    const url = await uploadToR2(
      buffer,
      filename,
      file.type || 'application/octet-stream',
    );

    return NextResponse.json({ url, size: buffer.length });
  } catch (e) {
    return NextResponse.json(
      { error: "Echec de l’upload", details: (e as Error).message },
      { status: 500 },
    );
  }
}

export const runtime = 'nodejs';
