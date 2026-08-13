// src/components/IntroSection.tsx
import bottlesLineup from '../assets/bottles-lineup.jpg';
import { LINEUP_ASPECT, LINEUP_CROPS } from '../data/wines';
import ImageCrop from './ImageCrop';
import Reveal from './Reveal';
import { OrnamentRule } from './Ornament';

export default function IntroSection() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 lg:py-36">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-5 sm:px-8 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <Reveal variant="fade">
            <p className="eyebrow mb-6">The House of Blackdoll</p>
          </Reveal>
          <Reveal as="h2" variant="mask" className="font-display text-4xl leading-tight text-cream sm:text-5xl lg:text-6xl" >
            Passion in<br />every bottle
          </Reveal>
          <OrnamentRule className="my-8 justify-start" />
          <Reveal variant="rise" delay={120}>
            <p className="max-w-xl text-base font-light leading-relaxed text-cream/70">
              Blackdoll Winery creates wines intended to bring people together — wines of
              character and warmth, made to turn gatherings into occasions and occasions
              into memories.
            </p>
          </Reveal>
          <Reveal variant="rise" delay={200}>
            <p className="mt-5 max-w-xl text-base font-light leading-relaxed text-cream/70">
              From the first press to the final pour, every step is guided by a single
              belief: that what is in the glass should honour the moment it is part of.
            </p>
          </Reveal>
          <Reveal variant="rise" delay={280}>
            <p className="mt-8 font-display text-lg italic text-gold-bright">— The Blackdoll Family</p>
          </Reveal>
        </div>

        <div className="relative lg:col-span-6">
          <div aria-hidden="true" className="absolute -inset-4 border border-gold/20" />
          <ImageCrop
            src={bottlesLineup}
            alt="Close-up of a Blackdoll Winery label"
            region={LINEUP_CROPS.labelCloseup}
            sourceAspect={LINEUP_ASPECT}
            className="w-full shadow-glow"
          />
          <p className="absolute bottom-4 left-4 bg-ink/80 px-3 py-2 text-[10px] uppercase tracking-caps text-gold-bright">
            The label, up close
          </p>
        </div>
      </div>
    </section>
  );
}
