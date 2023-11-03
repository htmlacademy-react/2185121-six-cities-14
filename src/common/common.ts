import { MAX_RATING } from './const';

function capitalize(value: string) {
  return value[0].toUpperCase() + value.slice(1);
}

function getRatingWidth(rating: number) {
  return ((rating / MAX_RATING) * 100);
}

export { capitalize, getRatingWidth };
