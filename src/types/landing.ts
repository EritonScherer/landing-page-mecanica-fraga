import type { Wrench } from '@lucide/astro';

export type IconComponent = typeof Wrench;

export interface NavigationItem {
  label: string;
  href: string;
}

export interface Statistic {
  value: string;
  label: string;
}

export interface Service {
  title: string;
  description: string;
  icon: IconComponent;
}

export interface Testimonial {
  name: string;
  vehicle: string;
  quote: string;
  rating: number;
}

export interface ContactItem {
  label: string;
  value: string;
  href?: string;
  icon: IconComponent;
}
