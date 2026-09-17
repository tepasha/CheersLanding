import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Smartphone, Download, MapPin } from 'lucide-react';

interface NavbarProps {
  onOpenWebApp: () => void;
  onOpenDownload: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenWebApp, onOpenDownload }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Як це працює', href: '#how-it-works' },
    { name: 'Фічі', href: '#features' },
    { name: 'Безпека', href: '#safety' },
    { name: 'Заклади-партнери', href: '#venues' },
    { name: 'Тости', href: '#toasts' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0a0a0c]/90 backdrop-blur-md border-b border-zinc-800/80 py-3 shadow-xl shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#"
            id="brand-logo"
            className="flex items-center gap-2 group cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-600 via-amber-500 to-yellow-400 flex items-center justify-center text-xl shadow-lg shadow-amber-500/25 group-hover:shadow-amber-500/50 transition-all duration-300">
              🍻
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-white flex items-center gap-1.5 font-display">
                Будьмо!
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" title="Онлайн у твоєму місті" />
              </span>
              <span className="text-[10px] font-medium tracking-wide uppercase text-amber-400/90 -mt-1">
                Компанія поруч
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-zinc-300 hover:text-amber-400 transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button
              id="nav-webapp-btn"
              onClick={onOpenWebApp}
              className="px-4 py-2 rounded-xl text-sm font-semibold text-zinc-200 hover:text-white bg-zinc-800/80 hover:bg-zinc-700/80 border border-zinc-700/60 transition-all duration-200 flex items-center gap-2 shadow-sm"
            >
              <Smartphone className="w-4 h-4 text-amber-400" />
              <span>Відкрити Web App</span>
            </button>

            <button
              id="nav-download-btn"
              onClick={onOpenDownload}
              className="px-4 py-2 rounded-xl text-sm font-semibold text-zinc-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 transition-all duration-200 flex items-center gap-2 shadow-lg shadow-amber-500/20 hover:shadow-amber-500/35 active:scale-[0.98]"
            >
              <Download className="w-4 h-4" />
              <span>Завантажити</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              id="nav-mobile-webapp-quick"
              onClick={onOpenWebApp}
              className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-zinc-800 border border-zinc-700 text-amber-400"
            >
              Web App
            </button>
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white focus:outline-none"
              aria-label="Перемкнути меню"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#101014] border-b border-zinc-800 px-4 pt-3 pb-6 space-y-3 mt-3 animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-2 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-base font-medium text-zinc-300 hover:bg-zinc-800 hover:text-amber-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-zinc-800 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenWebApp();
              }}
              className="w-full py-2.5 rounded-xl font-semibold text-sm bg-zinc-800 text-zinc-100 hover:bg-zinc-700 flex items-center justify-center gap-2"
            >
              <Smartphone className="w-4 h-4 text-amber-400" />
              <span>Спробувати в браузері (PWA)</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDownload();
              }}
              className="w-full py-2.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-amber-400 to-amber-500 text-zinc-950 flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20"
            >
              <Download className="w-4 h-4" />
              <span>Завантажити додаток</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
