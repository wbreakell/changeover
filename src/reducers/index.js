import { combineReducers } from 'redux';
import baseAmount from './baseAmount';
import baseCurrency from './baseCurrency';

const reducer = combineReducers({
  baseAmount,
  baseCurrency
});

export default reducer;
