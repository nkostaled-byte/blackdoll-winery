// src/data/site.ts
export const SITE = {
  name: 'Blackdoll Winery',
  tagline: 'Luxury poured in a glass for discovery.',
  phoneDisplay: '+27 72 123 4567',
  phoneHref: 'tel:+27721234567',
  email: 'info@blackdollwinery.co.za',
  whatsappNumber: '27721234567',
  hours: 'Mon – Sat · 09:00 – 17:00',
  location: 'South Africa',
} as const;

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Our Story', href: '#story' },
  { label: 'Our Wines', href: '#wines' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Visit', href: '#visit' },
] as const;

export const waLink = (message: string) =>
  `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
