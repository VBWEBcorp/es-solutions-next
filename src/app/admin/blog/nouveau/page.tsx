'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Loader2, Plus } from 'lucide-react';

// Combining diacritical marks U+0300..U+036F (construit sans caracteres non-ASCII).
const DIACRITICS = new RegExp(
  '[' + String.fromCharCode(0x300) + '-' + String.fromCharCode(0x36f) + ']',
  'g',
);

function slugify(s: string): string {
  return s
    .toLowerCase()
    .normalize('NFD')
    .replace(DIACRITICS, '')
    .replace(/[^a-z0-9-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export default function NewBlogArticlePage() {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [slugTouched, setSlugTouched] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const effectiveSlug = slugTouched ? slug : slugify(title);

  async function submit() {
    setError(null);
    if (!title.trim()) return setError('Titre obligatoire');
    if (!effectiveSlug) return setError('Slug obligatoire');
    setSubmitting(true);
    try {
      const res = await fetch('/api/admin/blog', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: title.trim(), slug: effectiveSlug }),
      });
      if (!res.ok) {
        const j = await res.json().catch(() => ({}));
        throw new Error(j.error || `HTTP ${res.status}`);
      }
      const j: { slug: string } = await res.json();
      router.push(`/admin/blog/${j.slug}`);
    } catch (e) {
      setError((e as Error).message);
      setSubmitting(false);
    }
  }

  return (
    <div className="mx-auto max-w-xl">
      <Link
        href="/admin/blog"
        className="mb-6 inline-flex items-center gap-1.5 text-[13px] text-slate-500 hover:text-slate-900"
      >
        <ArrowLeft size={14} />
        Retour aux articles
      </Link>

      <h1 className="mb-1 text-[22px] font-semibold tracking-tight text-slate-900">
        Nouvel article
      </h1>
      <p className="mb-8 text-[13px] text-slate-500">
        Renseignez le titre et le slug. Vous pourrez éditer tout le contenu juste
        après.
      </p>

      <div className="space-y-5 rounded-xl border border-slate-200 bg-white p-5">
        <div>
          <label className="block text-[13px] font-medium text-slate-800">Titre</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Les tendances de la communication digitale en 2026"
            className="mt-2 block w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-[14px] text-slate-900 placeholder:text-slate-400 focus:border-[#023654] focus:outline-none focus:ring-2 focus:ring-[#023654]/10"
          />
        </div>

        <div>
          <label className="block text-[13px] font-medium text-slate-800">Slug</label>
          <p className="mt-0.5 text-[12px] text-slate-500">
            URL finale : /actualites/{effectiveSlug || '...'}
          </p>
          <input
            type="text"
            value={effectiveSlug}
            onChange={(e) => {
              setSlug(slugify(e.target.value));
              setSlugTouched(true);
            }}
            placeholder="tendances-communication-digitale-2026"
            className="mt-2 block w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-[14px] text-slate-900 placeholder:text-slate-400 focus:border-[#023654] focus:outline-none focus:ring-2 focus:ring-[#023654]/10"
          />
        </div>

        {error && (
          <div className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-[13px] text-red-700">
            {error}
          </div>
        )}

        <button
          type="button"
          onClick={submit}
          disabled={submitting}
          className="inline-flex h-9 items-center gap-1.5 rounded-lg bg-[#023654] px-4 text-[13px] font-medium text-white hover:bg-[#012A43] disabled:opacity-50"
        >
          {submitting ? (
            <Loader2 size={13} className="animate-spin" />
          ) : (
            <Plus size={13} />
          )}
          Créer l’article
        </button>
      </div>
    </div>
  );
}
