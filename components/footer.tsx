'use client';

import { Github, Twitter, Linkedin } from 'lucide-react';
import { useLanguage } from './LanguageProvider';

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="text-3xl font-bold text-white mb-4">IA</div>
            <p className="text-neutral-400 mb-6">
              {t('footer.description')}
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center hover:border-white transition-colors">
                <Twitter className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center hover:border-white transition-colors">
                <Linkedin className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center hover:border-white transition-colors">
                <Github className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">{t('footer.company')}</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors text-sm">{t('footer.about')}</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors text-sm">{t('footer.blog')}</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors text-sm">{t('footer.contact')}</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">{t('footer.legal')}</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors text-sm">{t('footer.privacy')}</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors text-sm">{t('footer.terms')}</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-900 pt-8 text-center">
          <p className="text-neutral-500 text-sm">
            © {currentYear} IA Automation. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
}