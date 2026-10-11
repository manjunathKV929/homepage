import { MetricCardData, FlavorFeature } from '@/types';

export const BRAND_NAME = 'ITZ FIZZ';
export const HEADLINE_TEXT = 'WELCOME ITZ FIZZ';

export const METRIC_CARDS: MetricCardData[] = [
  {
    id: 'box1',
    value: '58%',
    label: 'Increase in pick up point use',
    position: 'top',
    progressTrigger: 0.22,
    theme: 'lime',
  },
  {
    id: 'box2',
    value: '23%',
    label: 'Decreased in customer phone calls',
    position: 'bottom',
    progressTrigger: 0.42,
    theme: 'blue',
  },
  {
    id: 'box3',
    value: '27%',
    label: 'Increase in pick up point use',
    position: 'top',
    progressTrigger: 0.62,
    theme: 'dark',
  },
  {
    id: 'box4',
    value: '40%',
    label: 'Decreased in customer phone calls',
    position: 'bottom',
    progressTrigger: 0.82,
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
