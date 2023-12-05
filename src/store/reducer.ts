import { createReducer } from '@reduxjs/toolkit';
import { OfferPrevType } from '../types/offer';
import { TCityName, AuthorizationStatus } from '../common/const';
// import { offers } from '../mocks/offers';
import { TSorting } from '../types/sorting';
import { getSorting } from '../common/common';
import { TUserData } from '../types/user-data';

import { cityChange, citySorting, loadOffers, requireAuthorization, serverError, offersLoading, userInfo } from './action';

const initialState: {
  offers: OfferPrevType[] | [];
  activeCity: TCityName;
  currentOffers:OfferPrevType[] | [];
  activeSorting: TSorting;
  authorizationStatus: AuthorizationStatus;
  loadedStatus: boolean;
  serverError: string | null;
  userInfo: TUserData;
} = {
  offers: [],
  activeCity: 'Paris',
  currentOffers: [],
  activeSorting: 'Popular',
  authorizationStatus: AuthorizationStatus.Unknown,
  loadedStatus: false,
  serverError: null,
  userInfo: {
    name: '',
    avatarUrl: '',
    email: '',
    isPro: false,
    token: '',
  }
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
      state.loadedStatus = true;
      state.currentOffers = state.offers.filter((offer) => offer.city.name === state.activeCity);
    })
    .addCase(offersLoading, (state, action) => {
      state.loadedStatus = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(serverError, (state, action) => {
      state.serverError = action.payload;
    })
    .addCase(userInfo, (state, action) => {
      state.userInfo = action.payload;
    });

});

export { reducer };
