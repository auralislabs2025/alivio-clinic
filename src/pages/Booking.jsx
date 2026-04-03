import Footer from '../components/Footer.jsx';
import WhatsAppBookingButton from '../components/WhatsAppBookingButton.jsx';
import { useI18n } from '../i18n/I18nProvider.jsx';

export default function BookingPage() {
  const { t } = useI18n();

  return (
    <main className="bg-background-warm">
      <div className="mx-auto max-w-7xl px-6 pt-28 md:pt-32">
        <h1 className="font-serif text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">{t.booking.title}</h1>
        <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-700 md:text-lg">{t.booking.body}</p>

        <div
          className="mt-10 rounded-3xl border border-slate-900/10 bg-white/80 p-8 shadow-sm ring-1 ring-slate-900/5 md:p-10"
          role="region"
          aria-labelledby="booking-whatsapp-heading"
        >
          <h2 id="booking-whatsapp-heading" className="text-lg font-semibold text-slate-950">
            {t.whatsapp.bookOnWhatsApp}
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-700">{t.whatsapp.bookingCardSubtitle}</p>
          <div className="mt-6">
            <WhatsAppBookingButton className="px-8 py-4 text-base" />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

