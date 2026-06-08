'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import {
  ArrowLeft,
  Check,
  Loader2,
  Trash2,
  ExternalLink,
  AlertCircle,
} from 'lucide-react';
import ImageUploader from '@/components/admin/ImageUploader';
import RichTextEditor from '@/components/admin/RichTextEditor';

interface Author {
  name: string;
  role: string;
  avatar: string;
}

interface EditorData {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  featuredImage: string;
  category: string;
  tags: string[];
  author: Author;
  readTime: number;
  published: boolean;
  publishedAt: string | null; // ISO
  meta: { title: string; description: string };
}

// Convertit une date ISO -> valeur d'un <input type="date"> (YYYY-MM-DD).
function isoToDateInput(iso: string | null): string {
  if (!iso) return '';
  try {
    return new Date(iso).toISOString().slice(0, 10);
  } catch {
    return '';
  }
}

function CharCounter({ value, max }: { value: string; max: number }) {
  const len = value.length;
  const over = len > max;
  return (
    <span
      className={`text-[11px] tabular-nums ${
        over ? 'text-red-600' : len > max * 0.5 ? 'text-emerald-600' : 'text-slate-400'
      }`}
    >
      {len} / {max}
    </span>
  );
}

export default function AdminBlogEditPage() {
  const router = useRouter();
  const params = useParams<{ slug: string }>();
  const slug = params.slug;

  const [data, setData] = useState<EditorData | null>(null);
  const [tagsInput, setTagsInput] = useState('');
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [savedAt, setSavedAt] = useState<Date | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    (async () => {
      try {
        const res = await fetch(`/api/admin/blog/${slug}`, { cache: 'no-store' });
        if (!res.ok) {
          const j = await res.json().catch(() => ({}));
          throw new Error(j.error || `HTTP ${res.status}`);
        }
        const j = await res.json();
        const loaded: EditorData = {
          slug: j.slug,
          title: j.title || '',
          excerpt: j.excerpt || '',
          content: j.content || '',
          coverImage: j.coverImage || j.featuredImage || '',
          featuredImage: j.featuredImage || j.coverImage || '',
          category: j.category || '',
          tags: Array.isArray(j.tags) ? j.tags : [],
          author: {
            name: j.author?.name || '',
            role: j.author?.role || '',
            avatar: j.author?.avatar || '',
          },
          readTime: typeof j.readTime === 'number' ? j.readTime : 5,
          published: !!j.published,
          publishedAt: j.publishedAt || null,
          meta: {
            title: j.meta?.title || '',
            description: j.meta?.description || '',
          },
        };
        if (!active) return;
        setData(loaded);
        setTagsInput(loaded.tags.join(', '));
      } catch (e) {
        if (active) setError((e as Error).message);
      } finally {
        if (active) setLoading(false);
      }
    })();
    return () => {
      active = false;
    };
  }, [slug]);

  function update<K extends keyof EditorData>(key: K, value: EditorData[K]) {
    setData((prev) => (prev ? { ...prev, [key]: value } : prev));
  }

  function updateAuthor<K extends keyof Author>(key: K, value: Author[K]) {
    setData((prev) =>
      prev ? { ...prev, author: { ...prev.author, [key]: value } } : prev,
    );
  }

  // L'image de couverture est enregistree a la fois en coverImage ET featuredImage.
  function setCover(url: string) {
    setData((prev) =>
      prev ? { ...prev, coverImage: url, featuredImage: url } : prev,
    );
  }

  async function save() {
    if (!data) return;
    setSaving(true);
    setError(null);
    try {
      const tags = tagsInput
        .split(',')
        .map((t) => t.trim())
        .filter(Boolean);

      const res = await fetch(`/api/admin/blog/${data.slug}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: data.title,
          excerpt: data.excerpt,
          content: data.content,
          category: data.category,
          tags,
          author: data.author,
          readTime: Number(data.readTime) || 0,
          // L'image de couverture est envoyee dans les deux champs.
          coverImage: data.coverImage,
          featuredImage: data.coverImage,
          published: data.published,
          publishedAt: data.publishedAt,
          meta: data.meta,
        }),
      });
      if (!res.ok) {
        const j = await res.json().catch(() => ({}));
        throw new Error(j.error || `HTTP ${res.status}`);
      }
      setData((prev) => (prev ? { ...prev, tags } : prev));
      setSavedAt(new Date());
      router.refresh();
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setSaving(false);
    }
  }

  async function remove() {
    if (!data) return;
    if (!confirm(`Supprimer définitivement « ${data.title} » ?`)) return;
    setDeleting(true);
    setError(null);
    try {
      const res = await fetch(`/api/admin/blog/${data.slug}`, { method: 'DELETE' });
      if (!res.ok) {
        const j = await res.json().catch(() => ({}));
        throw new Error(j.error || `HTTP ${res.status}`);
      }
      router.push('/admin/blog');
    } catch (e) {
      setError((e as Error).message);
      setDeleting(false);
    }
  }

  if (loading) {
    return (
      <div className="mx-auto flex max-w-3xl items-center justify-center gap-2 py-20 text-[13px] text-slate-500">
        <Loader2 size={16} className="animate-spin" />
        Chargement de l’article...
      </div>
    );
  }

  if (error && !data) {
    return (
      <div className="mx-auto max-w-3xl">
        <Link
          href="/admin/blog"
          className="mb-6 inline-flex items-center gap-1.5 text-[13px] text-slate-500 hover:text-slate-900"
        >
          <ArrowLeft size={14} />
          Retour aux articles
        </Link>
        <div className="inline-flex items-center gap-2 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-[13px] text-red-700">
          <AlertCircle size={14} />
          {error}
        </div>
      </div>
    );
  }

  if (!data) return null;

  const inputClass =
    'mt-2 block w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-[14px] text-slate-900 placeholder:text-slate-400 focus:border-[#023654] focus:outline-none focus:ring-2 focus:ring-[#023654]/10';
  const labelClass = 'block text-[13px] font-medium text-slate-800';

  return (
    <div className="mx-auto max-w-3xl pb-24">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between gap-2">
        <Link
          href="/admin/blog"
          className="inline-flex items-center gap-1.5 text-[13px] text-slate-500 hover:text-slate-900"
        >
          <ArrowLeft size={14} />
          <span className="hidden sm:inline">Retour</span>
        </Link>
        <div className="flex items-center gap-1.5 sm:gap-2">
          <a
            href={`/actualites/${data.slug}`}
            target="_blank"
            rel="noopener noreferrer"
            title="Voir l’article"
            className="inline-flex h-9 items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-2.5 text-[13px] font-medium text-slate-700 hover:border-slate-300 sm:px-3"
          >
            <ExternalLink size={13} />
            <span className="hidden sm:inline">Voir l’article</span>
          </a>
          <button
            type="button"
            onClick={remove}
            disabled={deleting}
            title="Supprimer"
            className="inline-flex h-9 items-center gap-1.5 rounded-lg border border-red-200 bg-white px-2.5 text-[13px] font-medium text-red-600 hover:bg-red-50 disabled:opacity-50 sm:px-3"
          >
            {deleting ? (
              <Loader2 size={13} className="animate-spin" />
            ) : (
              <Trash2 size={13} />
            )}
            <span className="hidden sm:inline">Supprimer</span>
          </button>
          <button
            type="button"
            onClick={save}
            disabled={saving}
            className="inline-flex h-9 items-center gap-1.5 rounded-lg bg-[#023654] px-3 text-[13px] font-medium text-white hover:bg-[#012A43] disabled:opacity-50"
          >
            {saving ? (
              <Loader2 size={13} className="animate-spin" />
            ) : (
              <Check size={13} />
            )}
            Enregistrer
          </button>
        </div>
      </div>

      <h1 className="mb-1 text-[22px] font-semibold tracking-tight text-slate-900">
        {data.title || 'Sans titre'}
      </h1>
      <p className="mb-8 text-[12px] text-slate-500">/actualites/{data.slug}</p>

      {/* Statut + publication */}
      <div className="space-y-5 rounded-xl border border-slate-200 bg-white p-5">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-[13px] font-medium text-slate-800">Publié</p>
            <p className="mt-0.5 text-[12px] text-slate-500">
              {data.published
                ? 'Article visible publiquement sur /actualites'
                : 'Brouillon — non visible publiquement'}
            </p>
          </div>
          <label className="inline-flex cursor-pointer items-center">
            <input
              type="checkbox"
              className="peer sr-only"
              checked={data.published}
              onChange={(e) => update('published', e.target.checked)}
            />
            <span className="relative h-6 w-10 rounded-full bg-slate-300 transition peer-checked:bg-emerald-500">
              <span className="absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform peer-checked:translate-x-4" />
            </span>
          </label>
        </div>

        <div className="max-w-[220px]">
          <label className={labelClass}>Date de publication</label>
          <input
            type="date"
            value={isoToDateInput(data.publishedAt)}
            onChange={(e) =>
              update(
                'publishedAt',
                e.target.value ? new Date(e.target.value).toISOString() : null,
              )
            }
            className={inputClass}
          />
        </div>
      </div>

      {/* Contenu principal */}
      <div className="mt-6 space-y-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-[14px] font-semibold text-slate-900">Contenu</h2>

        <div>
          <label className={labelClass}>Titre</label>
          <input
            type="text"
            value={data.title}
            onChange={(e) => update('title', e.target.value)}
            className={inputClass}
          />
        </div>

        <div>
          <label className={labelClass}>Slug</label>
          <input
            type="text"
            value={data.slug}
            readOnly
            className={`${inputClass} cursor-not-allowed bg-slate-50 text-slate-500`}
          />
          <p className="mt-1 text-[11px] text-slate-400">
            Le slug ne peut pas être modifié après création.
          </p>
        </div>

        <div>
          <label className={labelClass}>Extrait</label>
          <p className="mt-0.5 text-[12px] text-slate-500">
            Résumé court affiché dans la liste des actualités.
          </p>
          <textarea
            value={data.excerpt}
            onChange={(e) => update('excerpt', e.target.value)}
            rows={3}
            className={inputClass}
          />
        </div>

        <ImageUploader
          label="Image de couverture"
          helper="Affichée en tête de l’article et dans la liste. Enregistrée comme couverture et image principale."
          value={data.coverImage}
          onChange={setCover}
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className={labelClass}>Catégorie</label>
            <input
              type="text"
              value={data.category}
              onChange={(e) => update('category', e.target.value)}
              placeholder="Communication, Marketing..."
              className={inputClass}
            />
          </div>
          <div>
            <label className={labelClass}>Temps de lecture (min)</label>
            <input
              type="number"
              min={0}
              value={data.readTime}
              onChange={(e) => update('readTime', Number(e.target.value))}
              className={inputClass}
            />
          </div>
        </div>

        <div>
          <label className={labelClass}>Tags</label>
          <p className="mt-0.5 text-[12px] text-slate-500">
            Séparés par des virgules.
          </p>
          <input
            type="text"
            value={tagsInput}
            onChange={(e) => setTagsInput(e.target.value)}
            placeholder="stratégie, digital, PME"
            className={inputClass}
          />
        </div>

        <RichTextEditor
          label="Corps de l’article"
          helper="Titres H2/H3, paragraphes, listes, liens et images."
          value={data.content}
          onChange={(html) => update('content', html)}
        />
      </div>

      {/* Auteur */}
      <div className="mt-6 space-y-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-[14px] font-semibold text-slate-900">Auteur</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className={labelClass}>Nom</label>
            <input
              type="text"
              value={data.author.name}
              onChange={(e) => updateAuthor('name', e.target.value)}
              placeholder="ES Solutions"
              className={inputClass}
            />
          </div>
          <div>
            <label className={labelClass}>Rôle</label>
            <input
              type="text"
              value={data.author.role}
              onChange={(e) => updateAuthor('role', e.target.value)}
              placeholder="Consultant communication"
              className={inputClass}
            />
          </div>
        </div>
        <ImageUploader
          label="Avatar de l’auteur"
          value={data.author.avatar}
          onChange={(url) => updateAuthor('avatar', url)}
          previewHeight={96}
        />
      </div>

      {/* SEO */}
      <div className="mt-6 space-y-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-[14px] font-semibold text-slate-900">SEO</h2>
        <div>
          <div className="flex items-center justify-between">
            <label className={labelClass}>Meta title</label>
            <CharCounter value={data.meta.title} max={60} />
          </div>
          <p className="mt-0.5 text-[12px] text-slate-500">
            Titre affiché dans les résultats Google (~60 caractères).
          </p>
          <input
            type="text"
            value={data.meta.title}
            onChange={(e) =>
              update('meta', { ...data.meta, title: e.target.value })
            }
            className={inputClass}
          />
        </div>
        <div>
          <div className="flex items-center justify-between">
            <label className={labelClass}>Meta description</label>
            <CharCounter value={data.meta.description} max={160} />
          </div>
          <p className="mt-0.5 text-[12px] text-slate-500">
            Description sous le titre dans Google (~160 caractères).
          </p>
          <textarea
            value={data.meta.description}
            onChange={(e) =>
              update('meta', { ...data.meta, description: e.target.value })
            }
            rows={3}
            className={inputClass}
          />
        </div>
      </div>

      {/* Footer */}
      <div className="mt-6 flex items-center justify-between gap-4">
        <div className="text-[12px]">
          {savedAt && !error && (
            <span className="text-emerald-600">
              Enregistré à {savedAt.toLocaleTimeString('fr-FR')}
            </span>
          )}
          {error && <span className="text-red-600">Erreur : {error}</span>}
        </div>
        <button
          type="button"
          onClick={save}
          disabled={saving}
          className="inline-flex h-9 items-center gap-1.5 rounded-lg bg-[#023654] px-4 text-[13px] font-medium text-white hover:bg-[#012A43] disabled:opacity-50"
        >
          {saving ? (
            <Loader2 size={13} className="animate-spin" />
          ) : (
            <Check size={13} />
          )}
          Enregistrer
        </button>
      </div>
    </div>
  );
}
