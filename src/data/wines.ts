// src/data/wines.ts
/**
 * Crop regions are percentages of the source photo (src/assets/bottles-lineup.jpg, 640×852).
 * Tune per-bottle windows here without touching any component.
 */
export type CropRegion = { x: number; y: number; w: number; h: number };

export const LINEUP_ASPECT = 640 / 852;
export const BRANDCARD_ASPECT = 960 / 600;

export const LINEUP_CROPS = {
  monogramFree: { x: 0, y: 0, w: 100, h: 100 },
  labelCloseup: { x: 27.5, y: 47, w: 24, h: 30 },
} as const;

export const BRANDCARD_CROPS = {
  monogram: { x: 43, y: 12.5, w: 14.5, h: 25 },
  pour: { x: 37, y: 22, w: 26, h: 78 },
} as const;

export interface Wine {
  id: string;
  name: string;
  type: 'Red Wine' | 'Rosé Wine';
  description: string;
  aroma: string;
  palate: string;
  finish: string;
  pairings: string[];
  serving: string;
  abv: string;
  volume: string;
  crop: CropRegion;
}

export const WINES: Wine[] = [
  {
    id: 'merlot',
    name: 'Merlot',
    type: 'Red Wine',
    description: 'Soft, smooth and fruity with elegant tannins and a lingering finish.',
    aroma: 'Ripe plum and red berries',
    palate: 'Soft, rounded and smooth',
    finish: 'Elegant and lingering',
    pairings: ['Roast chicken', 'Mushroom risotto', 'Soft cheeses'],
    serving: 'Serve at 16–18°C',
    abv: '13% vol',
    volume: '750ml',
    crop: { x: 3, y: 6, w: 25, h: 92 },
  },
  {
    id: 'cabinet-sauvignon',
    name: 'Cabinet Sauvignon',
    type: 'Red Wine',
    description: 'Full-bodied with bold flavours of blackcurrant and a hint of spice.',
    aroma: 'Blackcurrant and cedar',
    palate: 'Bold, full and structured',
    finish: 'Warm, with a hint of spice',
    pairings: ['Braai favourites', 'Grilled lamb', 'Mature cheddar'],
    serving: 'Serve at 16–18°C',
    abv: '13% vol',
    volume: '750ml',
    crop: { x: 27, y: 3, w: 25, h: 95 },
  },
  {
    id: 'shiraz',
    name: 'Shiraz',
    type: 'Red Wine',
    description: 'Rich and robust with deep berry flavours and a warm finish.',
    aroma: 'Dark berry and white pepper',
    palate: 'Rich and robust',
    finish: 'Warm and long',
    pairings: ['Slow-cooked beef', 'Smoked paprika dishes', 'Charcuterie'],
    serving: 'Serve at 16–18°C',
    abv: '13% vol',
    volume: '750ml',
    crop: { x: 51, y: 5, w: 25, h: 93 },
  },
  {
    id: 'sweet-rose',
    name: 'Sweet Rosé',
    type: 'Rosé Wine',
    description: 'Light, refreshing and slightly sweet – perfect for any occasion.',
    aroma: 'Strawberry and rose petal',
    palate: 'Light, fresh and gently sweet',
    finish: 'Crisp and refreshing',
    pairings: ['Summer salads', 'Sushi', 'Fruit tarts'],
    serving: 'Serve chilled at 8–10°C',
    abv: '11% vol',
    volume: '750ml',
    crop: { x: 75, y: 8, w: 24, h: 90 },
  },
];
