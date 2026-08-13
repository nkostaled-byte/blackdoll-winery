// src/components/WineCard.tsx
import bottlesLineup from '../assets/bottles-lineup.jpg';
import { LINEUP_ASPECT, Wine } from '../data/wines';
import ImageCrop from './ImageCrop';
import { IconArrow } from './icons';

interface Props {
  wine: Wine;
  onSelect: (wine: Wine) => void;
}

export default function WineCard({ wine, onSelect }: Props) {
  return (
    <button
      onClick={() => onSelect(wine)}
      className="group flex w-full items-center gap-6 border border-gold/15 bg-coal/60 p-6 text-left transition-colors duration-300 hover:border-gold/40 sm:flex-col sm:items-stretch sm:gap-0 sm:p-0"
      style={{ transitionTimingFunction: 'var(--ease-out)' }}
      aria-haspopup="dialog"
      aria-label={`View ${wine.name} details`}
    >
      <div className="relative flex h-56 w-24 shrink-0 items-end justify-center bg-gradient-to-b from-transparent to-ink/60 sm:h-72 sm:w-full">
        <ImageCrop
          src={bottlesLineup}
          alt=""
          region={wine.crop}
          sourceAspect={LINEUP_ASPECT}
          className="bottle-mask bottle-hover h-full w-full"
        />
      </div>
      <div className="flex-1 sm:p-6">
        <p className="text-[10px] font-bold uppercase tracking-caps text-gold-bright">{wine.type}</p>
        <h3 className="mt-2 font-display text-xl text-cream sm:text-2xl">{wine.name}</h3>
        <p className="mt-3 text-sm font-light leading-relaxed text-cream/60">{wine.description}</p>
        <span className="link-under mt-5 inline-flex">
          View Wine <IconArrow className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-1" />
        </span>
      </div>
    </button>
  );
}
