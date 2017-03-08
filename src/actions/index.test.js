import * as types from '../constants/actionTypes';
import * as actions from './index';

describe('Action creators', () => {
  test('create SET_BASE_CURRENCY action', () => {
    expect(actions.setBaseCurrency('GBP')).toEqual({
      type: types.SET_BASE_CURRENCY,
      currency: 'GBP'
    });
  });
});
