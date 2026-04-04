/** Editable clinic details — update phone, address, and Instagram for production. */
export const CLINIC = {
  name: 'Alivio Homoeo Clinic',
  /** Shown in UI and tel: link (E.164-style, no spaces). */
  phoneTel: '+917012377466',
  phoneDisplay: '+91 70123 77466',
  /** Multi-line display (footer & contact). */
  address:
    'Alivio Homoeo Clinic\nOpp. Govt Higher Secondary School, Njekkad, Varkala\nPin: 695143',
  /** Opens Google Maps at the clinic location. */
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=' +
    encodeURIComponent(
      'Alivio Homoeo Clinic, Opp. Govt Higher Secondary School, Njekkad, Varkala, Kerala 695143, India',
    ),
  instagramUrl: 'https://www.instagram.com/alivio_homoeo_clinic?igsh=ZnR1MGJ2YnFhZWJx',
  instagramHandle: '@alivio_homoeo_clinic',
  developerSiteUrl: 'https://aulab.in',
  /** Main logo — `public/alivio-logo.png` (circular clinic emblem). */
  logoSvg: '/alivio-logo.png',
  /** Hero banner mark (same asset; sized in `Home.jsx`). */
  logoMark: '/alivio-logo.png',
};
