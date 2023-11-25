import { createReducer } from '@reduxjs/toolkit';
import { OfferType } from '../types/offer';
import { TCityName } from '../common/const';
import { offers } from '../mocks/offers';
import { TSorting } from '../types/sorting';
import { getSorting } from '../common/common';

import { cityChange, citySorting } from './action';

const initialState: {
  offers: OfferType[];
  activeCity: TCityName;
  currentOffers:OfferType[] | [];
  activeSorting: TSorting;
} = {
  offers,
  activeCity: 'Paris',
  currentOffers: [],
  activeSorting: 'Popular'
};

const reducer = createReducer(initialState, (builder) => {
  builder
    // .addCase(fetchOffers, (state) => {
    //   state.offers = offers;
    // }) болванка для тестов и тд
    .addCase(cityChange, (state, action) => {
      state.activeCity = action.payload;
      state.currentOffers = state.offers.filter((offer) => offer.city.name === state.activeCity);
    })
    .addCase(citySorting, (state, action) => {
      // console.log(action.payload);
      state.activeSorting = action.payload;
      state.currentOffers = getSorting(state.currentOffers, state.activeSorting);
    });

});

export { reducer };
