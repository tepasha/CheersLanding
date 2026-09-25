import React, { useState } from 'react';
import { X, Building2, MapPin, CheckCircle2, Send, Sparkles } from 'lucide-react';
import { playCelebrationPop } from '../utils/audio';

interface PartnerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PartnerModal: React.FC<PartnerModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    venueName: '',
    city: '',
    district: '',
    venueType: 'Крафтовий паб',
    contact: '',
    specialOffer: '-15% на першу пінту або безкоштовний комплімент'
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    playCelebrationPop();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-[#121216] border border-zinc-700 rounded-3xl p-6 sm:p-8 shadow-2xl text-white">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors"
          aria-label="Закрити"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8">
            <div className="w-14 h-14 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-2xl mx-auto mb-4 flex items-center justify-center text-3xl">
              🎉
            </div>
            <h3 className="text-2xl font-bold font-display text-white mb-2">
              Заявку успішно прийнято!
            </h3>
            <p className="text-sm text-zinc-300 mb-6 max-w-sm mx-auto">
              Дякуємо! Наш менеджер партнерств звʼяжеться з вами в Telegram/телефоном упродовж 2 годин для надання брендованих тейбл-тентів та активації на карті.
            </p>
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-sm"
            >
              Зрозуміло, дякую!
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-display text-white">
                  Стати закладом-партнером
                </h3>
                <p className="text-xs text-zinc-400">
                  Залучайте нові платоспроможні компанії гостей щовечора
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1">
                  Назва закладу
                </label>
                <input
                  required
                  type="text"
                  placeholder="напр. Beer & Book Pub"
                  value={formData.venueName}
                  onChange={(e) => setFormData({ ...formData, venueName: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-700 text-xs text-white placeholder-zinc-400 focus:outline-none focus:border-amber-400"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1">
                    Місто
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Вкажіть місто"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-700 text-xs text-white placeholder-zinc-400 focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1">
                    Район / Вулиця
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="напр. вул. Соборна"
                    value={formData.district}
                    onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-700 text-xs text-white placeholder-zinc-400 focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1">
                  Контакт (Телефон або Telegram)
                </label>
                <input
                  required
                  type="text"
                  placeholder="+380... або @username"
                  value={formData.contact}
                  onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-700 text-xs text-white placeholder-zinc-400 focus:outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1">
                  Спешл-бонус для гостей з «Будьмо!»
                </label>
                <input
                  type="text"
                  value={formData.specialOffer}
                  onChange={(e) => setFormData({ ...formData, specialOffer: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-700 text-xs text-white focus:outline-none focus:border-amber-400"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-yellow-300 text-zinc-950 font-bold text-xs shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Надіслати заявку на партнерство</span>
              </button>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};
