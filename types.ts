export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface Testimonial {
  id: string;
  name: string;
  university: string;
  quote: string;
  rating: number;
}

export interface PricingTier {
  name: string;
  priceStart: string;
  features: string[];
  recommended?: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
}
