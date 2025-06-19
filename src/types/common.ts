
export type CTALocation = 'header' | 'hero' | 'features' | 'main_cta' | 'floating_mobile';

export interface CTAClickHandler {
  (location?: string): void;
}

export interface SectionProps {
  onCTAClick: CTAClickHandler;
}

export interface AnalyticsEvent {
  eventName: string;
  properties?: Record<string, any>;
}
