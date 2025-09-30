'use client';

import { Zap, Target, Users, TrendingUp } from 'lucide-react';

const values = [
  { icon: Zap, title: 'Innovación', description: 'Última tecnología IA' },
  { icon: Target, title: 'Resultados', description: 'ROI medible' },
  { icon: Users, title: 'Cercanía', description: 'Soporte 24/7' },
  { icon: TrendingUp, title: 'Escalabilidad', description: 'Crecemos contigo' }
];

export default function AboutSection() {
  return (
    <div id="nosotros" className="min-h-screen bg-black py-16 md:py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center mb-16 md:mb-24">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 md:mb-6">
              Expertos en Automatización
            </h2>
            <p className="text-lg sm:text-xl text-neutral-400 mb-4 md:mb-6">
              Transformamos negocios con IA y automatización.
            </p>
            <p className="text-base sm:text-lg text-neutral-500 mb-6 md:mb-8">
              Desde 2020, ayudamos a más de 100 empresas a optimizar procesos con <span className="text-white font-semibold">n8n</span> y escalar sin límites.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center">
                  <span className="text-white font-bold text-sm sm:text-base">100+</span>
                </div>
                <div>
                  <div className="text-white font-semibold text-sm sm:text-base">Clientes</div>
                  <div className="text-xs sm:text-sm text-neutral-500">Satisfechos</div>
                </div>
              </div>
            </div>
          </div>

          <div className="h-[250px] sm:h-[300px] md:h-[400px] bg-neutral-900 rounded-2xl md:rounded-3xl border border-neutral-800 flex items-center justify-center">
            <div className="text-center">
              <div className="text-5xl sm:text-6xl md:text-8xl font-bold text-white mb-2 md:mb-4">IA</div>
              <div className="text-lg sm:text-xl md:text-2xl text-neutral-400">Automatización</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div key={index} className="p-4 sm:p-6 md:p-8 bg-neutral-950 border border-neutral-800 rounded-xl md:rounded-2xl">
                <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white mb-3 md:mb-4" />
                <h4 className="text-base sm:text-lg md:text-xl font-bold text-white mb-1 md:mb-2">{value.title}</h4>
                <p className="text-neutral-400 text-xs sm:text-sm">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}