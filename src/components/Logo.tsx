// src/components/Logo.tsx
import ImageCrop from './ImageCrop';
import { BRANDCARD_ASPECT, BRANDCARD_CROPS } from '../data/wines';
import brandCard from '../assets/brand-card.jpg';

interface Props {
  size?: 'sm' | 'lg';
}

/** The real monogram, cropped from the brand artwork + typeset wordmark. */
export default function Logo({ size = 'sm' }: Props) {
  const mark = size === 'sm' ? 'h-10 w-10' : 'h-14 w-14';
  return (
    <span className="inline-flex items-center gap-3">
      <ImageCrop
        src={brandCard}
        alt="Blackdoll Winery monogram"
        region={BRANDCARD_CROPS.monogram}
        sourceAspect={BRANDCARD_ASPECT}
        className={`${mark} shrink-0 rounded-full`}
      />
      <span className="flex flex-col leading-none">
        <span className={`font-display font-semibold tracking-[0.08em] text-cream ${size === 'sm' ? 'text-lg' : 'text-2xl'}`}>
          BLACKDOLL
        </span>
        <span className="mt-1 text-[9px] font-bold uppercase tracking-[0.42em] text-gold-bright">
          • Winery •
        </span>
      </span>
    </span>
  );
}
