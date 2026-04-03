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
          <div className="flex gap-3 sm:col-span-2">
            <span className="mt-0.5 shrink-0 text-white/75" aria-hidden="true">
              <MapPinIcon className="h-5 w-5" />
            </span>
            <div className="min-w-0">
              <p className="text-xs font-semibold uppercase tracking-wider text-white/60">{t.footer.locationLabel}</p>
              <p className="mt-1 max-w-lg leading-relaxed">{CLINIC.address}</p>
            </div>
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
        <div className="mt-8 flex flex-col gap-3 border-t border-white/15 pt-8 sm:flex-row sm:items-center sm:justify-between">
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
      </div>
    </footer>
  );
}
