import { useMemo } from 'react';
import { useI18n } from '../i18n/I18nProvider.jsx';
import { DropIcon, HeartIcon, LeafIcon } from './icons.jsx';

const iconByKey = {
  leaf: LeafIcon,
  drop: DropIcon,
  heart: HeartIcon,
};

export default function ConditionsGrid({ showHeader = true }) {
  const { t } = useI18n();

  const items = useMemo(() => t.conditions.items, [t]);

  return (
    <section className="bg-background-warm" aria-labelledby={showHeader ? 'conditions-title' : undefined}>
      <div className="mx-auto max-w-7xl px-6 py-14 md:py-18">
        {showHeader && (
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary-green">{t.conditions.eyebrow}</p>
            <h2 id="conditions-title" className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              {t.conditions.title}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-700">{t.conditions.subtitle}</p>
          </div>
        )}

        <div className={`${showHeader ? 'mt-10' : ''} grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3`}>
          {items.map((c) => {
            const Icon = iconByKey[c.icon] ?? LeafIcon;
            return (
              <article
                key={c.title}
                className="group overflow-hidden rounded-2xl border border-slate-900/10 bg-white/70 shadow-sm transition-transform duration-200 hover:scale-[1.02] active:scale-[1.01]"
              >
                {c.image ? (
                  <img
                    src={c.image}
                    alt=""
                    className="h-44 w-full object-cover"
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                  />
                ) : null}
                <div className="p-6">
                <div className="flex items-center gap-4">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary-green/10 text-primary-green">
                    <Icon className="h-7 w-7" />
                  </span>
                  <h3 className="text-lg font-semibold text-slate-950">{c.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-700">{c.desc}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

