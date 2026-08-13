// src/components/ImageCrop.tsx
import { CSSProperties } from 'react';
import type { CropRegion } from '../data/wines';

interface Props {
  src: string;
  alt: string;
  region: CropRegion;
  /** width / height of the source file in px */
  sourceAspect: number;
  className?: string;
  imgClassName?: string;
  eager?: boolean;
}

/**
 * Deterministically crops a percentage-region out of a source photo.
 * The container takes the region's aspect ratio; the inner image is scaled
 * and offset so exactly that window shows. No magic numbers downstream.
 */
export default function ImageCrop({ src, alt, region, sourceAspect, className = '', imgClassName = '', eager = false }: Props) {
  const containerStyle: CSSProperties = {
    aspectRatio: `${(region.w / region.h) * sourceAspect}`,
  };
  const imgStyle: CSSProperties = {
    position: 'absolute',
    maxWidth: 'none',
    width: `${10000 / region.w}%`,
    left: `${(-100 * region.x) / region.w}%`,
    top: `${(-100 * region.y) / region.h}%`,
  };
  return (
    <div className={`relative overflow-hidden ${className}`} style={containerStyle}>
      <img
        src={src}
        alt={alt}
        draggable={false}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
        className={`absolute select-none ${imgClassName}`}
        style={imgStyle}
      />
    </div>
  );
}
