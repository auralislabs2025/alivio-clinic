import { useEffect, useState } from 'react';
import { useI18n } from '../i18n/I18nProvider.jsx';

const INTERVAL_MS = 3800;

export default function HeroTaglineSlider() {
  const { t } = useI18n();
  const slides = t.hero.taglineSlides;
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setI((prev) => (prev + 1) % slides.length);
    }, INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [slides.length]);

  return (
    <div className="min-h-[3rem] sm:min-h-[3.25rem]" aria-live="polite" aria-atomic="true">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-200/95 [text-shadow:0_1px_12px_rgba(0,0,0,0.35)] sm:text-sm sm:tracking-[0.2em]">
        {t.hero.taglineLabel}
      </p>
      <p
        key={i}
        className="mt-2 font-serif text-2xl font-bold tracking-tight text-white [text-shadow:0_2px_20px_rgba(0,0,0,0.4)] motion-safe:animate-[heroTagline_0.6s_ease-out] sm:text-3xl"
        style={{ animationFillMode: 'both' }}
      >
        {slides[i]}
      </p>
      <style>{`
        @keyframes heroTagline {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
