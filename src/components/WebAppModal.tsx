import React, { useState } from 'react';
import { 
  X, 
  Radio, 
  MapPin, 
  MessageSquare, 
  User, 
  Sparkles, 
  Send, 
  CheckCheck, 
  ShieldCheck, 
  Flame, 
  Beer, 
  Coffee, 
  Wine, 
  ChevronRight,
  Download
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { NEARBY_PEOPLE, PARTNER_BARS } from '../data/mockData';
import { NearbyPerson } from '../types';
import { playGlassClink, playCelebrationPop } from '../utils/audio';

interface WebAppModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenDownload: () => void;
}

export const WebAppModal: React.FC<WebAppModalProps> = ({ isOpen, onClose, onOpenDownload }) => {
  const [activeTab, setActiveTab] = useState<'radar' | 'bars' | 'chat' | 'profile'>('radar');
  const [selectedPerson, setSelectedPerson] = useState<NearbyPerson | null>(NEARBY_PEOPLE[0]);
  const [invitedPersons, setInvitedPersons] = useState<Record<string, boolean>>({});
  const [chatMessages, setChatMessages] = useState<Array<{ sender: 'them' | 'me'; text: string; time: string }>>([
    { sender: 'them', text: 'Привіт! Бачу тебе на радарі «Будьмо». Пʼєш зараз крафт?', time: '20:12' },
    { sender: 'me', text: 'Привіт! Так, саме шукаю компанію на Поділ, вільний на годинку 🍻', time: '20:14' },
    { sender: 'them', text: 'Чудово! Якраз біля RePublic Pub. Займаю столик на вулиці, підходь!', time: '20:15' }
  ]);
  const [chatInput, setChatInput] = useState('');
  const [pwaInstalled, setPwaInstalled] = useState(false);

  if (!isOpen) return null;

  const handleInvite = (personId: string) => {
    playCelebrationPop();
    setInvitedPersons((prev) => ({ ...prev, [personId]: true }));
    confetti({
      particleCount: 30,
      spread: 50,
      origin: { x: 0.5, y: 0.6 },
      colors: ['#f59e0b', '#10b981', '#ffffff'],
    });
  };

  const handleSendMessage = (textToSend?: string) => {
    const text = textToSend || chatInput;
    if (!text.trim()) return;

    playGlassClink();
    const newMsg = { sender: 'me' as const, text, time: '20:18' };
    setChatMessages((prev) => [...prev, newMsg]);
    setChatInput('');

    // Simulated reply after 1 sec
    setTimeout(() => {
      setChatMessages((prev) => [
        ...prev,
        { sender: 'them' as const, text: 'Супер, чекаю! Тисну «Дзинь!» при зустрічі 🥂', time: '20:19' }
      ]);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Modal Container */}
      <div className="relative w-full max-w-md bg-[#111116] border border-zinc-700/80 rounded-[36px] shadow-2xl overflow-hidden flex flex-col h-[92vh] max-h-[740px] text-white">
        
        {/* Modal Top Bar */}
        <div className="px-5 py-3.5 bg-zinc-900/90 border-b border-zinc-800 flex items-center justify-between z-10 shrink-0">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-amber-600 to-yellow-400 flex items-center justify-center text-sm shadow">
              🍻
            </div>
            <div>
              <h3 className="text-sm font-bold font-display tracking-tight text-white flex items-center gap-1.5">
                Будьмо! Web App (PWA)
                <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-1.5 py-0.2 rounded font-mono">
                  LIVE
                </span>
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                onClose();
                onOpenDownload();
              }}
              className="px-2.5 py-1 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-[11px] font-semibold text-amber-400 border border-zinc-700 flex items-center gap-1"
            >
              <Download className="w-3 h-3" />
              <span>Встановити</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors"
              aria-label="Закрити модалку"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Content Body */}
        <div className="flex-1 overflow-y-auto bg-[#0a0a0c] relative flex flex-col">
          
          {/* TAB 1: RADAR */}
          {activeTab === 'radar' && (
            <div className="p-4 space-y-4">
              
              {/* Radar Status Header */}
              <div className="p-3 rounded-2xl bg-zinc-900/80 border border-zinc-800 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                  </span>
                  <span className="font-semibold text-zinc-200">Поділ, Київ (Радіус 1.5 км)</span>
                </div>
                <span className="text-[11px] font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/20">
                  {NEARBY_PEOPLE.length} людей поруч
                </span>
              </div>

              {/* People List */}
              <div className="space-y-3">
                {NEARBY_PEOPLE.map((person) => {
                  const isInvited = !!invitedPersons[person.id];
                  return (
                    <div
                      key={person.id}
                      className="p-3.5 rounded-2xl bg-[#121216] border border-zinc-800/90 hover:border-amber-500/40 transition-all flex flex-col gap-2.5 shadow-sm"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <div className="relative">
                            <img
                              src={person.avatar}
                              alt={person.name}
                              className="w-12 h-12 rounded-full object-cover border-2 border-amber-400/60"
                            />
                            {person.verified && (
                              <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full flex items-center justify-center text-[10px] text-zinc-950 font-bold" title="Верифіковано Дія">
                                ✓
                              </span>
                            )}
                          </div>

                          <div>
                            <div className="flex items-center gap-1.5">
                              <h4 className="text-sm font-bold text-white font-display">
                                {person.name}, {person.age}
                              </h4>
                              <span className="text-[10px] text-zinc-400">
                                • {person.distanceMeters}м
                              </span>
                            </div>
                            <p className="text-xs text-amber-400/90 font-medium">
                              {person.drink}
                            </p>
                            <p className="text-[11px] text-zinc-400">
                              «{person.vibe}»
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1">
                        {person.interests.map((interest) => (
                          <span
                            key={interest}
                            className="text-[10px] bg-zinc-900 text-zinc-300 px-2 py-0.5 rounded-md border border-zinc-800"
                          >
                            #{interest}
                          </span>
                        ))}
                      </div>

                      {/* Action Button */}
                      <button
                        onClick={() => handleInvite(person.id)}
                        className={`w-full py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                          isInvited
                            ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                            : 'bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-yellow-300 text-zinc-950 shadow-md active:scale-98'
                        }`}
                      >
                        {isInvited ? (
                          <>
                            <span>✓ Запрошення надіслано!</span>
                          </>
                        ) : (
                          <>
                            <span>🍻 Запросити на келих / каву</span>
                          </>
                        )}
                      </button>
                    </div>
                  );
                })}
              </div>

            </div>
          )}

          {/* TAB 2: BARS */}
          {activeTab === 'bars' && (
            <div className="p-4 space-y-3">
              <div className="p-3 bg-zinc-900/80 rounded-2xl border border-zinc-800 text-xs text-zinc-300">
                <span>📍 Партнерські заклади зі спешлами для «Будьмо!»</span>
              </div>

              {PARTNER_BARS.map((bar) => (
                <div
                  key={bar.id}
                  className="p-3 rounded-2xl bg-[#121216] border border-zinc-800 flex gap-3 items-center"
                >
                  <img
                    src={bar.image}
                    alt={bar.name}
                    className="w-16 h-16 rounded-xl object-cover shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h4 className="text-xs font-bold text-white truncate font-display">
                        {bar.name}
                      </h4>
                      <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950 px-1.5 py-0.5 rounded">
                        {bar.discountText}
                      </span>
                    </div>
                    <p className="text-[11px] text-zinc-400 truncate">{bar.address}</p>
                    <p className="text-[10px] text-amber-400 mt-1 truncate">
                      🎁 {bar.specialOffer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 3: CHAT */}
          {activeTab === 'chat' && (
            <div className="flex-1 flex flex-col justify-between p-4">
              
              {/* Chat partner header */}
              <div className="flex items-center gap-2.5 pb-3 border-b border-zinc-800">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&auto=format&fit=crop&q=80"
                  alt="Орест"
                  className="w-9 h-9 rounded-full object-cover border border-amber-400"
                />
                <div>
                  <h4 className="text-xs font-bold text-white font-display">Орест (Поділ)</h4>
                  <span className="text-[10px] text-emerald-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Онлайн біля RePublic Pub
                  </span>
                </div>
              </div>

              {/* Chat Messages Log */}
              <div className="py-4 space-y-3 flex-1 overflow-y-auto">
                {chatMessages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`flex flex-col ${msg.sender === 'me' ? 'items-end' : 'items-start'}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-2xl px-3.5 py-2 text-xs leading-relaxed ${
                        msg.sender === 'me'
                          ? 'bg-amber-500 text-zinc-950 font-medium rounded-tr-xs'
                          : 'bg-zinc-800 text-zinc-100 rounded-tl-xs border border-zinc-700/60'
                      }`}
                    >
                      {msg.text}
                    </div>
                    <span className="text-[9px] text-zinc-400 mt-0.5 px-1">{msg.time}</span>
                  </div>
                ))}
              </div>

              {/* Quick Reply Pills */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-2 text-[10px]">
                {['Я вже тут!', 'Замовляю тобі лате? ☕️', 'Тисну «Дзинь!» 🥂'].map((pill) => (
                  <button
                    key={pill}
                    onClick={() => handleSendMessage(pill)}
                    className="px-2.5 py-1 rounded-full bg-zinc-900 border border-zinc-700 text-zinc-300 hover:text-white whitespace-nowrap hover:border-amber-400 transition-colors"
                  >
                    {pill}
                  </button>
                ))}
              </div>

              {/* Chat Input */}
              <div className="pt-2 border-t border-zinc-800 flex items-center gap-2">
                <input
                  type="text"
                  placeholder="Напишіть повідомлення..."
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                  className="flex-1 bg-zinc-900 border border-zinc-700 rounded-xl px-3 py-2 text-xs text-white placeholder-zinc-400 focus:outline-none focus:border-amber-400"
                />
                <button
                  onClick={() => handleSendMessage()}
                  className="p-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 transition-colors"
                  aria-label="Надіслати повідомлення"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>

            </div>
          )}

          {/* TAB 4: PROFILE */}
          {activeTab === 'profile' && (
            <div className="p-4 space-y-4">
              <div className="p-5 rounded-3xl bg-zinc-900/90 border border-zinc-800 text-center">
                <div className="w-16 h-16 rounded-full bg-amber-500/20 border-2 border-amber-400 mx-auto mb-3 flex items-center justify-center text-2xl">
                  🍺
                </div>
                <h4 className="text-base font-bold text-white font-display">Твій профіль у «Будьмо!»</h4>
                <p className="text-xs text-zinc-400 mb-2">Статус: Готовий до зустрічі сьогодні</p>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-400 bg-emerald-950/80 px-2.5 py-0.5 rounded-full border border-emerald-800">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Верифіковано через Дія
                </span>
              </div>

              <div className="space-y-2 text-xs">
                <div className="p-3 bg-[#121216] border border-zinc-800 rounded-xl flex justify-between">
                  <span className="text-zinc-400">Улюблений напій:</span>
                  <span className="font-bold text-amber-400">Craft IPA / Сидр</span>
                </div>
                <div className="p-3 bg-[#121216] border border-zinc-800 rounded-xl flex justify-between">
                  <span className="text-zinc-400">Рейтинг ввічливості:</span>
                  <span className="font-bold text-emerald-400">⭐️ 5.0 (14 відгуків)</span>
                </div>
                <div className="p-3 bg-[#121216] border border-zinc-800 rounded-xl flex justify-between">
                  <span className="text-zinc-400">Захист геопозиції:</span>
                  <span className="font-bold text-emerald-400">Активно (Fuzzy Mode)</span>
                </div>
              </div>

              <button
                onClick={() => {
                  playGlassClink();
                  setPwaInstalled(true);
                }}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-yellow-300 text-zinc-950 font-bold text-xs shadow-md transition-all"
              >
                {pwaInstalled ? '✓ Додано на головний екран смартфона!' : 'Додати PWA на головний екран смартфона'}
              </button>
            </div>
          )}

        </div>

        {/* Mobile Navigation Tabs Footer */}
        <div className="p-2 bg-[#121216] border-t border-zinc-800 grid grid-cols-4 gap-1 z-10 shrink-0">
          <button
            onClick={() => setActiveTab('radar')}
            className={`py-2 rounded-xl flex flex-col items-center justify-center gap-1 transition-colors ${
              activeTab === 'radar' ? 'text-amber-400 bg-zinc-800/80 font-bold' : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <Radio className="w-4 h-4" />
            <span className="text-[10px]">Радар</span>
          </button>

          <button
            onClick={() => setActiveTab('bars')}
            className={`py-2 rounded-xl flex flex-col items-center justify-center gap-1 transition-colors ${
              activeTab === 'bars' ? 'text-amber-400 bg-zinc-800/80 font-bold' : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <MapPin className="w-4 h-4" />
            <span className="text-[10px]">Заклади</span>
          </button>

          <button
            onClick={() => setActiveTab('chat')}
            className={`py-2 rounded-xl flex flex-col items-center justify-center gap-1 transition-colors relative ${
              activeTab === 'chat' ? 'text-amber-400 bg-zinc-800/80 font-bold' : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <MessageSquare className="w-4 h-4" />
            <span className="text-[10px]">Чати</span>
            <span className="absolute top-1.5 right-6 w-2 h-2 rounded-full bg-emerald-500" />
          </button>

          <button
            onClick={() => setActiveTab('profile')}
            className={`py-2 rounded-xl flex flex-col items-center justify-center gap-1 transition-colors ${
              activeTab === 'profile' ? 'text-amber-400 bg-zinc-800/80 font-bold' : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <User className="w-4 h-4" />
            <span className="text-[10px]">Профіль</span>
          </button>
        </div>

      </div>

    </div>
  );
};
