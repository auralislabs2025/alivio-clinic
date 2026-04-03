import { useId, useState } from 'react';
import { useI18n } from '../i18n/I18nProvider.jsx';
import WhatsAppBookingButton from './WhatsAppBookingButton.jsx';
import { CLINIC } from '../config/clinicInfo.js';
import { MapPinIcon } from './icons.jsx';

export default function ContactSection({ variant = 'light', prominentWhatsApp = false }) {
  const { t } = useI18n();
  const formId = useId();
  const [status, setStatus] = useState({ type: 'idle', message: '' });

  const isDark = variant === 'dark';

  const onSubmit = (e) => {
    e.preventDefault();
    setStatus({ type: 'success', message: t.contactForm.thanks });
    e.currentTarget.reset();
  };

  return (
    <section
      id="contact"
      className={`scroll-mt-24 ${isDark ? 'bg-primary-blue text-white' : 'bg-background-warm text-slate-950'}`}
      aria-labelledby={`${formId}-title`}
    >
      {prominentWhatsApp && !isDark && (
        <div
          className="relative overflow-hidden border-b border-emerald-800/10 bg-gradient-to-br from-[#0d9488] via-[#25D366] to-[#128C7E] px-6 py-10 md:py-12"
          role="region"
          aria-label={t.whatsapp.contactBannerTitle}
        >
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" aria-hidden />
          <div className="pointer-events-none absolute -bottom-16 left-10 h-48 w-48 rounded-full bg-white/10 blur-2xl" aria-hidden />
          <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-8 md:flex-row md:items-center md:justify-between md:gap-10">
            <div className="flex max-w-xl flex-col items-center gap-5 text-center md:flex-row md:items-center md:text-left">
              <div className="relative shrink-0">
                <div className="absolute inset-0 animate-pulse rounded-3xl bg-white/25 blur-md" aria-hidden />
                <div className="relative grid h-20 w-20 place-items-center rounded-3xl bg-white/20 shadow-lg ring-2 ring-white/40 backdrop-blur-sm md:h-24 md:w-24">
                  <svg className="h-11 w-11 text-white md:h-12 md:w-12" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
              </div>
              <div>
                <p className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
                  </span>
                  {t.whatsapp.contactBannerBadge}
                </p>
                <p className="mt-3 font-serif text-2xl font-extrabold leading-tight text-white md:text-3xl">
                  {t.whatsapp.contactBannerTitle}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-white/95 md:text-base">{t.whatsapp.contactBannerSubtitle}</p>
              </div>
            </div>
            <div className="flex w-full shrink-0 flex-col items-center gap-3 sm:w-auto">
              <WhatsAppBookingButton
                variant="outline"
                className="w-full min-w-[min(100%,280px)] px-8 py-4 text-base shadow-xl shadow-emerald-950/20 ring-2 ring-white/30 sm:w-auto"
              />
              <p className="max-w-[280px] text-center text-xs text-white/85">{t.whatsapp.opensNewTab}</p>
            </div>
          </div>
        </div>
      )}

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-14 md:grid-cols-2 md:py-16">
        <div>
          <h2
            id={`${formId}-title`}
            className={isDark ? 'text-2xl font-bold tracking-tight sm:text-3xl' : 'font-serif text-3xl font-extrabold tracking-tight sm:text-4xl'}
          >
            {t.contactForm.title}
          </h2>
          <p className={isDark ? 'mt-3 max-w-md text-white/85' : 'mt-4 max-w-md text-base leading-relaxed text-slate-700'}>
            {t.contactForm.subtitle}
          </p>

          <div className={isDark ? 'mt-8 space-y-3 text-sm text-white/85' : 'mt-8 space-y-3 text-sm text-slate-700'}>
            <div>
              <span className={isDark ? 'font-semibold text-white' : 'font-semibold text-slate-950'}>
                {t.contactForm.hoursLabel}
              </span>{' '}
              {t.contactForm.hoursValue}
            </div>
            <div>
              <span className={isDark ? 'font-semibold text-white' : 'font-semibold text-slate-950'}>
                {t.contactForm.phoneLabel}
              </span>{' '}
              <a href={`tel:${CLINIC.phoneTel}`} className={isDark ? 'text-white underline-offset-2 hover:underline' : 'text-primary-blue hover:underline'}>
                {CLINIC.phoneDisplay}
              </a>
            </div>
            <div className="flex gap-3">
              <a
                href={CLINIC.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full ring-2 ${
                  isDark ? 'bg-white/10 text-emerald-200 ring-white/20' : 'bg-primary-green/10 text-primary-green ring-primary-green/25'
                }`}
                aria-label={`${t.footer.openInMaps}: ${CLINIC.address}`}
              >
                <MapPinIcon className="h-5 w-5" aria-hidden="true" />
              </a>
              <div className="min-w-0">
                <p className={isDark ? 'font-semibold text-white' : 'font-semibold text-slate-950'}>{t.contactForm.addressLabel}</p>
                <p className={isDark ? 'mt-1 text-white/90' : 'mt-1 text-slate-700'}>{CLINIC.address}</p>
                <p className="mt-1.5">
                  <a
                    href={CLINIC.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-sm font-semibold underline-offset-2 hover:underline ${
                      isDark ? 'text-emerald-200' : 'text-primary-blue'
                    }`}
                  >
                    {t.footer.openInMaps}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={isDark ? 'rounded-2xl bg-white/10 p-6 shadow-sm ring-1 ring-white/15' : 'rounded-2xl border border-slate-900/10 bg-white/70 p-6 shadow-sm'}>
          <form onSubmit={onSubmit} className="space-y-4" aria-describedby={`${formId}-status`}>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor={`${formId}-name`} className={isDark ? 'block text-sm font-semibold text-white' : 'block text-sm font-semibold text-slate-950'}>
                  {t.contactForm.name}
                </label>
                <input
                  id={`${formId}-name`}
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className={
                    isDark
                      ? 'mt-2 w-full rounded-xl border border-white/15 bg-white/10 px-3.5 py-2.5 text-white placeholder:text-white/60 outline-none focus:border-white/35 focus:ring-2 focus:ring-white/25'
                      : 'mt-2 w-full rounded-xl border border-slate-900/10 bg-white px-3.5 py-2.5 text-slate-950 placeholder:text-slate-400 outline-none focus:border-primary-blue/30 focus:ring-2 focus:ring-primary-blue/20'
                  }
                  placeholder={t.contactForm.namePlaceholder}
                />
              </div>
              <div>
                <label htmlFor={`${formId}-phone`} className={isDark ? 'block text-sm font-semibold text-white' : 'block text-sm font-semibold text-slate-950'}>
                  {t.contactForm.phone}
                </label>
                <input
                  id={`${formId}-phone`}
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  inputMode="tel"
                  required
                  className={
                    isDark
                      ? 'mt-2 w-full rounded-xl border border-white/15 bg-white/10 px-3.5 py-2.5 text-white placeholder:text-white/60 outline-none focus:border-white/35 focus:ring-2 focus:ring-white/25'
                      : 'mt-2 w-full rounded-xl border border-slate-900/10 bg-white px-3.5 py-2.5 text-slate-950 placeholder:text-slate-400 outline-none focus:border-primary-blue/30 focus:ring-2 focus:ring-primary-blue/20'
                  }
                  placeholder={t.contactForm.phonePlaceholder}
                />
              </div>
            </div>

            <div>
              <label htmlFor={`${formId}-message`} className={isDark ? 'block text-sm font-semibold text-white' : 'block text-sm font-semibold text-slate-950'}>
                {t.contactForm.message}
              </label>
              <textarea
                id={`${formId}-message`}
                name="message"
                required
                rows={4}
                className={
                  isDark
                    ? 'mt-2 w-full resize-none rounded-xl border border-white/15 bg-white/10 px-3.5 py-2.5 text-white placeholder:text-white/60 outline-none focus:border-white/35 focus:ring-2 focus:ring-white/25'
                    : 'mt-2 w-full resize-none rounded-xl border border-slate-900/10 bg-white px-3.5 py-2.5 text-slate-950 placeholder:text-slate-400 outline-none focus:border-primary-blue/30 focus:ring-2 focus:ring-primary-blue/20'
                }
                placeholder={t.contactForm.messagePlaceholder}
              />
            </div>

            <button
              type="submit"
              className={
                isDark
                  ? 'inline-flex w-full items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold shadow-sm transition-transform duration-200 hover:scale-[1.01] active:scale-[0.99] text-primary-blue'
                  : 'inline-flex w-full items-center justify-center rounded-full bg-primary-blue px-6 py-3 text-sm font-semibold text-white shadow-sm transition-transform duration-200 hover:scale-[1.01] active:scale-[0.99] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-blue'
              }
            >
              {t.contactForm.send}
            </button>

            <p id={`${formId}-status`} role="status" className={isDark ? 'text-sm text-white/85' : 'text-sm text-slate-700'}>
              {status.type === 'success' ? status.message : ' '}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

