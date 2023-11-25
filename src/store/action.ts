import { createAction } from '@reduxjs/toolkit';
import { TSorting } from '../types/sorting';
import { TCityName } from '../common/const';

export const cityChange = createAction<TCityName>('main/cityChange');
export const citySorting = createAction<TSorting>('main/citySorting');
