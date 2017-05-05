import { SET_BASE_AMOUNT } from '../constants/actionTypes';
import baseAmount from './baseAmount';

describe('baseAmount reducer', () => {
  test('returns the initial state', () => {
    expect(baseAmount(undefined, {})).toEqual(1);
  });

  test('handles SET_BASE_AMOUNT', () => {
    expect(
      baseAmount(1, {
        type: SET_BASE_AMOUNT,
        payload: 15
      })
    ).toEqual(15);
  });
});
