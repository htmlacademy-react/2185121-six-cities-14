import { OfferCity } from './offer-city';
import { OfferHost } from './offer-host';
import { OfferLocation } from './offer-location';

export type OfferType = {
  bedrooms: number;
  city: OfferCity;
  description: string;
  goods: string[];
  host: OfferHost;
  id: number;
  images: string[];
  isFavorite: boolean;
  isPremium: boolean;
  location: OfferLocation;
  maxAdults: number;
  previewImage: string;
  price: number;
  rating: number;
  title: string;
  type: string;
};
