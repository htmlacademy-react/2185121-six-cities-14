import { createAction } from '@reduxjs/toolkit';

export const cityChange = createAction<string>('main/cityChange');
