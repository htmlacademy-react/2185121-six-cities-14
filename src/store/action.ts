import { createAction } from '@reduxjs/toolkit';
import { TSorting } from '../types/sorting';
import { TCityName, AuthorizationStatus } from '../common/const';
import { OfferPrevType } from '../types/offer'; // доделать тип

export const cityChange = createAction<TCityName>('main/cityChange');
export const citySorting = createAction<TSorting>('main/citySorting');
export const loadOffers = createAction<OfferPrevType[]>('data/loadOffers');
export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
