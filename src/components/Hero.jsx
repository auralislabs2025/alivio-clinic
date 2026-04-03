import WaveSeparator from './WaveSeparator';
import { useI18n } from '../i18n/I18nProvider.jsx';

export default function Hero() {
  const { t } = useI18n();

  return (
    <section id="top" className="relative overflow-hidden pt-24 md:pt-28 bg-background-warm">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-primary-green/10 blur-3xl" />
        <div className="absolute top-10 right-0 h-96 w-96 rounded-full bg-primary-blue/10 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 pb-14 md:grid-cols-2 md:pb-20">
        <div className="text-center md:text-left">
          <p className="inline-flex items-center gap-2 rounded-full border border-slate-900/10 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-slate-700">
            {t.hero.pill}
          </p>

          <h1 className="mt-6 text-balance text-4xl font-extrabold leading-[1.05] tracking-tight text-slate-950 sm:text-5xl md:text-6xl">
            {t.hero.h1}
          </h1>

          <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-slate-700 md:text-lg md:pr-6">
            {t.hero.subtitle}
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center md:justify-start">
            <a
              href="#contact"
              className="inline-flex w-full items-center justify-center rounded-full bg-primary-blue px-6 py-3 text-sm font-semibold text-white shadow-sm transition-transform duration-200 hover:scale-[1.02] active:scale-[0.99] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-blue sm:w-auto"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {t.nav.book}
            </a>
            <a
              href="#services"
              className="inline-flex w-full items-center justify-center rounded-full border border-slate-900/10 bg-white/80 px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-white sm:w-auto"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {t.hero.viewServices}
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-primary-blue/15 to-primary-green/15 blur-2xl" />
          <div className="overflow-hidden rounded-[2rem] border border-slate-900/10 bg-white/70 shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1400&q=80"
              alt={t.hero.imageAlt}
              className="h-[320px] w-full object-cover sm:h-[380px]"
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>

      <WaveSeparator className="h-10 w-full md:h-12" />
    </section>
  );
}

