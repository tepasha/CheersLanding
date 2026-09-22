import React, { useState, useEffect } from 'react';
import { X, Copy, Check, ExternalLink, Smartphone, Sparkles, Share2 } from 'lucide-react';
import { playCelebrationPop, playGlassClink } from '../utils/audio';
import { useLanguage } from '../context/LanguageContext';

interface TestLinkModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TestLinkModal: React.FC<TestLinkModalProps> = ({ isOpen, onClose }) => {
  const { t, language } = useLanguage();
  const [copied, setCopied] = useState(false);
  const [currentUrl, setCurrentUrl] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentUrl(window.location.href);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const testUrl = currentUrl || 'https://ais-dev-aemnx6jeaemtjlv3jjgfnv-747705824020.europe-west2.run.app';
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(testUrl)}&color=000000&bgcolor=ffffff&margin=10`;

  const handleCopy = () => {
    playCelebrationPop();
    navigator.clipboard.writeText(testUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-[#121216] border border-amber-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl text-white">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{language === 'uk' ? 'Прямий доступ' : 'Direct Access'}</span>
          </div>
          <h3 className="text-2xl font-bold font-display text-white mb-2">
            {t.testLinkModal.title}
          </h3>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-sm mx-auto">
            {t.testLinkModal.subtitle}
          </p>
        </div>

        {/* QR Code Card */}
        <div className="bg-[#0a0a0c] border border-zinc-800 rounded-2xl p-5 mb-6 flex flex-col sm:flex-row items-center gap-5">
          <div className="w-36 h-36 bg-white p-2 rounded-2xl shrink-0 flex items-center justify-center shadow-lg">
            <img
              src={qrCodeUrl}
              alt="QR Code"
              className="w-full h-full object-contain"
            />
          </div>

          <div className="text-center sm:text-left space-y-2">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center justify-center sm:justify-start gap-1.5">
              <Smartphone className="w-4 h-4" />
              {language === 'uk' ? 'Тест на смартфоні' : 'Test on Mobile'}
            </span>
            <h4 className="text-sm font-bold text-white">
              {t.testLinkModal.scanQrLabel}
            </h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              {t.testLinkModal.scanQrDesc}
            </p>
          </div>
        </div>

        {/* Link Input & Copy / Open Buttons */}
        <div className="space-y-3 mb-6">
          <label className="block text-xs font-semibold text-zinc-400">
            {t.testLinkModal.directUrlLabel}
          </label>
          
          <div className="flex items-center gap-2 bg-[#09090c] border border-zinc-700/80 rounded-xl p-2 pl-3">
            <span className="text-xs font-mono text-zinc-300 truncate flex-1 select-all">
              {testUrl}
            </span>

            <button
              onClick={handleCopy}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all shrink-0 ${
                copied
                  ? 'bg-emerald-500 text-zinc-950 shadow-sm'
                  : 'bg-amber-500 hover:bg-amber-400 text-zinc-950 shadow'
              }`}
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>{t.testLinkModal.copiedBtn}</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>{t.testLinkModal.copyBtn}</span>
                </>
              )}
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
            <a
              href={testUrl}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-zinc-200 hover:text-white text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5 text-amber-400" />
              <span>{t.testLinkModal.openBtn} ↗</span>
            </a>

            <button
              onClick={() => {
                playGlassClink();
                if (navigator.share) {
                  navigator.share({
                    title: language === 'uk' ? 'Будьмо! — Тестове посилання' : 'Budmo! — Test Link',
                    text: language === 'uk' ? 'Спробуй новий сервіс швидкого пошуку компанії на вечір «Будьмо!»' : 'Try the new meetup service Budmo!',
                    url: testUrl,
                  }).catch(() => {});
                } else {
                  handleCopy();
                }
              }}
              className="px-4 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-zinc-200 hover:text-white text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
            >
              <Share2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>{language === 'uk' ? 'Поділитися посиланням' : 'Share Link'}</span>
            </button>
          </div>
        </div>

        {/* Tip */}
        <div className="text-[11px] text-zinc-400 text-center border-t border-zinc-800/80 pt-3 flex items-center justify-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>{t.testLinkModal.deviceOptimized}</span>
        </div>

      </div>
    </div>
  );
};
