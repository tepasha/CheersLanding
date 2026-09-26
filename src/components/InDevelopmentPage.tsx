import React from 'react';
import { ArrowLeft, Heart, ExternalLink, Smartphone, Sparkles, Coffee } from 'lucide-react';
import { AppleStoreIcon, GooglePlayIcon } from './icons/StoreIcons';
import { useLanguage } from '../context/LanguageContext';

interface InDevelopmentPageProps {
  selectedStore?: 'google' | 'apple' | string | null;
  onBackHome: () => void;
  onOpenWebApp: () => void;
}

export const InDevelopmentPage: React.FC<InDevelopmentPageProps> = ({
  selectedStore,
  onBackHome,
  onOpenWebApp,
}) => {
  const { t, language, setLanguage } = useLanguage();

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-zinc-100 flex flex-col selection:bg-amber-500/30 selection:text-amber-200">
      
      {/* Top Navigation */}
      <header className="border-b border-zinc-800/80 bg-[#0a0a0c]/90 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          
          {/* Back button + Brand */}
          <div className="flex items-center gap-4">
            <button
              onClick={onBackHome}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-zinc-900 border border-zinc-750 hover:bg-zinc-800 hover:border-zinc-600 text-sm font-semibold text-zinc-300 hover:text-white transition-all shadow-sm active:scale-95"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>{t.inDevelopment.backHomeBtn}</span>
            </button>

            <button
              onClick={onBackHome}
              className="flex items-center gap-2 cursor-pointer text-left"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-600 to-yellow-400 flex items-center justify-center text-lg shadow-md shadow-amber-500/25">
                🍻
              </div>
              <span className="font-bold text-white text-lg font-display hidden sm:inline">
                {t.nav.brandTitle}
              </span>
            </button>
          </div>

          {/* Right actions: Language toggle + Web App */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={() => setLanguage(language === 'uk' ? 'en' : 'uk')}
              className="px-2.5 py-1.5 rounded-xl bg-zinc-900 border border-zinc-800 text-xs font-semibold text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors"
              title={t.geoBadge.switchLangTooltip}
            >
              {language === 'uk' ? '🇺🇦 UA' : '🇬🇧 EN'}
            </button>

            <button
              onClick={onOpenWebApp}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-amber-400 to-yellow-400 text-zinc-950 text-xs font-bold shadow-md shadow-amber-500/20 hover:from-amber-300 hover:to-yellow-300 transition-all active:scale-95"
            >
              <Smartphone className="w-3.5 h-3.5 text-zinc-950" />
              <span>{t.inDevelopment.openWebAppBtn}</span>
            </button>
          </div>

        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 flex items-center justify-center px-4 py-12 sm:py-20 relative overflow-hidden">
        
        {/* Ambient background glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 sm:w-[600px] h-96 sm:h-[600px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center">
          
          {/* Animated App / Beer + Tools Icon */}
          <div className="relative mb-6">
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-gradient-to-tr from-amber-500 via-amber-400 to-yellow-300 p-0.5 shadow-2xl shadow-amber-500/30 flex items-center justify-center animate-float">
              <div className="w-full h-full rounded-[22px] bg-[#141419] flex items-center justify-center text-4xl sm:text-5xl">
                🍻
              </div>
            </div>
            <span className="absolute -bottom-2 -right-2 w-9 h-9 rounded-xl bg-amber-500 border-2 border-[#0a0a0c] flex items-center justify-center text-base shadow-lg">
              🚧
            </span>
          </div>

          {/* Store badge if one was selected */}
          {selectedStore ? (
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900 border border-zinc-750 text-xs font-semibold text-zinc-300 mb-6 shadow-sm">
              {selectedStore === 'google' ? (
                <>
                  <GooglePlayIcon className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400 font-bold">{t.inDevelopment.chosenStoreGoogle}</span>
                </>
              ) : selectedStore === 'apple' ? (
                <>
                  <AppleStoreIcon className="w-4 h-4 text-amber-400" />
                  <span className="text-amber-400 font-bold">{t.inDevelopment.chosenStoreApple}</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>{t.inDevelopment.chosenStoreGeneric}</span>
                </>
              )}
            </div>
          ) : (
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-wider mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t.inDevelopment.badge}</span>
            </div>
          )}

          {/* Formatted Title with distinct font sizes */}
          <h1 className="flex flex-col items-center gap-1.5 sm:gap-2 mb-6 max-w-2xl mx-auto text-center">
            <span className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight text-amber-400">
              {t.inDevelopment.titleOops}
            </span>
            <span className="text-sm sm:text-base font-medium text-zinc-400">
              {t.inDevelopment.titleInDev}
            </span>
            <span className="text-lg sm:text-xl md:text-2xl font-bold text-zinc-100 tracking-tight leading-snug">
              {t.inDevelopment.titleSupport}
            </span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg text-zinc-300 mb-10 leading-relaxed max-w-xl">
            {t.inDevelopment.desc}
          </p>

          {/* Primary Action Button: "Підтримати розробника" */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-10">
            <a
              href="https://donatello.to/PavelTerekhov"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4.5 rounded-2xl bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 hover:from-amber-300 hover:to-yellow-300 text-zinc-950 font-extrabold text-lg sm:text-xl shadow-2xl shadow-amber-500/30 flex items-center justify-center gap-3 transition-all hover:scale-[1.03] active:scale-[0.98] group"
            >
              <Heart className="w-6 h-6 fill-zinc-950 text-zinc-950 group-hover:scale-110 transition-transform" />
              <span>{t.inDevelopment.supportBtn}</span>
              <ExternalLink className="w-4 h-4 opacity-75 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <button
              onClick={onOpenWebApp}
              className="w-full sm:w-auto px-6 py-4.5 rounded-2xl bg-zinc-900 border border-zinc-700 hover:border-amber-500/40 hover:bg-zinc-850 text-white font-bold text-base transition-all flex items-center justify-center gap-2.5 active:scale-[0.98]"
            >
              <Smartphone className="w-5 h-5 text-amber-400" />
              <span>{t.inDevelopment.openWebAppBtn}</span>
            </button>
          </div>

          {/* Why support card */}
          <div className="w-full max-w-lg p-5 sm:p-6 rounded-2xl bg-zinc-900/70 border border-zinc-800 text-left shadow-lg">
            <div className="flex items-center gap-3 mb-2.5">
              <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                <Coffee className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-white">
                {t.inDevelopment.whySupportTitle}
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-4">
              {t.inDevelopment.whySupportDesc}
            </p>
            <div className="flex items-center justify-between text-xs text-zinc-400 pt-3 border-t border-zinc-800/80">
              <span className="flex items-center gap-1.5 text-zinc-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Donatello: @PavelTerekhov
              </span>
              <a
                href="https://donatello.to/PavelTerekhov"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400 hover:text-amber-300 font-semibold inline-flex items-center gap-1"
              >
                <span>donatello.to</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Quick back link */}
          <button
            onClick={onBackHome}
            className="mt-8 text-xs text-zinc-400 hover:text-white transition-colors inline-flex items-center gap-1.5"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>{t.inDevelopment.backHomeBtn}</span>
          </button>

        </div>

      </main>

      {/* Footer minimal */}
      <footer className="py-6 border-t border-zinc-850 text-center text-xs text-zinc-400">
        <p>© 2026 Будьмо! • Зроблено в Україні 🇺🇦</p>
      </footer>

    </div>
  );
};
