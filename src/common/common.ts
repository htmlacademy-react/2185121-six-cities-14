import { MAX_RATING } from './const';
import { OfferPrevType } from '../types/offer';
import { TSorting } from '../types/sorting';
// import { offers } from '../mocks/offers';

function capitalize(value: string) {
  return value[0].toUpperCase() + value.slice(1);
}

function getRatingWidth(rating: number) {
  return ((rating / MAX_RATING) * 100);
}

function sortByRating(a: OfferPrevType, b: OfferPrevType) {
  return b.rating - a.rating;
}

function sortLowToHigh(a: OfferPrevType, b: OfferPrevType) {
  return a.price - b.price;
}

function sortHighToLow(a: OfferPrevType, b: OfferPrevType) {
  return b.price - a.price;
}

function getSorting(offers: OfferPrevType[], activeSorting: TSorting){
  switch (activeSorting) {
    case 'HightToLow':
      return offers.toSorted(sortHighToLow);
    case 'LowToHigh':
      return offers.toSorted(sortLowToHigh);
    case 'TopRated':
      return offers.toSorted(sortByRating);
    default:
      return offers.slice();
  }
}

export { capitalize, getRatingWidth, getSorting };
