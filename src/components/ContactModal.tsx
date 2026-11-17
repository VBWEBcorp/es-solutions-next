'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, ArrowLeft, Send } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultOffer?: string[];
}

type FormData = {
  company: string;
  size: string;
  name: string;
  email: string;
  phone: string;
  offers: string[];
  frequency: string;
  message: string;
}

const ContactModal = ({ isOpen, onClose, defaultOffer }: ContactModalProps) => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    company: '',
    size: '',
    name: '',
    email: '',
    phone: '',
    offers: defaultOffer || [],
    frequency: '',
    message: '',
  });

  const offers = [
    {
      id: 'strategie',
      title: 'Stratégie de Communication',
      iconUrl: 'https://i.ibb.co/zGXVrCnQ/strategy.png',
      description: 'Audit, stratégie et pilotage de vos actions'
    },
    {
      id: 'externe',
      title: 'Communication Externe & Marketing',
      iconUrl: 'https://pub-1eef308d0a754271b1c96b38618969fe.r2.dev/images/1Y3wCStk-com-externe.png',
      description: 'Stratégie, image de marque et réseaux sociaux'
    },
    {
      id: 'interne',
      title: 'Communication Interne',
      iconUrl: 'https://pub-1eef308d0a754271b1c96b38618969fe.r2.dev/images/C5n48TcF-com-interne.png',
      description: 'Cohésion d\'équipe et outils collaboratifs'
    },
    {
      id: 'evenementiel',
      title: 'Communication Événementielle',
      iconUrl: 'https://pub-1eef308d0a754271b1c96b38618969fe.r2.dev/images/Y4hFfPTG-evenementiel.png',
      description: 'Organisation et gestion d\'événements'
    }
  ];

  const updateFormData = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const toggleOffer = (offerId: string) => {
    setFormData(prev => ({
      ...prev,
      offers: prev.offers.includes(offerId)
        ? prev.offers.filter(id => id !== offerId)
        : [...prev.offers, offerId]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const offersText = formData.offers.map(offer => {
        switch(offer) {
          case 'strategie': return 'Stratégie de Communication';
          case 'externe': return 'Communication Externe & Marketing';
          case 'interne': return 'Communication Interne';
          case 'evenementiel': return 'Communication Événementielle';
          default: return offer;
        }
      }).join(', ');

      const formDataToSend = new FormData();
      formDataToSend.append('Type de demande', 'PROJET DE COMMUNICATION - Modal');
      formDataToSend.append('Nom complet', formData.name);
      formDataToSend.append('Email professionnel', formData.email);
      formDataToSend.append('Téléphone', formData.phone);
      formDataToSend.append('Entreprise', formData.company);
      formDataToSend.append('Taille entreprise', formData.size);
      formDataToSend.append('Services souhaités', offersText);
      formDataToSend.append('Fréquence souhaitée', `${formData.frequency} jour(s) par semaine`);
      formDataToSend.append('Message du client', formData.message || 'Aucun message spécifique');

      const response = await fetch('https://formspree.io/f/mnnbqbko', {
        method: 'POST',
        body: formDataToSend,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setIsSubmitted(true);
        setTimeout(() => {
          onClose();
          setIsSubmitted(false);
          setStep(1);
          setFormData({
            company: '',
            size: '',
            name: '',
            email: '',
            phone: '',
            offers: defaultOffer || [],
            frequency: '',
            message: '',
          });
        }, 2000);
      } else {
        throw new Error('Erreur lors de l\'envoi');
      }
    } catch (error) {
      console.error('Erreur:', error);
      alert(`Erreur lors de l'envoi: ${error instanceof Error ? error.message : 'Erreur inconnue'}. Veuillez réessayer.`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const steps = [
    {
      title: "Votre entreprise",
      fields: (
        <>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-200 mb-2">Nom de l'entreprise</label>
              <input
                type="text"
                value={formData.company}
                onChange={(e) => updateFormData('company', e.target.value)}
                className="w-full px-4 py-2 bg-white/5 rounded-lg border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-accent"
                placeholder="Votre entreprise"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-200 mb-2">Taille de l'entreprise</label>
              <select
                value={formData.size}
                onChange={(e) => updateFormData('size', e.target.value)}
                className="w-full px-4 py-2 bg-white/5 rounded-lg border border-white/10 text-white focus:outline-none focus:border-accent transition-all duration-300"
              >
                <option value="" className="bg-[#012A43]">Sélectionnez une option</option>
                <option value="1-10" className="bg-[#012A43]">1-10 employés</option>
                <option value="11-50" className="bg-[#012A43]">11-50 employés</option>
                <option value="51-200" className="bg-[#012A43]">51-200 employés</option>
                <option value="201+" className="bg-[#012A43]">201+ employés</option>
              </select>
            </div>
          </div>
        </>
      )
    },
    {
      title: "Vos coordonnées",
      fields: (
        <>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-200 mb-2">Nom complet</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => updateFormData('name', e.target.value)}
                className="w-full px-4 py-2 bg-white/5 rounded-lg border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-accent transition-all duration-300"
                placeholder="Votre nom"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-200 mb-2">Email professionnel</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => updateFormData('email', e.target.value)}
                className="w-full px-4 py-2 bg-white/5 rounded-lg border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-accent transition-all duration-300"
                placeholder="vous@entreprise.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-200 mb-2">Téléphone</label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => updateFormData('phone', e.target.value)}
                className="w-full px-4 py-2 bg-white/5 rounded-lg border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-accent transition-all duration-300"
                placeholder="Votre numéro"
              />
            </div>
          </div>
        </>
      )
    },
    {
      title: "Vos besoins",
      fields: (
        <div className="space-y-6">
          <label className="block text-sm font-medium text-gray-200 mb-4">Offres souhaitées</label>
          <div className="grid grid-cols-1 gap-4">
            {offers.map((offer) => {
              const isSelected = formData.offers.includes(offer.id);
              return (
                <motion.div
                  key={offer.id}
                  onClick={() => toggleOffer(offer.id)}
                  className={`p-4 rounded-xl cursor-pointer transition-all duration-300 ${
                    isSelected ? 'bg-[#EB6718] text-white' : 'bg-white/5 text-white hover:bg-white/10'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center">
                    <div>
                      <h3 className="font-norwester text-lg group-hover:text-[#EB6718] mb-1">{offer.title}</h3>
                      <p className={`text-sm mt-1 ${isSelected ? 'text-white/80' : 'text-gray-400'}`}>
                        {offer.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
          <div className="mt-6">
            <div>
              <label className="block text-sm font-medium text-gray-200 mb-2">Fréquence souhaitée</label>
              <select
                value={formData.frequency}
                onChange={(e) => updateFormData('frequency', e.target.value)}
                className="w-full px-4 py-2 bg-white/5 rounded-lg border border-white/10 text-white focus:outline-none focus:border-accent transition-all duration-300"
              >
                <option value="" className="bg-[#012A43]">Sélectionnez une fréquence</option>
                <option value="1" className="bg-[#012A43]">1 jour par semaine</option>
                <option value="2" className="bg-[#012A43]">2 jours par semaine</option>
                <option value="3" className="bg-[#012A43]">3 jours par semaine</option>
                <option value="4" className="bg-[#012A43]">4 jours par semaine</option>
                <option value="5" className="bg-[#012A43]">5 jours par semaine</option>
              </select>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Votre message",
      fields: (
        <>
          <div>
            <label className="block text-sm font-medium text-gray-200 mb-2">Message</label>
            <textarea
              value={formData.message}
              onChange={(e) => updateFormData('message', e.target.value)}
              className="w-full px-4 py-2 bg-white/5 rounded-lg border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-accent h-32 resize-none transition-all duration-300"
              placeholder="Décrivez votre projet..."
            />
          </div>
        </>
      )
    }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <motion.div
            initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            animate={{ opacity: 1, backdropFilter: 'blur(4px)' }}
            exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-[95%] max-w-xl bg-[#012A43] rounded-2xl p-8 shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden border border-white/10"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
            >
              <X className="h-6 w-6" />
            </button>

            {isSubmitted ? (
              <div className="text-center py-16">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-norwester text-white mb-4">Message envoyé !</h3>
                <p className="text-gray-300">Nous vous recontacterons très prochainement.</p>
              </div>
            ) : (
              <>
            {/* Progress Bar */}
            <div className="relative mb-12">
              <div className="h-1 bg-white/10 rounded-full">
                <motion.div
                  className="absolute h-1 bg-accent rounded-full transition-all duration-300 ease-out"
                  initial={{ width: '0%' }}
                  animate={{ width: `${(step / steps.length) * 100}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <div className="flex justify-between mt-6">
                {steps.map((s, i) => (
                  <motion.div
                    key={i}
                    className={`flex items-center justify-center w-12 h-12 font-norwester text-lg relative ${
                      step > i ? 'scale-110' : ''
                    }`}
                    animate={{
                      scale: step === i + 1 ? 1.2 : 1
                    }}
                  >
                    <div className={`w-full h-full rounded-full ${
                      step > i ? 'text-primary' : 'text-white'
                    } ${
                      step > i ? 'bg-[#EB6718]' : 'bg-white/10'
                    } flex items-center justify-center font-norwester text-lg transition-colors duration-300`}>
                      {i + 1}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div className="text-center">
                  <h3 className="text-2xl font-norwester text-white mb-2">
                    {steps[step - 1].title}
                  </h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {steps[step - 1].fields}

                  <div className="flex justify-between pt-4">
                    {step > 1 && (
                      <motion.button
                        type="button"
                        onClick={() => setStep(step - 1)}
                        className="flex items-center px-6 py-2 bg-white/10 text-white rounded-full hover:bg-white/20 transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Précédent
                      </motion.button>
                    )}
                    <motion.button
                      type="button"
                      onClick={() => step < steps.length ? setStep(step + 1) : handleSubmit}
                      disabled={isSubmitting}
                      className="flex items-center px-6 py-2 bg-white text-[#023654] rounded-full hover:bg-[#EB6718] hover:text-white transition-all duration-300 ml-auto"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {step === steps.length ? (
                        <>
                          {isSubmitting ? 'Envoi...' : 'Envoyer'}
                          <Send className={`w-4 h-4 ml-2 ${isSubmitting ? 'animate-pulse' : ''}`} />
                        </>
                      ) : (
                        <>
                          Suivant
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </>
                      )}
                    </motion.button>
                  </div>
                </form>
              </motion.div>
            </AnimatePresence>
            </>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;
