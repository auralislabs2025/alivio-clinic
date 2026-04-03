import { useI18n } from '../i18n/I18nProvider.jsx';

function Step({ idx, title, desc }) {
  return (
    <li className="relative pl-10">
      <div
        className="absolute left-0 top-0 grid h-8 w-8 place-items-center rounded-full bg-primary-green/15 text-sm font-bold text-primary-green"
        aria-hidden="true"
      >
        {idx}
      </div>
      <h3 className="text-lg font-semibold text-slate-950">{title}</h3>
      <p className="mt-1 text-sm leading-relaxed text-slate-700">{desc}</p>
    </li>
  );
}

export default function PatientJourneyTimeline() {
  const { t } = useI18n();

  return (
    <section aria-labelledby="journey-title" className="bg-background-warm">
      <div className="mx-auto max-w-7xl px-6 py-14 md:py-18">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary-green">{t.journey.eyebrow}</p>
          <h2 id="journey-title" className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            {t.journey.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-700">{t.journey.subtitle}</p>
        </div>

        <div className="mt-10 rounded-3xl border border-slate-900/10 bg-white/60 p-6 sm:p-8">
          <ol className="relative grid grid-cols-1 gap-8 md:grid-cols-3">
            <div
              className="absolute left-4 right-4 top-4 hidden h-px bg-slate-900/10 md:block"
              aria-hidden="true"
            />
            <Step idx="1" title={t.journey.steps[0].title} desc={t.journey.steps[0].desc} />
            <Step idx="2" title={t.journey.steps[1].title} desc={t.journey.steps[1].desc} />
            <Step idx="3" title={t.journey.steps[2].title} desc={t.journey.steps[2].desc} />
          </ol>
        </div>
      </div>
    </section>
  );
}

