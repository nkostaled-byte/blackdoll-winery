// src/components/QualitySection.tsx
import Reveal from './Reveal';
import { IconBarrel, IconGlass, IconGrapes, IconHeartHands } from './icons';

const ITEMS = [
  { Icon: IconGrapes, title: 'Premium Quality', copy: 'Carefully selected grapes and quality winemaking.' },
  { Icon: IconBarrel, title: 'Expert Craft', copy: 'Thoughtfully crafted wines with attention to detail.' },
  { Icon: IconGlass, title: 'Distinctive Taste', copy: 'Characterful wines designed to be enjoyed.' },
  { Icon: IconHeartHands, title: 'Made With Passion', copy: 'Every bottle represents the spirit of Blackdoll Winery.' },
];

export default function QualitySection() {
  return (
    <section id="quality" className="border-y border-gold/15 bg-coal">
      <div className="mx-auto grid max-w-7xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {ITEMS.map(({ Icon, title, copy }, i) => (
          <Reveal
            key={title}
            delay={i * 70}
            className="group border-b border-gold/10 px-8 py-12 sm:border-b-0 sm:not-last:border-r lg:px-10 sm:[&:nth-child(3)]:border-r sm:[&:nth-child(3)]:border-gold/10"
          >
            <Icon className="h-9 w-9 text-gold transition-transform duration-300 group-hover:-translate-y-1" style={{ transitionTimingFunction: 'var(--ease-out)' } as never} />
            <h3 className="mt-6 text-[12px] font-bold uppercase tracking-caps text-cream">{title}</h3>
            <p className="mt-3 text-sm font-light leading-relaxed text-cream/60">{copy}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
