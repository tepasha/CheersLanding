import React from 'react';
import { BookOpen, Sparkles, Ban, HeartCrack, Building2, Beer, Quote, Feather } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const LiteraryDisclaimer: React.FC = () => {
  const { t } = useLanguage();
  const d = t.literaryDisclaimer;

  return (
    <section id="manifesto" className="relative z-10 py-16 sm:py-24 bg-gradient-to-b from-[#0a0a0c] via-[#0f0e14] to-[#0a0a0c] border-b border-zinc-800/80 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 -translate-y-1/2 w-80 h-80 bg-rose-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Top Badge: Literary Disclaimer */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs sm:text-sm font-semibold tracking-wide shadow-sm shadow-amber-500/10 mb-4 backdrop-blur-sm">
            <Feather className="w-4 h-4 text-amber-400" />
            <span>{d.badge}</span>
          </div>

          {/* Main Title: Neither for carnal pleasures nor building a family */}
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display max-w-4xl mx-auto leading-tight sm:leading-snug">
            {d.titlePart1}
            <span className="text-rose-400/90 underline decoration-rose-500/50 decoration-wavy decoration-1 underline-offset-4">
              {d.titleHighlight1}
            </span>
            {d.titlePart2}
            <span className="text-sky-300/90 underline decoration-sky-400/50 decoration-wavy decoration-1 underline-offset-4">
              {d.titleHighlight2}
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-zinc-300 max-w-2xl mx-auto font-light leading-relaxed">
            {d.subtitle}
          </p>
        </div>

        {/* Literary Essay Card */}
        <div className="relative rounded-3xl bg-gradient-to-b from-[#15141c] to-[#100f15] border border-amber-500/25 p-6 sm:p-10 lg:p-12 shadow-2xl shadow-black/60 mb-12">
          
          {/* Decorative Corner Ornaments */}
          <div className="absolute top-4 left-4 text-amber-500/20 font-serif text-2xl select-none">❧</div>
          <div className="absolute top-4 right-4 text-amber-500/20 font-serif text-2xl select-none">☙</div>
          <div className="absolute bottom-4 left-4 text-amber-500/20 font-serif text-2xl select-none">☙</div>
          <div className="absolute bottom-4 right-4 text-amber-500/20 font-serif text-2xl select-none">❧</div>

          {/* Opening Quote Banner */}
          <div className="relative mb-8 p-4 sm:p-5 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-start gap-3.5">
            <Quote className="w-6 h-6 text-amber-400 shrink-0 mt-0.5" />
            <p className="text-amber-200 font-medium text-sm sm:text-base italic leading-relaxed">
              {d.openingQuote}
            </p>
          </div>

          {/* Literary Body Text with Drop Cap feel */}
          <div className="space-y-5 text-zinc-300 text-sm sm:text-base leading-relaxed sm:leading-loose">
            <p className="first-letter:text-4xl first-letter:font-bold first-letter:text-amber-400 first-letter:mr-2 first-letter:float-left first-letter:font-serif">
              {d.paragraph1}
            </p>
            <p className="border-l-2 border-amber-500/40 pl-4 py-1 text-zinc-200 font-normal">
              {d.paragraph2}
            </p>
            <p className="text-zinc-400">
              {d.paragraph3}
            </p>
          </div>

          {/* Signature & Seal */}
          <div className="mt-8 pt-6 border-t border-zinc-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-600/30 to-yellow-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 shadow-sm">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs sm:text-sm font-bold text-amber-300 font-serif tracking-wide">
                  {d.authorSign}
                </p>
                <p className="text-[11px] text-zinc-400 italic">
                  {d.authorQuote}
                </p>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-zinc-900 border border-zinc-800 text-[11px] font-semibold text-zinc-300">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span>100% розважальний формат</span>
            </div>
          </div>

        </div>

        {/* 3 Clear Contrast Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          
          {/* Card 1: No Carnal Pleasures */}
          <div className="p-5 sm:p-6 rounded-2xl bg-zinc-900/70 border border-rose-500/20 hover:border-rose-500/40 transition-colors shadow-lg group">
            <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400 mb-4 group-hover:scale-105 transition-transform">
              <HeartCrack className="w-5 h-5" />
            </div>
            <div className="flex items-center gap-2 mb-2">
              <Ban className="w-4 h-4 text-rose-400" />
              <h3 className="text-base font-bold text-white tracking-tight">
                {d.card1Title}
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              {d.card1Desc}
            </p>
          </div>

          {/* Card 2: No Matrimonial Pressure */}
          <div className="p-5 sm:p-6 rounded-2xl bg-zinc-900/70 border border-sky-500/20 hover:border-sky-500/40 transition-colors shadow-lg group">
            <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 mb-4 group-hover:scale-105 transition-transform">
              <Building2 className="w-5 h-5" />
            </div>
            <div className="flex items-center gap-2 mb-2">
              <Ban className="w-4 h-4 text-sky-400" />
              <h3 className="text-base font-bold text-white tracking-tight">
                {d.card2Title}
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              {d.card2Desc}
            </p>
          </div>

          {/* Card 3: Pure Entertainment & Good Vibes */}
          <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-b from-amber-500/15 via-zinc-900/80 to-zinc-900/90 border border-amber-500/35 hover:border-amber-400/60 transition-all shadow-xl group">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-4 group-hover:scale-105 transition-transform">
              <Beer className="w-5 h-5" />
            </div>
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <h3 className="text-base font-bold text-amber-200 tracking-tight">
                {d.card3Title}
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              {d.card3Desc}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
