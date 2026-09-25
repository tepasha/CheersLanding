import React from 'react';
import { Sparkles, ShieldCheck, ArrowRight } from 'lucide-react';
import { AppleStoreIcon, GooglePlayIcon } from './icons/StoreIcons';
import { useLanguage } from '../context/LanguageContext';

interface CtaBannerProps {
  onOpenWebApp: () => void;
  onOpenDownload?: (platform?: string) => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onOpenWebApp, onOpenDownload }) => {
  const { t, language } = useLanguage();

  return (
    <section className="py-8 md:py-10 bg-[#0a0a0c] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative rounded-3xl bg-gradient-to-br from-amber-600/20 via-[#15151b] to-zinc-950 border border-amber-500/30 p-8 sm:p-14 overflow-hidden shadow-2xl">
          
          {/* Decorative glowing backdrops */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-wider mb-5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t.cta.badge}</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display mb-6 leading-tight">
              {t.cta.title}
            </h2>

            <p className="text-base sm:text-lg text-zinc-300 mb-8 leading-relaxed">
              {t.cta.subtitle}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8">
              <button
                id="cta-open-pwa-btn"
                onClick={() => (onOpenDownload ? onOpenDownload() : onOpenWebApp())}
                className="px-6 py-4 rounded-xl text-base font-bold bg-gradient-to-r from-amber-400 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 text-zinc-950 shadow-xl shadow-amber-500/25 transition-all flex items-center justify-center gap-3 active:scale-[0.98] group"
              >
                <div className="flex items-center gap-1.5 bg-zinc-950/15 py-1 px-2.5 rounded-lg border border-zinc-950/20 shadow-sm shrink-0">
                  <AppleStoreIcon className="w-4 h-4 text-zinc-950 group-hover:scale-110 transition-transform" />
                  <span className="w-px h-3.5 bg-zinc-950/25" />
                  <GooglePlayIcon className="w-4 h-4 text-zinc-950 group-hover:scale-110 transition-transform" />
                </div>
                <span>{t.cta.webAppBtn}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap items-center gap-6 text-xs text-zinc-400 pt-6 border-t border-zinc-800/60">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span className="text-zinc-200">{t.cta.guarantee}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-amber-400 font-bold">🇺🇦</span>
                <span className="text-zinc-200">
                  {language === 'uk' ? 'Підтримуємо українські заклади' : 'Supporting Ukrainian venues'}
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
