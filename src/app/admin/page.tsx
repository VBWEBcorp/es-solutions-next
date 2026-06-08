import Link from 'next/link';
import {
  Newspaper,
  PlusCircle,
  ImageIcon,
  ArrowRight,
  FileText,
  CheckCircle2,
  FileEdit,
} from 'lucide-react';
import { listBlogPosts } from '@/lib/blog';

export const dynamic = 'force-dynamic';

export default async function AdminDashboard() {
  let total = 0;
  let published = 0;
  let drafts = 0;
  try {
    const posts = await listBlogPosts(true);
    total = posts.length;
    published = posts.filter((p) => p.published !== false).length;
    drafts = total - published;
  } catch {
    // En cas d'erreur DB on affiche 0 ; le reste de la page reste utilisable.
  }

  const stats = [
    { label: 'Articles au total', value: total, icon: FileText, color: 'text-[#023654]' },
    { label: 'Publiés', value: published, icon: CheckCircle2, color: 'text-emerald-600' },
    { label: 'Brouillons', value: drafts, icon: FileEdit, color: 'text-amber-600' },
  ];

  const actions = [
    {
      label: 'Gérer les articles',
      desc: 'Voir, modifier ou supprimer les articles du blog.',
      href: '/admin/blog',
      icon: Newspaper,
    },
    {
      label: 'Créer un article',
      desc: 'Rédiger un nouvel article pour les actualités.',
      href: '/admin/blog/nouveau',
      icon: PlusCircle,
    },
    {
      label: 'Médias',
      desc: 'Téléverser une image et récupérer son lien.',
      href: '/admin/medias',
      icon: ImageIcon,
    },
  ];

  return (
    <div className="mx-auto max-w-4xl">
      <h1 className="text-[22px] font-semibold tracking-tight text-slate-900">
        Tableau de bord
      </h1>
      <p className="mt-1 text-[13px] text-slate-500">
        Bienvenue dans le back-office ES Solutions.
      </p>

      {/* Stats */}
      <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
        {stats.map((s) => {
          const Icon = s.icon;
          return (
            <div
              key={s.label}
              className="rounded-xl border border-slate-200 bg-white p-4"
            >
              <div className="flex items-center justify-between">
                <p className="text-[12px] font-medium text-slate-500">{s.label}</p>
                <Icon size={18} strokeWidth={1.75} className={s.color} />
              </div>
              <p className="mt-2 text-[28px] font-semibold tabular-nums text-slate-900">
                {s.value}
              </p>
            </div>
          );
        })}
      </div>

      {/* Quick links */}
      <h2 className="mt-10 mb-3 text-[14px] font-semibold text-slate-900">
        Actions rapides
      </h2>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {actions.map((a) => {
          const Icon = a.icon;
          return (
            <Link
              key={a.href}
              href={a.href}
              className="group flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 transition hover:border-[#023654]/30 hover:shadow-sm"
            >
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[#023654]/5 text-[#023654]">
                <Icon size={18} strokeWidth={1.75} />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[14px] font-medium text-slate-900">{a.label}</p>
                <p className="mt-0.5 text-[12px] text-slate-500">{a.desc}</p>
              </div>
              <ArrowRight
                size={15}
                className="mt-1 flex-shrink-0 text-slate-300 transition group-hover:translate-x-0.5 group-hover:text-[#023654]"
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
