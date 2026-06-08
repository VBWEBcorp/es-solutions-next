'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  ExternalLink,
  Save,
  Check,
  AlertCircle,
  Loader2,
} from 'lucide-react';
import type { PageSchema, FieldDef } from '@/data/pageSchemas';
import ImageUploader from '@/components/admin/ImageUploader';
import RichTextEditor from '@/components/admin/RichTextEditor';

type Data = Record<string, string>;

/** Compteur de caracteres (affiche quand un charLimit est defini sur le champ). */
function CharCounter({ value, min, max }: { value: string; min?: number; max?: number }) {
  const len = value.length;
  const isShort = min !== undefined && len > 0 && len < min;
  const isOver = max !== undefined && len > max;
  const target = max ?? min ?? 100;
  const widthPct = Math.min(Math.round((len / target) * 100), 100);

  const barColor = len === 0
    ? 'bg-slate-200'
    : isOver
      ? 'bg-red-500'
      : isShort
        ? 'bg-amber-400'
        : 'bg-emerald-500';
  const textColor = isOver
    ? 'text-red-600'
    : isShort
      ? 'text-amber-600'
      : len > 0
        ? 'text-emerald-600'
        : 'text-slate-400';

  return (
    <div className="mt-1.5 flex items-center gap-2">
      <div className="relative h-1 flex-1 overflow-hidden rounded-full bg-slate-100">
        <div className={`h-full transition-all ${barColor}`} style={{ width: `${widthPct}%` }} />
      </div>
      <span className={`text-[11px] tabular-nums ${textColor}`}>
        {len}
        {max !== undefined ? ` / ${max}` : ''}
      </span>
    </div>
  );
}

const inputClass =
  'mt-2 block w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-[14px] text-slate-900 placeholder:text-slate-400 focus:border-[#023654] focus:outline-none focus:ring-2 focus:ring-[#023654]/10';

function Field({
  field,
  value,
  onChange,
}: {
  field: FieldDef;
  value: string;
  onChange: (v: string) => void;
}) {
  // Image & richtext reutilisent les composants partages (label gere a part).
  if (field.type === 'image') {
    return (
      <ImageUploader label={field.label} value={value} onChange={onChange} />
    );
  }
  if (field.type === 'richtext') {
    return <RichTextEditor label={field.label} value={value} onChange={onChange} />;
  }

  return (
    <div>
      <label className="block text-[13px] font-medium text-slate-800">{field.label}</label>

      {field.type === 'textarea' ? (
        <textarea
          value={value}
          placeholder={field.placeholder}
          rows={4}
          onChange={(e) => onChange(e.target.value)}
          className={`${inputClass} resize-y leading-relaxed`}
        />
      ) : (
        <input
          type={field.type === 'url' ? 'url' : 'text'}
          value={value}
          placeholder={field.placeholder}
          onChange={(e) => onChange(e.target.value)}
          className={inputClass}
        />
      )}

      {field.charLimit && (
        <CharCounter value={value} min={field.charLimit.min} max={field.charLimit.max} />
      )}
    </div>
  );
}

