import { createReducer } from '@reduxjs/toolkit';
import { OfferPrevType, TOfferInfo } from '../types/offer';
import { TCityName, AuthorizationStatus } from '../common/const';
import { TSorting } from '../types/sorting';
import { getSorting } from '../common/common';
import { TUserData } from '../types/user-data';

import { cityChange, citySorting, loadOffers,
  requireAuthorization, serverError, offersLoading, userInfo, offerInfoLoading, loadFavoriteOffers } from './action';

const initialState: {
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
} = {
  offers: [],
  favoritesOffers: [],
  activeCity: 'Paris',
  currentOffers: [],
  activeSorting: 'Popular',
  authorizationStatus: AuthorizationStatus.Unknown,
  loadedStatus: false,
  serverError: null,
  isOffersLoading: true,
  userInfo: {
    name: '',
    avatarUrl: '',
    email: '',
    isPro: false,
    token: '',
  },
  offerInfo: null,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(cityChange, (state, action) => {
      state.activeCity = action.payload;
      state.currentOffers = state.offers.filter((offer) => offer.city.name === state.activeCity);
    })
    .addCase(citySorting, (state, action) => {
      state.activeSorting = action.payload;
      state.currentOffers = getSorting(state.currentOffers, state.activeSorting);
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
      state.currentOffers = state.offers.filter((offer) => offer.city.name === state.activeCity);
      state.loadedStatus = true;
    })
    .addCase(offersLoading, (state, action) => {
      state.isOffersLoading = action.payload;
      state.loadedStatus = true;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(serverError, (state, action) => {
      state.serverError = action.payload;
    })
    .addCase(userInfo, (state, action) => {
      state.userInfo = action.payload;
    })
    .addCase(offerInfoLoading, (state, action) => {
      state.offerInfo = action.payload;
    })
    .addCase(loadFavoriteOffers, (state, action) => {
      state.favoritesOffers = action.payload;
    });

});

export { reducer };
