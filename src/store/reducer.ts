import { createReducer } from '@reduxjs/toolkit';
import { OfferPrevType } from '../types/offer';
import { TCityName, AuthorizationStatus } from '../common/const';
// import { offers } from '../mocks/offers';
import { TSorting } from '../types/sorting';
import { getSorting } from '../common/common';

import { cityChange, citySorting, loadOffers, requireAuthorization } from './action';

const initialState: {
  offers: OfferPrevType[] | [];
  activeCity: TCityName;
  currentOffers:OfferPrevType[] | [];
  activeSorting: TSorting;
  authorizationStatus: AuthorizationStatus;
  loadedStatus: boolean;
} = {
  offers: [],
  activeCity: 'Paris',
  currentOffers: [],
  activeSorting: 'Popular',
  authorizationStatus: AuthorizationStatus.Unknown,
  loadedStatus: false,
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
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });

});

export { reducer };
