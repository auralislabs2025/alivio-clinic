import { useMemo } from 'react';
import { useI18n } from '../i18n/I18nProvider.jsx';

export default function BlogPage() {
  const { t } = useI18n();
  const posts = useMemo(() => t.blog.posts, [t]);

  return (
    <main className="bg-background-warm">
      <div className="mx-auto max-w-7xl px-6 pt-28 pb-16 md:pt-32">
        <h1 className="font-serif text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">{t.blog.title}</h1>
        <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-700 md:text-lg">{t.blog.subtitle}</p>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
          {posts.map((p) => (
            <article key={p.title} className="rounded-2xl border border-slate-900/10 bg-white/70 p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wider text-primary-green">{p.tag}</p>
              <h2 className="mt-2 text-xl font-semibold text-slate-950">{p.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-700">{p.excerpt}</p>
              <div className="mt-5 text-sm font-semibold text-primary-blue">{t.blog.readMore}</div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}

