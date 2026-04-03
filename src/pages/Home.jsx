import { useI18n } from '../i18n/I18nProvider.jsx';
import { BadgeIcon } from '../components/icons.jsx';

/** Reference-style banners (vial + moss + blue gradient). Swap to variation-b for the alternate look. */
const HERO_BANNER = '/alivio-hero-banner-variation-a.png';
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
          className="inline-flex items-center gap-2 rounded-full border border-white/35 bg-white/15 px-3 py-1.5 text-sm font-semibold text-white backdrop-blur-sm"
        >
          <BadgeIcon className="h-4 w-4 text-emerald-300" />
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
          /* Custom Alivio banner: vial on moss, shallow DOF, left negative space (reference-inspired). */
          backgroundImage: `linear-gradient(90deg, rgba(15,23,42,0.5) 0%, rgba(15,23,42,0.22) 38%, rgba(250,249,246,0.12) 55%, transparent 72%), linear-gradient(180deg, rgba(250,249,246,0.25) 0%, transparent 40%, rgba(250,249,246,0.2) 100%), url('${HERO_BANNER}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'right center',
        }}
      >
        <div className="mx-auto flex min-h-svh max-w-7xl items-center px-6 pt-24 md:pt-28">
          <div className="max-w-2xl rounded-2xl bg-slate-900/35 p-6 text-center shadow-lg backdrop-blur-md md:rounded-none md:bg-transparent md:p-0 md:text-left md:shadow-none md:backdrop-blur-none">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white/95 backdrop-blur-sm">
              {t.hero.pill}
            </p>

            <h1
              id="alivio-hero-title"
              className="mt-6 font-serif text-balance text-5xl font-extrabold leading-[1.02] tracking-tight text-white [text-shadow:0_2px_24px_rgba(0,0,0,0.35)] sm:text-6xl md:text-7xl"
            >
              {t.hero.h1}
            </h1>

            <p className="mt-5 text-pretty text-base leading-relaxed text-white/90 md:text-lg [text-shadow:0_1px_12px_rgba(0,0,0,0.25)]">
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
                className="inline-flex w-full items-center justify-center rounded-full border border-white/40 bg-white/15 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm hover:bg-white/25 sm:w-auto"
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