export default function PagesEditor({ schema }: { schema: PageSchema }) {
  const [data, setData] = useState<Data>({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [savedAt, setSavedAt] = useState<Date | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [dirty, setDirty] = useState(false);

  // Chargement des contenus stockes a l'arrivee.
  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        const res = await fetch(`/api/admin/pages/${schema.slug}`, { cache: 'no-store' });
        if (!res.ok) {
          const j = await res.json().catch(() => ({}));
          throw new Error(j.error || `HTTP ${res.status}`);
        }
        const j = await res.json();
        if (alive) setData((j.data as Data) ?? {});
      } catch (e) {
        if (alive) setError((e as Error).message);
      } finally {
        if (alive) setLoading(false);
      }
    })();
    return () => {
      alive = false;
    };
  }, [schema.slug]);

  const update = (key: string, value: string) => {
    setData((d) => ({ ...d, [key]: value }));
    setDirty(true);
    setSavedAt(null);
  };

  async function save() {
    setSaving(true);
    setError(null);
    try {
      const res = await fetch(`/api/admin/pages/${schema.slug}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data }),
      });
      if (!res.ok) {
        const j = await res.json().catch(() => ({}));
        throw new Error(j.error || `HTTP ${res.status}`);
      }
      setSavedAt(new Date());
      setDirty(false);
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setSaving(false);
    }
  }

  // Sauvegarde au Cmd+S / Ctrl+S.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 's') {
        e.preventDefault();
        if (dirty && !saving) save();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dirty, saving, data]);

  return (
    <div>
      {/* Header collant */}
      <div className="sticky top-14 z-20 -mx-4 mb-6 border-b border-slate-200/70 bg-slate-50/80 px-4 py-3 backdrop-blur-md md:-mx-8 md:px-8 md:py-4">
        <div className="flex items-center gap-3">
          <Link
            href="/admin/pages"
            className="inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-md text-slate-500 hover:bg-slate-100 hover:text-slate-900"
          >
            <ArrowLeft size={16} />
          </Link>
          <div className="min-w-0 flex-1">
            <h1 className="truncate text-[16px] font-semibold tracking-tight text-slate-900 md:text-[18px]">
              {schema.title}
            </h1>
            <a
              href={schema.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 truncate text-[12px] text-slate-500 hover:text-slate-900"
            >
              {schema.url}
              <ExternalLink size={11} />
            </a>
          </div>

          {/* Statut */}
          <div className="hidden items-center gap-3 text-[12px] md:flex">
            {error && (
              <span className="inline-flex items-center gap-1 text-red-600">
                <AlertCircle size={12} /> {error}
              </span>
            )}
            {!error && savedAt && !dirty && (
              <span className="inline-flex items-center gap-1 text-emerald-600">
                <Check size={12} /> Enregistré
              </span>
            )}
            {dirty && !saving && (
              <span className="text-amber-600">Modifications non enregistrées</span>
            )}
          </div>

          <a
            href={schema.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-9 flex-shrink-0 items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 text-[13px] font-medium text-slate-700 transition hover:border-slate-300"
          >
            <ExternalLink size={13} />
            <span className="hidden sm:inline">Voir la page</span>
          </a>

          <button
            type="button"
            onClick={save}
            disabled={!dirty || saving || loading}
            className="inline-flex h-9 flex-shrink-0 items-center gap-1.5 rounded-lg bg-[#EB6718] px-3 text-[13px] font-medium text-white transition hover:bg-[#d65c12] disabled:cursor-not-allowed disabled:opacity-50"
          >
            {saving ? (
              <>
                <Loader2 size={13} className="animate-spin" />
                <span className="hidden sm:inline">Enregistrement...</span>
              </>
            ) : (
              <>
                <Save size={13} />
                <span className="hidden sm:inline">Enregistrer</span>
              </>
            )}
          </button>
        </div>
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-20 text-slate-500">
          <Loader2 size={20} className="animate-spin" />
        </div>
      ) : (
        <div className="mx-auto max-w-3xl space-y-6">
          {schema.sections.map((section) => (
            <section
              key={section.title}
              className="overflow-hidden rounded-xl border border-slate-200/70 bg-white"
            >
              <header className="border-b border-slate-100 px-6 py-4">
                <h2 className="text-[15px] font-semibold text-slate-900">{section.title}</h2>
              </header>

              <div className="space-y-5 p-6">
                {section.fields.map((field) => (
                  <Field
                    key={field.key}
                    field={field}
                    value={data[field.key] ?? ''}
                    onChange={(v) => update(field.key, v)}
                  />
                ))}
              </div>
            </section>
          ))}

          <p className="pb-8 text-center text-[11px] text-slate-400">
            Astuce : Cmd+S (Mac) ou Ctrl+S (PC) pour enregistrer rapidement.
          </p>
        </div>
      )}
    </div>
  );
}
