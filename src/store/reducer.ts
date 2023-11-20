import { createReducer } from '@reduxjs/toolkit';
import { OfferType } from '../types/offer';
import { CityName } from '../common/const';
import { offers } from '../mocks/offers';

import { cityChange } from './action';

const initialState: {
  offers: OfferType[];
  activeCity: string;
  currentOffers:OfferType[] | [];
} = {
  offers,
  activeCity: CityName.Paris,
  currentOffers: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    // .addCase(fetchOffers, (state) => {
    //   state.offers = offers;
    // }) болванка для тестов и тд
    .addCase(cityChange, (state, action) => {
      state.activeCity = action.payload;
      state.currentOffers = state.offers.filter((offer) => offer.city.name === state.activeCity);
    });

});

export { reducer };
