/**
 * Üretim CSP: XSS yüzeyini daraltır; Next.js chunk’ları ve Google Haritalar iframe için gerekli
 * istisnalar dahildir. Sıkı nonce tabanlı CSP için middleware + nonce enjeksiyonu gerekir.
 */
export function buildContentSecurityPolicy(): string {
  const directives = [
    "default-src 'self'",
    "base-uri 'self'",
    "object-src 'none'",
    "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://googleads.g.doubleclick.net https://*.google.com",
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: blob: https://www.googletagmanager.com https://www.google.com https://googleads.g.doubleclick.net https://www.google.com.tr https://*.google.com.tr",
    "font-src 'self' data:",
    "connect-src 'self' https://www.google-analytics.com https://googleads.g.doubleclick.net https://www.googletagmanager.com https://region1.google-analytics.com https://www.google.com https://*.google.com https://www.google.com.tr https://*.google.com.tr https://*.googleapis.com https://*.gstatic.com",
    "frame-src 'self' https://www.googletagmanager.com https://td.doubleclick.net https://www.google.com https://*.google.com https://maps.google.com https://www.google.com/maps",
    "worker-src 'self' blob:",
    "manifest-src 'self'",
    "frame-ancestors 'none'",
    "form-action 'self'",
    "upgrade-insecure-requests",
  ];
  return directives.join("; ");
}
