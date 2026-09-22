import React, { useState, useEffect } from 'react';
import { Menu, X, Smartphone, Download, Link2, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface NavbarProps {
  onOpenWebApp: () => void;
  onOpenDownload: () => void;
  onOpenTestLink: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenWebApp, onOpenDownload, onOpenTestLink }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t, detectedLocation } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.howItWorks, href: '#how-it-works' },
    { name: t.nav.features, href: '#features' },
    { name: t.nav.safety, href: '#safety' },
    { name: t.nav.toasts, href: '#toasts' },
    { name: t.nav.faq, href: '#faq' },
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
                {t.nav.brandTitle}
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" title={t.nav.onlineBadge} />
              </span>
              <span className="text-[10px] font-medium tracking-wide uppercase text-amber-400/90 -mt-1">
                {t.nav.brandSubtitle}
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7">
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

          {/* Desktop Action Buttons & Language Switcher */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Language Switcher Pill */}
            <div 
              className="flex items-center bg-zinc-900/90 border border-zinc-700/80 rounded-xl p-0.5 text-xs mr-1 shadow-inner"
              title={t.geoBadge.switchLangTooltip}
            >
              <button
                type="button"
                onClick={() => setLanguage('uk')}
                className={`px-2.5 py-1 rounded-lg font-semibold transition-all ${
                  language === 'uk'
                    ? 'bg-amber-500 text-zinc-950 shadow-sm'
                    : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                UA 🇺🇦
              </button>
              <button
                type="button"
                onClick={() => setLanguage('en')}
                className={`px-2.5 py-1 rounded-lg font-semibold transition-all ${
                  language === 'en'
                    ? 'bg-amber-500 text-zinc-950 shadow-sm'
                    : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                EN 🇬🇧
              </button>
            </div>

            <button
              id="nav-test-link-btn"
              onClick={onOpenTestLink}
              className="px-3.5 py-2 rounded-xl text-xs font-semibold text-amber-300 hover:text-amber-200 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 transition-all duration-200 flex items-center gap-1.5 shadow-sm"
              title={t.nav.testLink}
            >
              <Link2 className="w-3.5 h-3.5 text-amber-400" />
              <span>{t.nav.testLink}</span>
            </button>

            <button
              id="nav-webapp-btn"
              onClick={onOpenWebApp}
              className="px-3.5 py-2 rounded-xl text-xs font-semibold text-zinc-200 hover:text-white bg-zinc-800/80 hover:bg-zinc-700/80 border border-zinc-700/60 transition-all duration-200 flex items-center gap-1.5 shadow-sm"
            >
              <Smartphone className="w-3.5 h-3.5 text-amber-400" />
              <span>{t.nav.webApp}</span>
            </button>

            <button
              id="nav-download-btn"
              onClick={onOpenDownload}
              className="px-3.5 py-2 rounded-xl text-xs font-semibold text-zinc-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 transition-all duration-200 flex items-center gap-1.5 shadow-lg shadow-amber-500/20 hover:shadow-amber-500/35 active:scale-[0.98]"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{t.nav.downloadApp}</span>
            </button>
          </div>

          {/* Mobile Action Controls */}
          <div className="flex sm:hidden items-center gap-2">
            {/* Mobile Language Switcher */}
            <button
              type="button"
              onClick={() => setLanguage(language === 'uk' ? 'en' : 'uk')}
              className="px-2 py-1.5 rounded-lg text-xs font-bold bg-zinc-900 border border-zinc-700 text-zinc-200 flex items-center gap-1"
              title={t.geoBadge.switchLangTooltip}
            >
              <Globe className="w-3 h-3 text-amber-400" />
              <span>{language.toUpperCase()}</span>
            </button>

            <button
              id="nav-mobile-test-quick"
              onClick={onOpenTestLink}
              className="px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-amber-500/15 border border-amber-500/30 text-amber-400 flex items-center gap-1"
            >
              <Link2 className="w-3 h-3" />
              <span>{language === 'uk' ? 'Тест' : 'Test'}</span>
            </button>
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#101014] border-b border-zinc-800 px-4 pt-3 pb-6 space-y-3 mt-3 animate-in slide-in-from-top-2 duration-200">
          {/* Mobile Language Selector inside drawer */}
          <div className="flex items-center justify-between pb-2 border-b border-zinc-850">
            <span className="text-xs text-zinc-400 flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-amber-400" />
              <span>{language === 'uk' ? 'Мова інтерфейсу' : 'Interface language'}</span>
            </span>
            <div className="flex items-center bg-zinc-900 border border-zinc-750 rounded-lg p-0.5 text-xs">
              <button
                type="button"
                onClick={() => setLanguage('uk')}
                className={`px-2.5 py-1 rounded font-bold transition-colors ${
                  language === 'uk' ? 'bg-amber-500 text-zinc-950' : 'text-zinc-400'
                }`}
              >
                UA 🇺🇦
              </button>
              <button
                type="button"
                onClick={() => setLanguage('en')}
                className={`px-2.5 py-1 rounded font-bold transition-colors ${
                  language === 'en' ? 'bg-amber-500 text-zinc-950' : 'text-zinc-400'
                }`}
              >
                EN 🇬🇧
              </button>
            </div>
          </div>

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
                onOpenTestLink();
              }}
              className="w-full py-2.5 rounded-xl font-semibold text-sm bg-amber-500/15 border border-amber-500/30 text-amber-300 flex items-center justify-center gap-2"
            >
              <Link2 className="w-4 h-4 text-amber-400" />
              <span>{t.nav.testLink}</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenWebApp();
              }}
              className="w-full py-2.5 rounded-xl font-semibold text-sm bg-zinc-800 text-zinc-100 hover:bg-zinc-700 flex items-center justify-center gap-2"
            >
              <Smartphone className="w-4 h-4 text-amber-400" />
              <span>{t.nav.webApp}</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDownload();
              }}
              className="w-full py-2.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-amber-400 to-amber-500 text-zinc-950 flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20"
            >
              <Download className="w-4 h-4" />
              <span>{t.nav.downloadApp}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
