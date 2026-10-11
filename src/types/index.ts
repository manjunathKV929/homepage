export interface MetricCardData {
  id: string;
  value: string;
  label: string;
  description?: string;
  position: 'top' | 'bottom';
  progressTrigger: number; // 0 to 1 scroll trigger checkpoint
  theme: 'lime' | 'dark' | 'blue' | 'orange';
}

export interface FlavorFeature {
  name: string;
  tagline: string;
  notes: string[];
  gradient: string;
  accent: string;
}
