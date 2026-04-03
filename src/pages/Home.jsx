import { useI18n } from '../i18n/I18nProvider.jsx';
import { BadgeIcon } from '../components/icons.jsx';
import ConditionsGrid from '../components/ConditionsGrid.jsx';
import PatientJourneyTimeline from '../components/PatientJourneyTimeline.jsx';
import YogaSection from '../components/YogaSection.jsx';
import ContactSection from '../components/ContactSection.jsx';

function TrustBadges() {
  const { t } = useI18n();
  return (
    <ul className="mt-6 flex flex-wrap items-center justify-center gap-2 md:justify-start" aria-label={t.hero.trustLabel}>
      {t.hero.trustBadges.map((b) => (
        <li
          key={b}
          className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/20 px-3 py-1.5 text-sm font-semibold text-slate-900 backdrop-blur"
        >
          <BadgeIcon className="h-4 w-4 text-primary-green" />
          <span>{b}</span>
        </li>
      ))}
    </ul>
  );
}

export default function HomePage() {
  const { t } = useI18n();

  return (
    <>
      <section
        className="relative min-h-svh overflow-hidden bg-background-warm"
        aria-labelledby="alivio-hero-title"
        style={{
          /* Calm meditation / mind–body wellness — soft tones that blend with #FAF9F6 + brand green/blue */
          backgroundImage:
            "linear-gradient(180deg, rgba(250,249,246,0.92) 0%, rgba(250,249,246,0.78) 45%, rgba(250,249,246,0.88) 100%), linear-gradient(135deg, rgba(30,123,68,0.06) 0%, transparent 50%, rgba(28,58,148,0.05) 100%), url('https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=2400&q=85')",
          backgroundSize: 'cover',
          backgroundPosition: 'center 35%',
        }}
      >
        <div className="mx-auto flex min-h-svh max-w-7xl items-center px-6 pt-24 md:pt-28">
          <div className="max-w-2xl text-center md:text-left">
            <p className="inline-flex items-center gap-2 rounded-full border border-slate-900/10 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-slate-700">
              {t.hero.pill}
            </p>

            <h1
              id="alivio-hero-title"
              className="mt-6 font-serif text-balance text-5xl font-extrabold leading-[1.02] tracking-tight text-slate-950 sm:text-6xl md:text-7xl"
            >
              {t.hero.h1}
            </h1>

            <p className="mt-5 text-pretty text-base leading-relaxed text-slate-700 md:text-lg">
              {t.hero.subtitle}
            </p>

            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center md:justify-start">
              <a
                href="/booking"
                className="inline-flex w-full items-center justify-center rounded-full px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:shadow-[0_0_28px_rgba(28,58,148,0.28)] active:scale-[0.99] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-blue sm:w-auto"
                style={{
                  backgroundImage: 'linear-gradient(90deg, #1C3A94 0%, #2E5BE0 100%)',
                }}
              >
                {t.hero.cta}
              </a>
              <a
                href="/conditions"
                className="inline-flex w-full items-center justify-center rounded-full border border-slate-900/10 bg-white/75 px-7 py-3.5 text-sm font-semibold text-slate-900 hover:bg-white sm:w-auto"
              >
                {t.hero.secondaryCta}
              </a>
            </div>

            <TrustBadges />
          </div>
        </div>
      </section>

      <YogaSection />
      <ConditionsGrid />
      <PatientJourneyTimeline />
      <ContactSection prominentWhatsApp />
    </>
  );
}

