'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
  LayoutDashboard,
  Newspaper,
  FileText,
  ImageIcon,
  LogOut,
  ExternalLink,
  Menu,
  X,
} from 'lucide-react';
import { ADMIN_EMAIL } from '@/lib/auth';

const LOGO_URL = 'https://i.ibb.co/yBWBdDGV/Ic-ne-logo-fonc.png';

const NAV: { label: string; href: string; icon: React.ElementType }[] = [
  { label: 'Tableau de bord', href: '/admin', icon: LayoutDashboard },
  { label: 'Pages', href: '/admin/pages', icon: FileText },
  { label: 'Articles', href: '/admin/blog', icon: Newspaper },
  { label: 'Médias', href: '/admin/medias', icon: ImageIcon },
];

export default function AdminShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);

  // La page de login a son propre layout plein ecran (pas de sidebar)
  const isLogin = pathname?.startsWith('/admin/login');

  // Le drawer mobile se ferme via les clics (liens, backdrop, bouton fermer).

  async function handleLogout() {
    try {
      await fetch('/api/admin/logout', { method: 'POST' });
    } catch {}
    router.push('/admin/login');
    router.refresh();
  }

  if (isLogin) {
    return <div className="antialiased">{children}</div>;
  }

  const userInitial = (ADMIN_EMAIL[0] || 'A').toUpperCase();

  return (
    // Overlay plein ecran opaque : recouvre le chrome public (Header/Footer) du layout racine.
    <div className="fixed inset-0 z-[100] flex overflow-hidden bg-slate-50 text-slate-900 antialiased">
      {/* Backdrop mobile */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
          onClick={() => setMobileOpen(false)}
          aria-hidden
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 z-50 flex h-full w-[260px] flex-col bg-[#023654] text-slate-200 shadow-2xl transition-transform duration-200 md:static md:z-auto md:translate-x-0 md:shadow-none ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Brand */}
        <div className="flex h-20 items-center gap-3 border-b border-white/10 px-5">
          <Link
            href="/admin"
            className="flex items-center gap-2.5 overflow-hidden"
            onClick={() => setMobileOpen(false)}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={LOGO_URL}
              alt="ES Solutions"
              className="h-9 w-9 flex-shrink-0 rounded-md bg-white/10 object-contain p-1"
            />
            <div className="min-w-0">
              <p className="truncate text-[14px] font-semibold text-white">
                ES Solutions
              </p>
              <p className="truncate text-[11px] text-slate-400">Back-office</p>
            </div>
          </Link>
          <button
            type="button"
            onClick={() => setMobileOpen(false)}
            className="ml-auto flex h-8 w-8 items-center justify-center rounded-md text-slate-400 hover:bg-white/10 hover:text-white md:hidden"
            aria-label="Fermer le menu"
          >
            <X size={16} />
          </button>
        </div>

        {/* Nav */}
        <nav className="flex-1 overflow-y-auto px-3 py-5">
          <ul className="space-y-1">
            {NAV.map((it) => {
              const Icon = it.icon;
              const active =
                it.href === '/admin'
                  ? pathname === '/admin'
                  : pathname === it.href || pathname?.startsWith(it.href + '/');
              return (
                <li key={it.href}>
                  <Link
                    href={it.href}
                    onClick={() => setMobileOpen(false)}
                    className={`relative flex items-center gap-3 rounded-lg px-3 py-2.5 text-[13.5px] font-medium transition-colors ${
                      active
                        ? 'bg-white/10 text-white'
                        : 'text-slate-300 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    {active && (
                      <span className="absolute left-0 top-1/2 h-5 w-0.5 -translate-y-1/2 rounded-r-full bg-[#EB6718]" />
                    )}
                    <Icon
                      size={17}
                      strokeWidth={1.75}
                      className={active ? 'text-[#EB6718]' : ''}
                    />
                    {it.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Footer : voir le site + compte + logout */}
        <div className="border-t border-white/10 p-3">
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="mb-2 flex items-center gap-3 rounded-lg px-3 py-2 text-[13px] text-slate-300 transition-colors hover:bg-white/5 hover:text-white"
          >
            <ExternalLink size={15} strokeWidth={1.75} />
            Voir le site
          </a>

          <div className="flex items-center gap-2.5 rounded-lg bg-white/5 p-2.5">
            <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#EB6718] text-[12px] font-semibold text-white">
              {userInitial}
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-[12px] font-medium text-white">Admin</p>
              <p className="truncate text-[11px] text-slate-400">{ADMIN_EMAIL}</p>
            </div>
            <button
              type="button"
              onClick={handleLogout}
              title="Se déconnecter"
              aria-label="Se déconnecter"
              className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-md text-slate-400 transition-colors hover:bg-white/10 hover:text-white"
            >
              <LogOut size={14} strokeWidth={1.75} />
            </button>
          </div>
        </div>
      </aside>

      {/* Zone principale */}
      <div className="flex min-w-0 flex-1 flex-col">
        {/* TopBar */}
        <header className="sticky top-0 z-30 flex h-14 flex-shrink-0 items-center gap-3 border-b border-slate-200 bg-white/90 px-4 backdrop-blur-sm md:px-8">
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="flex h-9 w-9 items-center justify-center rounded-md text-slate-600 hover:bg-slate-100 md:hidden"
            aria-label="Ouvrir le menu"
          >
            <Menu size={18} />
          </button>
          <Link href="/admin" className="flex items-center gap-2 md:hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={LOGO_URL} alt="ES Solutions" className="h-7 w-7 rounded" />
            <span className="text-[14px] font-semibold text-slate-900">
              Back-office
            </span>
          </Link>
          <div className="ml-auto">
            <button
              type="button"
              onClick={handleLogout}
              className="inline-flex items-center gap-1.5 text-[13px] text-slate-500 hover:text-slate-900"
            >
              <LogOut size={13} />
              <span className="hidden sm:inline">Déconnexion</span>
            </button>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto px-4 py-6 md:px-8 md:py-10">
          {children}
        </main>
      </div>
    </div>
  );
}
