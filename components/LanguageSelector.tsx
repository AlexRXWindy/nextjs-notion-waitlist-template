'use client';

import { useState } from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from './LanguageProvider';

const languages = {
  en: { name: 'English', flag: '🇬🇧' },
  es: { name: 'Español', flag: '🇪🇸' }
};

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const switchLanguage = (newLocale: 'en' | 'es') => {
    setLanguage(newLocale);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-200"
      >
        <Globe className="w-4 h-4" />
        <span className="text-sm font-medium">
          {languages[language].flag} {languages[language].name}
        </span>
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 mt-2 w-48 rounded-lg bg-white dark:bg-gray-900 shadow-lg border border-gray-200 dark:border-gray-800 z-20 overflow-hidden">
            {Object.entries(languages).map(([code, lang]) => (
              <button
                key={code}
                onClick={() => switchLanguage(code as 'en' | 'es')}
                className={`w-full px-4 py-3 text-left flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors ${
                  language === code ? 'bg-gray-50 dark:bg-gray-800' : ''
                }`}
              >
                <span className="text-xl">{lang.flag}</span>
                <span className="text-sm font-medium">{lang.name}</span>
                {language === code && (
                  <span className="ml-auto text-xs text-green-600 dark:text-green-400">
                    ✓
                  </span>
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}