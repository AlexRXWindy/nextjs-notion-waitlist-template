'use client';

import { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

export default function CTAWaitlist() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!email || !name) return;
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setSubmitted(true);
    setLoading(false);
    setEmail('');
    setName('');
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div id="contacto" className="bg-black py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-bold text-white mb-6">
          Únete a la Revolución IA
        </h2>
        
        <p className="text-xl text-neutral-400 mb-12">
          Primera consulta gratuita.
        </p>

        {!submitted ? (
          <div className="max-w-2xl mx-auto">
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Tu nombre"
                className="px-6 py-4 bg-neutral-950 border border-neutral-800 rounded-lg text-white placeholder:text-neutral-600 focus:outline-none focus:border-white transition-colors"
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Tu email"
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
                  Procesando...
                </>
              ) : (
                <>
                  Solicitar Consulta Gratuita
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
              ¡Listo!
            </h3>
            <p className="text-neutral-400">
              Nos vemos pronto.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}