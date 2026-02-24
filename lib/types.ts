export interface ScooterModel {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  price: number;
  image: string;
  images: string[];
  range: number;
  topSpeed: number;
  chargingTime: string;
  batteryCapacity: string;
  batteryType: string;
  motorPower: string;
  loadCapacity: string;
  colors: Color[];
  features: string[];
  specs: Specification[];
}

export interface Color {
  name: string;
  hex: string;
  image?: string;
}

export interface Specification {
  category: string;
  items: SpecItem[];
}

export interface SpecItem {
  label: string;
  value: string;
}

export interface Testimonial {
  id: number;
  name: string;
  location: string;
  image: string;
  rating: number;
  text: string;
}

export interface Partner {
  id: number;
  name: string;
  logo: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
}

export interface Milestone {
  year: string;
  title: string;
  description: string;
}