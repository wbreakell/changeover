import { SET_BASE_CURRENCY } from '../constants/actionTypes';
import currencies from '../constants/currencies';
import baseCurrency from './baseCurrency';

describe('baseCurrency reducer', () => {
  test('returns the initial state', () => {
    expect(baseCurrency(undefined, {})).toEqual(currencies.USD);
  });

  test('handles SET_BASE_CURRENCY', () => {
    expect(
      baseCurrency(currencies.USD, {
        type: SET_BASE_CURRENCY,
        payload: currencies.GBP
      })
    ).toEqual(currencies.GBP);
  });
});
