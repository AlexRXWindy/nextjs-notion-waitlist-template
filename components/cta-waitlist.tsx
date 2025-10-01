'use client';

import { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { useLanguage } from './LanguageProvider';

export default function CTAWaitlist() {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!email || !name) return;
    setLoading(true);
    
    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email }),
      });

      if (response.ok) {
        setSubmitted(true);
        setEmail('');
        setName('');
        setTimeout(() => setSubmitted(false), 5000);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="contacto" className="bg-black py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-bold text-white mb-6">
          {t('waitlist.title')}
        </h2>
        
        <p className="text-xl text-neutral-400 mb-12">
          {t('waitlist.subtitle')}
        </p>

        {!submitted ? (
          <div className="max-w-2xl mx-auto">
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={t('waitlist.namePlaceholder')}
                className="px-6 py-4 bg-neutral-950 border border-neutral-800 rounded-lg text-white placeholder:text-neutral-600 focus:outline-none focus:border-white transition-colors"
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t('waitlist.emailPlaceholder')}
                className="px-6 py-4 bg-neutral-950 border border-neutral-800 rounded-lg text-white placeholder:text-neutral-600 focus:outline-none focus:border-white transition-colors"
              />
            </div>
            
            <button
              onClick={handleSubmit}
              disabled={loading || !email || !name}
              className="group w-full px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-neutral-200 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                  {t('waitlist.submitting')}
                </>
              ) : (
                <>
                  {t('waitlist.submit')}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </div>
        ) : (
          <div className="max-w-md mx-auto p-8 bg-neutral-950 border border-neutral-800 rounded-2xl">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white mb-4">
              <Check className="w-8 h-8 text-black" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">
              {t('waitlist.successTitle')}
            </h3>
            <p className="text-neutral-400">
              {t('waitlist.success')}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}