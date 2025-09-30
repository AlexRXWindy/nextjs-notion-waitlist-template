'use client';

import { useEffect, useState } from 'react';

export default function LogoAnimation() {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsVisible(false), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] bg-black flex items-center justify-center transition-opacity duration-1000"
      style={{ opacity: progress < 100 ? 1 : 0 }}
    >
      <div className="relative">
        <div className="absolute inset-0 bg-white blur-3xl opacity-20 animate-pulse"></div>
        
        <div className="relative">
          <div className="text-[120px] font-bold text-white mb-4 tracking-wider">
            IA
          </div>
          
          <div className="h-1 bg-neutral-800 rounded-full overflow-hidden">
            <div 
              className="h-full bg-white transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          
          <div className="mt-4 text-center text-neutral-400 text-sm">
            Cargando sistema...
          </div>
        </div>
      </div>
    </div>
  );
}