'use client';

import { useState, useEffect, useRef } from 'react';
import { Mail, Calendar, MessageSquare, Sparkles, Phone, FileText } from 'lucide-react';
import { useLanguage } from './LanguageProvider';

export default function StatsMockup() {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
        const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
        setMousePosition({ x, y });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const capabilities = [
    { 
      icon: Mail,
      titleKey: 'capability1Title', 
      descKey: 'capability1Desc',
      color: 'from-blue-500 to-cyan-500',
      rotation: -5
    },
    { 
      icon: Calendar,
      titleKey: 'capability2Title', 
      descKey: 'capability2Desc',
      color: 'from-purple-500 to-pink-500',
      rotation: 5
    },
    { 
      icon: MessageSquare,
      titleKey: 'capability3Title', 
      descKey: 'capability3Desc',
      color: 'from-green-500 to-emerald-500',
      rotation: -3
    },
    { 
      icon: Sparkles,
      titleKey: 'capability4Title', 
      descKey: 'capability4Desc',
      color: 'from-orange-500 to-yellow-500',
      rotation: 3
    }
  ];

  return (
    <div className="min-h-screen bg-black py-16 md:py-24 px-4 sm:px-6 flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 mb-6">
            <Sparkles className="w-3 h-3 text-purple-400" />
            <span className="text-xs text-neutral-400">{t('automation.badge')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            {t('automation.title')}
          </h2>
          <p className="text-lg sm:text-xl text-neutral-400">
            {t('automation.subtitle')}
          </p>
        </div>

        <div 
          ref={containerRef}
          className="relative"
          style={{
            perspective: '1200px',
            perspectiveOrigin: 'center center'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-green-600/10 blur-3xl"></div>
          
          <div 
            className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            style={{
              transform: `rotateY(${mousePosition.x * 8}deg) rotateX(${-mousePosition.y * 8}deg)`,
              transformStyle: 'preserve-3d',
              transition: 'transform 0.15s ease-out'
            }}
          >
            {capabilities.map((capability, index) => {
              const Icon = capability.icon;
              const isHovered = hoveredCard === index;
              
              return (
                <div
                  key={index}
                  className="relative"
                  style={{
                    transform: `translateZ(${isHovered ? 50 : 20}px) rotateZ(${isHovered ? 0 : capability.rotation}deg)`,
                    transformStyle: 'preserve-3d',
                    transition: 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)'
                  }}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div
                    className={`relative p-6 rounded-2xl backdrop-blur-sm border transition-all duration-300 ${
                      isHovered
                        ? 'bg-neutral-900/90 border-neutral-700'
                        : 'bg-neutral-950/50 border-neutral-800'
                    }`}
                    style={{
                      boxShadow: isHovered
                        ? '0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 30px rgba(139, 92, 246, 0.15)'
                        : '0 10px 30px -10px rgba(0, 0, 0, 0.5)'
                    }}
                  >
                    <div className="mb-4">
                      <div 
                        className={`w-14 h-14 rounded-xl bg-gradient-to-br ${capability.color} flex items-center justify-center transition-transform duration-300`}
                        style={{
                          transform: isHovered ? 'translateZ(15px) scale(1.1)' : 'translateZ(0)',
                        }}
                      >
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-white">
                        {t(`automation.${capability.titleKey}`)}
                      </h3>
                      <p className="text-sm text-neutral-400 leading-relaxed">
                        {t(`automation.${capability.descKey}`)}
                      </p>
                    </div>

                    <div 
                      className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${capability.color} opacity-0 transition-opacity duration-300 ${
                        isHovered ? 'opacity-100' : ''
                      }`}
                    ></div>

                    {isHovered && (
                      <div 
                        className={`absolute inset-0 bg-gradient-to-br ${capability.color} opacity-5 rounded-2xl pointer-events-none`}
                      ></div>
                    )}

                    <div 
                      className="absolute inset-0 border border-neutral-800/30 rounded-2xl -z-10"
                      style={{
                        transform: 'translateZ(-10px)',
                        transformStyle: 'preserve-3d'
                      }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>

          <div 
            className="mt-8 relative"
            style={{
              transform: `rotateY(${mousePosition.x * 8}deg) rotateX(${-mousePosition.y * 8}deg)`,
              transformStyle: 'preserve-3d',
              transition: 'transform 0.15s ease-out'
            }}
          >
            <div
              className="relative p-6 rounded-2xl bg-neutral-950/50 backdrop-blur-sm border border-neutral-800"
              style={{
                transform: 'translateZ(30px)',
                transformStyle: 'preserve-3d',
                boxShadow: '0 15px 40px -15px rgba(0, 0, 0, 0.6)'
              }}
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">{t('automation.examplesTitle')}</h3>
                  <p className="text-sm text-neutral-500">{t('automation.examplesSubtitle')}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { 
                    icon: Phone,
                    label: t('automation.example1'), 
                    color: 'from-blue-500 to-cyan-500' 
                  },
                  { 
                    icon: MessageSquare,
                    label: t('automation.example2'), 
                    color: 'from-green-500 to-emerald-500' 
                  },
                  { 
                    icon: FileText,
                    label: t('automation.example3'), 
                    color: 'from-purple-500 to-pink-500' 
                  }
                ].map((example, i) => {
                  const ExampleIcon = example.icon;
                  return (
                    <div 
                      key={i} 
                      className="flex items-center gap-3 p-4 rounded-xl bg-neutral-900/50 border border-neutral-800/50 hover:border-neutral-700 transition-all group"
                    >
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${example.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                        <ExampleIcon className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm text-neutral-300">{example.label}</div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div 
                className="absolute inset-0 border border-neutral-800/30 rounded-2xl -z-10"
                style={{
                  transform: 'translateZ(-10px)',
                  transformStyle: 'preserve-3d'
                }}
              ></div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-neutral-500">
            {t('automation.footer')}
          </p>
        </div>

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/10 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${5 + Math.random() * 5}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`
              }}
            ></div>
          ))}
        </div>

        <style jsx>{`
          @keyframes float {
            0%, 100% {
              transform: translateY(0) translateX(0);
              opacity: 0;
            }
            10% {
              opacity: 1;
            }
            90% {
              opacity: 1;
            }
            100% {
              transform: translateY(-80px) translateX(30px);
              opacity: 0;
            }
          }
        `}</style>
      </div>
    </div>
  );
}