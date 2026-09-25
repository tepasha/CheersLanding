import React, { useState } from 'react';
import { 
  Sparkles, 
  Smartphone, 
  Download, 
  Compass, 
  MapPin, 
  CheckCircle2, 
  Flame,
  Wine,
  Coffee,
  Beer,
  ArrowRight,
  Navigation,
  Plus,
  Minus,
  Map as MapIcon,
  Crosshair
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { playGlassClink } from '../utils/audio';
import { useLanguage } from '../context/LanguageContext';

interface HeroProps {
  onOpenWebApp: () => void;
  onOpenDownload: (platform?: string) => void;
  onOpenTestLink: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenWebApp, onOpenDownload, onOpenTestLink }) => {
  const { t } = useLanguage();
  const [toastCount, setToastCount] = useState(148);
  const [hasToasted, setHasToasted] = useState(false);
  const [activePersonTooltip, setActivePersonTooltip] = useState<string | null>('p1');
  const [selectedMapFilter, setSelectedMapFilter] = useState<'all' | 'beer' | 'coffee' | 'wine'>('all');
  const [mapZoom, setMapZoom] = useState(1);

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
    <section className="relative pt-24 pb-10 md:pt-28 md:pb-14 overflow-hidden">
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

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12] mb-6 font-display">
              {t.hero.headlinePart1} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500">
                {t.hero.headlineHighlight}
              </span>{' '}
              {t.hero.headlinePart2}
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-zinc-300 mb-8 max-w-2xl leading-relaxed font-normal">
              {t.hero.subtitle}
            </p>

            {/* Action CTA Buttons */}
            <div className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-6">
              <button
                id="hero-open-pwa-btn"
                onClick={onOpenWebApp}
                className="px-6 py-4 rounded-xl text-base font-bold bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-400 text-zinc-950 hover:from-amber-400 hover:to-yellow-300 shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 transition-all duration-200 flex items-center justify-center gap-2.5 group active:scale-[0.98]"
              >
                <Smartphone className="w-5 h-5 text-zinc-950 group-hover:rotate-12 transition-transform" />
                <span>{t.hero.tryWebBtn}</span>
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                id="hero-download-modal-btn"
                onClick={() => onOpenDownload()}
                className="px-5 py-4 rounded-xl text-base font-semibold text-zinc-100 bg-zinc-800/90 hover:bg-zinc-700/90 border border-zinc-700 hover:border-zinc-600 transition-all duration-200 flex items-center justify-center gap-2.5 shadow-md active:scale-[0.98]"
              >
                <Download className="w-5 h-5 text-amber-400" />
                <span>{t.hero.downloadBtn}</span>
              </button>
            </div>

          </div>

          {/* Right Column: Interactive Smartphone Mockup with Live Radar */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            
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
                <div className="px-3.5 py-2 flex items-center justify-between z-20 bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800/70 mt-1">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                    <span className="text-xs font-bold font-display tracking-tight text-amber-400 flex items-center gap-1">
                      <MapIcon className="w-3.5 h-3.5 text-amber-400" />
                      <span>Будьмо! Карта</span>
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-[10px] bg-zinc-900/90 px-2 py-0.5 rounded-full text-zinc-300 border border-zinc-700/60">
                    <MapPin className="w-2.5 h-2.5 text-amber-400" />
                    <span>Поділ • 1.5 км</span>
                  </div>
                </div>

                {/* Map Stage View */}
                <div className="relative flex-1 overflow-hidden bg-[#0a0d14] flex flex-col">
                  
                  {/* Floating Map Filter Pills */}
                  <div className="absolute top-2.5 left-2.5 right-2.5 z-20 flex items-center gap-1.5 overflow-x-auto no-scrollbar pointer-events-auto">
                    {[
                      { id: 'all', label: `${t.hero.filterAll} (18)` },
                      { id: 'beer', label: `🍺 ${t.hero.filterBeer}` },
                      { id: 'coffee', label: `☕️ ${t.hero.filterCoffee}` },
                      { id: 'wine', label: `🍷 ${t.hero.filterWine}` },
                    ].map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => setSelectedMapFilter(tab.id as any)}
                        className={`px-2.5 py-1 rounded-full text-[10px] font-semibold whitespace-nowrap backdrop-blur-md transition-all shadow-sm ${
                          selectedMapFilter === tab.id
                            ? 'bg-amber-500 text-zinc-950 font-bold shadow-amber-500/20'
                            : 'bg-zinc-900/80 text-zinc-300 hover:text-white border border-zinc-700/60'
                        }`}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </div>

                  {/* Floating Map Controls (Zoom & Re-center) */}
                  <div className="absolute right-2.5 top-14 z-20 flex flex-col gap-1">
                    <button
                      onClick={() => setMapZoom((prev) => Math.min(prev + 0.15, 1.4))}
                      title="Наблизити"
                      className="w-7 h-7 rounded-lg bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-700/70 text-zinc-200 flex items-center justify-center text-xs shadow-md transition-colors"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => setMapZoom((prev) => Math.max(prev - 0.15, 0.85))}
                      title="Віддалити"
                      className="w-7 h-7 rounded-lg bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-700/70 text-zinc-200 flex items-center justify-center text-xs shadow-md transition-colors"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => {
                        setMapZoom(1);
                        setActivePersonTooltip(null);
                      }}
                      title="Моє місцезнаходження"
                      className="w-7 h-7 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/50 text-amber-400 flex items-center justify-center text-xs shadow-md transition-colors mt-1"
                    >
                      <Crosshair className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Scale Badge */}
                  <div className="absolute bottom-2 left-2.5 z-20 bg-zinc-950/80 border border-zinc-800/80 px-2 py-0.5 rounded text-[9px] font-mono text-zinc-400 flex items-center gap-1 backdrop-blur-sm pointer-events-none">
                    <span className="w-4 h-[1px] bg-zinc-400 inline-block" />
                    <span>100 м</span>
                  </div>

                  {/* Vector Map Canvas (Podil, Kyiv) */}
                  <div 
                    className="absolute inset-0 w-full h-full transition-transform duration-300 origin-center"
                    style={{ transform: `scale(${mapZoom})` }}
                  >
                    <svg
                      className="w-full h-full"
                      viewBox="0 0 340 420"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {/* Dark Map Base */}
                      <rect width="340" height="420" fill="#0c0f17" />

                      {/* City Urban Blocks */}
                      <rect x="15" y="40" width="70" height="60" rx="6" fill="#131722" stroke="#1b2130" strokeWidth="1" />
                      <rect x="95" y="40" width="80" height="45" rx="6" fill="#131722" stroke="#1b2130" strokeWidth="1" />
                      <rect x="185" y="40" width="65" height="55" rx="6" fill="#131722" stroke="#1b2130" strokeWidth="1" />
                      
                      <rect x="15" y="115" width="65" height="75" rx="6" fill="#131722" stroke="#1b2130" strokeWidth="1" />
                      <rect x="90" y="100" width="75" height="70" rx="6" fill="#131722" stroke="#1b2130" strokeWidth="1" />
                      <rect x="175" y="110" width="70" height="85" rx="6" fill="#131722" stroke="#1b2130" strokeWidth="1" />

                      <rect x="15" y="205" width="75" height="80" rx="6" fill="#131722" stroke="#1b2130" strokeWidth="1" />
                      <rect x="100" y="185" width="70" height="65" rx="6" fill="#131722" stroke="#1b2130" strokeWidth="1" />
                      <rect x="180" y="210" width="75" height="80" rx="6" fill="#131722" stroke="#1b2130" strokeWidth="1" />

                      {/* Kontraktova Square (Historic plaza) */}
                      <polygon
                        points="105,175 165,175 170,225 95,225"
                        fill="#181e2b"
                        stroke="#f59e0b"
                        strokeWidth="1"
                        strokeDasharray="3 3"
                        opacity="0.6"
                      />

                      {/* Dnipro River (River bend along east) */}
                      <path
                        d="M 270 0 C 275 90, 260 170, 275 260 C 290 330, 270 380, 285 420 L 340 420 L 340 0 Z"
                        fill="#0e1726"
                        stroke="#1e2a3d"
                        strokeWidth="1.5"
                      />
                      {/* River water ripples */}
                      <path d="M 285 80 Q 295 85 305 80" stroke="#1e293b" strokeWidth="1.5" fill="none" />
                      <path d="M 290 190 Q 300 195 310 190" stroke="#1e293b" strokeWidth="1.5" fill="none" />
                      <path d="M 295 310 Q 305 315 315 310" stroke="#1e293b" strokeWidth="1.5" fill="none" />

                      {/* Green Hill slope (Zamkova Hora / Andrew's Descent slopes) */}
                      <path
                        d="M 0 310 C 35 300, 60 340, 85 365 C 105 385, 110 410, 115 420 L 0 420 Z"
                        fill="#0c1813"
                        stroke="#142c20"
                        strokeWidth="1"
                      />

                      {/* Street Network Paths */}
                      {/* Verkhnii & Nyzhnii Val (broad parallel avenues) */}
                      <line x1="0" y1="95" x2="265" y2="95" stroke="#334155" strokeWidth="5" strokeLinecap="round" />
                      <line x1="0" y1="108" x2="265" y2="108" stroke="#334155" strokeWidth="5" strokeLinecap="round" />
                      {/* Tram tracks in between Valy */}
                      <line x1="0" y1="101.5" x2="265" y2="101.5" stroke="#475569" strokeWidth="1" strokeDasharray="2 3" />

                      {/* Spaska & Horyva streets */}
                      <line x1="0" y1="195" x2="270" y2="195" stroke="#1e2638" strokeWidth="4" />
                      <line x1="0" y1="295" x2="275" y2="295" stroke="#1e2638" strokeWidth="4" />

                      {/* Petra Sahaidachnoho (Pedestrian boulevard with warm lighting) */}
                      <line x1="135" y1="225" x2="245" y2="350" stroke="#f59e0b" strokeWidth="5" strokeOpacity="0.45" strokeLinecap="round" />
                      <line x1="135" y1="225" x2="245" y2="350" stroke="#fbbf24" strokeWidth="2.5" strokeOpacity="0.8" strokeLinecap="round" />

                      {/* Andriivskyi Uzviz (Winding historic street) */}
                      <path
                        d="M 115 225 Q 75 270, 60 320 T 45 420"
                        stroke="#475569"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        strokeDasharray="4 2"
                        fill="none"
                      />

                      {/* Naberezhno-Khreshchatytska along the river */}
                      <path
                        d="M 268 0 C 273 90, 258 170, 273 260 C 288 330, 268 380, 283 420"
                        stroke="#334155"
                        strokeWidth="4.5"
                        fill="none"
                      />

                      {/* Street Names Labels */}
                      <text x="75" y="325" fill="#64748b" fontSize="7.5" fontWeight="600" letterSpacing="0.08em" transform="rotate(-62 75 325)">
                        АНДРІЇВСЬКИЙ УЗВІЗ
                      </text>
                      <text x="165" y="275" fill="#f59e0b" fontSize="7.5" fontWeight="700" letterSpacing="0.08em" transform="rotate(48 165 275)" opacity="0.9">
                        ВУЛ. САГАЙДАЧНОГО
                      </text>
                      <text x="35" y="91" fill="#64748b" fontSize="7" fontWeight="600" letterSpacing="0.05em">
                        ВЕРХНІЙ ВАЛ
                      </text>
                      <text x="35" y="119" fill="#64748b" fontSize="7" fontWeight="600" letterSpacing="0.05em">
                        НИЖНІЙ ВАЛ
                      </text>
                      <text x="108" y="195" fill="#94a3b8" fontSize="7.5" fontWeight="700" letterSpacing="0.05em">
                        КОНТРАКТОВА ПЛ.
                      </text>
                      <text x="295" y="130" fill="#38bdf8" fontSize="7.5" fontWeight="600" letterSpacing="0.1em" opacity="0.6" transform="rotate(75 295 130)">
                        Р. ДНІПРО
                      </text>

                      {/* Metro Icon */}
                      <circle cx="118" cy="180" r="4.5" fill="#10b981" />
                      <text x="116" y="182.5" fill="#ffffff" fontSize="6.5" fontWeight="900" fontFamily="sans-serif">M</text>
                    </svg>

                    {/* YOU: Central GPS User Location Marker */}
                    <div className="absolute top-[48%] left-[45%] -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center pointer-events-none">
                      {/* Pulsing GPS Walking Accuracy Aura (200m) */}
                      <div className="absolute w-28 h-28 rounded-full bg-amber-500/10 border border-amber-400/30 animate-ping-slow pointer-events-none" />
                      <div className="absolute w-20 h-20 rounded-full bg-amber-500/15 border border-amber-400/40 pointer-events-none" />
                      
                      {/* Center User Pin */}
                      <div className="relative flex items-center justify-center">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-500 to-amber-300 p-0.5 shadow-xl shadow-amber-500/50 ring-2 ring-zinc-950">
                          <div className="w-full h-full rounded-full bg-zinc-950 flex items-center justify-center text-sm">
                            🍺
                          </div>
                        </div>
                        <span className="absolute -top-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-400 border-2 border-zinc-950" />
                      </div>

                      <span className="mt-1 text-[9px] font-bold text-amber-300 bg-zinc-950/95 px-2 py-0.5 rounded-full border border-amber-500/40 shadow-md whitespace-nowrap">
                        Ти (Контрактова)
                      </span>
                    </div>

                    {/* Person 1: Орест (вул. Сагайдачного) */}
                    {(selectedMapFilter === 'all' || selectedMapFilter === 'beer') && (
                      <div 
                        onClick={() => setActivePersonTooltip(activePersonTooltip === 'p1' ? null : 'p1')}
                        className="absolute top-[62%] left-[64%] z-20 cursor-pointer group transition-transform hover:scale-110"
                        title="Орест, 27 • вул. Сагайдачного"
                      >
                        <div className="relative">
                          <div className={`w-10 h-10 rounded-full border-2 overflow-hidden shadow-xl transition-all ${
                            activePersonTooltip === 'p1' ? 'border-amber-400 ring-4 ring-amber-400/30 scale-105' : 'border-amber-500/80 ring-1 ring-zinc-900'
                          }`}>
                            <img 
                              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80" 
                              alt="Орест"
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <span className="absolute -bottom-1 -right-1 text-[11px] bg-zinc-900 rounded-full p-0.5 border border-zinc-700 shadow-sm">
                            🍺
                          </span>
                        </div>

                        {/* Distance Label below pin */}
                        <div className="mt-1 -ml-2 text-[9px] font-bold text-zinc-200 bg-zinc-900/90 border border-zinc-700/80 px-1.5 py-0.2 rounded-md shadow-md text-center whitespace-nowrap">
                          300 м
                        </div>

                        {/* Detailed Tooltip */}
                        {activePersonTooltip === 'p1' && (
                          <div className="absolute -left-20 -top-16 w-44 bg-zinc-900/95 border border-amber-500/60 rounded-xl p-2.5 shadow-2xl backdrop-blur-md animate-in fade-in zoom-in-95 duration-150 z-30">
                            <div className="flex items-center justify-between text-[11px] font-bold text-white mb-0.5">
                              <span>Орест, 27</span>
                              <span className="text-[9px] text-amber-400 font-semibold">вул. Сагайдачного</span>
                            </div>
                            <p className="text-[10px] text-zinc-300 leading-tight">
                              «Шукаю компанію на крафтову IPA»
                            </p>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Person 2: Олена (Контрактова площа) */}
                    {(selectedMapFilter === 'all' || selectedMapFilter === 'coffee') && (
                      <div 
                        onClick={() => setActivePersonTooltip(activePersonTooltip === 'p2' ? null : 'p2')}
                        className="absolute top-[32%] left-[46%] z-20 cursor-pointer group transition-transform hover:scale-110"
                        title="Олена, 25 • Контрактова пл."
                      >
                        <div className="relative">
                          <div className={`w-9 h-9 rounded-full border-2 overflow-hidden shadow-xl transition-all ${
                            activePersonTooltip === 'p2' ? 'border-emerald-400 ring-4 ring-emerald-400/30 scale-105' : 'border-emerald-500/80 ring-1 ring-zinc-900'
                          }`}>
                            <img 
                              src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=120&auto=format&fit=crop&q=80" 
                              alt="Олена"
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <span className="absolute -bottom-1 -right-1 text-[11px] bg-zinc-900 rounded-full p-0.5 border border-zinc-700 shadow-sm">
                            ☕️
                          </span>
                        </div>

                        <div className="mt-1 -ml-1 text-[9px] font-bold text-emerald-300 bg-zinc-900/90 border border-zinc-700/80 px-1.5 py-0.2 rounded-md shadow-md text-center whitespace-nowrap">
                          150 м
                        </div>

                        {activePersonTooltip === 'p2' && (
                          <div className="absolute -left-12 -top-16 w-42 bg-zinc-900/95 border border-emerald-500/60 rounded-xl p-2.5 shadow-2xl backdrop-blur-md animate-in fade-in zoom-in-95 duration-150 z-30">
                            <div className="flex items-center justify-between text-[11px] font-bold text-white mb-0.5">
                              <span>Олена, 25</span>
                              <span className="text-[9px] text-emerald-400 font-semibold">One Love Coffee</span>
                            </div>
                            <p className="text-[10px] text-zinc-300 leading-tight">
                              «Пʼю спешелті лате, сумую»
                            </p>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Person 3: Соломія (Андріївський узвіз) */}
                    {(selectedMapFilter === 'all' || selectedMapFilter === 'wine') && (
                      <div 
                        onClick={() => setActivePersonTooltip(activePersonTooltip === 'p3' ? null : 'p3')}
                        className="absolute top-[68%] left-[16%] z-20 cursor-pointer group transition-transform hover:scale-110"
                        title="Соломія, 26 • Андріївський узвіз"
                      >
                        <div className="relative">
                          <div className={`w-9 h-9 rounded-full border-2 overflow-hidden shadow-xl transition-all ${
                            activePersonTooltip === 'p3' ? 'border-rose-400 ring-4 ring-rose-400/30 scale-105' : 'border-rose-500/80 ring-1 ring-zinc-900'
                          }`}>
                            <img 
                              src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100&auto=format&fit=crop&q=80" 
                              alt="Соломія"
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <span className="absolute -bottom-1 -right-1 text-[10px] bg-zinc-900 rounded-full p-0.5 border border-zinc-700 shadow-sm">
                            🍷
                          </span>
                        </div>

                        <div className="mt-1 -ml-1 text-[9px] font-bold text-rose-300 bg-zinc-900/90 border border-zinc-700/80 px-1.5 py-0.2 rounded-md shadow-md text-center whitespace-nowrap">
                          220 м
                        </div>

                        {activePersonTooltip === 'p3' && (
                          <div className="absolute left-1 -top-16 w-42 bg-zinc-900/95 border border-rose-500/60 rounded-xl p-2.5 shadow-2xl backdrop-blur-md z-30">
                            <div className="flex items-center justify-between text-[11px] font-bold text-white mb-0.5">
                              <span>Соломія, 26</span>
                              <span className="text-[9px] text-rose-400 font-semibold">Андріївський</span>
                            </div>
                            <p className="text-[10px] text-zinc-300 leading-tight">
                              «Келих вина на терасі»
                            </p>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Person 4: Дмитро (вул. Нижній Вал) */}
                    {(selectedMapFilter === 'all' || selectedMapFilter === 'beer') && (
                      <div 
                        onClick={() => setActivePersonTooltip(activePersonTooltip === 'p4' ? null : 'p4')}
                        className="absolute top-[18%] left-[60%] z-20 cursor-pointer group transition-transform hover:scale-110"
                        title="Дмитро, 29 • вул. Нижній Вал"
                      >
                        <div className="relative">
                          <div className={`w-8 h-8 rounded-full border-2 overflow-hidden shadow-xl transition-all ${
                            activePersonTooltip === 'p4' ? 'border-cyan-400 ring-4 ring-cyan-400/30 scale-105' : 'border-cyan-500/80 ring-1 ring-zinc-900'
                          }`}>
                            <img 
                              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80" 
                              alt="Дмитро"
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <span className="absolute -bottom-1 -right-1 text-[10px] bg-zinc-900 rounded-full p-0.5 border border-zinc-700 shadow-sm">
                            🍸
                          </span>
                        </div>

                        <div className="mt-1 -ml-1 text-[9px] font-bold text-cyan-300 bg-zinc-900/90 border border-zinc-700/80 px-1.5 py-0.2 rounded-md shadow-md text-center whitespace-nowrap">
                          380 м
                        </div>

                        {activePersonTooltip === 'p4' && (
                          <div className="absolute -left-20 -top-16 w-40 bg-zinc-900/95 border border-cyan-500/60 rounded-xl p-2.5 shadow-2xl backdrop-blur-md z-30">
                            <div className="flex items-center justify-between text-[11px] font-bold text-white mb-0.5">
                              <span>Дмитро, 29</span>
                              <span className="text-[9px] text-cyan-400 font-semibold">Нижній Вал</span>
                            </div>
                            <p className="text-[10px] text-zinc-300 leading-tight">
                              «Затишний бар, хто поруч?»
                            </p>
                          </div>
                        )}
                      </div>
                    )}

                  </div>

                </div>

                {/* Bottom Interactive Toast Action Area */}
                <div className="p-3.5 bg-zinc-900/95 border-t border-zinc-800 z-20 flex flex-col gap-2">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-zinc-300 flex items-center gap-1 truncate font-medium">
                      <Flame className="w-3 h-3 text-amber-400 shrink-0" />
                      {activePersonTooltip === 'p1' && t.hero.people.orestStatus}
                      {activePersonTooltip === 'p2' && t.hero.people.olenaStatus}
                      {activePersonTooltip === 'p3' && t.hero.people.solomiaStatus}
                      {activePersonTooltip === 'p4' && t.hero.people.dmytroStatus}
                      {!activePersonTooltip && `18 ${t.hero.toastDefaultStatus}`}
                    </span>
                    <span className="font-bold text-amber-400 font-display text-xs shrink-0">
                      {toastCount} {t.hero.toastCountSuffix}
                    </span>
                  </div>

                  {/* Interactive Button: "Дзинь! / Будьмо!" */}
                  <button
                    id="mockup-toast-btn"
                    onClick={triggerToast}
                    className={`w-full py-2.5 px-3 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all duration-200 active:scale-95 shadow-md ${
                      hasToasted
                        ? 'bg-emerald-500 text-zinc-950 scale-102 ring-2 ring-emerald-300'
                        : 'bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-yellow-300 text-zinc-950'
                    }`}
                  >
                    <span className="text-sm">🥂</span>
                    <span>
                      {hasToasted 
                        ? t.hero.toastBtnSuccess 
                        : activePersonTooltip 
                          ? t.hero.toastBtnDefault 
                          : t.hero.toastBtnPrompt
                      }
                    </span>
                  </button>

                  <p className="text-[9px] text-center text-zinc-400">
                    {t.hero.toastHelper}
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
