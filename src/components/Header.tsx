'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen((v) => !v);

  const handleNavigation = () => {
    setIsOpen(false);
    setIsServicesOpen(false);
  };

  const menuItems = [
    { label: 'Accueil', href: '/' },
    { label: 'Notre offre', href: '/nos-offres' },
    {
      label: 'Expertise',
      href: '/expertise',
      submenu: [
        {
          label: 'Marketing',
          href: '/expertise/marketing',
          description: 'Stratégie et pilotage marketing',
        },
        {
          label: 'Communication externe',
          href: '/nos-offres/communication-externe-marketing',
          description: 'Stratégie, image de marque et réseaux sociaux',
        },
        {
          label: 'Communication interne',
          href: '/nos-offres/communication-interne',
          description: "Cohésion d'équipe et outils collaboratifs",
        },
        {
          label: 'Événementiel',
          href: '/nos-offres/evenementiel',
          description: "Organisation et gestion d'événements",
        },
      ],
    },
    { label: 'Nos réalisations', href: '/nos-realisations' },
    { label: 'Notre équipe', href: '/notre-equipe' },
    { label: 'Actualités', href: '/actualites' },
  ];

  return (
    <>
      {/* Header avec forme arrondie */}
      <div className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 pointer-events-none">
        <div className="transition-all duration-500 shadow-lg bg-[#023654]/95 backdrop-blur-md border border-white/10 rounded-3xl mx-auto max-w-7xl pointer-events-auto">
          <div className="px-6 py-4">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <Link href="/" className="group relative">
                <div className="relative overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://pub-e1e97dba7b2643bc9151a20668a49e5e.r2.dev/images/yBWBdDGV-ic-ne-logo-fonc.png"
                    alt="ES Solutions"
                    className="h-12 w-auto transition-all duration-300 group-hover:scale-105"
                  />
                  <div className="absolute bottom-[-6px] left-0 h-0.5 bg-[#EB6718]/50 w-0 group-hover:w-full transition-all duration-500"></div>
                </div>
              </Link>

              {/* Navigation Desktop */}
              <div className="hidden lg:flex items-center space-x-2 ml-auto">
                <nav className="flex items-center space-x-2">
                  {menuItems.map((item) => (
                    <div
                      key={item.label}
                      className="relative"
                      onMouseEnter={() => item.submenu && setIsServicesOpen(true)}
                      onMouseLeave={() => item.submenu && setIsServicesOpen(false)}
                    >
                      <Link
                        href={item.href}
                        className={`relative px-6 py-3 text-sm font-medium transition-all duration-300 rounded-full flex items-center ${
                          pathname === item.href
                            ? 'text-[#EB6718] bg-white/10'
                            : 'text-white hover:text-[#EB6718] hover:bg-white/10'
                        }`}
                      >
                        <span>{item.label}</span>
                        {item.submenu && (
                          <ChevronDown
                            className={`ml-2 h-4 w-4 transition-all duration-300 ${
                              isServicesOpen ? 'rotate-180 text-[#EB6718]' : 'text-white'
                            }`}
                          />
                        )}
                      </Link>

                      {item.submenu && (
                        <div
                          className={`absolute left-1/2 -translate-x-1/2 mt-2 w-[300px] rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.3)] bg-[#023654]/95 backdrop-blur-md border border-white/10 transform transition-all duration-200 ${
                            isServicesOpen
                              ? 'opacity-100 visible translate-y-0'
                              : 'opacity-0 invisible translate-y-2'
                          }`}
                        >
                          <div className="p-4">
                            {item.submenu.map((subitem) => (
                              <Link
                                key={subitem.label}
                                href={subitem.href}
                                onClick={handleNavigation}
                                className="flex items-center justify-between p-3 rounded-lg transition-all duration-200 group hover:bg-white/10"
                              >
                                <span className="font-medium text-white text-sm group-hover:text-[#EB6718] transition-colors duration-200">
                                  {subitem.label}
                                </span>
                                <ArrowRight className="h-4 w-4 text-[#EB6718] opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-200" />
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </nav>

                {/* CTA Button Desktop */}
                <Link
                  href="/contact"
                  className="group relative px-5 py-2.5 bg-[#EB6718] text-white text-sm font-medium rounded-full overflow-hidden transition-all duration-300 hover:bg-white hover:text-[#023654] shadow-md hover:shadow-lg"
                >
                  <span className="relative z-10 font-norwester">Contact</span>
                  <div className="absolute inset-0 bg-white/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
              </div>

              {/* Menu Mobile Button */}
              <button
                className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors duration-200"
                onClick={toggleMenu}
                aria-label="Menu"
              >
                {isOpen ? (
                  <X className="h-6 w-6 text-white" />
                ) : (
                  <Menu className="h-6 w-6 text-white" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Menu Mobile */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={handleNavigation} />

        <div
          className={`absolute top-24 left-4 right-4 bg-[#023654]/95 backdrop-blur-md border border-white/10 rounded-3xl max-h-[calc(100dvh-8rem)] overflow-y-auto overscroll-contain shadow-xl transition-all duration-500 ${
            isOpen ? 'translate-y-0 scale-100 opacity-100' : 'translate-y-[-20px] scale-95 opacity-0'
          }`}
        >
          <div className="p-6">
            <div className="space-y-3 mb-6">
              {menuItems.map((item) => (
                <div key={item.label}>
                  <Link
                    href={item.href}
                    onClick={handleNavigation}
                    className={`block px-6 py-4 text-lg font-medium rounded-2xl transition-all duration-300 ${
                      pathname === item.href
                        ? 'text-[#EB6718] bg-white/10'
                        : 'text-white hover:text-[#EB6718] hover:bg-white/10'
                    }`}
                  >
                    {item.label}
                  </Link>

                  {item.submenu && (
                    <div className="ml-4 mt-2 space-y-2">
                      {item.submenu.map((subitem) => (
                        <Link
                          key={subitem.label}
                          href={subitem.href}
                          onClick={handleNavigation}
                          className="block text-gray-300 hover:text-[#EB6718] px-4 py-2 text-sm transition-colors rounded-xl hover:bg-white/5"
                        >
                          {subitem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-6" />

            <Link
              href="/contact"
              onClick={handleNavigation}
              className="block w-full px-6 py-4 bg-[#EB6718] text-white font-semibold rounded-2xl text-center transition-all duration-300 hover:bg-white hover:text-[#023654] shadow-md"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
