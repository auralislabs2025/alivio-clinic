import { useI18n } from '../i18n/I18nProvider.jsx';
import ContactSection from '../components/ContactSection.jsx';

export default function ContactPage() {
  const { t } = useI18n();

  return (
    <main className="bg-background-warm">
      <div className="mx-auto max-w-7xl px-6 pt-28 md:pt-32">
        <h1 className="font-serif text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">{t.contact.title}</h1>
        <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-700 md:text-lg">{t.contact.body}</p>
      </div>
      <ContactSection />
    </main>
  );
}

