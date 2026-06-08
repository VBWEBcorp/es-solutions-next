'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  Plus,
  Newspaper,
  Pencil,
  Trash2,
  Loader2,
  AlertCircle,
  ExternalLink,
} from 'lucide-react';

interface PostRow {
  slug: string;
  title: string;
  category: string;
  published: boolean;
  publishedAt: string | null;
  updatedAt: string | null;
  coverImage: string;
  featuredImage: string;
  excerpt: string;
}

function formatDate(d: string | null): string {
  if (!d) return '';
  try {
    return new Date(d).toLocaleDateString('fr-FR', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    });
  } catch {
    return '';
  }
}

export default function AdminBlogListPage() {
  const [posts, setPosts] = useState<PostRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [deleting, setDeleting] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    (async () => {
      try {
        const res = await fetch('/api/admin/blog', { cache: 'no-store' });
        if (!res.ok) {
          const j = await res.json().catch(() => ({}));
          throw new Error(j.error || `HTTP ${res.status}`);
        }
        const j: { posts: PostRow[] } = await res.json();
        if (active) setPosts(j.posts || []);
      } catch (e) {
        if (active) setError((e as Error).message);
      } finally {
        if (active) setLoading(false);
      }
    })();
    return () => {
      active = false;
    };
  }, []);

  async function remove(slug: string, title: string) {
    if (!confirm(`Supprimer définitivement « ${title} » ?`)) return;
    setDeleting(slug);
    try {
      const res = await fetch(`/api/admin/blog/${slug}`, { method: 'DELETE' });
      if (!res.ok) {
        const j = await res.json().catch(() => ({}));
        throw new Error(j.error || `HTTP ${res.status}`);
      }
      setPosts((prev) => prev.filter((p) => p.slug !== slug));
    } catch (e) {
      alert(`Erreur : ${(e as Error).message}`);
    } finally {
      setDeleting(null);
    }
  }

  return (
    <div className="mx-auto max-w-3xl">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-[22px] font-semibold tracking-tight text-slate-900">
            Articles
          </h1>
          <p className="mt-0.5 text-[13px] text-slate-500">
            Gérez les articles publiés sur /actualites.
          </p>
        </div>
        <Link
          href="/admin/blog/nouveau"
          className="inline-flex h-9 items-center gap-1.5 rounded-lg bg-[#EB6718] px-3 text-[13px] font-medium text-white hover:bg-[#d65c12]"
        >
          <Plus size={14} strokeWidth={2} />
          Nouvel article
        </Link>
      </div>

      {error && (
        <div className="mb-4 inline-flex items-center gap-2 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-[13px] text-red-700">
          <AlertCircle size={14} />
          {error}
        </div>
      )}

      {loading ? (
        <div className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-16 text-[13px] text-slate-500">
          <Loader2 size={16} className="animate-spin" />
          Chargement...
        </div>
      ) : posts.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
          <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-500">
            <Newspaper size={18} strokeWidth={1.75} />
          </div>
          <p className="text-[14px] text-slate-700">Aucun article pour l’instant</p>
          <Link
            href="/admin/blog/nouveau"
            className="mt-3 inline-flex h-9 items-center gap-1.5 rounded-lg bg-[#023654] px-3 text-[13px] font-medium text-white hover:bg-[#012A43]"
          >
            <Plus size={14} />
            Créer le premier article
          </Link>
        </div>
      ) : (
        <ul className="space-y-2">
          {posts.map((p) => {
            const cover = p.coverImage || p.featuredImage;
            return (
              <li
                key={p.slug}
                className="group flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-2 pr-3 transition hover:border-slate-300"
              >
                {/* Thumbnail */}
                <div className="h-14 w-20 flex-shrink-0 overflow-hidden rounded-md bg-slate-100">
                  {cover ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={cover}
                      alt=""
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center text-slate-400">
                      <Newspaper size={16} strokeWidth={1.5} />
                    </div>
                  )}
                </div>

                {/* Infos -> clic = edition */}
                <Link href={`/admin/blog/${p.slug}`} className="min-w-0 flex-1">
                  <p className="truncate text-[14px] font-medium text-slate-900">
                    {p.title || 'Sans titre'}
                  </p>
                  <p className="mt-0.5 flex flex-wrap items-center gap-1.5 truncate text-[12px] text-slate-500">
                    {p.category && (
                      <span className="rounded bg-slate-100 px-1.5 py-0.5 text-[10px] font-medium text-slate-600">
                        {p.category}
                      </span>
                    )}
                    {p.publishedAt && <span>{formatDate(p.publishedAt)}</span>}
                  </p>
                </Link>

                {/* Badge statut */}
                <span
                  className={`hidden flex-shrink-0 items-center rounded-full px-2 py-0.5 text-[11px] font-medium sm:inline-flex ${
                    p.published
                      ? 'bg-emerald-50 text-emerald-700'
                      : 'bg-slate-100 text-slate-600'
                  }`}
                >
                  {p.published ? 'Publié' : 'Brouillon'}
                </span>

                {/* Actions */}
                <div className="flex flex-shrink-0 items-center gap-1">
                  {p.published && (
                    <a
                      href={`/actualites/${p.slug}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Voir l’article"
                      className="flex h-8 w-8 items-center justify-center rounded-md text-slate-400 hover:bg-slate-100 hover:text-slate-700"
                    >
                      <ExternalLink size={14} />
                    </a>
                  )}
                  <Link
                    href={`/admin/blog/${p.slug}`}
                    title="Modifier"
                    className="flex h-8 w-8 items-center justify-center rounded-md text-slate-400 hover:bg-slate-100 hover:text-[#023654]"
                  >
                    <Pencil size={14} />
                  </Link>
                  <button
                    type="button"
                    onClick={() => remove(p.slug, p.title)}
                    disabled={deleting === p.slug}
                    title="Supprimer"
                    className="flex h-8 w-8 items-center justify-center rounded-md text-slate-400 hover:bg-red-50 hover:text-red-600 disabled:opacity-50"
                  >
                    {deleting === p.slug ? (
                      <Loader2 size={14} className="animate-spin" />
                    ) : (
                      <Trash2 size={14} />
                    )}
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
