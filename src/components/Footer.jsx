import { useId, useState } from 'react';
import { useI18n } from '../i18n/I18nProvider.jsx';
import WhatsAppBookingButton from './WhatsAppBookingButton.jsx';

export default function Footer() {
  const formId = useId();
  const [status, setStatus] = useState({ type: 'idle', message: '' });
  const { t } = useI18n();

  const onSubmit = (e) => {
    e.preventDefault();
    setStatus({ type: 'success', message: t.footer.thanks });
    e.currentTarget.reset();
  };

  return (
    <footer id="contact" className="bg-primary-blue text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-14 md:grid-cols-2 md:py-16">
        <div>
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{t.footer.title}</h2>
          <p className="mt-3 max-w-md text-white/85">
            {t.footer.subtitle}
          </p>
          <div className="mt-6 flex flex-col items-start gap-3">
            <WhatsAppBookingButton />
            <p className="text-xs text-white/70">{t.whatsapp.orUseForm}</p>
          </div>
          <div className="mt-8 space-y-3 text-sm text-white/85">
            <div>
              <span className="font-semibold text-white">{t.footer.hoursLabel}</span> {t.footer.hoursValue}
            </div>
            <div>
              <span className="font-semibold text-white">{t.footer.phoneLabel}</span> +91 XXXXX XXXXX
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-white/10 p-6 shadow-sm ring-1 ring-white/15">
          <form onSubmit={onSubmit} className="space-y-4" aria-describedby={`${formId}-status`}>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor={`${formId}-name`} className="block text-sm font-semibold text-white">
                  {t.footer.name}
                </label>
                <input
                  id={`${formId}-name`}
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className="mt-2 w-full rounded-xl border border-white/15 bg-white/10 px-3.5 py-2.5 text-white placeholder:text-white/60 outline-none focus:border-white/35 focus:ring-2 focus:ring-white/25"
                  placeholder={t.footer.namePlaceholder}
                />
              </div>
              <div>
                <label htmlFor={`${formId}-phone`} className="block text-sm font-semibold text-white">
                  {t.footer.phone}
                </label>
                <input
                  id={`${formId}-phone`}
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  inputMode="tel"
                  required
                  className="mt-2 w-full rounded-xl border border-white/15 bg-white/10 px-3.5 py-2.5 text-white placeholder:text-white/60 outline-none focus:border-white/35 focus:ring-2 focus:ring-white/25"
                  placeholder={t.footer.phonePlaceholder}
                />
              </div>
            </div>

            <div>
              <label htmlFor={`${formId}-ailment`} className="block text-sm font-semibold text-white">
                {t.footer.ailment}
              </label>
              <textarea
                id={`${formId}-ailment`}
                name="ailment"
                required
                rows={4}
                className="mt-2 w-full resize-none rounded-xl border border-white/15 bg-white/10 px-3.5 py-2.5 text-white placeholder:text-white/60 outline-none focus:border-white/35 focus:ring-2 focus:ring-white/25"
                placeholder={t.footer.ailmentPlaceholder}
              />
            </div>

            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold shadow-sm transition-transform duration-200 hover:scale-[1.01] active:scale-[0.99] text-primary-blue"
            >
              {t.footer.send}
            </button>

            <p id={`${formId}-status`} role="status" className="text-sm text-white/85">
              {status.type === 'success' ? status.message : ' '}
            </p>
          </form>
        </div>
      </div>
    </footer>
  );
}

