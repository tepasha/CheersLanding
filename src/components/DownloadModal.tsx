import React, { useState } from 'react';
import { X, ExternalLink, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultPlatform?: string;
}

export const DownloadModal: React.FC<DownloadModalProps> = ({ isOpen, onClose }) => {
  const { t } = useLanguage();
  const [currentUrl, setCurrentUrl] = useState('');

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentUrl(window.location.href);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const testUrl = currentUrl || 'https://ais-dev-aemnx6jeaemtjlv3jjgfnv-747705824020.europe-west2.run.app';
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(testUrl)}&color=000000&bgcolor=ffffff&margin=5`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-[#121216] border border-zinc-700 rounded-3xl p-6 sm:p-8 shadow-2xl text-white">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center mb-6">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-600 to-yellow-400 mx-auto mb-3 flex items-center justify-center text-2xl shadow-lg shadow-amber-500/25">
            🍻
          </div>
          <h3 className="text-2xl font-bold font-display tracking-tight text-white mb-1">
            {t.downloadModal.title}
          </h3>
          <p className="text-xs sm:text-sm text-zinc-400">
            {t.downloadModal.subtitle}
          </p>
        </div>

        {/* Desktop QR Scan Section */}
        <div className="bg-[#0a0a0c] border border-zinc-800 rounded-2xl p-5 mb-6 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <div className="w-24 h-24 bg-white p-1.5 rounded-xl shrink-0 flex items-center justify-center shadow-md overflow-hidden">
            <img
              src={qrCodeUrl}
              alt="QR code"
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block mb-0.5">
              {t.downloadModal.quickAccessBadge}
            </span>
            <h4 className="text-sm font-bold text-white mb-1">
              {t.downloadModal.scanQrTitle}
            </h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              {t.downloadModal.scanQrDesc}
            </p>
          </div>
        </div>

        {/* Official Store Buttons */}
        <div className="space-y-3 mb-6">
          <a
            href="https://apple.com/app-store"
            target="_blank"
            rel="noreferrer"
            className="w-full p-4 rounded-2xl bg-zinc-900 border border-zinc-750 hover:border-amber-500/50 hover:bg-zinc-850 transition-all flex items-center justify-between group shadow-md"
          >
            <div className="flex items-center gap-3.5">
              <span className="text-3xl group-hover:scale-110 transition-transform"></span>
              <div className="text-left">
                <p className="text-[10px] uppercase font-semibold text-zinc-400 tracking-wider">{t.downloadModal.officialStoreBadge}</p>
                <p className="text-base font-bold text-white">{t.downloadModal.appleTitle}</p>
              </div>
            </div>
            <span className="text-xs text-amber-400 font-semibold group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
              <span>{t.downloadModal.downloadAction}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </span>
          </a>

          <a
            href="https://play.google.com"
            target="_blank"
            rel="noreferrer"
            className="w-full p-4 rounded-2xl bg-zinc-900 border border-zinc-750 hover:border-emerald-500/50 hover:bg-zinc-850 transition-all flex items-center justify-between group shadow-md"
          >
            <div className="flex items-center gap-3.5">
              <span className="text-emerald-400 text-2xl font-bold group-hover:scale-110 transition-transform">▶</span>
              <div className="text-left">
                <p className="text-[10px] uppercase font-semibold text-zinc-400 tracking-wider">{t.downloadModal.officialStoreBadge}</p>
                <p className="text-base font-bold text-white">{t.downloadModal.googleTitle}</p>
              </div>
            </div>
            <span className="text-xs text-emerald-400 font-semibold group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
              <span>{t.downloadModal.downloadAction}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </span>
          </a>
        </div>

        {/* Security verification notice */}
        <div className="flex items-center justify-center gap-2 text-xs text-zinc-400 pt-2 border-t border-zinc-800">
          <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{t.downloadModal.securityNote}</span>
        </div>

      </div>
    </div>
  );
};
