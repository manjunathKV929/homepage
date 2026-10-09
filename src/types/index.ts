export interface MetricCardData {
  id: string;
  value: string;
  label: string;
  description: string;
  position: 'top' | 'bottom';
  progressTrigger: number; // 0 to 1 scroll trigger range
  theme: 'lime' | 'dark' | 'cyan' | 'orange';
}

export interface FlavorFeature {
  name: string;
  tagline: string;
  notes: string[];
  gradient: string;
  accent: string;
}
