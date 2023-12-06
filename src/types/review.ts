import { OfferHost } from './offer-host';

export type ReviewSendType = {
  comment: string;
  rating: number;
}

export type ReviewType = ReviewSendType & {
  date: string;
  id: string;
  user: OfferHost;
}
