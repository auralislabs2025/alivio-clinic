import { useEffect, useRef, useState } from 'react';

/**
 * Fade + slight rise when the block enters the viewport (runs once).
 * Respects prefers-reduced-motion via CSS.
 */
export default function FadeInSection({
  as = 'section',
  className = '',
  children,
  rootMargin = '0px 0px -8% 0px',
  threshold = 0,
  ...rest
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === 'undefined') {
      queueMicrotask(() => setVisible(true));
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            obs.disconnect();
            break;
          }
        }
      },
      { rootMargin, threshold },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [rootMargin, threshold]);

  const merged = ['fade-in-on-scroll', visible && 'fade-in-on-scroll--visible', className].filter(Boolean).join(' ');

  const Element = as;
  return (
    <Element ref={ref} className={merged} {...rest}>
      {children}
    </Element>
  );
}
