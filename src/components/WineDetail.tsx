// src/components/WineDetail.tsx
import bottlesLineup from '../assets/bottles-lineup.jpg';
import { LINEUP_ASPECT, Wine } from '../data/wines';
import { SITE, waLink } from '../data/site';
import ImageCrop from './ImageCrop';
import Overlay from './Overlay';
import { OrnamentRule } from './Ornament';
import { IconPhone } from './icons';

interface Props {
  wine: Wine | null;
  onClose: () => void;
}

export default function WineDetail({ wine, onClose }: Props) {
  return (
    <Overlay open={wine !== null} onClose={onClose} label={wine ? `${wine.name} details` : 'Wine details'}>
      {wine && (
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Bottle stage */}
          <div className="relative flex items-end justify-center bg-gradient-to-b from-soot to-ink px-10 pb-0 pt-14">
            <div aria-hidden="true" className="absolute inset-0 m-auto h-2/3 w-2/3 rounded-full bg-gold/10 blur-[80px]" />
            <ImageCrop
              src={bottlesLineup}
              alt={`Blackdoll Winery ${wine.name} bottle`}
              region={wine.crop}
              sourceAspect={LINEUP_ASPECT}
              eager
              className="bottle-mask relative h-[380px] w-full max-w-[190px] drop-shadow-bottle md:h-[460px]"
            />
          </div>

          {/* Details */}
          <div className="p-8 sm:p-10">
            <p className="eyebrow">{wine.type}</p>
            <h3 className="mt-3 font-display text-4xl text-cream">{wine.name}</h3>
            <p className="mt-4 text-sm font-light leading-relaxed text-cream/70">{wine.description}</p>

            <OrnamentRule className="my-7 justify-start" />

            <dl className="space-y-4 text-sm">
              {[
                ['Aroma', wine.aroma],
                ['Palate', wine.palate],
                ['Finish', wine.finish],
              ].map(([k, v]) => (
                <div key={k} className="grid grid-cols-[88px_1fr] gap-4">
                  <dt className="text-[10px] font-bold uppercase tracking-caps leading-5 text-gold-bright">{k}</dt>
                  <dd className="font-light text-cream/75">{v}</dd>
                </div>
              ))}
            </dl>

            <p className="mt-7 text-[10px] font-bold uppercase tracking-caps text-gold-bright">Pairs beautifully with</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {wine.pairings.map((p) => (
                <li key={p} className="border border-gold/25 px-3 py-1.5 text-xs font-light text-cream/75">
                  {p}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex divide-x divide-gold/20 border-y border-gold/20 text-center">
              {[
                ['Alcohol', wine.abv],
                ['Bottle', wine.volume],
                ['Serving', wine.serving.replace('Serve ', '').replace('chilled ', '')],
              ].map(([k, v]) => (
                <div key={k} className="flex-1 px-2 py-4">
                  <p className="text-[9px] uppercase tracking-caps text-cream/50">{k}</p>
                  <p className="mt-1.5 text-xs font-semibold text-cream">{v}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={waLink(`Hello Blackdoll Winery! I would like to order ${wine.name} (${wine.volume}).`)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold"
              >
                <span className="btn-fill" aria-hidden="true" />
                <span className="btn-label">Order Now</span>
              </a>
              <a href={SITE.phoneHref} className="btn-ghost">
                <span className="inline-flex items-center gap-2">
                  <IconPhone className="h-3.5 w-3.5" /> Call the Winery
                </span>
              </a>
            </div>

            <p className="mt-6 text-[10px] leading-relaxed text-cream/40">
              Enjoy responsibly. Not for sale to persons under the age of 18.
            </p>
          </div>
        </div>
      )}
    </Overlay>
  );
}
