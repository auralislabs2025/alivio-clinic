import { useEffect, useState } from 'react';
import { useI18n } from '../i18n/I18nProvider.jsx';
import WhatsAppBookingButton from './WhatsAppBookingButton.jsx';
import { CLINIC } from '../config/clinicInfo.js';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { lang, setLang, t } = useI18n();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const headerClass = scrolled ? 'h-14 md:h-16 bg-background-warm/80' : 'h-16 md:h-20 bg-background-warm/60';

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className={`backdrop-blur border-b border-slate-900/10 transition-all duration-200 ${headerClass}`}>
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between gap-3 px-6">
          <a
            href="/"
            className="flex min-w-0 items-center gap-3"
            aria-label="Alivio Homoeo Clinic"
            onClick={(e) => {
              if (window.location.pathname !== '/') return;
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <img
              src={CLINIC.logoSvg}
              alt="Alivio Homoeo Clinic logo"
              width={52}
              height={52}
              className={`shrink-0 transition-all duration-200 ${scrolled ? 'h-10 w-10' : 'h-12 w-12'}`}
            />
          </a>

          <div className="flex shrink-0 items-center gap-2 md:hidden">
            <div
              className="flex items-center gap-1 rounded-full border border-slate-900/15 bg-white/90 p-0.5 shadow-sm backdrop-blur-sm"
              role="group"
              aria-label={t.nav.language}
            >
              <button
                type="button"
                className={`rounded-full px-2.5 py-1.5 text-xs font-semibold transition-colors ${
                  lang === 'en' ? 'bg-slate-900 text-white' : 'text-slate-700 hover:bg-slate-900/5'
                }`}
                onClick={() => setLang('en')}
                aria-pressed={lang === 'en'}
              >
                {t.nav.enShort}
              </button>
              <button
                type="button"
                className={`rounded-full px-2.5 py-1.5 text-xs font-semibold transition-colors ${
                  lang === 'ml' ? 'bg-slate-900 text-white' : 'text-slate-700 hover:bg-slate-900/5'
                }`}
                onClick={() => setLang('ml')}
                aria-pressed={lang === 'ml'}
              >
                {t.nav.mlShort}
              </button>
            </div>

            <button
              type="button"
              className="inline-flex items-center justify-center rounded-xl border border-slate-900/10 bg-white/85 px-3 py-2 text-sm font-semibold text-slate-900 shadow-sm backdrop-blur-sm"
              aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              {t.nav.menu}
            </button>
          </div>

          <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
            <div className="flex items-center gap-2 rounded-full border border-slate-900/10 bg-white/70 p-1">
              <button
                type="button"
                className={`rounded-full px-3 py-1.5 text-xs font-semibold transition-colors ${
                  lang === 'en' ? 'bg-slate-900 text-white' : 'text-slate-800 hover:bg-slate-900/5'
                }`}
                onClick={() => setLang('en')}
                aria-pressed={lang === 'en'}
              >
                {t.nav.enShort}
              </button>
              <button
                type="button"
                className={`rounded-full px-3 py-1.5 text-xs font-semibold transition-colors ${
                  lang === 'ml' ? 'bg-slate-900 text-white' : 'text-slate-800 hover:bg-slate-900/5'
                }`}
                onClick={() => setLang('ml')}
                aria-pressed={lang === 'ml'}
              >
                {t.nav.mlShort}
              </button>
            </div>
            <WhatsAppBookingButton variant="nav" />
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-primary-blue px-6 py-3 text-sm font-semibold text-white shadow-sm transition-transform duration-200 hover:scale-[1.02] active:scale-[0.99] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-blue"
            >
              {t.nav.book}
            </a>
          </nav>
        </div>

        {open && (
          <div className="border-t border-slate-900/15 bg-[#f7f5f0]/97 shadow-[0_12px_32px_rgba(15,23,42,0.12)] backdrop-blur-md md:hidden">
            <div className="mx-auto max-w-7xl px-6 pb-5">
              <div className="flex flex-col gap-3 pt-4">
                <div className="flex items-center gap-3">
                  <WhatsAppBookingButton variant="nav" />
                </div>
                <a
                  href="#contact"
                  onClick={() => {
                    setOpen(false);
                  }}
                  className="inline-flex items-center justify-center rounded-full bg-primary-blue px-6 py-3 text-sm font-semibold text-white shadow-sm"
                >
                  {t.nav.book}
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
