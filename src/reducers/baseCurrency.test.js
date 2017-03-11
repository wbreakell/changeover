import { SET_BASE_CURRENCY } from '../constants/actionTypes';
import baseCurrency from './baseCurrency';

describe('baseCurrency reducer', () => {
  test('returns the initial state', () => {
    expect(baseCurrency(undefined, {})).toEqual('USD');
  });

  test('handles SET_BASE_CURRENCY', () => {
    expect(
      baseCurrency('USD', {
        type: SET_BASE_CURRENCY,
        currency: 'GBP'
      })
    ).toEqual('GBP');
  });
});
