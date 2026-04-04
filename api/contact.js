/**
 * Vercel serverless: POST JSON { name, phone, visitDate, visitSlot, message }
 * @see https://resend.com/docs/api-reference/emails/send-email
 *
 * Env (Vercel dashboard):
 * - RESEND_API_KEY (required)
 * - CONTACT_TO_EMAIL — defaults to drsree.alivio@gmail.com
 * - RESEND_FROM_EMAIL — verified sender, e.g. "Alivio <mail@yourdomain.com>"
 *
 * If you see { error: "send_failed" }: open Vercel → deployment → Functions / Runtime logs
 * and find the line starting with "[contact] Resend error". Resend’s JSON explains the fix
 * (unverified domain, invalid from/to, API key, etc.).
 *
 * With default `onboarding@resend.dev`, Resend only allows sending *to* the email address
 * tied to your Resend account unless you verify your own domain and use that domain in `from`.
 */

const DEFAULT_TO = 'drsree.alivio@gmail.com';
const DEFAULT_FROM = 'onboarding@resend.dev';
const MAX_LEN = { name: 200, phone: 40, message: 8000 };

function parseBody(req) {
  const raw = req.body;
  if (raw == null) return {};
  if (typeof raw === 'object' && !Buffer.isBuffer(raw)) return raw;
  if (typeof raw === 'string') {
    try {
      return JSON.parse(raw);
    } catch {
      return {};
    }
  }
  return {};
}

function sanitize(str, max) {
  if (typeof str !== 'string') return '';
  return str.trim().slice(0, max);
}

/** Parse Resend error body (JSON or plain text) for logs and safe non-prod hints. */
function parseResendErrorBody(text) {
  if (!text || typeof text !== 'string') return { raw: '' };
  const trimmed = text.trim();
  try {
    const o = JSON.parse(trimmed);
    if (o && typeof o === 'object') {
      return {
        message: typeof o.message === 'string' ? o.message : undefined,
        name: typeof o.name === 'string' ? o.name : undefined,
        raw: trimmed.slice(0, 2000),
      };
    }
  } catch {
    /* not JSON */
  }
  return { raw: trimmed.slice(0, 2000) };
}

function isNonProductionVercelEnv() {
  const v = process.env.VERCEL_ENV;
  return v !== 'production';
}

function sendFailedPayload(resendStatus, errText, fetchThrew) {
  const payload = { error: 'send_failed' };
  if (!isNonProductionVercelEnv()) return payload;

  if (fetchThrew) {
    payload.hint = 'fetch_exception';
    return payload;
  }

  if (typeof resendStatus === 'number') payload.resend_status = resendStatus;
  const parsed = parseResendErrorBody(errText);
  if (parsed.name) payload.resend_error_name = parsed.name;
  return payload;
}

export default async function handler(req, res) {
  res.setHeader('Content-Type', 'application/json');

  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    return res.status(204).end();
  }

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST, OPTIONS');
    return res.status(405).json({ error: 'method_not_allowed' });
  }

  const key = process.env.RESEND_API_KEY;
  if (!key) {
    return res.status(503).json({ error: 'email_not_configured' });
  }

  const body = parseBody(req);
  const name = sanitize(body.name, MAX_LEN.name);
  const phone = sanitize(body.phone, MAX_LEN.phone);
  const visitDate = sanitize(body.visitDate, 32);
  const visitSlot = sanitize(body.visitSlot, 32);
  const message = sanitize(body.message, MAX_LEN.message);

  if (!name || !phone || !visitDate || !visitSlot || !message) {
    return res.status(400).json({ error: 'missing_fields' });
  }

  if (visitSlot !== 'morning' && visitSlot !== 'afternoon') {
    return res.status(400).json({ error: 'invalid_slot' });
  }

  const to = (process.env.CONTACT_TO_EMAIL || DEFAULT_TO).trim();
  const from = process.env.RESEND_FROM_EMAIL?.trim() || DEFAULT_FROM;

  const slotLabel =
    visitSlot === 'morning' ? 'Morning (9:00 AM – 1:00 PM)' : 'Afternoon (3:00 PM – 6:00 PM)';

  const text = [
    'New message from the Alivio website contact form.',
    '',
    `Name: ${name}`,
    `Phone: ${phone}`,
    `Preferred visit date: ${visitDate}`,
    `Preferred time: ${slotLabel}`,
    '',
    'Message:',
    message,
  ].join('\n');

  try {
    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${key}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to: [to],
        subject: `Alivio website — ${name}`,
        text,
      }),
    });

    if (!r.ok) {
      const errText = await r.text();
      const parsed = parseResendErrorBody(errText);
      console.error(
        '[contact] Resend error',
        JSON.stringify({
          status: r.status,
          message: parsed.message,
          name: parsed.name,
          to_domain: to.includes('@') ? to.split('@')[1] : undefined,
          from_uses_onboarding: from.includes('onboarding@resend.dev'),
        }),
      );
      if (parsed.raw && !parsed.message) console.error('[contact] Resend error raw', parsed.raw);
      return res.status(502).json(sendFailedPayload(r.status, errText, false));
    }

    return res.status(200).json({ ok: true });
  } catch (e) {
    console.error('[contact] Resend fetch exception', e);
    return res.status(502).json(sendFailedPayload(undefined, '', true));
  }
}
