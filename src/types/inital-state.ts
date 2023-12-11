import { OfferPrevType, TOfferInfo } from './offer';
import { TCityName, AuthorizationStatus } from '../common/const';
import { TSorting } from './sorting';
import { TUserData } from './user-data';

export type TInitialState = {
  offers: OfferPrevType[] | [];
  favoritesOffers:OfferPrevType[] | [];
  activeCity: TCityName;
  currentOffers:OfferPrevType[] | [];
  activeSorting: TSorting;
  authorizationStatus: AuthorizationStatus;
  loadedStatus: boolean;
  serverError: string | null;
  isOffersLoading: boolean;
  userInfo: TUserData;
  offerInfo: TOfferInfo | null;
}
