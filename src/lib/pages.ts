import { getDb } from '@/lib/mongodb';

/**
 * Met a niveau toute valeur `http://` en `https://` (recursivement sur les
 * objets/tableaux). Sert a eviter le mixed-content quand une URL d'image est
 * collee a la main dans l'admin.
 */
export function forceHttps<T>(value: T): T {
  if (typeof value === 'string') {
    return (value.startsWith('http://')
      ? value.replace(/^http:\/\//, 'https://')
      : value) as unknown as T;
  }
  if (Array.isArray(value)) {
    return value.map((v) => forceHttps(v)) as unknown as T;
  }
  if (value && typeof value === 'object') {
    return Object.fromEntries(
      Object.entries(value as Record<string, unknown>).map(([k, v]) => [k, forceHttps(v)]),
    ) as unknown as T;
  }
  return value;
}

/**
 * Lit les contenus editables d'une page statique depuis la collection `pages`.
 * Retourne l'objet `data` (paires cle -> valeur saisies dans l'admin) ou `null`
 * si la page n'a jamais ete editee (les composants utilisent alors leurs valeurs
 * par defaut codees en dur -> le site reste identique).
 *
 * Server-only de fait : utilise getDb() (driver Mongo). A n'appeler que depuis
 * des composants serveur ou des route handlers, jamais cote client.
 */
export async function fetchPageData(
  slug: string,
): Promise<Record<string, string> | null> {
  try {
    const db = await getDb();
    const doc = await db.collection('pages').findOne({ slug });
    const data = doc?.data as Record<string, string> | undefined;
    return data ? forceHttps(data) : null;
  } catch {
    // En cas d'indisponibilite de la base, on retombe sur les valeurs par defaut.
    return null;
  }
}
