import React from 'react';
import { Shield, FileText, ArrowUp, Smartphone } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
  onOpenWebApp: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenPrivacy,
  onOpenTerms,
  onOpenWebApp,
}) => {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#08080a] border-t border-zinc-800/80 text-zinc-400 text-xs py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-zinc-800/60">
          
          {/* Col 1: Brand Info */}
          <div className="md:col-span-4 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-amber-600 to-yellow-400 flex items-center justify-center text-base shadow-md">
                🍻
              </div>
              <span className="text-xl font-bold text-white font-display tracking-tight">
                {t.nav.brandTitle}
              </span>
            </div>

            <p className="text-zinc-400 leading-relaxed text-xs max-w-sm">
              {t.footer.desc}
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4 font-display">
              {t.footer.navigationHeader}
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#how-it-works" className="hover:text-amber-400 transition-colors">
                  {t.nav.howItWorks}
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-amber-400 transition-colors">
                  {t.nav.features}
                </a>
              </li>
              <li>
                <a href="#safety" className="hover:text-amber-400 transition-colors">
                  {t.nav.safety}
                </a>
              </li>
              <li>
                <a href="#toasts" className="hover:text-amber-400 transition-colors">
                  {t.nav.toasts}
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-amber-400 transition-colors">
                  {t.nav.faq}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Legal & Security */}
          <div className="md:col-span-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4 font-display">
              {t.footer.safetyHeader}
            </h4>
            <ul className="space-y-2.5">
              <li>
                <button
                  onClick={onOpenPrivacy}
                  className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
                >
                  <Shield className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{t.footer.privacy}</span>
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenTerms}
                  className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
                >
                  <FileText className="w-3.5 h-3.5 text-zinc-400" />
                  <span>{t.footer.terms}</span>
                </button>
              </li>
              <li>
                <a href="#safety" className="hover:text-amber-400 transition-colors">
                  {t.footer.manifesto}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Quick Launch */}
          <div className="md:col-span-2 flex flex-col items-start md:items-end">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4 font-display">
              {t.footer.quickLaunchHeader}
            </h4>
            <button
              onClick={onOpenWebApp}
              className="px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-amber-500/40 text-zinc-200 hover:text-white flex items-center gap-2 mb-3 text-xs font-semibold transition-colors"
            >
              <Smartphone className="w-3.5 h-3.5 text-amber-400" />
              <span>{t.footer.pwaBtn}</span>
            </button>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors flex items-center gap-1 text-[11px]"
              title={t.footer.backToTop}
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>{t.footer.backToTop}</span>
            </button>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-400">
          <p className="flex items-center gap-1.5">
            <span>© {new Date().getFullYear()} {t.footer.copyright}</span>
            <span className="text-zinc-400">• {t.footer.allRightsReserved}</span>
          </p>

          <p className="flex items-center gap-1.5 font-medium text-zinc-300">
            <span>{t.footer.madeIn}</span>
            <span className="text-sm">🇺🇦</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
