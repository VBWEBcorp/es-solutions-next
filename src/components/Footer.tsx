import Link from 'next/link';
import { Youtube, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#023754] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="relative">
            <div className="w-48 h-24 relative mb-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://pub-1eef308d0a754271b1c96b38618969fe.r2.dev/images/yBWBdDGV-ic-ne-logo-fonc.png"
                alt="ES Solutions"
                className="absolute inset-0 w-full h-full object-contain"
              />
            </div>
            <p className="text-gray-300 mb-4">
              Votre solution consulting en communication, marketing et événementiel
            </p>
            <div className="flex space-x-6">
              <a
                href="https://www.youtube.com/@ES_Solutions.Consulting"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#EB6718] transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/company/es-solutions-communication-%C3%A9v%C3%A9nementiel/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#EB6718] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-4 md:mt-0">
            <h3 className="text-base sm:text-lg font-bold mb-4 tracking-wide">NAVIGATION</h3>
            <ul className="space-y-2">
              <li><Link href="/expertise" className="text-gray-300 hover:text-[#EB6718] transition-colors font-medium tracking-wide text-sm">Expertise</Link></li>
              <li><Link href="/actualites" className="text-gray-300 hover:text-[#EB6718] transition-colors font-medium tracking-wide text-sm">Actualités</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-[#EB6718] transition-colors font-medium tracking-wide text-sm">Candidater</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-[#EB6718] transition-colors font-medium tracking-wide text-sm">Contact</Link></li>
            </ul>
          </div>

          {/* Nos Offres */}
          <div className="mt-4 md:mt-0">
            <h3 className="text-base sm:text-lg font-bold mb-4 tracking-wide">NOS OFFRES</h3>
            <ul className="space-y-2">
              <li><Link href="/nos-offres" className="text-gray-300 hover:text-[#EB6718] transition-colors font-medium tracking-wide text-sm">Starter Pack ES</Link></li>
              <li><Link href="/nos-offres" className="text-gray-300 hover:text-[#EB6718] transition-colors font-medium tracking-wide text-sm">Pack Boost ES</Link></li>
              <li><Link href="/nos-offres" className="text-gray-300 hover:text-[#EB6718] transition-colors font-medium tracking-wide text-sm">Pack ES 360°</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="mt-4 md:mt-0 md:col-start-4">
            <h3 className="text-base sm:text-lg font-bold mb-4 tracking-wide">CONTACT</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-300">
                <Phone className="h-5 w-5 mr-2" />
                <a href="tel:0688108446" className="hover:text-[#EB6718] transition-colors">06 88 10 84 46</a>
              </li>
              <li className="flex items-center text-gray-300">
                <Mail className="h-5 w-5 mr-2" />
                <a href="mailto:edouard@es-solutions.fr" className="hover:text-[#EB6718] transition-colors">Edouard@es-solutions.fr</a>
              </li>
              <li className="flex items-start text-gray-300">
                <MapPin className="h-5 w-5 mr-2 mt-1" />
                <span>30 RUE FAIDHERBE, 03200 VICHY</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#023654] mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © {new Date().getFullYear()} ES Solutions. Tous droits réservés.
            </p>
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 whitespace-nowrap">
              <span className="text-gray-300 text-sm">
                Une création signée{' '}
                <a href="https://vbweb.fr" target="_blank" rel="noopener noreferrer" className="text-[#EB6718] hover:text-white transition-colors">VBWEB</a>
              </span>
              <span className="text-[#EB6718] text-xl mx-4 hidden md:inline">•</span>
              <div className="flex space-x-4">
                <Link href="/mentions-legales" className="text-gray-300 hover:text-[#EB6718] text-sm transition-colors">Mentions légales</Link>
                <Link href="/politique-confidentialite" className="text-gray-300 hover:text-[#EB6718] text-sm transition-colors">Politique de confidentialité</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
