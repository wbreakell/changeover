import * as types from '../constants/actionTypes';

export const setBaseAmount = amount => ({
  type: types.SET_BASE_AMOUNT,
  amount
});

export const setBaseCurrency = currency => ({
  type: types.SET_BASE_CURRENCY,
  currency
});
