export type DrinkCategory = 'craft_beer' | 'coffee' | 'wine' | 'cocktail' | 'tea_non_alc';

export interface NearbyPerson {
  id: string;
  name: string;
  age: number;
  avatar: string;
  distanceMeters: number;
  drink: string;
  category: DrinkCategory;
  vibe: string;
  locationName: string;
  status: 'active' | 'ready_now';
  verified: boolean;
  interests: string[];
}

export interface PartnerBar {
  id: string;
  name: string;
  city: string;
  district: string;
  address: string;
  type: string;
  rating: number;
  discountText: string;
  specialOffer: string;
  image: string;
  openUntil: string;
  category: DrinkCategory;
}

export interface ToastItem {
  id: string;
  category: 'friends' | 'victory' | 'tech' | 'love' | 'philosophical';
  title: string;
  text: string;
  tag: string;
}

export interface ReviewItem {
  id: string;
  name: string;
  cityDistrict: string;
  avatar: string;
  rating: number;
  date: string;
  drinkVibe: string;
  text: string;
  badge: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}
