import { MetricCardData, FlavorFeature } from '@/types';

export const BRAND_NAME = 'ITZ FIZZ';
export const HEADLINE_LINE1 = 'WELCOME';
export const HEADLINE_LINE2 = 'ITZ FIZZ';

export const METRIC_CARDS: MetricCardData[] = [
  {
    id: 'refreshing',
    value: '87%',
    label: 'REFRESHING VIBE',
    description: 'Instant crisp cooling sensation powered by botanical citrus extracts.',
    position: 'top',
    progressTrigger: 0.15,
    theme: 'lime',
  },
  {
    id: 'flavor',
    value: '92%',
    label: 'PURE FLAVOR',
    description: 'Natural blood orange & yuzu zest. Zero added sugars or artificial coloring.',
    position: 'top',
    progressTrigger: 0.42,
    theme: 'dark',
  },
  {
    id: 'energy',
    value: '78%',
    label: 'CLEAN ENERGY',
    description: 'Sustained focus from organic matcha extract without jitters or midday crash.',
    position: 'bottom',
    progressTrigger: 0.65,
    theme: 'cyan',
  },
  {
    id: 'circular',
    value: '100%',
    label: 'SUSTAINABILITY',
    description: 'Infinitely recyclable sleek aluminum chassis engineered with zero waste.',
    position: 'bottom',
    progressTrigger: 0.88,
    theme: 'orange',
  },
];

export const FLAVOR_PROFILES: FlavorFeature[] = [
  {
    name: 'Electric Lime & Yuzu',
    tagline: 'High-voltage citrus with sharp effervescence.',
    notes: ['Key Lime Zest', 'Japanese Yuzu', 'Mineral Carbonation'],
    gradient: 'from-lime-400/20 via-emerald-500/10 to-transparent',
    accent: '#C7FF35',
  },
  {
    name: 'Solar Blood Orange',
    tagline: 'Deep Mediterranean sunburst with lingering warmth.',
    notes: ['Sicilian Orange', 'Ruby Grapefruit', 'Cardamom Mist'],
    gradient: 'from-orange-500/20 via-amber-500/10 to-transparent',
    accent: '#FF6B35',
  },
  {
    name: 'Glacial Mint & Crisp',
    tagline: 'Sub-zero crispness designed for rapid revitalisation.',
    notes: ['Wild Alpine Mint', 'Cucumber Water', 'Electrolyte Salts'],
    gradient: 'from-cyan-400/20 via-blue-500/10 to-transparent',
    accent: '#4DEEEA',
  },
];
