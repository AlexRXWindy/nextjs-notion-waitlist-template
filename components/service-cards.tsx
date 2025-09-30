'use client';

import { useState } from 'react';
import { Bot, Database, Mail, Workflow, Link2, BarChart } from 'lucide-react';

const services = [
  {
    icon: Bot,
    title: 'Chatbots & Asistentes',
    description: 'Atención 24/7 con IA',
    features: ['WhatsApp', 'Multi-idioma', 'Personalizado']
  },
  {
    icon: Database,
    title: 'Automatización de Datos',
    description: 'Análisis inteligente',
    features: ['Dashboards', 'Analytics', 'Predicciones']
  },
  {
    icon: Mail,
    title: 'Email & Marketing',
    description: 'Campañas automatizadas',
    features: ['Secuencias', 'Personalización', 'A/B Testing']
  },
  {
    icon: Workflow,
    title: 'Procesos',
    description: 'Workflows inteligentes',
    features: ['Facturación', 'Inventario', 'CRM']
  },
  {
    icon: Link2,
    title: 'Integraciones',
    description: 'Conecta tus herramientas',
    features: ['APIs Custom', 'Zapier', 'Make']
  },
  {
    icon: BarChart,
    title: 'Análisis Predictivo',
    description: 'Decisiones basadas en datos',
    features: ['Forecasting', 'Insights', 'Reports']
  }
];

export default function ServiceCards() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div id="servicios" className="min-h-screen bg-black py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-white mb-20 text-center">
          Qué Automatizamos
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
                  {service.title}
                </h3>
                <p className="text-neutral-400 mb-6">
                  {service.description}
                </p>
                <div className="space-y-2">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-neutral-500">
                      <div className="w-1 h-1 rounded-full bg-neutral-600" />
                      {feature}
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