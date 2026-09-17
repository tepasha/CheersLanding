import React from 'react';
import { 
  ShieldCheck, 
  Lock, 
  MapPinOff, 
  UserCheck, 
  AlertOctagon, 
  CheckCircle2, 
  Sparkles, 
  EyeOff,
  Building2,
  ThumbsUp
} from 'lucide-react';

export const SafetySection: React.FC = () => {
  return (
    <section id="safety" className="py-20 md:py-28 bg-[#0d0d11] border-t border-zinc-800/80 relative overflow-hidden">
      
      {/* Subtle safety emerald accent glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[550px] h-[550px] bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Безпека понад усе</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display mb-4">
            Твій комфорт і спокій <br /> захищені на 100%
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed">
            «Будьмо!» побудовано за найвищими стандартами приватності. Жодних домашніх адрес чи підозрілих локацій.
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
                <span>Дія / Google / Telegram</span>
              </div>
            </div>

            <h3 className="text-xl font-bold text-white font-display mb-2">
              Багаторівнева верифікація акаунтів
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed mb-4">
              Ми відсікаємо анонімних ботів і шахраїв ще на етапі реєстрації. Можливість підтвердити особу через безпечний шеринг Дії або перевірений Google-профіль із бейджем довіри.
            </p>

            <ul className="space-y-2 text-xs text-zinc-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Відсутність фейкових акаунтів та порожніх профілів</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Бейдж «Верифіковано» біля фото кожного реального учасника</span>
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
                100% публічність
              </span>
            </div>

            <h3 className="text-xl font-bold text-white font-display mb-2">
              Зустрічі тільки в перевірених публічних закладах
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed mb-4">
              Правило системи «Будьмо!»: додаток пропонує зустрічатися виключно у партнерських пабах, міських кавʼярнях, ресторанах або коворкінгах, де завжди є персонал і світло.
            </p>

            <ul className="space-y-2 text-xs text-zinc-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Ніяких приватних квартир чи безлюдних парків</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Співробітники закладів знають програму «Будьмо!» та готові допомогти</span>
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
                Fuzzy Geo Guard
              </span>
            </div>

            <h3 className="text-xl font-bold text-white font-display mb-2">
              Абсолютна приватність геопозиції
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed mb-4">
              Ніхто і ніколи не бачить номер твоєї квартири, будинку чи точний підʼїзд. Радар навмисно показує лише загальну зону (наприклад: «Поділ, ~400м» або «вулиця Сагайдачного»).
            </p>

            <div className="p-3 bg-[#0b0b0e] rounded-xl border border-zinc-800 text-xs text-zinc-400 flex items-center gap-3">
              <EyeOff className="w-5 h-5 text-amber-400 shrink-0" />
              <span>
                Твоя точна точка GPS обробляється зашифровано на пристрої та не передається третім особам.
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
                1-Click Block & SOS
              </span>
            </div>

            <h3 className="text-xl font-bold text-white font-display mb-2">
              Рейтинг ввічливості та миттєва модерація
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed mb-4">
              Після кожного тосту обидва учасники можуть анонімно поставити оцінку взаємоповаги. Користувачі з токсичною або навʼязливою поведінкою блокуються назавжди.
            </p>

            <ul className="space-y-2 text-xs text-zinc-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Блокування порушника в 1 клік — він більше ніколи тебе не побачить</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Цілодобова жива служба підтримки комʼюніті</span>
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
                Маніфест взаємоповаги «Будьмо!»
              </h4>
              <p className="text-xs text-zinc-300 max-w-2xl">
                Ми обʼєднуємо відкритих, культурних та привітних українців. Повага до особистих кордонів, гостинність і дружня атмосфера — фундаментальні правила кожного тосту.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <span className="text-xs font-semibold text-emerald-400 bg-emerald-950 px-3 py-1.5 rounded-xl border border-emerald-800/50 flex items-center gap-1.5">
              <ThumbsUp className="w-3.5 h-3.5" />
              <span>99.4% позитивних відгуків</span>
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
