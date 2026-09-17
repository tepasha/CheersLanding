import React from 'react';
import { Star, Quote, CheckCircle2, Heart } from 'lucide-react';
import { REVIEWS } from '../data/mockData';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-20 md:py-28 bg-[#0a0a0c] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Heart className="w-3.5 h-3.5 fill-amber-400" />
            <span>Історії з життя</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display mb-4">
            Як «Будьмо!» рятує вечори <br /> по всій Україні
          </h2>
          <p className="text-base sm:text-lg text-zinc-400">
            Переїзд у нове місто, вечір після важкого спринту чи спонтанна кава: ось що розповідають наші користувачі.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-[#121216] border border-zinc-800 hover:border-zinc-700 rounded-3xl p-7 flex flex-col justify-between transition-all duration-300 shadow-xl group relative"
            >
              <div>
                {/* Header with avatar, name & location */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={review.avatar}
                      alt={review.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-amber-500/40 shadow"
                    />
                    <div>
                      <h4 className="text-sm font-bold text-white font-display">
                        {review.name}
                      </h4>
                      <p className="text-xs text-zinc-400">{review.cityDistrict}</p>
                    </div>
                  </div>
                  <Quote className="w-6 h-6 text-zinc-700 group-hover:text-amber-500/40 transition-colors" />
                </div>

                {/* Rating stars & verified badge */}
                <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-zinc-800/80">
                  <div className="flex text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <span className="text-[11px] font-medium text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-800/40 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    {review.badge}
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-sm text-zinc-300 leading-relaxed italic mb-4">
                  {review.text}
                </p>
              </div>

              {/* Footer info: Vibe & date */}
              <div className="pt-3 border-t border-zinc-800/60 flex items-center justify-between text-xs text-zinc-400">
                <span className="text-amber-400/90 font-medium">
                  🍻 {review.drinkVibe}
                </span>
                <span>{review.date}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
