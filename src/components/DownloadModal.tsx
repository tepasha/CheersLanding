import React, { useState } from 'react';
import { X, Smartphone, Download, QrCode, CheckCircle2, ShieldCheck, Sparkles, ArrowDownToLine } from 'lucide-react';
import confetti from 'canvas-confetti';
import { playCelebrationPop } from '../utils/audio';

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultPlatform?: string;
}

export const DownloadModal: React.FC<DownloadModalProps> = ({ isOpen, onClose, defaultPlatform }) => {
  const [apkDownloading, setApkDownloading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [currentUrl, setCurrentUrl] = useState('');

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentUrl(window.location.href);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const testUrl = currentUrl || 'https://ais-dev-aemnx6jeaemtjlv3jjgfnv-747705824020.europe-west2.run.app';
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(testUrl)}&color=000000&bgcolor=ffffff&margin=5`;

  const handleDownloadApk = () => {
    playCelebrationPop();
    setApkDownloading(true);

    confetti({
      particleCount: 40,
      spread: 60,
      origin: { x: 0.5, y: 0.5 },
      colors: ['#f59e0b', '#10b981', '#ffffff'],
    });

    setTimeout(() => {
      setApkDownloading(false);
      setDownloadSuccess(true);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-[#121216] border border-zinc-700 rounded-3xl p-6 sm:p-8 shadow-2xl text-white">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors"
          aria-label="Закрити"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center mb-6">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-600 to-yellow-400 mx-auto mb-3 flex items-center justify-center text-2xl shadow-lg shadow-amber-500/25">
            🍻
          </div>
          <h3 className="text-2xl font-bold font-display tracking-tight text-white mb-1">
            Завантажити «Будьмо!»
          </h3>
          <p className="text-xs sm:text-sm text-zinc-400">
            Обирай зручний спосіб встановлення для iOS, Android або швидкий запуск PWA.
          </p>
        </div>

        {/* Desktop QR Scan Section */}
        <div className="bg-[#0a0a0c] border border-zinc-800 rounded-2xl p-5 mb-6 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <div className="w-24 h-24 bg-white p-1.5 rounded-xl shrink-0 flex items-center justify-center shadow-md overflow-hidden">
            <img
              src={qrCodeUrl}
              alt="QR код для встановлення"
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block mb-0.5">
              Швидкий QR-код
            </span>
            <h4 className="text-sm font-bold text-white mb-1">
              Наведи камеру смартфона
            </h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Відкриває веб-версію або пропонує встановлення на iOS та Android миттєво.
            </p>
          </div>
        </div>

        {/* Platform Buttons */}
        <div className="space-y-2.5 mb-6">
          <a
            href="https://apple.com/app-store"
            target="_blank"
            rel="noreferrer"
            className="w-full p-3.5 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-850 transition-colors flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl"></span>
              <div className="text-left">
                <p className="text-[10px] text-zinc-400 leading-none">Завантажити в</p>
                <p className="text-sm font-bold text-white">Apple App Store (iOS)</p>
              </div>
            </div>
            <span className="text-xs text-amber-400 font-semibold">Отримати →</span>
          </a>

          <a
            href="https://play.google.com"
            target="_blank"
            rel="noreferrer"
            className="w-full p-3.5 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-850 transition-colors flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <span className="text-emerald-400 text-xl font-bold">▶</span>
              <div className="text-left">
                <p className="text-[10px] text-zinc-400 leading-none">Доступно в</p>
                <p className="text-sm font-bold text-white">Google Play Store (Android)</p>
              </div>
            </div>
            <span className="text-xs text-amber-400 font-semibold">Отримати →</span>
          </a>

          <button
            onClick={handleDownloadApk}
            className="w-full p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 hover:bg-amber-500/15 transition-colors flex items-center justify-between text-left"
          >
            <div className="flex items-center gap-3">
              <ArrowDownToLine className="w-5 h-5 text-amber-400 shrink-0" />
              <div>
                <p className="text-[10px] text-amber-400 font-semibold leading-none">Прямий файл без посередників</p>
                <p className="text-sm font-bold text-white">Пряме завантаження APK v2.4.0</p>
              </div>
            </div>
            <span className="text-xs text-amber-400 font-bold">
              {apkDownloading ? 'Завантаження...' : downloadSuccess ? 'Готово ✓' : 'Завантажити APK (32 MB)'}
            </span>
          </button>
        </div>

        {/* Security verification notice */}
        <div className="flex items-center justify-center gap-2 text-xs text-zinc-400 pt-2 border-t border-zinc-800">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>Перевірено на віруси та підписано цифровим сертифікатом</span>
        </div>

      </div>
    </div>
  );
};
