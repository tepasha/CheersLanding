import React from 'react';
import { X, ShieldCheck, FileText } from 'lucide-react';

interface LegalModalProps {
  isOpen: boolean;
  type: 'privacy' | 'terms';
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ isOpen, type, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#121216] border border-zinc-700 rounded-3xl p-6 sm:p-8 shadow-2xl text-white max-h-[85vh] flex flex-col">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors"
          aria-label="Закрити"
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
            {type === 'privacy' ? 'Політика конфіденційності «Будьмо!»' : 'Правила та Умови використання'}
          </h3>
        </div>

        <div className="flex-1 overflow-y-auto pr-2 space-y-4 text-xs sm:text-sm text-zinc-300 leading-relaxed">
          {type === 'privacy' ? (
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
          )}
        </div>

        <div className="pt-4 border-t border-zinc-800 mt-4 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-xs font-semibold text-white"
          >
            Зрозуміло
          </button>
        </div>
      </div>
    </div>
  );
};
