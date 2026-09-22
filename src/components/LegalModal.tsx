import React from 'react';
import { X, ShieldCheck, FileText } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface LegalModalProps {
  isOpen: boolean;
  type: 'privacy' | 'terms';
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ isOpen, type, onClose }) => {
  const { t, language } = useLanguage();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#121216] border border-zinc-700 rounded-3xl p-6 sm:p-8 shadow-2xl text-white max-h-[85vh] flex flex-col">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4 pb-3 border-b border-zinc-800">
          {type === 'privacy' ? (
            <ShieldCheck className="w-6 h-6 text-emerald-400" />
          ) : (
            <FileText className="w-6 h-6 text-amber-400" />
          )}
          <h3 className="text-xl font-bold font-display text-white">
            {type === 'privacy' ? t.legalModal.privacyTitle : t.legalModal.termsTitle}
          </h3>
        </div>

        <div className="flex-1 overflow-y-auto pr-2 space-y-4 text-xs sm:text-sm text-zinc-300 leading-relaxed">
          {type === 'privacy' ? (
            language === 'uk' ? (
              <>
                <p>
                  <strong>1. Захист геопозиції:</strong> «Будьмо!» ніколи не транслює іншим користувачам точну адресу вашого проживання чи приватного перебування. На радіусному радарі показується виключно приблизна точка (округлена до ~300-500м) або публічна назва району/вулиці.
                </p>
                <p>
                  <strong>2. Верифікація:</strong> Дані верифікації (Дія, Google) використовуються виключно для підтвердження того, що профіль належить реальній людині віком від 18 років. Ми не зберігаємо паспортні дані чи податкові номери.
                </p>
                <p>
                  <strong>3. Шифрування повідомлень:</strong> Особисті повідомлення та координати зустрічей захищені протоколами шифрування та не передаються третім сторонам чи рекламним мережам.
                </p>
                <p>
                  <strong>4. Видалення даних:</strong> Ви можете видалити свій профіль та всі супутні дані у будь-який момент в один клік у налаштуваннях додатку.
                </p>
              </>
            ) : (
              <>
                <p>
                  <strong>1. Geolocation Privacy:</strong> Budmo never exposes your private residential address or exact GPS location to other users. The radius radar only shows an approximate area (rounded to ~300-500m) or a public street/district name.
                </p>
                <p>
                  <strong>2. Verification:</strong> Identity verification data is strictly used to confirm that the profile belongs to a real adult individual. We never store personal tax IDs or passport credentials.
                </p>
                <p>
                  <strong>3. Communication Encryption:</strong> Direct messages and meeting arrangements are encrypted and never sold to third-party data brokers or advertisement networks.
                </p>
                <p>
                  <strong>4. Data Deletion:</strong> You have the right to erase your profile and all associated data at any time with a single click in your account settings.
                </p>
              </>
            )
          ) : (
            language === 'uk' ? (
              <>
                <p>
                  <strong>1. Тільки публічні місця:</strong> Усі зустрічі в «Будьмо!» призначаються виключно в публічних закладах (кавʼярні, бари, ресторани, публічні простори).
                </p>
                <p>
                  <strong>2. Нульова толерантність до токсичності:</strong> Заборонено будь-які прояви харасменту, навʼязливої поведінки чи агресії. Порушники блокуються миттєво та назавжди без права відновлення.
                </p>
                <p>
                  <strong>3. Вікові обмеження:</strong> Користувачі повинні досягти 18-річного віку для участі у зустрічах у барах та вживання алкогольних напоїв. Для безалкогольних зустрічей діють загальні правила безпеки.
                </p>
                <p>
                  <strong>4. Спеціальні пропозиції:</strong> Знижки в партнерських закладах надаються на розсуд адміністрації закладу при демонстрації активного тосту в додатку «Будьмо!».
                </p>
              </>
            ) : (
              <>
                <p>
                  <strong>1. Public Places Only:</strong> All meetups arranged through Budmo are strictly held in public venues (cafés, pubs, restaurants, open public spaces).
                </p>
                <p>
                  <strong>2. Zero Toxicity Tolerance:</strong> Harassment, aggressive conduct, or unwanted advances are strictly forbidden. Infringing accounts are banned immediately and permanently.
                </p>
                <p>
                  <strong>3. Age Requirements:</strong> Users must be of legal adult age (18+) to participate in bar meetups and consume alcoholic drinks. Standard safety protocols apply to coffee and tea gatherings.
                </p>
                <p>
                  <strong>4. Venue Specials:</strong> Partner perks and discounts are honored at the discretion of participating venues upon presenting an active cheers screen in Budmo.
                </p>
              </>
            )
          )}
        </div>

        <div className="pt-4 border-t border-zinc-800 mt-4 flex justify-between items-center text-xs text-zinc-400">
          <span>{t.legalModal.lastUpdated}</span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-xs font-semibold text-white transition-colors"
          >
            {t.legalModal.closeBtn}
          </button>
        </div>
      </div>
    </div>
  );
};
