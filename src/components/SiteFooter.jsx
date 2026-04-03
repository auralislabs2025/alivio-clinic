import { useI18n } from '../i18n/I18nProvider.jsx';
import { CLINIC } from '../config/clinicInfo.js';
import { InstagramIcon, MapPinIcon, PhoneIcon } from './icons.jsx';

export default function SiteFooter() {
  const { t } = useI18n();
  return (
    <footer className="bg-primary-blue text-white">
      <div className="mx-auto max-w-7xl px-6 py-10 text-sm text-white/90">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          <div className="flex gap-3">
            <span className="mt-0.5 shrink-0 text-white/75" aria-hidden="true">
              <PhoneIcon className="h-5 w-5" />
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-white/60">{t.footer.phoneLabel}</p>
              <a href={`tel:${CLINIC.phoneTel}`} className="mt-1 block font-semibold text-white hover:text-white/90">
                {CLINIC.phoneDisplay}
              </a>
            </div>
          </div>
          <div className="sm:col-span-2">
            <a
              href={CLINIC.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex gap-3 rounded-xl p-1 -m-1 outline-offset-4 transition-colors hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white/40"
              aria-label={`${t.footer.openInMaps}: ${CLINIC.name}, Opp. Govt Higher Secondary School, Njekkad, Varkala, Pin 695143`}
            >
              <span
                className="mt-0.5 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-emerald-500/25 text-white ring-2 ring-emerald-300/50 shadow-[0_4px_14px_rgba(0,0,0,0.2)]"
                aria-hidden="true"
              >
                <MapPinIcon className="h-6 w-6" />
              </span>
              <div className="min-w-0 pt-0.5">
                <p className="text-xs font-semibold uppercase tracking-wider text-white/60">{t.footer.locationLabel}</p>
                <p className="mt-1 max-w-lg whitespace-pre-line leading-relaxed text-white group-hover:underline group-hover:underline-offset-2">
                  {CLINIC.address}
                </p>
                <p className="mt-1.5 text-xs font-medium text-emerald-200/95">{t.footer.openInMaps}</p>
              </div>
            </a>
          </div>
          <div className="flex gap-3">
            <span className="mt-0.5 shrink-0 text-white/75" aria-hidden="true">
              <InstagramIcon className="h-5 w-5" />
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-white/60">{t.footer.instagramLabel}</p>
              <a
                href={CLINIC.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-flex items-center gap-1.5 font-semibold text-white hover:text-white/90"
              >
                <span>{CLINIC.instagramHandle}</span>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-white/15 pt-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-white/85">
              &copy; {new Date().getFullYear()} {CLINIC.name}. {t.footer.rights}
            </p>
            <a
              href="#top"
              className="font-semibold text-white hover:text-white/90"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              {t.footer.backToTop}
            </a>
          </div>
          <p className="mt-4 text-center text-xs text-white/65 sm:text-left">
            {t.footer.developedBy}{' '}
            <a
              href={CLINIC.developerSiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-white/90 underline-offset-2 hover:underline"
            >
              {t.footer.developerBrand}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
