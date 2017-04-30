import { SET_BASE_AMOUNT } from '../constants/actionTypes';

const baseAmount = (state = 1, action) => {
  switch (action.type) {
    case SET_BASE_AMOUNT:
      return action.amount;
    default:
      return state;
  }
};

export default baseAmount;
