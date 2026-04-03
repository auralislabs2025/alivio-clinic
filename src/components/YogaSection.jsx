import { useI18n } from '../i18n/I18nProvider.jsx';
import { LeafIcon } from './icons.jsx';

export default function YogaSection() {
  const { t } = useI18n();

  return (
    <section aria-labelledby="yoga-title" className="bg-background-warm">
      <div className="mx-auto max-w-7xl px-6 py-14 md:py-18">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-primary-green">{t.yoga.eyebrow}</p>
            <h2 id="yoga-title" className="mt-3 font-serif text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              {t.yoga.title}
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-700">{t.yoga.subtitle}</p>

            <ul className="mt-6 space-y-3">
              {t.yoga.bullets.map((b) => (
                <li key={b} className="flex items-start gap-3 text-slate-700">
                  <span className="mt-0.5 grid h-8 w-8 place-items-center rounded-2xl bg-primary-green/10 text-primary-green" aria-hidden="true">
                    <LeafIcon className="h-5 w-5" />
                  </span>
                  <span className="text-sm leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="/booking"
                className="inline-flex w-full items-center justify-center rounded-full bg-primary-blue px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition-transform duration-200 hover:scale-[1.01] active:scale-[0.99] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-blue sm:w-auto"
              >
                {t.yoga.cta}
              </a>
              <a
                href="/contact"
                className="inline-flex w-full items-center justify-center rounded-full border border-slate-900/10 bg-white/75 px-7 py-3.5 text-sm font-semibold text-slate-900 hover:bg-white sm:w-auto"
              >
                {t.yoga.secondaryCta}
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-primary-green/15 to-primary-blue/15 blur-2xl" />
            <div className="overflow-hidden rounded-[2rem] border border-slate-900/10 bg-white/70 shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1400&q=80"
                alt={t.yoga.imageAlt}
                className="h-[320px] w-full object-cover sm:h-[380px]"
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

