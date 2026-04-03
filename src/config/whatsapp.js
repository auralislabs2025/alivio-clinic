/**
 * WhatsApp Click-to-Chat: https://faq.whatsapp.com/5913398998672934
 * Uses `CLINIC.phoneTel` by default. Override with VITE_WHATSAPP_NUMBER in .env (digits only, no +).
 */
import { CLINIC } from './clinicInfo.js';

export function getWhatsAppDigits() {
  const fromEnv = import.meta.env?.VITE_WHATSAPP_NUMBER;
  if (fromEnv != null && String(fromEnv).trim() !== '') {
    const digits = String(fromEnv).replace(/\D/g, '');
    if (digits.length >= 10) return digits;
  }
  return CLINIC.phoneTel.replace(/\D/g, '');
}

/**
 * @param {string} message - Pre-filled chat message (URL-encoded)
 */
export function getWhatsAppUrl(message) {
  const phone = getWhatsAppDigits();
  const text = typeof message === 'string' ? message : '';
  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}
