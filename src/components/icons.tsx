// src/components/icons.tsx
import { SVGProps } from 'react';

const base = (props: SVGProps<SVGSVGElement>) => ({
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.3,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
  ...props,
});

export const IconGrapes = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}>
    <path d="M12 6c0-2 1-3.5 3-4" />
    <path d="M12 6c1.5-1 3.5-1 5 0" />
    <circle cx="12" cy="9" r="2.1" />
    <circle cx="8.6" cy="11.5" r="2.1" />
    <circle cx="15.4" cy="11.5" r="2.1" />
    <circle cx="10.3" cy="15" r="2.1" />
    <circle cx="13.7" cy="15" r="2.1" />
    <circle cx="12" cy="18.5" r="2.1" />
  </svg>
);

export const IconBarrel = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}>
    <path d="M7 3.5h10c1 2.6 1.5 5.5 1.5 8.5S18 17.9 17 20.5H7C6 17.9 5.5 15 5.5 12S6 6.1 7 3.5Z" />
    <path d="M5.8 8.5h12.4M5.8 15.5h12.4M12 3.5v17" />
  </svg>
);

export const IconGlass = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}>
    <path d="M7.5 3h9c0 5-1.6 8.5-4.5 8.5S7.5 8 7.5 3Z" />
    <path d="M7.8 6.5h8.4" />
    <path d="M12 11.5V20M8.5 21h7" />
  </svg>
);

export const IconHeartHands = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}>
    <path d="M12 10.8 10.4 9a2.4 2.4 0 0 1 0-3.3 2.2 2.2 0 0 1 3.2 0 2.2 2.2 0 0 1 3.2 0 2.4 2.4 0 0 1 0 3.3L12 10.8Z" />
    <path d="M4 14.5c2 0 3.5 1 5 2.5h4c1 0 1.5 1 .8 1.7-.4.4-1 .8-2.3.8H8" />
    <path d="M20 14.5c-1.5.2-2.6 1-4 2.2M4 20h4.5c1.8 0 3 .5 4.5.5 2.5 0 5-1.5 7-3.5" />
  </svg>
);

export const IconArrow = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)} strokeWidth={1.6}>
    <path d="M4 12h15M14 6.5 19.5 12 14 17.5" />
  </svg>
);

export const IconClose = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)} strokeWidth={1.5}>
    <path d="M5 5l14 14M19 5L5 19" />
  </svg>
);

export const IconMenu = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)} strokeWidth={1.5}>
    <path d="M3 7h18M3 12h18M3 17h10" />
  </svg>
);

export const IconPhone = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}>
    <path d="M5 4h4l1.5 4.5-2.2 1.6a12.5 12.5 0 0 0 5.6 5.6l1.6-2.2L20 15v4c0 .6-.4 1-1 1C10.6 20 4 13.4 4 5c0-.6.4-1 1-1Z" />
  </svg>
);

export const IconMail = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}>
    <rect x="3.5" y="5.5" width="17" height="13" />
    <path d="m4 6.5 8 6.5 8-6.5" />
  </svg>
);

export const IconPin = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}>
    <path d="M12 21s-6.5-6-6.5-11a6.5 6.5 0 0 1 13 0c0 5-6.5 11-6.5 11Z" />
    <circle cx="12" cy="10" r="2.3" />
  </svg>
);

export const IconClock = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 7.5V12l3 2" />
  </svg>
);

export const IconWhatsApp = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}>
    <path d="M12 3.8a8.2 8.2 0 0 0-7.1 12.3L3.8 20l4-1a8.2 8.2 0 1 0 4.2-15.2Z" />
    <path d="M9.3 8.7c-.3.8-.3 1.7.2 2.7a9 9 0 0 0 3.6 3.6c1 .5 1.9.5 2.7.2l.5-1.4-2-1.2-.9.7a6.5 6.5 0 0 1-2.2-2.2l.7-.9-1.2-2-1.4.5Z" />
  </svg>
);

export const IconInstagram = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}>
    <rect x="4" y="4" width="16" height="16" />
    <circle cx="12" cy="12" r="3.5" />
    <path d="M16.8 7.2h.01" strokeWidth={2.2} />
  </svg>
);

export const IconFacebook = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}>
    <path d="M14.5 8H17V4.5h-2.5A4 4 0 0 0 10.5 8.5V11H8v3.5h2.5v6h3.5v-6h2.5l.5-3.5h-3V8.5a.5.5 0 0 1 .5-.5Z" />
  </svg>
);

export const IconHeart = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}>
    <path d="M12 20.5 4.8 13a4.7 4.7 0 0 1 0-6.5 4.4 4.4 0 0 1 6.4 0l.8.9.8-.9a4.4 4.4 0 0 1 6.4 0 4.7 4.7 0 0 1 0 6.5L12 20.5Z" />
  </svg>
);
