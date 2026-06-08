// Auth helpers compatible Edge Runtime (utilise Web Crypto API).

export const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'contact@es-solutions.fr';
export const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'ESsolutions2026!';

const SESSION_SECRET =
  process.env.JWT_SECRET ||
  process.env.ADMIN_SESSION_SECRET ||
  'es-solutions-dev-secret-change-me-in-production-' + ADMIN_EMAIL;

const SESSION_TTL_MS = 1000 * 60 * 60 * 24 * 30; // 30 jours
export const SESSION_TTL_SECONDS = SESSION_TTL_MS / 1000;
export const SESSION_COOKIE = 'es_admin';

export function checkCredentials(email: string, password: string): boolean {
  return (
    email.trim().toLowerCase() === ADMIN_EMAIL.toLowerCase() &&
    password === ADMIN_PASSWORD
  );
}

// --- base64url helpers ---
function bytesToBase64url(bytes: Uint8Array): string {
  let s = '';
  for (const b of bytes) s += String.fromCharCode(b);
  return btoa(s).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

function base64urlToBytes(s: string): Uint8Array {
  let str = s.replace(/-/g, '+').replace(/_/g, '/');
  while (str.length % 4) str += '=';
  const bin = atob(str);
  const out = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
  return out;
}

function strToBytes(s: string): Uint8Array {
  return new TextEncoder().encode(s);
}

function bytesToStr(b: Uint8Array): string {
  return new TextDecoder().decode(b);
}

// Comparaison constante en temps (pas de crypto.timingSafeEqual en Edge)
function safeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) {
    diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return diff === 0;
}

async function hmacSha256(secret: string, data: string): Promise<string> {
  const secretBytes = strToBytes(secret);
  const dataBytes = strToBytes(data);
  // Copie dans un ArrayBuffer dedie pour eviter le typage SharedArrayBuffer.
  const secretBuf = secretBytes.buffer.slice(
    secretBytes.byteOffset,
    secretBytes.byteOffset + secretBytes.byteLength,
  ) as ArrayBuffer;
  const dataBuf = dataBytes.buffer.slice(
    dataBytes.byteOffset,
    dataBytes.byteOffset + dataBytes.byteLength,
  ) as ArrayBuffer;
  const key = await crypto.subtle.importKey(
    'raw',
    secretBuf,
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign'],
  );
  const sigBuf = await crypto.subtle.sign('HMAC', key, dataBuf);
  return bytesToBase64url(new Uint8Array(sigBuf));
}

export async function signSession(email: string): Promise<string> {
  const payload = { email, exp: Date.now() + SESSION_TTL_MS };
  const data = bytesToBase64url(strToBytes(JSON.stringify(payload)));
  const sig = await hmacSha256(SESSION_SECRET, data);
  return `${data}.${sig}`;
}

export async function verifySession(
  token: string | undefined,
): Promise<{ email: string } | null> {
  if (!token) return null;
  const [data, sig] = token.split('.');
  if (!data || !sig) return null;

  const expected = await hmacSha256(SESSION_SECRET, data);
  if (!safeEqual(sig, expected)) return null;

  try {
    const payload = JSON.parse(bytesToStr(base64urlToBytes(data)));
    if (typeof payload.exp !== 'number' || payload.exp < Date.now()) return null;
    if (typeof payload.email !== 'string') return null;
    return { email: payload.email };
  } catch {
    return null;
  }
}
