import * as _ from 'lodash';
import { createSelector } from 'reselect';

const getState = state => {
  return state.cart;
};

export const getCartItemQuantity = createSelector(getState, state => _.size(state));
