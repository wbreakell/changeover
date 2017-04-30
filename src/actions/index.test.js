import * as types from '../constants/actionTypes';
import * as actions from './index';

describe('Action creators', () => {
  test('create SET_BASE_AMOUNT action', () => {
    expect(actions.setBaseAmount(15)).toEqual({
      type: types.SET_BASE_AMOUNT,
      amount: 15
    });
  });

  test('create SET_BASE_CURRENCY action', () => {
    expect(actions.setBaseCurrency('GBP')).toEqual({
      type: types.SET_BASE_CURRENCY,
      currency: 'GBP'
    });
  });
});
