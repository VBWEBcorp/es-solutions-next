'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Upload, X, ArrowRight, ArrowLeft, Send } from 'lucide-react';

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

type JobFormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  position: string;
  message: string;
  cv: File | null;
  coverLetter: File | null;
}

// Le CV et la lettre de motivation sont rangés dans le stockage Cloudflare R2 du site.
const uploadCandidature = async (file: File): Promise<string> => {
  const formData = new FormData();
  formData.append('file', file);
  const response = await fetch('/api/candidature/upload', { method: 'POST', body: formData });
  const data = await response.json().catch(() => ({}));
  if (!response.ok || !data.url) {
    throw new Error(data.error || "Erreur lors de l'upload du fichier");
  }
  return data.url;
};

const Contact = ({ data }: { data?: Record<string, string> }) => {
  // Visible display text — overridable from admin. Defaults are character-for-character identical.
  const heroTitlePart1 = data?.hero_title_part1 || 'CONTACTEZ';
  const heroTitlePart2 = data?.hero_title_part2 || 'NOUS';
  const heroSubtitle = data?.hero_subtitle || 'Discutons de votre projet ou rejoignez notre équipe';

  const contactPhone = data?.contact_phone || '06 88 10 84 46';
  const contactPhoneHref = data?.contact_phone_href || 'tel:0688108446';
  const contactEmail = data?.contact_email || 'Edouard@es-solutions.fr';
  const contactEmailHref = data?.contact_email_href || 'mailto:Edouard@es-solutions.fr';
  const contactAddress = data?.contact_address || '30 RUE FAIDHERBE, 03200 VICHY';

  const tabContactLabel = data?.tab_contact_label || 'Projet de communication';
  const tabJoinLabel = data?.tab_join_label || 'Nous rejoindre';

  const formContactTitlePart1 = data?.form_contact_title_part1 || 'PARLONS DE VOTRE';
  const formContactTitlePart2 = data?.form_contact_title_part2 || 'PROJET';
  const formContactIntro = data?.form_contact_intro || 'Quelques informations pour mieux comprendre vos besoins';
  const formStep1Title = data?.form_step1_title || 'Votre entreprise';
  const formStep2Title = data?.form_step2_title || 'Vos coordonnées';
  const formStep3Title = data?.form_step3_title || 'Vos besoins';
  const formStep4Title = data?.form_step4_title || 'Votre message';
  const formBtnNext = data?.form_btn_next || 'Suivant';
  const formBtnPrev = data?.form_btn_prev || 'Précédent';
  const formBtnSend = data?.form_btn_send || 'Envoyer';
  const formBtnSending = data?.form_btn_sending || 'Envoi...';
  const formSuccessTitle = data?.form_success_title || 'Message envoyé !';
  const formSuccessBody = data?.form_success_body || 'Nous vous recontacterons très prochainement.';

  const formJoinTitlePart1 = data?.form_join_title_part1 || 'REJOIGNEZ';
  const formJoinTitlePart2 = data?.form_join_title_part2 || 'NOTRE ÉQUIPE';
  const formJoinIntro = data?.form_join_intro || 'Candidature spontanée - Envoyez-nous votre CV et lettre de motivation';
  const formJoinBtnSend = data?.form_join_btn_send || 'Envoyer ma candidature';
  const formJoinBtnSending = data?.form_join_btn_sending || 'Envoi en cours...';
  const formJoinSuccessTitle = data?.form_join_success_title || 'Candidature envoyée !';
  const formJoinSuccessBody = data?.form_join_success_body || 'Nous étudierons votre profil et vous recontacterons si votre candidature correspond à nos besoins.';

  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [activeTab, setActiveTab] = useState<'contact' | 'join'>('contact');

  // Contact form state
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    company: '',
    size: '',
    name: '',
    email: '',
    phone: '',
    offers: [],
    frequency: '',
    message: '',
  });

  // Job application state
  const [isJobSubmitting, setIsJobSubmitting] = useState(false);
  const [isJobSubmitted, setIsJobSubmitted] = useState(false);
  const [jobFormData, setJobFormData] = useState<JobFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    position: '',
    message: '',
    cv: null,
    coverLetter: null
  });

  const offers = [
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

  const updateJobFormData = (field: keyof JobFormData, value: string | File | null) => {
    setJobFormData(prev => ({ ...prev, [field]: value }));
  };

  const toggleOffer = (offerId: string) => {
    setFormData(prev => ({
      ...prev,
      offers: prev.offers.includes(offerId)
        ? prev.offers.filter(id => id !== offerId)
        : [...prev.offers, offerId]
    }));
  };

  const handleFileUpload = (field: 'cv' | 'coverLetter', file: File | null) => {
    updateJobFormData(field, file);
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const offersText = formData.offers.map(offer => {
        switch(offer) {
          case 'externe': return 'Communication Externe & Marketing';
          case 'interne': return 'Communication Interne';
          case 'evenementiel': return 'Communication Événementielle';
          default: return offer;
        }
      }).join(', ');

      const formDataToSend = new FormData();
      formDataToSend.append('Type de demande', 'PROJET DE COMMUNICATION');
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
          setIsSubmitted(false);
          setStep(1);
          setFormData({
            company: '',
            size: '',
            name: '',
            email: '',
            phone: '',
            offers: [],
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

  const handleJobSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!jobFormData.cv || !jobFormData.coverLetter) {
      alert('Le CV et la lettre de motivation sont obligatoires.');
      return;
    }

    setIsJobSubmitting(true);

    try {
      // Upload des fichiers vers Cloudflare R2
      const cvUrl = await uploadCandidature(jobFormData.cv);
      const coverLetterUrl = await uploadCandidature(jobFormData.coverLetter);

      const formDataToSend = new FormData();
      formDataToSend.append('Type de demande', 'CANDIDATURE SPONTANÉE');
      formDataToSend.append('Prénom', jobFormData.firstName);
      formDataToSend.append('Nom', jobFormData.lastName);
      formDataToSend.append('Email candidat', jobFormData.email);
      formDataToSend.append('Téléphone candidat', jobFormData.phone);
      formDataToSend.append('Poste visé', jobFormData.position || 'Candidature spontanée');
      formDataToSend.append('Message candidat', jobFormData.message || 'Aucun message spécifique');
      formDataToSend.append('Lien CV', cvUrl);
      formDataToSend.append('Lien Lettre motivation', coverLetterUrl);
      formDataToSend.append('Nom fichier CV', jobFormData.cv.name);
      formDataToSend.append('Nom fichier Lettre', jobFormData.coverLetter.name);

      const response = await fetch('https://formspree.io/f/mnnbqbko', {
        method: 'POST',
        body: formDataToSend,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setIsJobSubmitted(true);
        setTimeout(() => {
          setIsJobSubmitted(false);
          setJobFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            position: '',
            message: '',
            cv: null,
            coverLetter: null
          });
        }, 3000);
      } else {
        throw new Error('Erreur lors de l\'envoi');
      }
    } catch (error) {
      console.error('Erreur:', error);
      alert(`Erreur lors de l'envoi de la candidature: ${error instanceof Error ? error.message : 'Erreur inconnue'}. Veuillez réessayer.`);
    } finally {
      setIsJobSubmitting(false);
    }
  };

  const steps = [
    {
      title: formStep1Title,
      fields: (
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
      )
    },
    {
      title: formStep2Title,
      fields: (
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
      )
    },
    {
      title: formStep3Title,
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
      title: formStep4Title,
      fields: (
        <div>
          <label className="block text-sm font-medium text-gray-200 mb-2">Message</label>
          <textarea
            value={formData.message}
            onChange={(e) => updateFormData('message', e.target.value)}
            className="w-full px-4 py-2 bg-white/5 rounded-lg border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-accent h-32 resize-none transition-all duration-300"
            placeholder="Décrivez votre projet..."
          />
        </div>
      )
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-[#023654] py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80')] bg-cover bg-center opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-norwester mb-8">
              <span className="text-[#EB6718]">{heroTitlePart1}</span> {heroTitlePart2}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {heroSubtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Bar */}
      <section className="py-8 bg-[#012A43]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center justify-center space-x-3 text-white"
            >
              <Phone className="h-5 w-5 text-[#EB6718]" />
              <a href={contactPhoneHref} className="hover:text-[#EB6718] transition-colors">{contactPhone}</a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center justify-center space-x-3 text-white"
            >
              <Mail className="h-5 w-5 text-[#EB6718]" />
              <a href={contactEmailHref} className="hover:text-[#EB6718] transition-colors">{contactEmail}</a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center justify-center space-x-3 text-white"
            >
              <MapPin className="h-5 w-5 text-[#EB6718]" />
              <span>{contactAddress}</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tabs Navigation */}
      <section ref={ref1} className="py-12 bg-[#012A43]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center mb-12">
            <div className="bg-[#023654] rounded-full p-2 border border-white/10">
              <div className="flex space-x-2">
                <button
                  onClick={() => setActiveTab('contact')}
                  className={`px-8 py-3 rounded-full font-norwester transition-all duration-300 ${
                    activeTab === 'contact'
                      ? 'bg-[#EB6718] text-white'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {tabContactLabel}
                </button>
                <button
                  onClick={() => setActiveTab('join')}
                  className={`px-8 py-3 rounded-full font-norwester transition-all duration-300 ${
                    activeTab === 'join'
                      ? 'bg-[#EB6718] text-white'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {tabJoinLabel}
                </button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          {activeTab === 'contact' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView1 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="bg-[#023654] rounded-2xl p-8 shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10"
            >
              <div className="text-center mb-8">
                <h2 className="text-3xl font-norwester text-white mb-4">
                  {formContactTitlePart1} <span className="text-[#EB6718]">{formContactTitlePart2}</span>
                </h2>
                <p className="text-gray-300">
                  {formContactIntro}
                </p>
              </div>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, type: "spring", bounce: 0.3 }}
                  className="text-center py-16"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.4, type: "spring", bounce: 0.5 }}
                    className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6"
                  >
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </motion.div>
                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.3 }}
                    className="text-2xl font-norwester text-white mb-4"
                  >
                    {formSuccessTitle}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.3 }}
                    className="text-gray-300"
                  >
                    {formSuccessBody}
                  </motion.p>
                </motion.div>
              ) : (
                <>
                  {/* Progress Bar */}
                  <div className="relative mb-12">
                    <div className="h-1 bg-white/10 rounded-full">
                      <motion.div
                        className="absolute h-1 bg-[#EB6718] rounded-full transition-all duration-300 ease-out"
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
                          animate={{ scale: step === i + 1 ? 1.2 : 1 }}
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

                  <div className="space-y-6">
                    <div className="text-center">
                      <h3 className="text-2xl font-norwester text-white mb-2">
                        {steps[step - 1].title}
                      </h3>
                    </div>

                    <form onSubmit={handleContactSubmit} className="space-y-6">
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
                            {formBtnPrev}
                          </motion.button>
                        )}
                        <motion.button
                          type="button"
                          onClick={(e) => {
                            if (step < steps.length) {
                              setStep(step + 1);
                            } else {
                              handleContactSubmit(e);
                            }
                          }}
                          disabled={isSubmitting}
                          className="flex items-center px-6 py-2 bg-white text-[#023654] rounded-full hover:bg-[#EB6718] hover:text-white transition-all duration-300 ml-auto"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {step === steps.length ? (
                            <>
                              {isSubmitting ? formBtnSending : formBtnSend}
                              <Send className={`w-4 h-4 ml-2 ${isSubmitting ? 'animate-pulse' : ''}`} />
                            </>
                          ) : (
                            <>
                              {formBtnNext}
                              <ArrowRight className="w-4 h-4 ml-2" />
                            </>
                          )}
                        </motion.button>
                      </div>
                    </form>
                  </div>
                </>
              )}
            </motion.div>
          )}

          {/* Job Application Form */}
          {activeTab === 'join' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView1 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="bg-[#023654] rounded-2xl p-8 shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10"
            >
              <div className="text-center mb-8">
                <h2 className="text-3xl font-norwester text-white mb-4">
                  {formJoinTitlePart1} <span className="text-[#EB6718]">{formJoinTitlePart2}</span>
                </h2>
                <p className="text-gray-300">
                  {formJoinIntro}
                </p>
              </div>

              {isJobSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, type: "spring", bounce: 0.3 }}
                  className="text-center py-16"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.4, type: "spring", bounce: 0.5 }}
                    className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6"
                  >
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </motion.div>
                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.3 }}
                    className="text-2xl font-norwester text-white mb-4"
                  >
                    {formJoinSuccessTitle}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.3 }}
                    className="text-gray-300"
                  >
                    {formJoinSuccessBody}
                  </motion.p>
                </motion.div>
              ) : (
                <form onSubmit={handleJobSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-200 mb-2">Prénom *</label>
                      <input
                        type="text"
                        required
                        value={jobFormData.firstName}
                        onChange={(e) => updateJobFormData('firstName', e.target.value)}
                        className="w-full px-4 py-2 bg-white/5 rounded-lg border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-accent transition-all duration-300"
                        placeholder="Votre prénom"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-200 mb-2">Nom *</label>
                      <input
                        type="text"
                        required
                        value={jobFormData.lastName}
                        onChange={(e) => updateJobFormData('lastName', e.target.value)}
                        className="w-full px-4 py-2 bg-white/5 rounded-lg border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-accent transition-all duration-300"
                        placeholder="Votre nom"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-200 mb-2">Email *</label>
                      <input
                        type="email"
                        required
                        value={jobFormData.email}
                        onChange={(e) => updateJobFormData('email', e.target.value)}
                        className="w-full px-4 py-2 bg-white/5 rounded-lg border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-accent transition-all duration-300"
                        placeholder="votre@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-200 mb-2">Téléphone *</label>
                      <input
                        type="tel"
                        required
                        value={jobFormData.phone}
                        onChange={(e) => updateJobFormData('phone', e.target.value)}
                        className="w-full px-4 py-2 bg-white/5 rounded-lg border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-accent transition-all duration-300"
                        placeholder="Votre téléphone"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-200 mb-2">Poste visé</label>
                    <input
                      type="text"
                      value={jobFormData.position}
                      onChange={(e) => updateJobFormData('position', e.target.value)}
                      className="w-full px-4 py-2 bg-white/5 rounded-lg border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-accent transition-all duration-300"
                      placeholder="Ex: Consultant Communication"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-200 mb-2">CV * (PDF uniquement)</label>
                      <div className="relative">
                        <input
                          type="file"
                          accept=".pdf"
                          required
                          onChange={(e) => handleFileUpload('cv', e.target.files?.[0] || null)}
                          className="hidden"
                          id="cv-upload"
                        />
                        <label
                          htmlFor="cv-upload"
                          className={`flex items-center justify-center w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg cursor-pointer hover:bg-white/10 transition-all duration-300 ${
                            jobFormData.cv ? 'border-green-500 bg-green-500/10' : ''
                          }`}
                        >
                          <Upload className="h-5 w-5 text-[#EB6718] mr-2" />
                          <span className="text-white">
                            {jobFormData.cv ? jobFormData.cv.name : 'Choisir un fichier PDF'}
                          </span>
                        </label>
                        {jobFormData.cv && (
                          <div className="absolute -top-2 -right-2">
                            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-200 mb-2">Lettre de motivation * (PDF uniquement)</label>
                      <div className="relative">
                        <input
                          type="file"
                          accept=".pdf"
                          required
                          onChange={(e) => handleFileUpload('coverLetter', e.target.files?.[0] || null)}
                          className="hidden"
                          id="cover-letter-upload"
                        />
                        <label
                          htmlFor="cover-letter-upload"
                          className={`flex items-center justify-center w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg cursor-pointer hover:bg-white/10 transition-all duration-300 ${
                            jobFormData.coverLetter ? 'border-green-500 bg-green-500/10' : ''
                          }`}
                        >
                          <Upload className="h-5 w-5 text-[#EB6718] mr-2" />
                          <span className="text-white">
                            {jobFormData.coverLetter ? jobFormData.coverLetter.name : 'Choisir un fichier PDF'}
                          </span>
                        </label>
                        {jobFormData.coverLetter && (
                          <div className="absolute -top-2 -right-2">
                            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-200 mb-2">Message de motivation</label>
                    <textarea
                      value={jobFormData.message}
                      onChange={(e) => updateJobFormData('message', e.target.value)}
                      className="w-full px-4 py-2 bg-white/5 rounded-lg border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-accent h-32 resize-none transition-all duration-300"
                      placeholder="Présentez-vous brièvement et expliquez votre motivation..."
                    />
                  </div>

                  <div className="text-center pt-6">
                    <motion.button
                      type="submit"
                      disabled={isJobSubmitting || !jobFormData.cv || !jobFormData.coverLetter}
                      className="inline-flex items-center px-8 py-4 bg-[#EB6718] text-white text-lg font-norwester rounded-full hover:bg-white hover:text-[#023654] transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                      whileHover={{ scale: isJobSubmitting ? 1 : 1.05 }}
                    >
                      {isJobSubmitting ? (
                        <>
                          {formJoinBtnSending}
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white ml-2" />
                        </>
                      ) : (
                        <>
                          {formJoinBtnSend}
                          <Send className="ml-2 h-5 w-5" />
                        </>
                      )}
                    </motion.button>
                  </div>
                </form>
              )}
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Contact;
