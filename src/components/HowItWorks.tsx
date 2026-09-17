import React, { useState } from 'react';
import { Radio, Coffee, Beer, Wine, GlassWater, CheckCircle, Navigation, MapPin, Sparkles, ArrowRight, Shield } from 'lucide-react';
import { DrinkCategory } from '../types';

export const HowItWorks: React.FC = () => {
  const [activeRadius, setActiveRadius] = useState<number>(1200);
  const [selectedCategory, setSelectedCategory] = useState<DrinkCategory>('craft_beer');
  const [simulatedMatch, setSimulatedMatch] = useState(false);

  // Dynamic calculations based on slider
  const estimatedPeopleCount = Math.round((activeRadius / 500) * 11 + 6);

  const categories: { id: DrinkCategory; label: string; icon: string; desc: string }[] = [
    { id: 'craft_beer', label: 'Крафтове пиво', icon: '🍺', desc: 'IPA, Стаути, Лагери з локальних броварень' },
    { id: 'coffee', label: 'Спешелті кава', icon: '☕️', desc: 'Фільтр, флет-вайт, затишні розмови' },
    { id: 'wine', label: 'Вино & Сидр', icon: '🍷', desc: 'Сухе натуральне, яблучний крафтовий сидр' },
    { id: 'cocktail', label: 'Коктейлі & Чіл', icon: '🍸', desc: 'Класичні та авторські мікси в барах' },
    { id: 'tea_non_alc', label: 'Чай & Настілки', icon: '🍵', desc: 'Матча, китайський чай, настолки без алкоголю' },
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-[#0e0e12] border-y border-zinc-800/60 relative overflow-hidden">
      
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-4">
            Просто. Швидко. Безпечно.
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display mb-4">
            Як це працює за 3 кроки
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed">
            Ніяких тижнів нудних листувань. Ти вільний сьогодні о 19:00? Додаток зʼєднує людей за 2 хвилини для живої зустрічі поруч.
          </p>
        </div>

        {/* 3 Step Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* STEP 1 */}
          <div className="bg-[#131318] border border-zinc-800 hover:border-zinc-700/80 rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 group shadow-lg">
            <div>
              <div className="flex items-center justify-between mb-5">
                <span className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 font-bold font-display text-lg flex items-center justify-center">
                  01
                </span>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-zinc-800 text-zinc-300 flex items-center gap-1.5">
                  <Radio className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
                  Гео-радар
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2 font-display">
                Увімкни радар
              </h3>
              <p className="text-sm text-zinc-400 mb-6 leading-relaxed">
                Додаток сканує найближчий периметр від 500 метрів до 3 кілометрів і показує тільки тих, хто готовий зустрітися прямо зараз.
              </p>

              {/* Interactive Radius Sandbox */}
              <div className="bg-[#0b0b0e] rounded-xl p-4 border border-zinc-800/80">
                <div className="flex justify-between items-center text-xs font-medium text-zinc-300 mb-2">
                  <span>Радіус пошуку:</span>
                  <span className="text-amber-400 font-bold font-display">
                    {activeRadius >= 1000 ? `${(activeRadius / 1000).toFixed(1)} км` : `${activeRadius} м`}
                  </span>
                </div>

                <input
                  type="range"
                  min="500"
                  max="3000"
                  step="250"
                  value={activeRadius}
                  onChange={(e) => setActiveRadius(Number(e.target.value))}
                  className="w-full accent-amber-500 h-1.5 bg-zinc-800 rounded-lg cursor-pointer"
                />

                <div className="mt-3 flex items-center justify-between text-xs text-zinc-400 border-t border-zinc-800/60 pt-2">
                  <span>Людей поруч у радіусі:</span>
                  <span className="text-emerald-400 font-bold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    ~{estimatedPeopleCount} осіб онлайн
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-zinc-800/60 flex items-center gap-2 text-xs text-zinc-400">
              <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Твоя точна адреса захищена, видно лише радіус</span>
            </div>
          </div>

          {/* STEP 2 */}
          <div className="bg-[#131318] border border-zinc-800 hover:border-zinc-700/80 rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 group shadow-lg">
            <div>
              <div className="flex items-center justify-between mb-5">
                <span className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 font-bold font-display text-lg flex items-center justify-center">
                  02
                </span>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-zinc-800 text-zinc-300">
                  Фільтр смаків
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2 font-display">
                Обери напій і вайб
              </h3>
              <p className="text-sm text-zinc-400 mb-6 leading-relaxed">
                Шукаєш поціновувачів цитрусової IPA, чашку свіжої фільтр-кави чи партію в настілку за травʼяним чаєм? Обери свій настрій.
              </p>

              {/* Interactive Category Selector */}
              <div className="space-y-2">
                {categories.slice(0, 4).map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`w-full text-left p-2.5 rounded-xl border text-xs flex items-center justify-between transition-all ${
                      selectedCategory === cat.id
                        ? 'bg-amber-500/10 border-amber-500/50 text-white font-medium shadow-sm'
                        : 'bg-[#0b0b0e] border-zinc-800 text-zinc-300 hover:border-zinc-700'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="text-base">{cat.icon}</span>
                      <span>{cat.label}</span>
                    </div>
                    {selectedCategory === cat.id && (
                      <span className="w-2 h-2 rounded-full bg-amber-400" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-zinc-800/60 flex items-center gap-2 text-xs text-zinc-400">
              <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Повний збіг за вайбом без незручних пауз</span>
            </div>
          </div>

          {/* STEP 3 */}
          <div className="bg-[#131318] border border-zinc-800 hover:border-zinc-700/80 rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 group shadow-lg">
            <div>
              <div className="flex items-center justify-between mb-5">
                <span className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 font-bold font-display text-lg flex items-center justify-center">
                  03
                </span>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                  Миттєвий тост
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2 font-display">
                Тисни «Будьмо!»
              </h3>
              <p className="text-sm text-zinc-400 mb-6 leading-relaxed">
                Отримуй взаємне підтвердження («Дзинь!»), обирай перевірений заклад посередині з ексклюзивною знижкою та вирушай на зустріч.
              </p>

              {/* Match Simulation Widget */}
              <div className="bg-[#0b0b0e] rounded-xl p-4 border border-zinc-800/80">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <img 
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&auto=format&fit=crop&q=80" 
                      alt="Match"
                      className="w-8 h-8 rounded-full object-cover border border-amber-400"
                    />
                    <div className="text-left">
                      <p className="text-xs font-bold text-white">Орест</p>
                      <p className="text-[10px] text-zinc-400">«RePublic Craft Pub, стіл біля вікна»</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-800/50">
                    -15% на чеки
                  </span>
                </div>

                <button
                  onClick={() => setSimulatedMatch(!simulatedMatch)}
                  className="w-full py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-xs font-semibold text-zinc-200 flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>{simulatedMatch ? 'Тост підтверджено! Зустріч призначено 🎉' : 'Зімітувати тост «Будьмо!»'}</span>
                </button>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-zinc-800/60 flex items-center gap-2 text-xs text-zinc-400">
              <Shield className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Зустрічі лише у перевірених людних закладах</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
