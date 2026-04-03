import { useEffect, useMemo, useState } from 'react';
import { useI18n } from '../i18n/I18nProvider.jsx';
import { NavLink } from 'react-router-dom';
import WhatsAppBookingButton from './WhatsAppBookingButton.jsx';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { lang, setLang, t } = useI18n();

  const links = useMemo(
    () => [
      { label: t.nav.home, to: '/' },
      { label: t.nav.about, to: '/about' },
      { label: t.nav.methodology, to: '/methodology' },
      { label: t.nav.conditions, to: '/conditions' },
      { label: t.nav.blog, to: '/blog' },
      { label: t.nav.contact, to: '/contact' },
    ],
    [t],
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const headerClass = scrolled ? 'h-14 md:h-16 bg-background-warm/80' : 'h-16 md:h-20 bg-background-warm/60';

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className={`backdrop-blur border-b border-slate-900/10 transition-all duration-200 ${headerClass}`}>
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6">
          <a
            href="/"
            className="flex items-center gap-3"
            aria-label="Alivio Homoeo Clinic"
            onClick={(e) => {
              if (window.location.pathname !== '/') return;
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <img
              src="/alivio-logo.png"
              alt="Alivio Homoeo Clinic logo"
              width={52}
              height={52}
              className={`shrink-0 transition-all duration-200 ${scrolled ? 'h-10 w-10' : 'h-12 w-12'}`}
            />
          </a>

          <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors ${
                    isActive ? 'text-slate-950' : 'text-slate-700 hover:text-slate-950'
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
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
              href="/booking"
              className="inline-flex items-center justify-center rounded-full bg-primary-blue px-6 py-3 text-sm font-semibold text-white shadow-sm transition-transform duration-200 hover:scale-[1.02] active:scale-[0.99] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-blue"
            >
              {t.nav.book}
            </a>
          </nav>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-xl border border-slate-900/10 bg-white/70 px-3 py-2 text-sm font-semibold text-slate-900 md:hidden"
            aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {t.nav.menu}
          </button>
        </div>

        {open && (
          <div className="md:hidden">
            <div className="mx-auto max-w-7xl px-6 pb-5">
              <div className="flex flex-col gap-3 pt-3">
                {links.map((l) => (
                  <NavLink
                    key={l.to}
                    to={l.to}
                    onClick={(e) => {
                      setOpen(false);
                    }}
                    className={({ isActive }) =>
                      `rounded-xl px-3 py-2 text-base font-medium ${
                        isActive ? 'bg-slate-900/5 text-slate-950' : 'text-slate-800 hover:bg-slate-900/5'
                      }`
                    }
                  >
                    {l.label}
                  </NavLink>
                ))}
                <div className="flex items-center gap-2 rounded-xl border border-slate-900/10 bg-white/70 p-2">
                  <span className="text-sm font-semibold text-slate-900">{t.nav.language}</span>
                  <div className="ml-auto flex items-center gap-2">
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
                </div>
                <div className="flex items-center gap-3">
                  <WhatsAppBookingButton variant="nav" />
                </div>
                <a
                  href="/booking"
                  onClick={(e) => {
                    setOpen(false);
                  }}
                  className="mt-1 inline-flex items-center justify-center rounded-full bg-primary-blue px-6 py-3 text-sm font-semibold text-white shadow-sm"
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

