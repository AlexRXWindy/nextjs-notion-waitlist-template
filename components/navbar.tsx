'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/80 backdrop-blur-2xl border-b border-white/10 shadow-2xl shadow-purple-500/10' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => scrollTo('hero')} 
            className="group flex items-center gap-3 relative"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 blur-xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center font-bold text-white shadow-xl">
                IA
              </div>
            </div>
            <span className="hidden sm:block text-lg font-bold text-white">Automation</span>
          </button>
          
          <div className="hidden md:flex items-center gap-1 lg:gap-2 bg-white/5 backdrop-blur-xl rounded-full p-1 border border-white/10">
            {['Servicios', 'Proceso', 'Nosotros'].map((item, i) => (
              <button
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className="px-4 py-2 text-neutral-300 hover:text-white hover:bg-white/10 rounded-full transition-all text-sm font-medium"
              >
                {item}
              </button>
            ))}
            <button 
              onClick={() => scrollTo('contacto')} 
              className="group relative px-5 py-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-semibold rounded-full hover:shadow-xl hover:shadow-purple-500/50 transition-all text-sm ml-1"
            >
              <Sparkles className="inline w-4 h-4 mr-1" />
              Empezar
            </button>
          </div>

          <button
            className="md:hidden relative z-10 p-2 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? 
              <X className="w-6 h-6 text-white" /> : 
              <Menu className="w-6 h-6 text-white" />
            }
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-white/10 pt-4 bg-black/95 backdrop-blur-2xl rounded-2xl">
            <div className="flex flex-col gap-2">
              {['Servicios', 'Proceso', 'Nosotros'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollTo(item.toLowerCase())}
                  className="text-left py-3 px-4 text-neutral-300 hover:text-white hover:bg-white/5 rounded-xl transition-all font-medium"
                >
                  {item}
                </button>
              ))}
              <button 
                onClick={() => scrollTo('contacto')} 
                className="mt-2 px-5 py-3 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-semibold rounded-xl text-center"
              >
                <Sparkles className="inline w-4 h-4 mr-2" />
                Empezar
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}