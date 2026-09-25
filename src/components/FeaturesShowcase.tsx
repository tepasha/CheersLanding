import React, { useState, useEffect } from 'react';
import { 
  Clock, 
  Flame, 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { playGlassClink } from '../utils/audio';
import { useLanguage } from '../context/LanguageContext';

interface FeaturesShowcaseProps {
  onOpenPartnerModal?: () => void;
}

export const FeaturesShowcase: React.FC<FeaturesShowcaseProps> = () => {
  const { t, language } = useLanguage();

  // Clink Toast sandbox state
  const [clinkCount, setClinkCount] = useState(12);
  const [clinkAnim, setClinkAnim] = useState(false);

  // "Тут і зараз" countdown simulation
  const [minutesRemaining, setMinutesRemaining] = useState(48);

  useEffect(() => {
    const timer = setInterval(() => {
      setMinutesRemaining((prev) => (prev > 1 ? prev - 1 : 59));
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  const handleClink = (e: React.MouseEvent) => {
    playGlassClink();
    setClinkCount((prev) => prev + 1);
    setClinkAnim(true);

    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    confetti({
      particleCount: 35,
      spread: 70,
      origin: { x, y },
      colors: ['#f59e0b', '#fbbf24', '#10b981', '#ffffff'],
      ticks: 160,
    });

    setTimeout(() => setClinkAnim(false), 800);
  };

  return (
    <section id="features" className="py-10 md:py-14 bg-[#0a0a0c] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-4">
            {t.features.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display mb-4">
            {t.features.title}
          </h2>
          <p className="text-base sm:text-lg text-zinc-400">
            {t.features.subtitle}
          </p>
        </div>

        {/* FEATURES GRID: "Дзинь!" + "Тут і зараз" */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* FEATURE 1: Функція "Дзинь!" */}
          <div className="lg:col-span-7 bg-[#121216] border border-zinc-800 rounded-3xl p-6 sm:p-8 relative overflow-hidden shadow-xl">
            <div className="absolute top-0 right-0 p-6 opacity-10 pointer-events-none">
              <span className="text-9xl">🥂</span>
            </div>

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-bold mb-4">
                <span>🥂 {language === 'uk' ? 'Інтерактивна фішка' : 'Interactive feature'}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white font-display mb-3">
                {t.features.feature1Title}
              </h3>
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-6 max-w-xl">
                {t.features.feature1Desc}
              </p>

              {/* Interactive Clinking Sandbox */}
              <div className="bg-[#0b0b0e] border border-zinc-800 rounded-2xl p-5 sm:p-6 flex flex-col items-center text-center">
                
                {/* Visual Glass Collision Animation */}
                <div className="relative w-48 h-28 flex items-center justify-center mb-4">
                  <div
                    className={`text-5xl transition-all duration-300 select-none ${
                      clinkAnim ? 'translate-x-3 rotate-12 scale-110' : '-translate-x-1 rotate-0'
                    }`}
                  >
                    🍺
                  </div>
                  <div
                    className={`text-5xl transition-all duration-300 select-none ${
                      clinkAnim ? '-translate-x-3 -rotate-12 scale-110' : 'translate-x-1 rotate-0'
                    }`}
                  >
                    🍻
                  </div>

                  {clinkAnim && (
                    <div className="absolute -top-1 text-2xl animate-ping select-none">
                      ✨
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-3 mb-4">
                  <button
                    id="feature-clink-trigger"
                    onClick={handleClink}
                    className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-yellow-300 text-zinc-950 font-bold text-sm flex items-center gap-2 shadow-lg shadow-amber-500/25 active:scale-95 transition-all"
                  >
                    <span>🥂</span>
                    <span>{language === 'uk' ? 'Зробити «Дзинь!»' : 'Make a "Clink!"'}</span>
                  </button>

                  <div className="text-left bg-zinc-900 border border-zinc-800 px-3.5 py-2 rounded-xl">
                    <span className="text-[10px] text-zinc-400 block">{language === 'uk' ? 'Твої тости в демо:' : 'Your toasts in demo:'}</span>
                    <span className="text-sm font-bold text-amber-400 font-display">
                      {clinkCount} {language === 'uk' ? 'разів' : 'times'}
                    </span>
                  </div>
                </div>

                <p className="text-xs text-zinc-400">
                  {language === 'uk' ? '🔊 Клацніть кнопку — почуєте справжній кришталевий звук келихів!' : '🔊 Click the button to hear real crystal glass clinking!'}
                </p>
              </div>
            </div>
          </div>

          {/* FEATURE 2: Формат "Тут і зараз" */}
          <div className="lg:col-span-5 bg-[#121216] border border-zinc-800 rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden shadow-xl">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold mb-4">
                <Flame className="w-3.5 h-3.5" />
                <span>{language === 'uk' ? 'Спонтанність рулить' : 'Spontaneity wins'}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white font-display mb-3">
                {t.features.feature3Title}
              </h3>
              <p className="text-zinc-300 text-sm leading-relaxed mb-6">
                {t.features.feature3Desc}
              </p>

              {/* Live Ticker Card */}
              <div className="bg-[#0b0b0e] border border-zinc-800/90 rounded-2xl p-4 space-y-3">
                <div className="flex items-center justify-between text-xs pb-2.5 border-b border-zinc-800">
                  <span className="text-zinc-400 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-amber-400" />
                    {language === 'uk' ? 'Вікно зустрічі:' : 'Meetup window:'}
                  </span>
                  <span className="font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                    {minutesRemaining} {language === 'uk' ? 'хв' : 'min'}
                  </span>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="flex items-center justify-between p-2 rounded-lg bg-zinc-900/80 border border-zinc-800/80">
                    <span className="text-zinc-300 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      {language === 'uk' ? 'Поділ: стіл на 4 особи' : 'Podil: table for 4'}
                    </span>
                    <span className="text-zinc-400 font-mono text-[11px]">{language === 'uk' ? 'Орест + 1' : 'Orest + 1'}</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-lg bg-zinc-900/80 border border-zinc-800/80">
                    <span className="text-zinc-300 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                      {language === 'uk' ? 'Хрещатик: кава на виніс' : 'Khreshchatyk: takeaway coffee'}
                    </span>
                    <span className="text-zinc-400 font-mono text-[11px]">{language === 'uk' ? 'Олена' : 'Olena'}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-zinc-800/70 text-xs text-zinc-400 flex items-center gap-2">
              <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{language === 'uk' ? '92% користувачів знаходять компанію менше ніж за 15 хвилин' : '92% of users find company in under 15 minutes'}</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
