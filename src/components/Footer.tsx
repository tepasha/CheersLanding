import React from 'react';
import { Send, Github, Shield, FileText, Heart, Smartphone, ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
  onOpenWebApp: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacy, onOpenTerms, onOpenWebApp }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#08080a] border-t border-zinc-800/80 pt-16 pb-12 text-zinc-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-zinc-800/60">
          
          {/* Col 1: Brand info */}
          <div className="md:col-span-4 flex flex-col items-start">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-amber-600 to-yellow-400 flex items-center justify-center text-base shadow-md shadow-amber-500/20">
                🍻
              </div>
              <span className="text-xl font-bold text-white font-display tracking-tight">
                Будьмо!
              </span>
            </div>

            <p className="text-zinc-400 leading-relaxed text-xs mb-6 max-w-sm">
              Український сервіс швидкого та безпечного пошуку компанії на вечір біля дому, у крафтових пабах та затишних кавʼярнях за улюбленими напоями та інтересами.
            </p>

            <div className="flex items-center gap-3">
              <a
                href="https://t.me"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300 hover:text-white hover:border-amber-500/50 transition-colors"
                title="Telegram Спільнота"
              >
                <Send className="w-4 h-4" />
              </a>

              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300 hover:text-white hover:border-amber-500/50 transition-colors"
                title="GitHub Репозиторій релізів"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4 font-display">
              Навігація
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#how-it-works" className="hover:text-amber-400 transition-colors">
                  Як це працює
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-amber-400 transition-colors">
                  Фішки: «Дзинь!» та Радар
                </a>
              </li>
              <li>
                <a href="#safety" className="hover:text-amber-400 transition-colors">
                  Безпека та приватність
                </a>
              </li>
              <li>
                <a href="#toasts" className="hover:text-amber-400 transition-colors">
                  Генератор українських тостів
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-amber-400 transition-colors">
                  Часті запитання (FAQ)
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Legal & Security */}
          <div className="md:col-span-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4 font-display">
              Безпека та правила
            </h4>
            <ul className="space-y-2.5">
              <li>
                <button
                  onClick={onOpenPrivacy}
                  className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
                >
                  <Shield className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Політика конфіденційності (Privacy)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenTerms}
                  className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
                >
                  <FileText className="w-3.5 h-3.5 text-zinc-400" />
                  <span>Умови використання (Terms)</span>
                </button>
              </li>
              <li>
                <a href="https://t.me" target="_blank" rel="noreferrer" className="hover:text-amber-400 transition-colors">
                  Звʼязатися з модератором 24/7
                </a>
              </li>
              <li>
                <a href="#safety" className="hover:text-amber-400 transition-colors">
                  Маніфест ввічливих зустрічей
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Quick Launch */}
          <div className="md:col-span-2 flex flex-col items-start md:items-end">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4 font-display">
              Швидкий запуск
            </h4>
            <button
              onClick={onOpenWebApp}
              className="px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-amber-500/40 text-zinc-200 hover:text-white flex items-center gap-2 mb-3 text-xs font-semibold transition-colors"
            >
              <Smartphone className="w-3.5 h-3.5 text-amber-400" />
              <span>Web-версія PWA</span>
            </button>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors flex items-center gap-1 text-[11px]"
              title="Вгору"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Нагору</span>
            </button>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-400">
          <p className="flex items-center gap-1.5">
            <span>© {new Date().getFullYear()} «Будьмо!» (Budmo App).</span>
            <span className="text-zinc-400">• Всі права захищено.</span>
          </p>

          <p className="flex items-center gap-1.5 font-medium text-zinc-300">
            <span>Зроблено з душею в Україні</span>
            <span className="text-sm">🇺🇦</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
