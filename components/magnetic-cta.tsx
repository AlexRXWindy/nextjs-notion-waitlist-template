'use client';

import { useRef } from 'react';
import { Sparkles } from 'lucide-react';
import { useLanguage } from './LanguageProvider';

export default function MagneticCTA() {
  const { t } = useLanguage();
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current || window.innerWidth < 768) return;

    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    buttonRef.current.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
  };

  const handleMouseLeave = () => {
    if (!buttonRef.current) return;
    buttonRef.current.style.transform = 'translate(0, 0)';
  };

  const handleClick = () => {
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-black py-16 md:py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto text-center">
        <div className="relative inline-block">
          <div className="absolute inset-0 bg-white blur-3xl opacity-20 animate-pulse"></div>
          
          <button
            ref={buttonRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
            className="relative px-6 sm:px-8 md:px-12 py-4 md:py-6 bg-white text-black font-bold text-base sm:text-lg md:text-xl rounded-xl md:rounded-2xl transition-all duration-200 ease-out hover:scale-105"
          >
            <span className="flex items-center gap-2 md:gap-3">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              <span className="whitespace-nowrap">{t('cta.button')}</span>
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
            </span>
          </button>
        </div>

        <p className="mt-4 md:mt-6 text-sm sm:text-base text-neutral-400">
          {t('cta.join')}
        </p>
      </div>
    </div>
  );
}