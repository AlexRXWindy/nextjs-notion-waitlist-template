'use client';

import { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown, Activity, Zap } from 'lucide-react';
import { useLanguage } from './LanguageProvider';

export default function StatsMockup() {
  const { t } = useLanguage();
  const [activeMetric, setActiveMetric] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMetric((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const metrics = [
    { labelKey: 'metric1', value: '847', unitKey: 'unit1', change: '+45d%', trend: 'up' },
    { labelKey: 'metric2', value: '124', unitKey: 'unit2', change: '+28%', trend: 'up' },
    { labelKey: 'metric3', value: '94.2', unitKey: 'unit3', change: '+12%', trend: 'up' },
    { labelKey: 'metric4', value: '€8.5K', unitKey: 'unit4', change: '-67%', trend: 'down' }
  ];

  return (
    <div className="min-h-screen bg-black py-16 md:py-24 px-4 sm:px-6 flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            {t('dashboard.title')}
          </h2>
          <p className="text-lg sm:text-xl text-neutral-400">
            {t('dashboard.subtitle')}
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-purple-600/20 blur-3xl"></div>
          
          <div className="relative bg-neutral-950/90 backdrop-blur-xl border border-neutral-800 rounded-2xl overflow-hidden">
            <div className="bg-neutral-900/50 px-4 sm:px-6 py-3 sm:py-4 border-b border-neutral-800 flex items-center gap-2">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="flex-1 flex justify-center">
                <div className="text-neutral-500 text-xs sm:text-sm flex items-center gap-2">
                  <Activity className="w-4 h-4" />
                  <span className="hidden sm:inline">{t('dashboard.url')}</span>
                </div>
              </div>
            </div>

            <div className="p-4 sm:p-6 md:p-8">
              <div className="flex items-center justify-between mb-6 sm:mb-8">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-1">{t('dashboard.panelTitle')}</h3>
                  <p className="text-xs sm:text-sm text-neutral-500">{t('dashboard.panelSubtitle')}</p>
                </div>
                <div className="px-3 py-1.5 bg-green-500/10 border border-green-500/20 rounded-lg">
                  <span className="text-green-400 text-xs font-medium flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                    {t('dashboard.live')}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                {metrics.map((metric, index) => (
                  <div
                    key={index}
                    className={`relative p-4 sm:p-6 rounded-xl border transition-all duration-500 ${
                      activeMetric === index
                        ? 'bg-white/5 border-white/20 scale-105'
                        : 'bg-neutral-900/30 border-neutral-800/50'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <Zap className={`w-4 h-4 sm:w-5 sm:h-5 ${
                        activeMetric === index ? 'text-white' : 'text-neutral-600'
                      }`} />
                      {metric.trend === 'up' ? (
                        <TrendingUp className="w-4 h-4 text-green-400" />
                      ) : (
                        <TrendingDown className="w-4 h-4 text-green-400" />
                      )}
                    </div>
                    
                    <div className={`text-2xl sm:text-3xl font-bold mb-1 ${
                      activeMetric === index ? 'text-white' : 'text-neutral-400'
                    }`}>
                      {metric.value}
                      <span className="text-sm sm:text-base font-normal ml-1">{t(`dashboard.${metric.unitKey}`)}</span>
                    </div>
                    
                    <div className="text-xs text-neutral-500 mb-2">{t(`dashboard.${metric.labelKey}`)}</div>
                    
                    <div className={`text-xs font-medium ${
                      metric.trend === 'down' ? 'text-green-400' : 'text-green-400'
                    }`}>
                      {metric.change}
                    </div>

                    {activeMetric === index && (
                      <div className="absolute inset-0 border-2 border-white/30 rounded-xl animate-pulse pointer-events-none"></div>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-neutral-900/30 border border-neutral-800/50 rounded-xl">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-neutral-400">{t('dashboard.recentActivity')}</span>
                  <span className="text-xs text-neutral-600">{t('dashboard.last24h')}</span>
                </div>
                <div className="space-y-3">
                  {[t('dashboard.activity1'), t('dashboard.activity2'), t('dashboard.activity3')].map((activity, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-xs sm:text-sm text-neutral-300">{activity}</span>
                      <span className="text-xs text-neutral-600 ml-auto">{i + 2}min</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-8 sm:mt-12">
          <p className="text-sm sm:text-base text-neutral-500">
            {t('dashboard.integration')}
          </p>
        </div>
      </div>
    </div>
  );
}