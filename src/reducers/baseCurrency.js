import { SET_BASE_CURRENCY } from '../constants/actionTypes';
import currencies from '../constants/currencies';

const baseCurrency = (state = currencies.USD, action) => {
  switch (action.type) {
    case SET_BASE_CURRENCY:
      return action.currency;
    default:
      return state;
  }
};

export default baseCurrency;
