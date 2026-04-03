import { useCallback, useEffect, useState } from 'react';
import { useI18n } from '../i18n/I18nProvider.jsx';
import { LeafIcon } from './icons.jsx';

const AUTO_MS = 6500;

function Chevron({ dir }) {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      {dir === 'prev' ? <path d="M15 18l-6-6 6-6" /> : <path d="M9 6l6 6-6 6" />}
    </svg>
  );
}

export default function WellnessSliderSection() {
  const { t } = useI18n();
  const { slides, prevAria, nextAria, goToSlide } = t.wellnessSlider;
  const [active, setActive] = useState(0);
  const n = slides.length;

  const go = useCallback(
    (delta) => {
      setActive((a) => (a + delta + n) % n);
    },
    [n],
  );

  useEffect(() => {
    const id = window.setInterval(() => go(1), AUTO_MS);
    return () => window.clearInterval(id);
  }, [go]);

  const slide = slides[active];

  return (
    <section aria-labelledby="wellness-slider-title" className="bg-background-warm">
      <div className="mx-auto max-w-7xl px-6 py-14 md:py-18">
        <div className="flex flex-col items-center text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary-green">{t.wellnessSlider.eyebrow}</p>
          <h2 id="wellness-slider-title" className="mt-3 max-w-2xl font-serif text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
            {t.wellnessSlider.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-700">{t.wellnessSlider.subtitle}</p>
        </div>

        <div className="relative mt-12">
          <div className="grid grid-cols-1 items-stretch gap-10 md:grid-cols-2 md:gap-12">
            <div className="order-2 flex min-h-[280px] flex-col justify-center md:order-1">
              <div key={slide.id} className="motion-safe:animate-[wellnessIn_0.45s_ease-out]">
                <h3 className="font-serif text-2xl font-bold text-slate-950 sm:text-3xl">{slide.title}</h3>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-700">{slide.subtitle}</p>
                <ul className="mt-6 space-y-3">
                  {slide.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-slate-700">
                      <span
                        className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-2xl bg-primary-green/10 text-primary-green"
                        aria-hidden="true"
                      >
                        <LeafIcon className="h-5 w-5" />
                      </span>
                      <span className="text-sm leading-relaxed">{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="#contact"
                    className="inline-flex w-full items-center justify-center rounded-full bg-primary-blue px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition-transform duration-200 hover:scale-[1.01] active:scale-[0.99] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-blue sm:w-auto"
                  >
                    {t.wellnessSlider.cta}
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex w-full items-center justify-center rounded-full border border-slate-900/10 bg-white/75 px-7 py-3.5 text-sm font-semibold text-slate-900 hover:bg-white sm:w-auto"
                  >
                    {t.wellnessSlider.secondaryCta}
                  </a>
                </div>
              </div>
            </div>

            <div className="relative order-1 md:order-2">
              <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-primary-green/15 to-primary-blue/15 blur-2xl" />
              <div className="overflow-hidden rounded-[2rem] border border-slate-900/10 bg-white/70 shadow-sm">
                <img
                  key={slide.id}
                  src={slide.image}
                  alt={slide.imageAlt}
                  className="h-[280px] w-full object-cover sm:h-[360px] md:h-[400px]"
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => go(-1)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-900/10 bg-white text-slate-800 shadow-sm hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-blue"
              aria-label={prevAria}
            >
              <Chevron dir="prev" />
            </button>
            <div className="flex gap-2" role="tablist" aria-label={goToSlide}>
              {slides.map((s, idx) => (
                <button
                  key={s.id}
                  type="button"
                  role="tab"
                  aria-selected={idx === active}
                  aria-label={`${goToSlide} ${idx + 1}`}
                  onClick={() => setActive(idx)}
                  className={`h-2.5 rounded-full transition-all ${
                    idx === active ? 'w-8 bg-primary-green' : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => go(1)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-900/10 bg-white text-slate-800 shadow-sm hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-blue"
              aria-label={nextAria}
            >
              <Chevron dir="next" />
            </button>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes wellnessIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
