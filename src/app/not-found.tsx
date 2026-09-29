import Link from 'next/link';

/**
 * Page 404.
 *
 * Clin d'œil au métier : une agence de communication qui rate un message.
 * L'en-tête et le pied de page viennent de PublicChrome, monté dans le
 * layout racine.
 */

const sorties = [
  { href: '/expertise', label: 'Expertise' },
  { href: '/nos-offres', label: 'Nos offres' },
  { href: '/nos-realisations', label: 'Réalisations' },
  { href: '/notre-equipe', label: "L'équipe" },
];

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center px-5 py-24">
      <div className="mx-auto max-w-xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#EB6718]">
          Erreur 404
        </p>

        <h1 className="mt-6 text-4xl font-bold leading-[1.12] tracking-tight text-[#023654] sm:text-5xl">
          Ce message
          <span className="block text-[#EB6718]">n&apos;est jamais passé</span>
        </h1>

        <p className="mx-auto mt-6 max-w-md text-pretty text-[17px] leading-relaxed text-slate-600">
          La page que vous cherchez n&apos;existe pas ou a changé
          d&apos;adresse. Pour tous les autres, on a un bien meilleur taux de
          transmission.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex h-12 items-center justify-center rounded-md bg-[#EB6718] px-7 text-[0.95rem] font-semibold text-white transition-opacity hover:opacity-90"
          >
            Retour à l&apos;accueil
          </Link>
          <Link
            href="/contact"
            className="inline-flex h-12 items-center justify-center rounded-md border-2 border-[#023654] px-7 text-[0.95rem] font-semibold text-[#023654] transition-colors hover:bg-[#023654] hover:text-white"
          >
            Nous contacter
          </Link>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {sorties.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="text-sm text-slate-500 underline-offset-4 transition-colors hover:text-[#023654] hover:underline"
            >
              {s.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
