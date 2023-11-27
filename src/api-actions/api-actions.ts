import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { TState, TAppDispatch } from '../types/state';
import { APIRoute } from '../common/const';
import { loadOffers } from '../store/action';
import { OfferPrevType } from '../types/offer'; //доделать норм типизацию

export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: TAppDispatch;
  state: TState;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<OfferPrevType[]>(APIRoute.Offers);
    dispatch(loadOffers(data));
  }
);
