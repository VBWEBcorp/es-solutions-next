import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';

// R2 est compatible S3 : on utilise le client AWS S3 avec l'endpoint Cloudflare.
// Variables d'env requises (cf .env.local) :
// - R2_ACCOUNT_ID
// - R2_ACCESS_KEY_ID
// - R2_SECRET_ACCESS_KEY
// - R2_BUCKET_NAME
// - R2_PUBLIC_URL (URL publique du bucket pour servir les fichiers)
// - R2_PREFIX (optionnel, prefixe pour ranger les fichiers)

const accountId = process.env.R2_ACCOUNT_ID;
const accessKeyId = process.env.R2_ACCESS_KEY_ID;
const secretAccessKey = process.env.R2_SECRET_ACCESS_KEY;

if (!accountId || !accessKeyId || !secretAccessKey) {
  // En dev, on peut tolerer l'absence (uploads desactives). En prod, fail fast.
  if (process.env.NODE_ENV === 'production') {
    throw new Error('R2 credentials missing in environment');
  }
}

export const r2Client = new S3Client({
  region: 'auto',
  endpoint: accountId ? `https://${accountId}.r2.cloudflarestorage.com` : undefined,
  credentials:
    accessKeyId && secretAccessKey
      ? { accessKeyId, secretAccessKey }
      : undefined,
});

export const R2_BUCKET = process.env.R2_BUCKET_NAME ?? 'es-solutions';
export const R2_PUBLIC_URL = process.env.R2_PUBLIC_URL ?? '';
export const R2_PREFIX = process.env.R2_PREFIX ?? 'es-solutions';

/**
 * Upload un fichier dans R2 et renvoie l'URL publique.
 */
export async function uploadToR2(
  buffer: Buffer | Uint8Array,
  filename: string,
  contentType: string,
): Promise<string> {
  const key = `${R2_PREFIX}/${Date.now()}-${filename}`.replace(/^\/+/, '');

  await r2Client.send(
    new PutObjectCommand({
      Bucket: R2_BUCKET,
      Key: key,
      Body: buffer,
      ContentType: contentType,
      CacheControl: 'public, max-age=31536000, immutable',
    }),
  );

  return `${R2_PUBLIC_URL.replace(/\/+$/, '')}/${key}`;
}
