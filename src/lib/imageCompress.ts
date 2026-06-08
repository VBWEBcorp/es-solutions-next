// Compression d'image cote navigateur via Canvas.
// Reduit la taille (poids et dimensions) avant upload R2.
// Sortie en WebP par defaut (meilleure compression que JPEG).

export interface CompressOptions {
  maxWidth?: number; // px, defaut 1920
  maxHeight?: number; // px, defaut 1920
  quality?: number; // 0..1, defaut 0.85
  preferredFormat?: 'image/webp' | 'image/jpeg';
}

export interface CompressedResult {
  blob: Blob;
  width: number;
  height: number;
  originalSize: number;
  compressedSize: number;
  filename: string;
  mime: string;
}

export async function compressImage(
  file: File,
  options: CompressOptions = {},
): Promise<CompressedResult> {
  const {
    maxWidth = 1920,
    maxHeight = 1920,
    quality = 0.85,
    preferredFormat = 'image/webp',
  } = options;

  // Lecture du fichier en image bitmap
  const bitmap = await createImageBitmap(file);

  // Calcul des nouvelles dimensions en preservant le ratio
  const widthRatio = maxWidth / bitmap.width;
  const heightRatio = maxHeight / bitmap.height;
  const ratio = Math.min(widthRatio, heightRatio, 1);
  const targetWidth = Math.round(bitmap.width * ratio);
  const targetHeight = Math.round(bitmap.height * ratio);

  // Dessin sur canvas
  const canvas = document.createElement('canvas');
  canvas.width = targetWidth;
  canvas.height = targetHeight;
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('Canvas 2D context indisponible');
  ctx.drawImage(bitmap, 0, 0, targetWidth, targetHeight);

  // Encodage : essai WebP, fallback JPEG si non supporte
  let blob: Blob = await canvasToBlob(canvas, preferredFormat, quality);
  let mime = preferredFormat;
  if (blob.size === 0 || !blob.type.includes(preferredFormat.split('/')[1])) {
    blob = await canvasToBlob(canvas, 'image/jpeg', quality);
    mime = 'image/jpeg';
  }

  bitmap.close?.();

  // Genere un nom de fichier propre
  const ext = mime === 'image/webp' ? 'webp' : 'jpg';
  const baseName = file.name
    .replace(/\.[^.]+$/, '')
    .replace(/[^a-z0-9-_]+/gi, '-')
    .toLowerCase();
  const filename = `${baseName || 'image'}.${ext}`;

  return {
    blob,
    width: targetWidth,
    height: targetHeight,
    originalSize: file.size,
    compressedSize: blob.size,
    filename,
    mime,
  };
}

function canvasToBlob(
  canvas: HTMLCanvasElement,
  type: string,
  quality: number,
): Promise<Blob> {
  return new Promise((resolve) => {
    canvas.toBlob((b) => resolve(b ?? new Blob([])), type, quality);
  });
}

export function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} o`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} Ko`;
  return `${(bytes / 1024 / 1024).toFixed(2)} Mo`;
}
