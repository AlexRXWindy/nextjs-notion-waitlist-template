'use client';

import { useState } from 'react';
import { Bot, Database, Mail, Workflow, Link2, BarChart } from 'lucide-react';
import { useLanguage } from './LanguageProvider';

export default function ServiceCards() {
  const { t } = useLanguage();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const services = [
    {
      icon: Bot,
      titleKey: 'chatbots',
      descKey: 'chatbotsDesc',
      features: ['feature1a', 'feature1b', 'feature1c']
    },
    {
      icon: Database,
      titleKey: 'automation',
      descKey: 'automationDesc',
      features: ['feature2a', 'feature2b', 'feature2c']
    },
    {
      icon: Mail,
      titleKey: 'marketing',
      descKey: 'marketingDesc',
      features: ['feature3a', 'feature3b', 'feature3c']
    },
    {
      icon: Workflow,
      titleKey: 'processes',
      descKey: 'processesDesc',
      features: ['feature4a', 'feature4b', 'feature4c']
    },
    {
      icon: Link2,
      titleKey: 'integration',
      descKey: 'integrationDesc',
      features: ['feature5a', 'feature5b', 'feature5c']
    },
    {
      icon: BarChart,
      titleKey: 'analytics',
      descKey: 'analyticsDesc',
      features: ['feature6a', 'feature6b', 'feature6c']
    }
  ];

  return (
    <div id="servicios" className="min-h-screen bg-black py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-white mb-20 text-center">
          {t('services.title')}
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="p-8 bg-neutral-950 border border-neutral-800 rounded-2xl hover:border-white transition-all duration-300"
              >
                <Icon className="w-8 h-8 text-white mb-4" />
                <h3 className="text-2xl font-bold text-white mb-3">
                  {t(`services.${service.titleKey}`)}
                </h3>
                <p className="text-neutral-400 mb-6">
                  {t(`services.${service.descKey}`)}
                </p>
                <div className="space-y-2">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-neutral-500">
                      <div className="w-1 h-1 rounded-full bg-neutral-600" />
                      {t(`services.${feature}`)}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}