import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  Share2, 
  Copy, 
  Check, 
  Clock, 
  Flame, 
  RefreshCw, 
  ShieldCheck, 
  GlassWater,
  Beer,
  Wine,
  Coffee,
  HeartHandshake
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { UKRAINIAN_TOASTS } from '../data/mockData';
import { ToastItem } from '../types';
import { playGlassClink, playCelebrationPop } from '../utils/audio';

interface FeaturesShowcaseProps {
  onOpenPartnerModal?: () => void;
}

export const FeaturesShowcase: React.FC<FeaturesShowcaseProps> = () => {
  // Clink Toast sandbox state
  const [clinkCount, setClinkCount] = useState(12);
  const [clinkAnim, setClinkAnim] = useState(false);

  // Toast generator state
  const [currentToastIndex, setCurrentToastIndex] = useState(0);
  const [selectedToastCategory, setSelectedToastCategory] = useState<string>('all');
  const [copiedToast, setCopiedToast] = useState(false);

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

  const filteredToasts = selectedToastCategory === 'all'
    ? UKRAINIAN_TOASTS
    : UKRAINIAN_TOASTS.filter((t) => t.category === selectedToastCategory);

  const activeToast: ToastItem = filteredToasts[currentToastIndex % filteredToasts.length] || UKRAINIAN_TOASTS[0];

  const handleNextToast = () => {
    playCelebrationPop();
    setCurrentToastIndex((prev) => (prev + 1) % filteredToasts.length);
    setCopiedToast(false);
  };

  const handleCopyToast = () => {
    navigator.clipboard.writeText(`${activeToast.title}\n\n${activeToast.text}\n\n— З додатку «Будьмо!»`);
    setCopiedToast(true);
    setTimeout(() => setCopiedToast(false), 2500);
  };

  return (
    <section id="features" className="py-20 md:py-28 bg-[#0a0a0c] relative">
      
      {/* Subtle atmospheric gradient */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-4">
            Фішки, яких немає в інших додатках
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display mb-4">
            Створено для живих людей <br /> та справжнього настрою
          </h2>
          <p className="text-base sm:text-lg text-zinc-400">
            Від віртуальних тостів до знижок у культових барах вашого міста.
          </p>
        </div>

        {/* FEATURE 1 & 4 GRID: "Дзинь!" + "Тут і зараз" */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          
          {/* FEATURE 1: Функція "Дзинь!" (Interactive clink box) */}
          <div className="lg:col-span-7 bg-[#121216] border border-zinc-800 rounded-3xl p-6 sm:p-8 relative overflow-hidden shadow-xl">
            <div className="absolute top-0 right-0 p-6 opacity-10 pointer-events-none">
              <span className="text-9xl">🥂</span>
            </div>

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-bold mb-4">
                <span>🥂 Інтерактивна фішка</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white font-display mb-3">
                Функція «Дзинь!» — віртуальний тост при зустрічі
              </h3>
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-6 max-w-xl">
                Коли ви зустрічаєтеся в закладі, просто піднесіть смартфони один до одного або натисніть «Дзинь!». Додаток фіксує успішну зустріч, нараховує обом бали лояльності та активує спешл-знижку на барі.
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
                    <span>Зробити «Дзинь!»</span>
                  </button>

                  <div className="text-left bg-zinc-900 border border-zinc-800 px-3.5 py-2 rounded-xl">
                    <span className="text-[10px] text-zinc-400 block">Твої тости в демо:</span>
                    <span className="text-sm font-bold text-amber-400 font-display">
                      {clinkCount} разів
                    </span>
                  </div>
                </div>

                <p className="text-xs text-zinc-400">
                  🔊 Клацніть кнопку — почуєте справжній кришталевий звук келихів!
                </p>
              </div>
            </div>
          </div>

          {/* FEATURE 4: Формат "Тут і зараз" */}
          <div className="lg:col-span-5 bg-[#121216] border border-zinc-800 rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden shadow-xl">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold mb-4">
                <Flame className="w-3.5 h-3.5" />
                <span>Спонтанність рулить</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white font-display mb-3">
                Формат «Тут і зараз»
              </h3>
              <p className="text-zinc-300 text-sm leading-relaxed mb-6">
                Забудь про: «Давай зустрінемось через 2 тижні у вівторок, якщо буде настрій». «Будьмо!» працює для планів на найближчі 1-2 години.
              </p>

              {/* Live Ticker Card */}
              <div className="bg-[#0b0b0e] border border-zinc-800/90 rounded-2xl p-4 space-y-3">
                <div className="flex items-center justify-between text-xs pb-2.5 border-b border-zinc-800">
                  <span className="text-zinc-400 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-amber-400" />
                    Вікно зустрічі:
                  </span>
                  <span className="font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                    Найближчі {minutesRemaining} хв
                  </span>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="flex items-center justify-between p-2 rounded-lg bg-zinc-900/80 border border-zinc-800/80">
                    <span className="text-zinc-300 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      Поділ: стіл на 4 особи
                    </span>
                    <span className="text-zinc-400 font-mono text-[11px]">Орест + 1</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-lg bg-zinc-900/80 border border-zinc-800/80">
                    <span className="text-zinc-300 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                      Хрещатик: кава на виніс
                    </span>
                    <span className="text-zinc-400 font-mono text-[11px]">Олена</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-zinc-800/70 text-xs text-zinc-400 flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>92% користувачів знаходять компанію менше ніж за 15 хвилин</span>
            </div>
          </div>

        </div>

        {/* FEATURE 2: 🎭 Генератор українських тостів (Interactive Widget) */}
        <div id="toasts" className="bg-gradient-to-br from-[#121216] via-[#15151c] to-[#0e0e12] border border-amber-500/20 rounded-3xl p-6 sm:p-10 relative overflow-hidden shadow-2xl">
          
          {/* Subtle warm decorative glow */}
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-400 text-xs font-bold mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Живий віджет на сайті</span>
            </div>

            <h3 className="text-2xl sm:text-4xl font-extrabold text-white font-display tracking-tight mb-3">
              Генератор щирих українських тостів
            </h3>
            <p className="text-zinc-300 text-sm sm:text-base mb-8">
              Ніяких заїжджених фраз із листівок. Тисніть кнопку та отримуйте влучні, душевні або дотепні тости для вашої компанії прямо зараз.
            </p>

            {/* Category Pills */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {[
                { id: 'all', label: 'Всі тости' },
                { id: 'friends', label: 'Для друзів 🍻' },
                { id: 'victory', label: 'За ЗСУ та Перемогу 🇺🇦' },
                { id: 'tech', label: 'Для айтівців 💻' },
                { id: 'love', label: 'За кохання ❤️' },
                { id: 'philosophical', label: 'Філософський 🌙' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => {
                    setSelectedToastCategory(tab.id);
                    setCurrentToastIndex(0);
                  }}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                    selectedToastCategory === tab.id
                      ? 'bg-amber-500 text-zinc-950 font-semibold shadow-md shadow-amber-500/20'
                      : 'bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Main Toast Display Card */}
            <div className="bg-[#0a0a0c]/90 border border-zinc-800 rounded-2xl p-6 sm:p-8 text-left mb-8 shadow-inner relative">
              <div className="flex items-center justify-between mb-4 border-b border-zinc-800/80 pb-3">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider font-display">
                  {activeToast.title}
                </span>
                <span className="text-[11px] font-mono text-zinc-400 bg-zinc-900 px-2.5 py-0.5 rounded border border-zinc-800">
                  {activeToast.tag}
                </span>
              </div>

              <blockquote className="text-lg sm:text-xl font-medium text-zinc-100 italic leading-relaxed mb-6 font-display">
                {activeToast.text}
              </blockquote>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-zinc-800/60">
                <span className="text-xs text-zinc-400">
                  Піднімай келих і кажи: <strong className="text-white">«Будьмо!»</strong>
                </span>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopyToast}
                    className="px-3.5 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-xs font-semibold text-zinc-200 flex items-center gap-1.5 transition-colors"
                  >
                    {copiedToast ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Скопійовано!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-amber-400" />
                        <span>Скопіювати</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Generator Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                id="toast-next-btn"
                onClick={handleNextToast}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-400 hover:to-yellow-300 text-zinc-950 font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-amber-500/25 active:scale-95 transition-all"
              >
                <RefreshCw className="w-4 h-4" />
                <span>Згенерувати інший тост</span>
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
