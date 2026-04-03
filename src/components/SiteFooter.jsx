import { useI18n } from '../i18n/I18nProvider.jsx';

export default function SiteFooter() {
  const { t } = useI18n();
  return (
    <footer className="bg-primary-blue text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-8 text-sm text-white/85 sm:flex-row sm:items-center sm:justify-between">
        <p>
          &copy; {new Date().getFullYear()} Alivio Homoeo Clinic. {t.footer.rights}
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
    </footer>
  );
}

