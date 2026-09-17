import React, { useState } from 'react';
import { 
  Sparkles, 
  Smartphone, 
  Download, 
  ShieldCheck, 
  Star, 
  Compass, 
  MapPin, 
  QrCode, 
  CheckCircle2, 
  Users, 
  Flame,
  Wine,
  Coffee,
  Beer,
  ArrowRight
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { playGlassClink } from '../utils/audio';

interface HeroProps {
  onOpenWebApp: () => void;
  onOpenDownload: (platform?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenWebApp, onOpenDownload }) => {
  const [toastCount, setToastCount] = useState(148);
  const [hasToasted, setHasToasted] = useState(false);
  const [activePersonTooltip, setActivePersonTooltip] = useState<string | null>('p1');

  const triggerToast = (e: React.MouseEvent) => {
    playGlassClink();
    setToastCount((prev) => prev + 1);
    setHasToasted(true);

    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    confetti({
      particleCount: 45,
      spread: 60,
      origin: { x, y },
      colors: ['#f59e0b', '#fbbf24', '#10b981', '#ffffff', '#eab308'],
      ticks: 200,
      gravity: 1.1,
      scalar: 0.9,
    });

    setTimeout(() => {
      setHasToasted(false);
    }, 1800);
  };

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-emerald-500/8 rounded-full blur-[120px] pointer-events-none" />

      {/* Grid Pattern overlay for depth */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #f59e0b 1px, transparent 0)`,
          backgroundSize: '36px 36px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Conversion Copy & CTA */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Live Pill badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-700/80 shadow-inner mb-6 backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-medium text-zinc-200">
                Зараз у твоєму районі шукають компанію <strong className="text-amber-400 font-semibold">38 людей</strong>
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12] mb-6 font-display">
              Знайди компанію на вечір <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500">
                за 2 хвилини
              </span>{' '}
              у своєму районі
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-zinc-300 mb-8 max-w-2xl leading-relaxed font-normal">
              Від ароматної кави на Подолі до крафтового пива біля дому. Реальні люди поруч, спільні смаки та щирі тости наживо без нескінченних переписок.
            </p>

            {/* Action CTA Buttons */}
            <div className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-6">
              <button
                id="hero-open-pwa-btn"
                onClick={onOpenWebApp}
                className="px-6 py-4 rounded-xl text-base font-bold bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-400 text-zinc-950 hover:from-amber-400 hover:to-yellow-300 shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 transition-all duration-200 flex items-center justify-center gap-2.5 group active:scale-[0.98]"
              >
                <Smartphone className="w-5 h-5 text-zinc-950 group-hover:rotate-12 transition-transform" />
                <span>Спробувати онлайн без встановлення</span>
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                id="hero-download-modal-btn"
                onClick={() => onOpenDownload()}
                className="px-5 py-4 rounded-xl text-base font-semibold text-zinc-100 bg-zinc-800/90 hover:bg-zinc-700/90 border border-zinc-700 hover:border-zinc-600 transition-all duration-200 flex items-center justify-center gap-2.5 shadow-md active:scale-[0.98]"
              >
                <Download className="w-5 h-5 text-amber-400" />
                <span>Завантажити додаток</span>
              </button>
            </div>

            {/* App Store / Google Play / Direct APK Badges */}
            <div className="flex flex-wrap items-center gap-2.5 mb-8">
              <button
                onClick={() => onOpenDownload('ios')}
                className="px-3.5 py-2 rounded-lg bg-zinc-900/90 hover:bg-zinc-800/90 border border-zinc-800 hover:border-zinc-700 text-xs font-medium text-zinc-300 hover:text-white flex items-center gap-2 transition-colors"
                title="Завантажити для iPhone"
              >
                <span className="text-base"></span>
                <span>App Store</span>
              </button>

              <button
                onClick={() => onOpenDownload('android')}
                className="px-3.5 py-2 rounded-lg bg-zinc-900/90 hover:bg-zinc-800/90 border border-zinc-800 hover:border-zinc-700 text-xs font-medium text-zinc-300 hover:text-white flex items-center gap-2 transition-colors"
                title="Завантажити в Google Play"
              >
                <span className="text-emerald-400 font-bold">▶</span>
                <span>Google Play</span>
              </button>

              <button
                onClick={() => onOpenDownload('apk')}
                className="px-3.5 py-2 rounded-lg bg-zinc-900/90 hover:bg-zinc-800/90 border border-zinc-800 hover:border-zinc-700 text-xs font-medium text-zinc-300 hover:text-white flex items-center gap-2 transition-colors"
                title="Пряме завантаження APK для Android"
              >
                <Download className="w-3.5 h-3.5 text-amber-400" />
                <span>Direct APK (Швидко)</span>
              </button>
            </div>

            {/* Social Proof Stats Bar */}
            <div className="pt-6 border-t border-zinc-800/90 w-full flex flex-wrap items-center gap-6 sm:gap-8 text-xs sm:text-sm text-zinc-400">
              <div className="flex items-center gap-2">
                <div className="flex items-center text-amber-400">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                </div>
                <span className="text-zinc-200 font-bold">4.9</span>
                <span className="text-zinc-400">в маркетах</span>
              </div>

              <div className="flex items-center gap-1.5">
                <Users className="w-4 h-4 text-emerald-400" />
                <span className="text-zinc-200 font-semibold">12,000+</span>
                <span>успішних зустрічей</span>
              </div>

              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span className="text-zinc-200 font-medium">100% публічні місця</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Smartphone Mockup with Live Radar */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            
            {/* Desktop QR Scan Widget floating badge */}
            <div className="hidden xl:flex absolute -left-12 bottom-12 z-30 bg-[#141419]/95 border border-zinc-700/80 rounded-2xl p-3.5 shadow-2xl backdrop-blur-md items-center gap-3.5 max-w-[230px]">
              <div className="w-14 h-14 bg-white p-1 rounded-xl flex items-center justify-center shrink-0 shadow-inner">
                {/* Visual SVG QR representation */}
                <svg viewBox="0 0 32 32" className="w-full h-full text-zinc-950" fill="currentColor">
                  <path d="M2 2h10v10H2V2zm2 2v6h6V4H4zm14-2h10v10H18V2zm2 2v6h6V4h-6zM2 18h10v10H2V18zm2 2v6h6v-6H4zm14 0h3v3h-3v-3zm7 0h3v3h-3v-3zm-7 7h3v3h-3v-3zm7 0h3v3h-3v-3zm-3-3h3v3h-3v-3zm-11-7h2v2H6v-2zm16 2h2v2h-2v-2zM6 6h2v2H6V6zm16 0h2v2h-2V6zM6 22h2v2H6v-2z" />
                </svg>
              </div>
              <div className="text-[11px] leading-tight text-zinc-300">
                <p className="font-semibold text-white mb-0.5">Відкрий на телефоні</p>
                <p className="text-zinc-400">Наведи камеру для миттєвого тесту</p>
              </div>
            </div>

            {/* Smartphone Container Frame */}
            <div className="relative w-[310px] sm:w-[340px] h-[640px] bg-[#121216] rounded-[44px] p-3 shadow-2xl shadow-black/80 border-[5px] border-zinc-800 ring-1 ring-zinc-700/50">
              
              {/* Speaker notch */}
              <div className="absolute top-5 left-1/2 -translate-x-1/2 w-28 h-5 bg-zinc-950 rounded-full z-30 flex items-center justify-center">
                <div className="w-10 h-1 bg-zinc-800 rounded-full" />
                <div className="w-2.5 h-2.5 bg-zinc-900 rounded-full ml-3 border border-zinc-800" />
              </div>

              {/* Phone Screen */}
              <div className="w-full h-full bg-[#0d0d11] rounded-[36px] overflow-hidden relative flex flex-col text-white select-none border border-zinc-800/60">
                
                {/* Phone Status Bar */}
                <div className="pt-3 px-6 flex justify-between items-center text-[10px] text-zinc-400 z-20">
                  <span>20:14</span>
                  <div className="flex items-center gap-1.5 text-zinc-300">
                    <span>5G</span>
                    <span className="inline-block w-4 h-2 rounded-sm border border-zinc-400 relative">
                      <span className="absolute left-0 top-0 bottom-0 w-3 bg-emerald-400 rounded-xs" />
                    </span>
                  </div>
                </div>

                {/* In-App Header */}
                <div className="px-4 py-2 flex items-center justify-between z-20 border-b border-zinc-800/40 mt-1">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                    <span className="text-xs font-bold font-display tracking-tight text-amber-400">
                      Будьмо! Радар
                    </span>
                  </div>
                  <div className="text-[10px] bg-zinc-800/80 px-2 py-0.5 rounded-full text-zinc-300 border border-zinc-700/60">
                    Радіус: 1.5 км
                  </div>
                </div>

                {/* Radar Stage View */}
                <div className="relative flex-1 flex items-center justify-center overflow-hidden">
                  
                  {/* Concentric Radar Rings */}
                  <div className="absolute w-64 h-64 rounded-full border border-zinc-800/70" />
                  <div className="absolute w-48 h-48 rounded-full border border-zinc-800/80" />
                  <div className="absolute w-32 h-32 rounded-full border border-amber-500/20" />
                  <div className="absolute w-16 h-16 rounded-full border border-amber-500/40" />

                  {/* Pulsing radar waves */}
                  <div className="absolute w-56 h-56 rounded-full bg-amber-500/5 animate-ping-slow pointer-events-none" />

                  {/* Rotating sweep line */}
                  <div className="absolute w-64 h-64 rounded-full pointer-events-none animate-radar">
                    <div 
                      className="w-1/2 h-1/2 origin-bottom-right"
                      style={{
                        background: 'conic-gradient(from 180deg at 100% 100%, rgba(245, 158, 11, 0.28) 0deg, rgba(245, 158, 11, 0) 65deg)',
                      }}
                    />
                  </div>

                  {/* Central User Marker */}
                  <div className="relative z-20 flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-amber-600 to-amber-400 p-0.5 shadow-lg shadow-amber-500/40 flex items-center justify-center">
                      <div className="w-full h-full rounded-full bg-zinc-950 flex items-center justify-center text-lg">
                        🍺
                      </div>
                    </div>
                    <span className="text-[10px] font-bold text-amber-300 mt-1 bg-zinc-900/90 px-2 py-0.5 rounded-full border border-amber-500/30">
                      Ти (Поділ)
                    </span>
                  </div>

                  {/* Person 1: Orest */}
                  <div 
                    onClick={() => setActivePersonTooltip('p1')}
                    className="absolute top-12 left-10 z-20 cursor-pointer group transition-transform hover:scale-110"
                  >
                    <div className="relative">
                      <div className="w-10 h-10 rounded-full border-2 border-amber-400 overflow-hidden shadow-lg shadow-black">
                        <img 
                          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80" 
                          alt="Орест"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <span className="absolute -bottom-1 -right-1 text-xs bg-zinc-900 rounded-full p-0.5 border border-zinc-700">
                        🍺
                      </span>
                    </div>

                    {/* Tooltip */}
                    {activePersonTooltip === 'p1' && (
                      <div className="absolute left-10 -top-6 w-40 bg-zinc-900/95 border border-amber-500/50 rounded-xl p-2 shadow-2xl backdrop-blur-md animate-in fade-in zoom-in-95 duration-150">
                        <div className="flex items-center justify-between text-[11px] font-bold text-white mb-0.5">
                          <span>Орест, 27</span>
                          <span className="text-[9px] text-amber-400 font-semibold">300м</span>
                        </div>
                        <p className="text-[10px] text-zinc-300 leading-tight">
                          «Шукаю компанію на крафтову IPA»
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Person 2: Olena */}
                  <div 
                    onClick={() => setActivePersonTooltip('p2')}
                    className="absolute bottom-16 right-8 z-20 cursor-pointer group transition-transform hover:scale-110"
                  >
                    <div className="relative">
                      <div className="w-10 h-10 rounded-full border-2 border-emerald-400 overflow-hidden shadow-lg shadow-black">
                        <img 
                          src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=120&auto=format&fit=crop&q=80" 
                          alt="Олена"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <span className="absolute -bottom-1 -right-1 text-xs bg-zinc-900 rounded-full p-0.5 border border-zinc-700">
                        ☕️
                      </span>
                    </div>

                    {/* Tooltip */}
                    {activePersonTooltip === 'p2' && (
                      <div className="absolute right-10 -top-6 w-38 bg-zinc-900/95 border border-emerald-500/50 rounded-xl p-2 shadow-2xl backdrop-blur-md animate-in fade-in zoom-in-95 duration-150">
                        <div className="flex items-center justify-between text-[11px] font-bold text-white mb-0.5">
                          <span>Олена, 25</span>
                          <span className="text-[9px] text-emerald-400 font-semibold">150м</span>
                        </div>
                        <p className="text-[10px] text-zinc-300 leading-tight">
                          «Пʼю спешелті лате, сумую»
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Person 3: Solomiya */}
                  <div 
                    onClick={() => setActivePersonTooltip('p3')}
                    className="absolute top-20 right-8 z-20 cursor-pointer group transition-transform hover:scale-110"
                  >
                    <div className="relative">
                      <div className="w-9 h-9 rounded-full border-2 border-rose-400 overflow-hidden shadow-lg">
                        <img 
                          src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100&auto=format&fit=crop&q=80" 
                          alt="Соломія"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <span className="absolute -bottom-1 -right-1 text-[10px] bg-zinc-900 rounded-full p-0.5 border border-zinc-700">
                        🍷
                      </span>
                    </div>

                    {activePersonTooltip === 'p3' && (
                      <div className="absolute right-9 -top-4 w-36 bg-zinc-900/95 border border-rose-500/50 rounded-xl p-2 shadow-2xl backdrop-blur-md">
                        <div className="flex items-center justify-between text-[11px] font-bold text-white mb-0.5">
                          <span>Соломія, 26</span>
                          <span className="text-[9px] text-rose-400 font-semibold">220м</span>
                        </div>
                        <p className="text-[10px] text-zinc-300 leading-tight">
                          «Келих вина на терасі»
                        </p>
                      </div>
                    )}
                  </div>

                </div>

                {/* Bottom Interactive Toast Action Area */}
                <div className="p-4 bg-zinc-900/95 border-t border-zinc-800 z-20 flex flex-col gap-2">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-zinc-400 flex items-center gap-1">
                      <Flame className="w-3 h-3 text-amber-400" />
                      Підтверджено тостів сьогодні:
                    </span>
                    <span className="font-bold text-amber-400 font-display">
                      {toastCount}
                    </span>
                  </div>

                  {/* Interactive Button: "Дзинь! / Будьмо!" */}
                  <button
                    id="mockup-toast-btn"
                    onClick={triggerToast}
                    className={`w-full py-2.5 px-3 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all duration-200 active:scale-95 shadow-md ${
                      hasToasted
                        ? 'bg-emerald-500 text-zinc-950 scale-102 ring-2 ring-emerald-300'
                        : 'bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-zinc-950'
                    }`}
                  >
                    <span className="text-sm">🥂</span>
                    <span>{hasToasted ? 'Дзинь! +1 тост у районі' : 'Натисни «Дзинь!» для тесту'}</span>
                  </button>

                  <p className="text-[9px] text-center text-zinc-400">
                    Натисни на аватар або кнопку тосту для перевірки реакції
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
