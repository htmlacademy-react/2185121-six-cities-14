export const MAX_RATING = 5;

export const MIN_COMMENT_LENGTH = 50;
export const MAX_COMMENT_LENGTH = 300;
export const MAX_NEAR_PLACES_COUNT = 3;
export const ERROR_STATUS_CODE = 404;
export const MAX_COMMENTS = 10;

export const BASE_URL = 'https://14.design.pages.academy/six-cities';
export const REQUEST_TIMEOUT = 5000;
export const TIMEOUT_SHOW_ERROR = 2000;
export const COPYRIGHT = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';

export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer',
  NotFound = '*'
}

export enum APIRoute {
  Offers = '/offers',
  Login = '/login',
  Favorites = '/favorite',
  Comments = '/comments',
  Logout = '/logout',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}

export const cityNames = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
] as const;

export type TCityName = typeof cityNames[number];

export const SortingMap = {
  Popular: 'Popular',
  LowToHigh: 'Price: low to high',
  HightToLow: 'Price: high to low',
  TopRated: 'Top rated first',
} as const;

export const CitiesLocation = { // удалить
  Paris: {
    name: 'Paris',
  },
  Cologne: {
    name: 'Cologne',
  },
  Brussels: {
    name: 'Brussels',
  },
  Amsterdam: {
    name: 'Amsterdam',
    location: {
      latitude: 52.3676,
      longitude: 4.9041,
      zoom: 12,
    }
  },
  Hamburg: {
    name: 'Hamburg',
  },
  Dusseldorf: {
    name: 'Dusseldorf',
  }
};
