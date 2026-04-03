/**
 * WhatsApp Click-to-Chat: https://faq.whatsapp.com/5913398998672934
 * Set VITE_WHATSAPP_NUMBER in .env (digits only, country code without +), e.g. 919876543210
 */
const FALLBACK_DIGITS = '919999999999';

export function getWhatsAppDigits() {
  const raw = import.meta.env?.VITE_WHATSAPP_NUMBER ?? FALLBACK_DIGITS;
  return String(raw).replace(/\D/g, '') || FALLBACK_DIGITS;
}

/**
 * @param {string} message - Pre-filled chat message (URL-encoded)
 */
export function getWhatsAppUrl(message) {
  const phone = getWhatsAppDigits();
  const text = typeof message === 'string' ? message : '';
  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}
