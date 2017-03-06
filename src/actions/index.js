import { SET_BASE_CURRENCY } from '../constants/actionTypes';

export const setBaseCurrency = currency => ({
  type: SET_BASE_CURRENCY,
  currency
});
