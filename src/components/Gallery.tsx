// src/components/Gallery.tsx
import bottlesLineup from '../assets/bottles-lineup.jpg';
import brandCard from '../assets/brand-card.jpg';
import { BRANDCARD_ASPECT, BRANDCARD_CROPS, LINEUP_ASPECT, LINEUP_CROPS } from '../data/wines';
import ImageCrop from './ImageCrop';
import Reveal from './Reveal';
import { OrnamentRule } from './Ornament';

function Plate({ caption, note, className = '' }: { caption: string; note: string; className?: string }) {
  /** Framed placeholder plate — reads as intentional art direction until photography lands. */
  return (
    <figure className={className}>
      <div className="flex aspect-[4/3] w-full flex-col items-center justify-center gap-4 border border-gold/20 bg-soot/60">
        <span className="block h-2 w-2 rotate-45 border border-gold/70" aria-hidden="true" />
        <span className="px-6 text-center text-[10px] uppercase tracking-caps text-cream/40">{note}</span>
      </div>
      <figcaption className="mt-3 text-[10px] uppercase tracking-caps text-cream/50">{caption}</figcaption>
    </figure>
  );
}

const frame = 'overflow-hidden border border-gold/15';
const zoom = 'transition-transform duration-700 ease-out will-change-transform';

export default function Gallery() {
  return (
    <section id="gallery" className="bg-ink py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal variant="fade" className="text-center"><p className="eyebrow">Moments</p></Reveal>
        <Reveal as="h2" variant="mask" className="mt-4 text-center font-display text-4xl text-cream sm:text-5xl">Gallery</Reveal>
        <OrnamentRule className="mt-7" />

        <div className="mt-16 grid grid-cols-12 gap-4 sm:gap-5">
          <Reveal className="col-span-12 md:col-span-7" variant="fade">
            <figure className="group">
              <div className={frame}>
                <img src={bottlesLineup} alt="The four Blackdoll Winery wines standing together" loading="lazy" decoding="async"
                  className={`aspect-[4/3] w-full object-cover ${zoom} group-hover:scale-[1.03]`} />
              </div>
              <figcaption className="mt-3 text-[10px] uppercase tracking-caps text-cream/50">The collection, together</figcaption>
            </figure>
          </Reveal>

          <Reveal className="col-span-12 md:col-span-5" variant="fade" delay={90}>
            <figure className="group">
              <div className={frame}>
                <ImageCrop src={brandCard} alt="Red wine being poured beneath the Blackdoll monogram" region={BRANDCARD_CROPS.pour} sourceAspect={BRANDCARD_ASPECT}
                  imgClassName={`${zoom} group-hover:scale-[1.03]`} className="aspect-[4/5] w-full" />
              </div>
              <figcaption className="mt-3 text-[10px] uppercase tracking-caps text-cream/50">The pour</figcaption>
            </figure>
          </Reveal>

          <Reveal className="col-span-6 md:col-span-4" variant="fade">
            <figure className="group">
              <div className={frame}>
                <ImageCrop src={bottlesLineup} alt="Detail of a Blackdoll Winery label" region={LINEUP_CROPS.labelCloseup} sourceAspect={LINEUP_ASPECT}
                  imgClassName={`${zoom} group-hover:scale-[1.03]`} className="aspect-square w-full" />
              </div>
              <figcaption className="mt-3 text-[10px] uppercase tracking-caps text-cream/50">Label detail</figcaption>
            </figure>
          </Reveal>

          <Reveal className="col-span-6 md:col-span-4" variant="fade" delay={80}>
            <Plate caption="The vineyard" note="Vineyard photography — coming soon" className="h-full" />
          </Reveal>

          <Reveal className="col-span-12 md:col-span-4" variant="fade" delay={160}>
            <Plate caption="Celebrations" note="Occasion photography — coming soon" className="h-full" />
          </Reveal>

          <Reveal className="col-span-12 md:col-span-12" variant="fade">
            <figure className="group">
              <div className={frame}>
                <img src={brandCard} alt="Blackdoll Winery brand artwork — gold monogram over a glass of red" loading="lazy" decoding="async"
                  className={`aspect-[16/7] w-full object-cover ${zoom} group-hover:scale-[1.02]`} />
              </div>
              <figcaption className="mt-3 text-[10px] uppercase tracking-caps text-cream/50">The house mark</figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
      <style>{`@media (hover: hover) and (pointer: fine) { .group:hover .${zoom.split(' ')[0]} {} }`}</style>
    </section>
  );
}
