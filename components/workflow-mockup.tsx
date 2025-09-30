'use client';

import { useState, useEffect } from 'react';
import { Play, Check, Loader2, Zap, Mail, Search, Brain, Database, Bell } from 'lucide-react';

export default function WorkflowMockup() {
  const [activeNode, setActiveNode] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsRunning(true);
      setActiveNode((prev) => (prev + 1) % 5);
      setTimeout(() => setIsRunning(false), 800);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const nodes = [
    { id: 1, label: 'Nuevo Email', icon: Mail, color: 'from-blue-500 to-blue-600' },
    { id: 2, label: 'Extraer Datos', icon: Search, color: 'from-purple-500 to-purple-600' },
    { id: 3, label: 'IA Analysis', icon: Brain, color: 'from-pink-500 to-pink-600' },
    { id: 4, label: 'Actualizar CRM', icon: Database, color: 'from-green-500 to-green-600' },
    { id: 5, label: 'Notificación', icon: Bell, color: 'from-orange-500 to-orange-600' }
  ];

  return (
    <div className="min-h-screen bg-black py-16 md:py-24 px-4 sm:px-6 flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-800 bg-neutral-950 mb-6">
              <Zap className="w-4 h-4 text-white" />
              <span className="text-sm text-neutral-400">Powered by n8n</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Automatización Visual e Intuitiva
            </h2>
            
            <p className="text-lg sm:text-xl text-neutral-400 mb-8">
              Crea workflows complejos sin código. Conecta tus herramientas favoritas y deja que la IA haga el trabajo pesado.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center">
                  <Check className="w-5 h-5 text-green-400" />
                </div>
                <span className="text-neutral-300">Sin límites de ejecuciones</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center">
                  <Check className="w-5 h-5 text-green-400" />
                </div>
                <span className="text-neutral-300">+400 integraciones disponibles</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center">
                  <Check className="w-5 h-5 text-green-400" />
                </div>
                <span className="text-neutral-300">Soporte y mantenimiento incluido</span>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 blur-3xl"></div>
            
            <div className="relative bg-neutral-950/90 backdrop-blur-xl border border-neutral-800 rounded-2xl p-6 sm:p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                    <Zap className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-sm sm:text-base">Email to CRM</h3>
                    <p className="text-neutral-500 text-xs">Workflow activo</p>
                  </div>
                </div>
                
                <button className="flex items-center gap-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg text-sm transition-colors">
                  {isRunning ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <Play className="w-4 h-4" />
                  )}
                  <span className="hidden sm:inline">
                    {isRunning ? 'Ejecutando' : 'Ejecutar'}
                  </span>
                </button>
              </div>

              <div className="space-y-4">
                {nodes.map((node, index) => {
                  const Icon = node.icon;
                  return (
                    <div key={node.id} className="relative">
                      <div
                        className={`relative p-4 rounded-xl border transition-all duration-500 ${
                          activeNode === index
                            ? 'bg-white/5 border-white/20 scale-105 shadow-2xl'
                            : 'bg-neutral-900/50 border-neutral-800/50'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${node.color} flex items-center justify-center`}>
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="text-white font-medium text-sm sm:text-base">{node.label}</div>
                            <div className="text-neutral-500 text-xs">
                              {activeNode === index ? 'Procesando...' : 'Listo'}
                            </div>
                          </div>
                          {activeNode > index && (
                            <Check className="w-5 h-5 text-green-400" />
                          )}
                          {activeNode === index && (
                            <Loader2 className="w-5 h-5 text-white animate-spin" />
                          )}
                        </div>
                      </div>

                      {index < nodes.length - 1 && (
                        <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-4 bg-neutral-800"></div>
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 p-4 bg-neutral-900/30 border border-neutral-800/50 rounded-xl">
                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <span className="text-neutral-400">Última ejecución</span>
                  <span className="text-white font-medium">Hace 2 min</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}