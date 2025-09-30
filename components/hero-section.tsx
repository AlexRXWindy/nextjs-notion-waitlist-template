'use client';

import { useState, useEffect } from 'react';
import { ArrowRight, Zap, Rocket, Clock, Star } from 'lucide-react';
import FloatingLogo from './floating-logo';

export default function HeroSection() {
  const [text, setText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const words = ['Ventas', 'Marketing', 'Soporte', 'Procesos', 'Datos'];
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentIndex < currentWord.length) {
          setText(currentWord.substring(0, currentIndex + 1));
          setCurrentIndex(currentIndex + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (currentIndex > 0) {
          setText(currentWord.substring(0, currentIndex - 1));
          setCurrentIndex(currentIndex - 1);
        } else {
          setIsDeleting(false);
          setWordIndex((wordIndex + 1) % words.length);
        }
      }
    }, isDeleting ? 50 : 150);

    return () => clearTimeout(timeout);
  }, [currentIndex, isDeleting, wordIndex]);

  const stats = [
    { value: '100+', label: 'Proyectos', icon: Rocket },
    { value: '50K+', label: 'Horas Ahorradas', icon: Clock },
    { value: '95%', label: 'Satisfacción', icon: Star }
  ];

  return (
    <div id="hero" className="relative min-h-screen bg-black flex items-center justify-center px-4 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      {[...Array(30)].map((_, i) => (
        <div
          key={i}
          className="absolute w-0.5 h-0.5 bg-neutral-500 rounded-full animate-twinkle"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${2 + Math.random() * 3}s`
          }}
        ></div>
      ))}

      <div className="relative z-10 text-center w-full max-w-6xl">
        <FloatingLogo />

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-800 bg-neutral-950 mb-6">
          <span className="text-sm text-neutral-400">Automatización con IA y n8n</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 md:mb-6 leading-tight">
          Automatizamos tu
        </h1>
        
        <div className="relative inline-block mb-8 md:mb-12">
          <div className="relative text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold h-16 sm:h-20 md:h-24 flex items-center justify-center">
            <span className="text-white">
              {text}
            </span>
            <span className="inline-block w-1 h-10 sm:h-12 md:h-16 bg-white ml-2 animate-pulse" />
          </div>
        </div>

        <p className="text-base sm:text-lg md:text-xl text-neutral-400 mb-8 md:mb-12 max-w-3xl mx-auto px-4 leading-relaxed">
          Transformamos procesos manuales en flujos inteligentes con <span className="text-white font-semibold">n8n</span> e IA. 
          Más tiempo para crecer, menos tiempo en tareas repetitivas.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center px-4 mb-12 md:mb-16">
          <button 
            onClick={() => document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' })}
            className="group px-6 md:px-8 py-3 md:py-4 bg-white text-black font-semibold rounded-lg hover:bg-neutral-200 transition-all text-sm md:text-base"
          >
            <span className="flex items-center justify-center gap-2">
              Descubre cómo
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
          <button 
            onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
            className="group px-6 md:px-8 py-3 md:py-4 border border-neutral-800 text-white font-semibold rounded-lg hover:bg-neutral-900 transition-all text-sm md:text-base"
          >
            <span className="flex items-center justify-center gap-2">
              <Zap className="w-5 h-5" />
              Hablar con experto
            </span>
          </button>
        </div>

        <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-3xl mx-auto px-4">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div key={i} className="group relative p-4 md:p-6 rounded-xl border border-neutral-800 bg-neutral-950 hover:border-neutral-700 hover:bg-neutral-900 transition-all">
                <div className="flex flex-col items-center">
                  <Icon className="w-5 h-5 md:w-6 md:h-6 mb-3 text-white" />
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-xs md:text-sm text-neutral-400">{stat.label}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }
        .animate-twinkle {
          animation: twinkle ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}