'use client';

import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

const FloatingContact = () => {
  return (
    <motion.a
      href="mailto:Edouard@es-solutions.fr"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#023654] hover:bg-[#012A43] rounded-full flex items-center justify-center shadow-[0_8px_32px_rgba(0,0,0,0.25)] backdrop-blur-sm transition-all duration-300 border border-white/10"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 400, damping: 15 }}
      aria-label="Nous contacter par email"
    >
      <Mail className="h-6 w-6 text-white" />
    </motion.a>
  );
};

export default FloatingContact;
