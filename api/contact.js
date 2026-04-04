/**
 * Vercel serverless: POST JSON { name, phone, visitDate, visitSlot, message }
 * @see https://resend.com/docs/api-reference/emails/send-email
 *
 * Env (Vercel dashboard):
 * - RESEND_API_KEY (required)
 * - CONTACT_TO_EMAIL — defaults to drsree.alivio@gmail.com
 * - RESEND_FROM_EMAIL — verified sender, e.g. "Alivio <mail@yourdomain.com>"
 *   Until you verify a domain, use Resend’s test sender (limits apply).
 */

const DEFAULT_TO = 'drsree.alivio@gmail.com';
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
  const from =
    process.env.RESEND_FROM_EMAIL?.trim() || 'Alivio Homoeo Clinic <onboarding@resend.dev>';

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
      console.error('Resend error', r.status, errText);
      return res.status(502).json({ error: 'send_failed' });
    }

    return res.status(200).json({ ok: true });
  } catch (e) {
    console.error(e);
    return res.status(502).json({ error: 'send_failed' });
  }
}
