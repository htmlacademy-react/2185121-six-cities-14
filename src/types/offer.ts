import { OfferCity } from './offer-city';
import { OfferHost } from './offer-host';
import { OfferLocation } from './offer-location';

export type OfferType = {
  id: number;
  title: string;
  type: string;
  price: number;
  previewImage: string;
  city: OfferCity;
  location: OfferLocation;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;

  bedrooms: number;
  description: string;
  goods: string[];
  host: OfferHost;
  images: string[];
  maxAdults: number;
};

export type OfferPrevType = {
  id: number;
  title: string;
  type: string;
  price: number;
  previewImage: string;
  city: OfferCity;
  location: OfferLocation;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
};
