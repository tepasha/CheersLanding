import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const FaqSection: React.FC = () => {
  const { t, language } = useLanguage();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const faqItems = [
    { q: t.faq.q1, a: t.faq.a1 },
    { q: t.faq.q2, a: t.faq.a2 },
    { q: t.faq.q3, a: t.faq.a3 },
    { q: t.faq.q4, a: t.faq.a4 },
    { q: t.faq.q5, a: t.faq.a5 },
  ];

  const toggleFaq = (index: number) => {
    setOpenFaqIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#0e0e12] border-t border-zinc-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>{t.faq.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display mb-4">
            {t.faq.title}
          </h2>
          <p className="text-base sm:text-lg text-zinc-400">
            {t.faq.subtitle}
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqItems.map((item, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <div
                key={item.q}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-[#141419] border-amber-500/40 shadow-lg'
                    : 'bg-[#111115] border-zinc-800 hover:border-zinc-700'
                }`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-white font-display">
                    {item.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-amber-500/20 text-amber-400' : 'text-zinc-400'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-zinc-300 leading-relaxed border-t border-zinc-800/60 mt-1 animate-in fade-in-50 duration-200">
                    <p>{item.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support Callout */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-white">
                {language === 'uk' ? 'Залишились запитання?' : 'Still have questions?'}
              </p>
              <p className="text-xs text-zinc-400">
                {language === 'uk' ? 'Наша команда підтримки на звʼязку в Telegram 24/7' : 'Our community support team is online 24/7'}
              </p>
            </div>
          </div>
          <a
            href="https://t.me"
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-xs font-semibold text-zinc-200 hover:text-white transition-colors whitespace-nowrap"
          >
            {language === 'uk' ? 'Написати в підтримку' : 'Contact Support'}
          </a>
        </div>

      </div>
    </section>
  );
};
