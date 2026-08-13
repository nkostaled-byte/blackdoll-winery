// src/components/WineCollection.tsx
import { useState } from 'react';
import { WINES, Wine } from '../data/wines';
import Reveal from './Reveal';
import { OrnamentRule } from './Ornament';
import WineCard from './WineCard';
import WineDetail from './WineDetail';

export default function WineCollection() {
  const [active, setActive] = useState<Wine | null>(null);

  return (
    <section id="wines" className="bg-ink py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal variant="fade" className="text-center">
          <p className="eyebrow">The Collection</p>
        </Reveal>
        <Reveal as="h2" variant="mask" className="mt-4 text-center font-display text-4xl text-cream sm:text-5xl">
          Our Wines
        </Reveal>
        <OrnamentRule className="mt-7" />
        <Reveal variant="rise" delay={120}>
          <p className="mx-auto mt-7 max-w-xl text-center text-sm font-light leading-relaxed text-cream/60">
            Four expressions, one standard. Each bottle carries the same promise —
            luxury poured in a glass for discovery.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {WINES.map((wine, i) => (
            <Reveal key={wine.id} delay={i * 80}>
              <WineCard wine={wine} onSelect={setActive} />
            </Reveal>
          ))}
        </div>
      </div>

      <WineDetail wine={active} onClose={() => setActive(null)} />
    </section>
  );
}
