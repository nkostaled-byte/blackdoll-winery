// src/components/StorySection.tsx
import brandCard from '../assets/brand-card.jpg';
import Reveal from './Reveal';
import { IconArrow } from './icons';

export default function StorySection() {
  return (
    <section id="story" className="relative overflow-hidden border-y border-gold/15 bg-coal py-24 lg:py-36">
      <span aria-hidden="true" className="pointer-events-none absolute -left-10 bottom-0 select-none font-display text-[22rem] leading-none text-cream/[0.03]">
        B
      </span>
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-5 sm:px-8 lg:grid-cols-12">
        <div className="relative lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <div aria-hidden="true" className="absolute -inset-3 border border-gold/25" />
            <img
              src={brandCard}
              alt="Blackdoll Winery — red wine poured into a glass beneath the gold monogram"
              loading="lazy"
              decoding="async"
              className="w-full object-cover shadow-glow"
            />
          </div>
        </div>

        <div className="lg:col-span-7 lg:pl-8">
          <Reveal variant="fade"><p className="eyebrow mb-6">Our Story</p></Reveal>
          <Reveal as="h2" variant="mask" className="font-display text-4xl leading-tight text-cream sm:text-5xl lg:text-6xl">
            From passion<br />to pour
          </Reveal>
          <Reveal variant="rise" delay={140}>
            <p className="mt-9 max-w-2xl text-base font-light leading-relaxed text-cream/70">
              <span className="float-left mr-3 font-display text-6xl leading-[0.85] text-gold-bright">B</span>
              lackdoll Winery was born from a passion for great wine and the dream of
              creating something truly special — a wine that carries the warmth of the
              people who make it and the spirit of the land it comes from.
            </p>
          </Reveal>
          <Reveal variant="rise" delay={220}>
            <p className="mt-6 max-w-2xl text-base font-light leading-relaxed text-cream/70">
              We make wine for the table where stories are told, for the toast that marks
              the milestone, and for the quiet glass at the end of a long day. Wherever a
              bottle is opened, we want it to bring people closer.
            </p>
          </Reveal>
          <Reveal variant="rise" delay={300}>
            <blockquote className="mt-10 border-l-2 border-gold pl-6 font-display text-2xl italic leading-snug text-gold-bright sm:text-3xl">
              “We don’t simply make wine. We bottle the moments worth remembering.”
            </blockquote>
          </Reveal>
          <Reveal variant="rise" delay={380} className="mt-10">
            <a href="#gallery" className="link-under">
              See the Winery <IconArrow className="h-3.5 w-3.5" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
