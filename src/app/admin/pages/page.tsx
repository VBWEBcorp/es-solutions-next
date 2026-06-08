import Link from 'next/link';
import { FileText, ArrowRight, ExternalLink } from 'lucide-react';
import { PAGE_SCHEMAS } from '@/data/pageSchemas';

export default function AdminPagesList() {
  return (
    <div className="mx-auto max-w-3xl">
      <div className="mb-6">
        <h1 className="text-[22px] font-semibold tracking-tight text-slate-900">Pages</h1>
        <p className="mt-0.5 text-[13px] text-slate-500">
          Modifiez les textes et images des pages du site.
        </p>
      </div>

      <ul className="space-y-2">
        {PAGE_SCHEMAS.map((p) => (
          <li
            key={p.slug}
            className="group flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-2 pr-3 transition hover:border-slate-300"
          >
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[#023654]/5 text-[#023654]">
              <FileText size={18} strokeWidth={1.75} />
            </div>

            <Link href={`/admin/pages/${p.slug}`} className="min-w-0 flex-1">
              <p className="truncate text-[14px] font-medium text-slate-900">{p.title}</p>
              <p className="truncate text-[12px] text-slate-500">{p.url}</p>
            </Link>

            <a
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              title="Voir la page"
              className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-md text-slate-400 hover:bg-slate-100 hover:text-slate-700"
            >
              <ExternalLink size={14} />
            </a>

            <Link
              href={`/admin/pages/${p.slug}`}
              title="Modifier"
              className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-md text-slate-400 hover:bg-slate-100 hover:text-[#023654]"
            >
              <ArrowRight
                size={15}
                className="transition group-hover:translate-x-0.5 group-hover:text-[#023654]"
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
