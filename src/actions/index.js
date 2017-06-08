// @flow

import { createAction } from 'redux-actions';
import * as types from '../constants/actionTypes';

export const setBaseAmount = createAction(types.SET_BASE_AMOUNT);
export const setBaseCurrency = createAction(types.SET_BASE_CURRENCY);
