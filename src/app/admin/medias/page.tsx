'use client';

import { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import ImageUploader from '@/components/admin/ImageUploader';

export default function AdminMediasPage() {
  const [url, setUrl] = useState('');
  const [copied, setCopied] = useState(false);

  async function copy() {
    if (!url) return;
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // Clipboard indisponible : on ignore silencieusement.
    }
  }

  return (
    <div className="mx-auto max-w-2xl">
      <h1 className="text-[22px] font-semibold tracking-tight text-slate-900">
        Médias
      </h1>
      <p className="mt-1 text-[13px] text-slate-500">
        Téléversez une image (compressée puis stockée sur Cloudflare R2) et copiez
        son lien pour le réutiliser ailleurs.
      </p>

      <div className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <ImageUploader
          label="Image"
          helper="Glissez-déposez ou choisissez un fichier, ou collez un lien existant."
          value={url}
          onChange={setUrl}
          previewHeight={160}
        />

        {url && (
          <div className="mt-5">
            <label className="block text-[13px] font-medium text-slate-800">
              Lien de l’image
            </label>
            <div className="mt-2 flex gap-2">
              <input
                type="text"
                readOnly
                value={url}
                onFocus={(e) => e.currentTarget.select()}
                className="block flex-1 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-[13px] text-slate-700 focus:outline-none"
              />
              <button
                type="button"
                onClick={copy}
                className="inline-flex h-9 flex-shrink-0 items-center gap-1.5 rounded-lg bg-[#023654] px-3 text-[13px] font-medium text-white hover:bg-[#012A43]"
              >
                {copied ? <Check size={13} /> : <Copy size={13} />}
                {copied ? 'Copié' : 'Copier'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
