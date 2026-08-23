'use client';

import { useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Loader2, Lock, Mail, ArrowRight } from 'lucide-react';

const LOGO_URL = 'https://pub-e1e97dba7b2643bc9151a20668a49e5e.r2.dev/images/yBWBdDGV-ic-ne-logo-fonc.png';

function LoginForm() {
  const router = useRouter();
  const params = useSearchParams();
  const next = params.get('next') || '/admin';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      if (!res.ok) {
        const j = await res.json().catch(() => ({}));
        throw new Error(j.error || `HTTP ${res.status}`);
      }
      router.push(next);
      router.refresh();
    } catch (err) {
      setError((err as Error).message);
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={submit} className="space-y-4">
      <div>
        <label className="block text-[12px] font-medium text-slate-700">Email</label>
        <div className="relative mt-1.5">
          <Mail
            size={14}
            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
          />
          <input
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="contact@es-solutions.fr"
            className="block w-full rounded-lg border border-slate-200 bg-white py-2.5 pl-9 pr-3 text-[14px] text-slate-900 placeholder:text-slate-400 focus:border-[#023654] focus:outline-none focus:ring-2 focus:ring-[#023654]/10"
          />
        </div>
      </div>

      <div>
        <label className="block text-[12px] font-medium text-slate-700">
          Mot de passe
        </label>
        <div className="relative mt-1.5">
          <Lock
            size={14}
            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
          />
          <input
            type="password"
            autoComplete="current-password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            className="block w-full rounded-lg border border-slate-200 bg-white py-2.5 pl-9 pr-3 text-[14px] text-slate-900 placeholder:text-slate-400 focus:border-[#023654] focus:outline-none focus:ring-2 focus:ring-[#023654]/10"
          />
        </div>
      </div>

      {error && (
        <div className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-[13px] text-red-700">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#EB6718] px-4 py-2.5 text-[14px] font-medium text-white transition hover:bg-[#d65c12] disabled:opacity-60"
      >
        {submitting ? (
          <Loader2 size={14} className="animate-spin" />
        ) : (
          <>
            Se connecter
            <ArrowRight
              size={14}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </>
        )}
      </button>
    </form>
  );
}

export default function AdminLoginPage() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-auto bg-gradient-to-br from-[#012A43] via-[#023654] to-[#012A43] px-4 py-12">
      <div className="w-full max-w-[420px]">
        <div className="rounded-2xl border border-white/10 bg-white/[0.98] p-8 shadow-2xl shadow-black/40 backdrop-blur-xl">
          <div className="mb-7 flex items-center justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={LOGO_URL} alt="ES Solutions" className="h-16 w-auto" />
          </div>

          <div className="text-center">
            <h1 className="text-[20px] font-semibold tracking-tight text-slate-900">
              Connexion au back-office
            </h1>
            <p className="mt-1 text-[13px] text-slate-500">
              Accès à la gestion du site ES Solutions.
            </p>
          </div>

          <div className="mt-7">
            <Suspense fallback={<div className="h-40" />}>
              <LoginForm />
            </Suspense>
          </div>
        </div>

        <p className="mt-6 text-center text-[12px] text-white/60">
          ES Solutions · Accès réservé
        </p>
      </div>
    </div>
  );
}
