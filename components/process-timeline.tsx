'use client';

import { useState } from 'react';
import { MessageSquare, Search, Code, Rocket, ArrowRight, Sparkles } from 'lucide-react';
import { useLanguage } from './LanguageProvider';

export default function ProcessTimeline() {
  const { t } = useLanguage();
  const [activeStep, setActiveStep] = useState(0);
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  const steps = [
    {
      icon: MessageSquare,
      titleKey: 'step1',
      descKey: 'step1Desc',
      durationKey: 'duration1',
      details: ['detail1a', 'detail1b', 'detail1c']
    },
    {
      icon: Search,
      titleKey: 'step2',
      descKey: 'step2Desc',
      durationKey: 'duration2',
      details: ['detail2a', 'detail2b', 'detail2c']
    },
    {
      icon: Code,
      titleKey: 'step3',
      descKey: 'step3Desc',
      durationKey: 'duration3',
      details: ['detail3a', 'detail3b', 'detail3c']
    },
    {
      icon: Rocket,
      titleKey: 'step4',
      descKey: 'step4Desc',
      durationKey: 'duration4',
      details: ['detail4a', 'detail4b', 'detail4c']
    }
  ];

  return (
    <div id="proceso" className="relative bg-black py-16 md:py-24 px-4 sm:px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/5 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-12 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-800 bg-neutral-950 mb-6">
            <Sparkles className="w-4 h-4 text-white" />
            <span className="text-sm text-neutral-400">{t('process.badge')}</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            {t('process.title')}
          </h2>
          <p className="text-lg sm:text-xl text-neutral-400 max-w-2xl mx-auto">
            {t('process.subtitle')}
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute top-[60px] left-0 right-0 h-0.5 bg-neutral-800">
            <div 
              className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-1000"
              style={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
            ></div>
          </div>

          <div className="grid md:grid-cols-4 gap-6 md:gap-4 relative">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = index <= activeStep;
              const isHovered = hoveredStep === index;
              
              return (
                <div
                  key={index}
                  onMouseEnter={() => {
                    setActiveStep(index);
                    setHoveredStep(index);
                  }}
                  onMouseLeave={() => setHoveredStep(null)}
                  className="relative group cursor-pointer"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className={`relative mb-6 transition-all duration-500 ${
                      isActive ? 'scale-100' : 'scale-90 opacity-50'
                    }`}>
                      {isHovered && (
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-xl opacity-50 animate-pulse"></div>
                      )}
                      
                      <div className={`relative w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 flex items-center justify-center transition-all duration-500 ${
                        isActive 
                          ? 'bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 border-transparent shadow-2xl' 
                          : 'bg-neutral-900 border-neutral-800'
                      }`}>
                        <Icon className={`w-8 h-8 sm:w-10 sm:h-10 transition-colors duration-500 ${
                          isActive ? 'text-white' : 'text-neutral-600'
                        }`} />
                      </div>
                      
                      <div className={`absolute -bottom-2 -right-2 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-black border-2 flex items-center justify-center text-xs sm:text-sm font-bold transition-all duration-500 ${
                        isActive ? 'border-white text-white scale-110' : 'border-neutral-800 text-neutral-600'
                      }`}>
                        {index + 1}
                      </div>
                    </div>

                    <h3 className={`text-xl sm:text-2xl font-bold mb-2 transition-colors duration-500 ${
                      isActive ? 'text-white' : 'text-neutral-600'
                    }`}>
                      {t(`process.${step.titleKey}`)}
                    </h3>

                    <p className={`text-xs sm:text-sm mb-3 transition-colors duration-500 ${
                      isActive ? 'text-neutral-400' : 'text-neutral-600'
                    }`}>
                      {t(`process.${step.descKey}`)}
                    </p>

                    <div className={`inline-flex px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-500 mb-4 ${
                      isActive 
                        ? 'bg-white/5 text-white border border-white/20' 
                        : 'bg-transparent text-neutral-600 border border-neutral-800'
                    }`}>
                      {t(`process.${step.durationKey}`)}
                    </div>

                    <div className={`transition-all duration-500 overflow-hidden ${
                      isHovered ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="space-y-2 pt-4 border-t border-neutral-800">
                        {step.details.map((detail, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-neutral-500">
                            <ArrowRight className="w-3 h-3" />
                            <span>{t(`process.${detail}`)}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-12 md:mt-16 text-center">
          <button 
            onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
            className="group px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-semibold rounded-xl hover:shadow-2xl hover:scale-105 transition-all text-sm sm:text-base"
          >
            <span className="flex items-center gap-2">
              {t('process.cta')}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}