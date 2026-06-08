import { NextRequest, NextResponse } from 'next/server';
import {
  checkCredentials,
  signSession,
  SESSION_COOKIE,
  SESSION_TTL_SECONDS,
} from '@/lib/auth';

// POST /api/admin/login — { email, password }
export async function POST(req: NextRequest) {
  let body: { email?: string; password?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Body JSON invalide' }, { status: 400 });
  }

  const email = (body.email || '').trim();
  const password = body.password || '';

  if (!checkCredentials(email, password)) {
    return NextResponse.json(
      { error: 'Identifiants incorrects' },
      { status: 401 },
    );
  }

  const token = await signSession(email);
  const res = NextResponse.json({ success: true });
  res.cookies.set(SESSION_COOKIE, token, {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: SESSION_TTL_SECONDS,
  });
  return res;
}
