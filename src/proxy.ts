import { NextRequest, NextResponse } from 'next/server';
import { verifySession, SESSION_COOKIE } from '@/lib/auth';

const PUBLIC_ADMIN_PATHS = ['/admin/login'];
const PUBLIC_ADMIN_API = ['/api/admin/login', '/api/admin/logout'];

function stripTrailingSlash(p: string): string {
  return p.length > 1 && p.endsWith('/') ? p.slice(0, -1) : p;
}

// Next.js 16 : la convention "middleware" est renommee "proxy" (meme fonctionnement).
export async function proxy(req: NextRequest) {
  const pathname = stripTrailingSlash(req.nextUrl.pathname);

  // Routes publiques (login lui-meme + endpoint login/logout)
  if (PUBLIC_ADMIN_PATHS.some((p) => pathname === p || pathname.startsWith(p + '/'))) {
    return NextResponse.next();
  }
  if (PUBLIC_ADMIN_API.some((p) => pathname === p)) {
    return NextResponse.next();
  }

  const isAdminPage = pathname === '/admin' || pathname.startsWith('/admin/');
  const isAdminApi = pathname.startsWith('/api/admin/');

  if (!isAdminPage && !isAdminApi) {
    return NextResponse.next();
  }

  const token = req.cookies.get(SESSION_COOKIE)?.value;
  const session = await verifySession(token);

  if (session) return NextResponse.next();

  // Pages admin -> redirige vers login
  if (isAdminPage) {
    const url = req.nextUrl.clone();
    url.pathname = '/admin/login';
    url.searchParams.set('next', pathname);
    return NextResponse.redirect(url);
  }

  // APIs admin -> 401 JSON
  return NextResponse.json({ error: 'Non authentifié' }, { status: 401 });
}

export const config = {
  matcher: ['/admin/:path*', '/api/admin/:path*'],
};
