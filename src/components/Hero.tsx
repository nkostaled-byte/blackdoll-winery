// src/components/Hero.tsx
import { useEffect, useRef } from 'react';
import bottlesLineup from '../assets/bottles-lineup.jpg';
import { WINES, LINEUP_ASPECT } from '../data/wines';
import ImageCrop from './ImageCrop';
import Reveal from './Reveal';
import { CornerMotif } from './Ornament';
import { IconArrow } from './icons';

const HEIGHTS = ['h-[300px] sm:h-[380px] lg:h-[440px]', 'h-[330px] sm:h-[420px] lg:h-[500px]', 'h-[315px] sm:h-[400px] lg:h-[470px]', 'h-[300px] sm:h-[380px] lg:h-[450px]'];
const OFFSETS = ['mt-8', 'mt-0', 'mt-4', 'mt-6'];

export default function Hero() {
  const stageRef = useRef<HTMLDivElement>(null);

  /* Subtle scroll parallax — transform only, honours reduced motion */
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        if (stageRef.current) {
          stageRef.current.style.transform = `translate3d(0, ${Math.min(window.scrollY * 0.06, 80)}px, 0)`;
        }
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section id="home" className="relative overflow-hidden bg-ink">
      <CornerMotif className="pointer-events-none absolute -left-6 -top-6 h-28 w-28 opacity-80 sm:h-40 sm:w-40" />
      <span aria-hidden="true" className="pointer-events-none absolute -right-16 top-24 select-none font-display text-[26rem] leading-none text-cream/[0.03]">
        B
      </span>
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-ink to-transparent" />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-5 pb-24 pt-36 sm:px-8 lg:grid-cols-12 lg:gap-8 lg:pb-28 lg:pt-40">
        {/* Copy */}
        <div className="relative z-10 lg:col-span-5">
          <Reveal variant="fade">
            <p className="eyebrow mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-gold/70" aria-hidden="true" />
              {SITE_LOCATION}
            </p>
          </Reveal>
          <h1 className="font-display text-[17vw] leading-[1.02] text-cream sm:text-7xl lg:text-[5.4rem]" style={{ letterSpacing: '-0.015em' }}>
            <Reveal as="span" variant="mask" className="block">CRAFTED</Reveal>
            <Reveal as="span" variant="mask" delay={90} className="block">
              TO <em className="not-italic text-gold-bright">INSPIRE</em>
            </Reveal>
          </h1>
          <Reveal variant="rise" delay={220}>
            <p className="mt-7 max-w-md text-base font-light leading-relaxed text-cream/70">
              Premium wines made with passion, dedication and a touch of elegance.
            </p>
          </Reveal>
          <Reveal variant="rise" delay={320} className="mt-10 flex flex-wrap items-center gap-6">
            <a href="#wines" className="btn-gold">
              <span className="btn-fill" aria-hidden="true" />
              <span className="btn-label inline-flex items-center gap-3">
                Discover Our Wines <IconArrow className="h-3.5 w-3.5" />
              </span>
            </a>
            <a href="#story" className="link-under">Our Story</a>
          </Reveal>
        </div>

        {/* Bottle stage */}
        <div className="relative lg:col-span-7">
          <div aria-hidden="true" className="absolute inset-0 m-auto h-[70%] w-[80%] rounded-full bg-gold/10 blur-[110px]" />
          <div ref={stageRef} className="relative flex items-end justify-center gap-1 sm:gap-3 will-change-transform">
            {WINES.map((wine, i) => (
              <Reveal key={wine.id} variant="rise" delay={140 + i * 70} className={`${OFFSETS[i]} w-[22%] max-w-[150px]`}>
                <ImageCrop
                  src={bottlesLineup}
                  alt={`Blackdoll Winery ${wine.name} bottle`}
                  region={wine.crop}
                  sourceAspect={LINEUP_ASPECT}
                  eager
                  className={`bottle-mask bottle-hover w-full ${HEIGHTS[i]} drop-shadow-bottle`}
                />
              </Reveal>
            ))}
          </div>
          <p className="mt-10 text-center text-[10px] uppercase tracking-caps text-cream/40">
            {SITE_TAGLINE}
          </p>
        </div>
      </div>
    </section>
  );
}

const SITE_LOCATION = 'South Africa · Premium Wines';
const SITE_TAGLINE = 'Luxury poured in a glass for discovery';
