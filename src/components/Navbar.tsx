// src/components/Navbar.tsx
import { useEffect, useRef, useState } from 'react';
import Logo from './Logo';
import { NAV_LINKS, SITE, waLink } from '../data/site';
import { IconClose, IconMenu, IconWhatsApp } from './icons';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState<string>('#home');
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Scroll-spy for aria-current */
  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.href.slice(1));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setCurrent(`#${e.target.id}`));
      },
      { rootMargin: '-40% 0px -55% 0px' },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  /* Drawer: scroll-lock + esc + focus */
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKey);
    drawerRef.current?.querySelector<HTMLElement>('a')?.focus();
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-gold focus:px-4 focus:py-2 focus:text-ink">
        Skip to content
      </a>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,box-shadow] duration-300 ${
          scrolled ? 'border-b border-gold/15 bg-ink/90 backdrop-blur-md' : 'border-b border-transparent bg-transparent'
        }`}
        style={{ transitionTimingFunction: 'var(--ease-out)' }}
      >
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8">
          <a href="#home" aria-label="Blackdoll Winery — home">
            <Logo />
          </a>

          <nav className="hidden items-center gap-9 lg:flex" aria-label="Primary">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="nav-link" aria-current={current === l.href}>
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href={waLink('Hello Blackdoll Winery! I would like to place an order.')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold hidden !px-6 !py-3 sm:inline-flex"
            >
              <span className="btn-fill" aria-hidden="true" />
              <span className="btn-label">Order Now</span>
            </a>
            <button
              className="border border-gold/30 p-2.5 text-cream transition-colors duration-200 hover:text-gold-bright lg:hidden"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
            >
              <IconMenu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-[70] lg:hidden ${open ? '' : 'pointer-events-none'}`}
        aria-hidden={!open}
      >
        <button
          tabIndex={-1}
          aria-label="Close menu"
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-ink/70 transition-opacity duration-300 ${open ? 'opacity-100' : 'opacity-0'}`}
          style={{ transitionTimingFunction: 'var(--ease-out)' }}
        />
        <div
          ref={drawerRef}
          className={`absolute right-0 top-0 flex h-full w-[82%] max-w-sm flex-col border-l border-gold/20 bg-coal transition-transform duration-[450ms] ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}
          style={{ transitionTimingFunction: 'var(--ease-drawer)' }}
        >
          <div className="flex items-center justify-between border-b border-gold/15 px-6 py-5">
            <Logo />
            <button onClick={() => setOpen(false)} aria-label="Close menu" className="border border-gold/30 p-2.5 text-cream hover:text-gold-bright">
              <IconClose className="h-4 w-4" />
            </button>
          </div>
          <nav className="flex flex-col px-6 py-8" aria-label="Mobile">
            {NAV_LINKS.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`border-b border-gold/10 py-4 font-display text-2xl text-cream/90 transition-[opacity,transform,color] duration-500 hover:text-gold-bright ${
                  open ? 'translate-x-0 opacity-100' : 'translate-x-6 opacity-0'
                }`}
                style={{
                  transitionTimingFunction: 'var(--ease-out)',
                  transitionDelay: open ? `${120 + i * 45}ms` : '0ms',
                }}
              >
                {l.label}
              </a>
            ))}
          </nav>
          <div className="mt-auto space-y-4 px-6 pb-10">
            <a
              href={waLink('Hello Blackdoll Winery! I would like to place an order.')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold w-full"
              onClick={() => setOpen(false)}
            >
              <span className="btn-fill" aria-hidden="true" />
              <span className="btn-label inline-flex items-center gap-2">
                <IconWhatsApp className="h-4 w-4" /> Order Now
              </span>
            </a>
            <p className="text-center text-[11px] uppercase tracking-wide2 text-cream/50">
              {SITE.phoneDisplay} · {SITE.location}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
