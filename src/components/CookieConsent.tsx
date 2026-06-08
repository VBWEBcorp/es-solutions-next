'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X } from 'lucide-react';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasConsent = localStorage.getItem('cookieConsent');
    if (!hasConsent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'false');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, x: -50 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          exit={{ opacity: 0, y: 50, x: -50 }}
          transition={{ duration: 0.6, type: 'spring', bounce: 0.2 }}
          className="fixed bottom-6 left-6 z-50 max-w-sm bg-[#023654]/95 backdrop-blur-sm rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.25)] border border-white/10 overflow-hidden"
        >
          <div className="relative">
            <button
              onClick={handleDecline}
              className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors p-1 hover:bg-white/10 rounded-full"
              aria-label="Fermer"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <Cookie className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-norwester text-[#EB6718] ml-3">Cookies &amp; Confidentialité</h3>
              </div>

              <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                Nous utilisons des cookies pour améliorer votre expérience sur notre site. En continuant
                votre navigation, vous acceptez notre politique de confidentialité.
              </p>

              <div className="flex items-center gap-3">
                <motion.button
                  onClick={handleAccept}
                  className="flex-1 px-4 py-2.5 bg-white text-[#023654] font-norwester rounded-full hover:bg-gray-200 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Accepter
                </motion.button>
                <motion.button
                  onClick={handleDecline}
                  className="flex-1 px-4 py-2.5 bg-white/20 text-white font-norwester rounded-full hover:bg-white/30 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Refuser
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
