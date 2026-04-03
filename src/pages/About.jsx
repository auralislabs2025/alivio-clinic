import { useI18n } from '../i18n/I18nProvider.jsx';

export default function AboutPage() {
  const { t } = useI18n();

  return (
    <main className="bg-background-warm">
      <div className="mx-auto max-w-7xl px-6 pt-28 pb-16 md:pt-32">
        <h1 className="font-serif text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">{t.about.title}</h1>
        <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-700 md:text-lg">{t.about.body}</p>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
          {t.about.cards.map((c) => (
            <section key={c.title} className="rounded-2xl border border-slate-900/10 bg-white/70 p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-slate-950">{c.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-700">{c.desc}</p>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}

