import { LucideIcon } from "lucide-react";

export interface Testimonial {
  id: number;
  name: string;
  image: string;
  rating: number;
  text: string;
  tripType: string;
  date: string;
}

export interface Product {
  id: number;
  image: string;
  title: string;
  subtitle: string; // Distance or Proximity
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  amenities: string[];
  tag?: string; // Savings %
  city?: string;
}

export interface Bundle {
  id: number;
  title: string;
  city: string;
  savings: number;
  features: string[];
  price: number;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export enum SearchTab {
  PARKING = 'Parking',
  HOTELS = 'Hotels',
  CARS = 'Cars',
  PACKAGES = 'Packages',
  AI_MODE = 'AI Mode'
}