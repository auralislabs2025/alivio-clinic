import { useMemo } from 'react';
import WaveSeparator from './WaveSeparator';
import { useI18n } from '../i18n/I18nProvider.jsx';

export default function Services() {
  const { t } = useI18n();
  const services = useMemo(
    () => t.services.items,
    [t],
  );

  return (
    <section id="services" className="relative bg-background-warm">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary-green">{t.services.eyebrow}</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            {t.services.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-700">
            {t.services.subtitle}
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.title}
              className="group rounded-2xl border border-slate-900/10 bg-white/70 p-6 shadow-sm transition-transform duration-200 hover:scale-[1.02] active:scale-[1.01]"
            >
              <div className="h-1 w-14 rounded-full bg-primary-green" />
              <h3 className="mt-5 text-lg font-semibold text-slate-950">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-700">{s.desc}</p>
              <div className="mt-6 border-b border-primary-green" />
              <div className="mt-4 text-sm font-semibold text-primary-blue">{t.services.learnMore}</div>
            </article>
          ))}
        </div>
      </div>

      <WaveSeparator className="h-10 w-full md:h-12" flip />
    </section>
  );
}

