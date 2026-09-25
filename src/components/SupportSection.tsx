import React from 'react';
import { Heart, ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const TelegramIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.52 2.77-1.15 3.35-1.35 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
  </svg>
);

export const SupportSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="relative z-10 bg-[#0a0a0c] pt-1 pb-5 sm:pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
          
          {/* Пункт 1: Плашка "Тех підтримка" (без посилання) */}
          <div className="px-4 py-3 sm:py-3.5 rounded-2xl bg-zinc-900/80 border border-zinc-800/80 flex items-center justify-between gap-3 shadow-md shadow-black/30 hover:border-zinc-700/80 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 shrink-0">
                <TelegramIcon className="w-4 h-4 sm:w-5 sm:h-5 text-sky-400" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-white tracking-tight">
                    {t.footer.techSupport}
                  </span>
                  <span className="px-1.5 py-0.5 text-[9px] font-medium rounded-full bg-zinc-800 text-sky-400 border border-zinc-700/50">
                    Telegram
                  </span>
                </div>
                <p className="text-zinc-500 text-[11px] leading-tight mt-0.5">
                  {t.footer.techSupportDesc}
                </p>
              </div>
            </div>
            <div className="shrink-0 text-[11px] text-zinc-500 hidden sm:block bg-zinc-800/60 px-2 py-0.5 rounded-md border border-zinc-700/40">
              @support
            </div>
          </div>

          {/* Пункт 2: Окремий пункт "Підтримати розробника" (з посиланням) */}
          <a
            href="https://donatello.to/PavelTerekhov"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-4 py-3 sm:py-3.5 rounded-2xl bg-gradient-to-r from-amber-500/10 via-zinc-900/90 to-amber-950/20 border border-amber-500/30 hover:border-amber-500/60 flex items-center justify-between gap-3 shadow-md shadow-amber-500/5 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
          >
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0 group-hover:scale-105 transition-transform">
                <Heart className="w-4 h-4 sm:w-5 sm:h-5 fill-amber-400 text-amber-400" />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-amber-200 group-hover:text-amber-100 tracking-tight truncate">
                    {t.footer.supportDev}
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-amber-400/80 shrink-0 group-hover:translate-x-0.5 transition-transform" />
                </div>
                <p className="text-zinc-400 text-[11px] leading-tight mt-0.5 truncate">
                  {t.footer.supportDevSubtitle}
                </p>
              </div>
            </div>
            <span className="shrink-0 px-3 py-1 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-zinc-950 text-xs font-bold shadow-sm shadow-amber-500/20 transition-all">
              Donatello
            </span>
          </a>

        </div>
      </div>
    </section>
  );
};
