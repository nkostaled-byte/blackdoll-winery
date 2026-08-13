// src/lib/integrations.ts
/**
 * INTEGRATION POINTS
 * Everything that needs a backend lives here. The UI degrades gracefully
 * and truthfully until these are connected.
 */

/** Replace with your ESP / CRM endpoint (Mailchimp, Klaviyo, your API…). */
export async function subscribeNewsletter(email: string): Promise<{ ok: true }> {
  // e.g. const res = await fetch('/api/newsletter', { method: 'POST', body: JSON.stringify({ email }) });
  console.info('[blackdoll] newsletter integration not connected yet.', email);
  throw new Error('NEWSLETTER_BACKEND_NOT_CONNECTED');
}

/** INTEGRATION POINT: swap the map placeholder in ContactSection for a
 *  Google Maps embed of the real farm address, e.g.
 *  <iframe src="https://www.google.com/maps/embed?pb=…" title="Blackdoll Winery map" />
 */
