import { SET_BASE_CURRENCY } from '../constants/actionTypes';

const baseCurrency = (state = 'USD', action) => {
  switch (action.type) {
    case SET_BASE_CURRENCY:
      return action.currency;
    default:
      return state;
  }
};

export default baseCurrency;