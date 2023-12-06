import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { TState, TAppDispatch } from '../types/state';
import { APIRoute, AuthorizationStatus} from '../common/const';
import { loadOffers, requireAuthorization, userInfo, offerInfoLoading, offersLoading } from '../store/action';
import { OfferPrevType, TOfferInfo } from '../types/offer'; //доделать норм типизацию
import { AuthData } from '../types/auth-data';
import { TUserData } from '../types/user-data';
import { saveToken, dropToken } from '../services/token';


export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: TAppDispatch;
  state: TState;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<OfferPrevType[]>(APIRoute.Offers);
      dispatch(loadOffers(data));
    } catch {
      dispatch(offersLoading(true));
    }
  }
);

export const fetchOfferInfoAction = createAsyncThunk<void, undefined, {
  dispatch: TAppDispatch;
  state: TState;
  extra: AxiosInstance;
}>(
  'data/fetchOfferInfo',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(offersLoading(true)); // начинаем загрузку
    const {data} = await api.get<TOfferInfo>(APIRoute.Offers);
    dispatch(offerInfoLoading(data));
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: TAppDispatch;
  state: TState;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try{
      const {data} = await api.get<TUserData>(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
      dispatch(userInfo(data));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  }
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: TAppDispatch;
  state: TState;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data} = await api.post<TUserData>(APIRoute.Login, {email, password});
    saveToken(data.token);
    dispatch(userInfo(data));
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
  }
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: TAppDispatch;
  state: TState;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  }
);
