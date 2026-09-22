import React from 'react';
import { 
  ShieldCheck, 
  MapPinOff, 
  UserCheck, 
  AlertOctagon, 
  CheckCircle2, 
  EyeOff,
  Building2,
  ThumbsUp
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const SafetySection: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <section id="safety" className="py-20 md:py-28 bg-[#0d0d11] border-t border-zinc-800/80 relative overflow-hidden">
      
      {/* Subtle safety emerald accent glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[550px] h-[550px] bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>{t.safety.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display mb-4">
            {t.safety.title}
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed">
            {t.safety.subtitle}
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          
          {/* Pillar 1: Verification */}
          <div className="bg-[#121216] border border-zinc-800 hover:border-emerald-500/40 rounded-2xl p-7 transition-all duration-200 group">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <UserCheck className="w-6 h-6" />
              </div>
              <div className="flex items-center gap-1.5 bg-zinc-900 border border-zinc-800 px-3 py-1 rounded-full text-xs text-zinc-300 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>{t.safety.pillar1Tag}</span>
              </div>
            </div>

            <h3 className="text-xl font-bold text-white font-display mb-2">
              {t.safety.pillar1Title}
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed mb-4">
              {t.safety.pillar1Desc}
            </p>

            <ul className="space-y-2 text-xs text-zinc-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>{t.safety.pillar1Point1}</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>{t.safety.pillar1Point2}</span>
              </li>
            </ul>
          </div>

          {/* Pillar 2: Public Places Only */}
          <div className="bg-[#121216] border border-zinc-800 hover:border-emerald-500/40 rounded-2xl p-7 transition-all duration-200 group">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center">
                <Building2 className="w-6 h-6" />
              </div>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">
                {t.safety.pillar2Tag}
              </span>
            </div>

            <h3 className="text-xl font-bold text-white font-display mb-2">
              {t.safety.pillar2Title}
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed mb-4">
              {t.safety.pillar2Desc}
            </p>

            <ul className="space-y-2 text-xs text-zinc-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>{t.safety.pillar2Point1}</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>{t.safety.pillar2Point2}</span>
              </li>
            </ul>
          </div>

          {/* Pillar 3: Fuzzy Geolocation Privacy */}
          <div className="bg-[#121216] border border-zinc-800 hover:border-emerald-500/40 rounded-2xl p-7 transition-all duration-200 group">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center">
                <MapPinOff className="w-6 h-6" />
              </div>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-zinc-900 text-zinc-300 border border-zinc-800">
                {t.safety.pillar3Tag}
              </span>
            </div>

            <h3 className="text-xl font-bold text-white font-display mb-2">
              {t.safety.pillar3Title}
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed mb-4">
              {t.safety.pillar3Desc}
            </p>

            <div className="p-3 bg-[#0b0b0e] rounded-xl border border-zinc-800 text-xs text-zinc-400 flex items-center gap-3">
              <EyeOff className="w-5 h-5 text-amber-400 shrink-0" />
              <span>
                {t.safety.pillar3Note}
              </span>
            </div>
          </div>

          {/* Pillar 4: Courtesy Rating & Instant Moderation */}
          <div className="bg-[#121216] border border-zinc-800 hover:border-emerald-500/40 rounded-2xl p-7 transition-all duration-200 group">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 flex items-center justify-center">
                <AlertOctagon className="w-6 h-6" />
              </div>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-rose-500/10 text-rose-400 border border-rose-500/20">
                {t.safety.pillar4Tag}
              </span>
            </div>

            <h3 className="text-xl font-bold text-white font-display mb-2">
              {t.safety.pillar4Title}
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed mb-4">
              {t.safety.pillar4Desc}
            </p>

            <ul className="space-y-2 text-xs text-zinc-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>{t.safety.pillar4Point1}</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>{t.safety.pillar4Point2}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Community Code Banner */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-emerald-950/40 via-zinc-900 to-amber-950/20 border border-emerald-800/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-2xl shrink-0">
              🤝
            </div>
            <div>
              <h4 className="text-base font-bold text-white font-display">
                {language === 'uk' ? 'Маніфест взаємоповаги «Будьмо!»' : 'Budmo Courtesy & Respect Manifesto'}
              </h4>
              <p className="text-xs text-zinc-300 max-w-2xl">
                {language === 'uk' 
                  ? 'Ми обʼєднуємо відкритих, культурних та привітних людей. Повага до особистих кордонів, гостинність і дружня атмосфера — фундаментальні правила кожного тосту.'
                  : 'We bring together open, cultured, and welcoming people. Respect for boundaries, hospitality, and a friendly atmosphere are fundamental rules of every cheers.'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <span className="text-xs font-semibold text-emerald-400 bg-emerald-950 px-3 py-1.5 rounded-xl border border-emerald-800/50 flex items-center gap-1.5">
              <ThumbsUp className="w-3.5 h-3.5" />
              <span>{language === 'uk' ? '99.4% позитивних відгуків' : '99.4% positive ratings'}</span>
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
