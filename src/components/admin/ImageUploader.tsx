'use client';

import { useRef, useState } from 'react';
import {
  ImageIcon,
  Upload,
  Link2,
  Trash2,
  Check,
  AlertCircle,
  Loader2,
} from 'lucide-react';
import { compressImage, formatBytes } from '@/lib/imageCompress';

interface Props {
  label?: string;
  helper?: string;
  value: string;
  onChange: (url: string) => void;
  /** Hauteur de l'apercu (px). Defaut 128. */
  previewHeight?: number;
}

type Mode = 'upload' | 'url';

export default function ImageUploader({
  label,
  helper,
  value,
  onChange,
  previewHeight = 128,
}: Props) {
  const [mode, setMode] = useState<Mode>('upload');
  const [urlInput, setUrlInput] = useState('');
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [dragging, setDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  async function handleFile(file: File) {
    if (!file.type.startsWith('image/')) {
      setError('Le fichier doit être une image.');
      return;
    }
    setError(null);
    setUploading(true);
    setProgress('Compression...');

    try {
      // Compression cote navigateur (max 1920px, qualite 85%)
      const result = await compressImage(file, { maxWidth: 1920, quality: 0.85 });
      const reduction = Math.round(
        100 - (result.compressedSize / result.originalSize) * 100,
      );
      setProgress(
        `Compression : ${formatBytes(result.originalSize)} -> ${formatBytes(
          result.compressedSize,
        )} (-${reduction}%). Upload...`,
      );

      // Upload R2
      const fd = new FormData();
      fd.append('file', result.blob, result.filename);
      fd.append('filename', result.filename);
      const res = await fetch('/api/admin/upload', { method: 'POST', body: fd });
      if (!res.ok) {
        const j = await res.json().catch(() => ({}));
        throw new Error(j.error || `HTTP ${res.status}`);
      }
      const json: { url: string } = await res.json();
      onChange(json.url);
      setProgress(null);
    } catch (e) {
      setError((e as Error).message);
      setProgress(null);
    } finally {
      setUploading(false);
    }
  }

  function handleUrlSubmit() {
    const v = urlInput.trim();
    if (!v) return;
    onChange(v);
    setUrlInput('');
  }

  return (
    <div>
      {label && (
        <label className="block text-[13px] font-medium text-slate-800">{label}</label>
      )}
      {helper && <p className="mt-0.5 text-[12px] text-slate-500">{helper}</p>}

      {/* Apercu de l'image actuelle / zone de depot */}
      <div
        onDragOver={(e) => {
          e.preventDefault();
          setDragging(true);
        }}
        onDragLeave={() => setDragging(false)}
        onDrop={(e) => {
          e.preventDefault();
          setDragging(false);
          const f = e.dataTransfer.files?.[0];
          if (f) handleFile(f);
        }}
        className={`mt-2 overflow-hidden rounded-lg border bg-white transition ${
          dragging ? 'border-[#EB6718] ring-2 ring-[#EB6718]/20' : 'border-slate-200'
        }`}
      >
        {value ? (
          <div className="flex items-stretch">
            <div
              className="relative flex-shrink-0 overflow-hidden bg-slate-100"
              style={{ height: previewHeight, width: previewHeight * 1.4 }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={value} alt="" className="h-full w-full object-cover" />
            </div>
            <div className="flex flex-1 flex-col justify-between p-3">
              <p className="line-clamp-2 break-all text-[12px] text-slate-600">{value}</p>
              <button
                type="button"
                onClick={() => onChange('')}
                className="inline-flex items-center gap-1 self-start text-[12px] text-red-600 hover:underline"
              >
                <Trash2 size={12} />
                Retirer
              </button>
            </div>
          </div>
        ) : (
          <div
            className="flex items-center justify-center text-slate-400"
            style={{ height: previewHeight }}
          >
            <div className="text-center">
              <ImageIcon size={20} strokeWidth={1.5} className="mx-auto" />
              <p className="mt-1 text-[12px]">
                {dragging ? 'Déposez l’image' : 'Aucune image'}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Onglets Upload / URL */}
      <div className="mt-3 inline-flex gap-1 rounded-lg border border-slate-200 bg-white p-1 text-[12px]">
        <button
          type="button"
          onClick={() => setMode('upload')}
          className={`inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 font-medium transition ${
            mode === 'upload'
              ? 'bg-[#023654] text-white'
              : 'text-slate-600 hover:bg-slate-50'
          }`}
        >
          <Upload size={12} />
          Télécharger
        </button>
        <button
          type="button"
          onClick={() => setMode('url')}
          className={`inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 font-medium transition ${
            mode === 'url'
              ? 'bg-[#023654] text-white'
              : 'text-slate-600 hover:bg-slate-50'
          }`}
        >
          <Link2 size={12} />
          Coller un lien
        </button>
      </div>

      {/* Mode Upload */}
      {mode === 'upload' && (
        <div className="mt-2">
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => {
              const f = e.target.files?.[0];
              if (f) handleFile(f);
              e.target.value = '';
            }}
          />
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            disabled={uploading}
            className="inline-flex h-9 items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 text-[13px] font-medium text-slate-700 hover:border-slate-300 disabled:opacity-50"
          >
            {uploading ? (
              <>
                <Loader2 size={13} className="animate-spin" />
                En cours...
              </>
            ) : (
              <>
                <Upload size={13} />
                Choisir un fichier
              </>
            )}
          </button>
          <p className="mt-1.5 text-[11px] text-slate-500">
            JPEG, PNG ou WebP — ou glissez-déposez. Compressé automatiquement (max
            1920 px).
          </p>
        </div>
      )}

      {/* Mode URL (ex : lien ImgBB https://i.ibb.co/...) */}
      {mode === 'url' && (
        <div className="mt-2 flex gap-2">
          <input
            type="url"
            placeholder="https://i.ibb.co/xxxx/image.jpg"
            value={urlInput}
            onChange={(e) => setUrlInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                handleUrlSubmit();
              }
            }}
            className="block flex-1 rounded-lg border border-slate-200 bg-white px-3 py-2 text-[13px] text-slate-900 placeholder:text-slate-400 focus:border-[#023654] focus:outline-none focus:ring-2 focus:ring-[#023654]/10"
          />
          <button
            type="button"
            onClick={handleUrlSubmit}
            className="inline-flex h-9 items-center gap-1.5 rounded-lg bg-[#023654] px-3 text-[13px] font-medium text-white hover:bg-[#012A43]"
          >
            <Check size={13} />
            Valider
          </button>
        </div>
      )}

      {/* Etat */}
      {progress && (
        <p className="mt-2 inline-flex items-center gap-1.5 text-[12px] text-slate-600">
          <Loader2 size={12} className="animate-spin" />
          {progress}
        </p>
      )}
      {error && (
        <p className="mt-2 inline-flex items-center gap-1.5 text-[12px] text-red-600">
          <AlertCircle size={12} />
          {error}
        </p>
      )}
    </div>
  );
}
