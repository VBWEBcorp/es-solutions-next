'use client';

import { motion } from 'framer-motion';

const DEFAULT_LEGAL_BODY = `<h2 class="text-2xl font-norwester text-accent mb-6">1. Informations légales</h2>
<p>
  Conformément aux dispositions des articles 6-III et 19 de la Loi n° 2004-575 du 21 juin 2004 pour la Confiance dans l'économie numérique, dite L.C.E.N., nous portons à la connaissance des utilisateurs et visiteurs du site les informations suivantes :
</p>

<h3 class="text-xl font-norwester text-accent mt-8 mb-4">1.1. Informations légales :</h3>
<p>
  Statut du propriétaire : Société<br />
  Dénomination sociale : ES SOLUTIONS<br />
  Adresse : 30 RUE FAIDHERBE, 03200 VICHY<br />
  Téléphone : +33 (0)6 88 10 84 46<br />
  Email : contact@es-solutions.fr<br />
  SIRET : [Numéro SIRET]<br />
  Code APE : 70.22Z - Conseil pour les affaires et autres conseils de gestion
</p>

<h3 class="text-xl font-norwester text-accent mt-8 mb-4">1.2. Conception et réalisation :</h3>
<p>
  Le site a été conçu et réalisé par :<br />
  VBWEB<br />
  Site web : <a href="https://vbweb.fr" class="text-accent hover:text-white transition-colors">https://vbweb.fr</a>
</p>

<h3 class="text-xl font-norwester text-accent mt-8 mb-4">1.3. Hébergement :</h3>
<p>
  Le site est hébergé par :<br />
  Netlify, Inc.<br />
  2325 3rd Street, Suite 215<br />
  San Francisco, California 94107<br />
  United States
</p>

<h2 class="text-2xl font-norwester text-accent mt-12 mb-6">2. Activité</h2>
<p>
  ES SOLUTIONS est une société spécialisée dans le conseil en stratégie de communication, l'ingénierie, le développement et la gestion de projets, l'assistance à maîtrise d'ouvrage sur tous types de projets, la formation, l'aide à la décision et l'accompagnement personnel.
</p>
<p>
  Convention collective applicable : Bureaux d'études techniques, des cabinets d'ingénieurs-conseils et des sociétés de conseils (BET, SYNTEC) - IDCC 1486
</p>

<h2 class="text-2xl font-norwester text-accent mt-12 mb-6">3. Propriété intellectuelle</h2>
<p>
  L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
</p>
<p>
  La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est formellement interdite sauf autorisation expresse du directeur de la publication.
</p>

<h2 class="text-2xl font-norwester text-accent mt-12 mb-6">4. Liens hypertextes</h2>
<p>
  Les liens hypertextes mis en place dans le cadre du présent site internet en direction d'autres ressources présentes sur le réseau Internet ne sauraient engager la responsabilité d'ES SOLUTIONS.
</p>

<h2 class="text-2xl font-norwester text-accent mt-12 mb-6">5. Responsabilité</h2>
<p>
  Les informations fournies sur ce site le sont à titre informatif. ES SOLUTIONS ne saurait garantir l'exactitude, la complétude, l'actualité des informations diffusées sur son site. En conséquence, l'utilisateur reconnaît utiliser ces informations sous sa responsabilité exclusive.
</p>`;

const LegalNotice = ({ data }: { data?: Record<string, string> }) => {
  const pageTitlePart1 = data?.page_title_part1 || 'MENTIONS';
  const pageTitlePart2 = data?.page_title_part2 || 'LÉGALES';
  const pageBody = data?.page_body || DEFAULT_LEGAL_BODY;

  return (
    <div className="pt-24">
      <section className="bg-[#023654] py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-norwester mb-6">
              {pageTitlePart1} <span className="text-accent">{pageTitlePart2}</span>
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-[#012A43] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="prose prose-invert prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: pageBody }}
          />
        </div>
      </section>
    </div>
  );
};

export default LegalNotice;
