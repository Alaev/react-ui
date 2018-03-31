import * as types from './types';
import { createReducer } from '../../utils';
import * as _ from 'lodash';

/* State shape
{
    id: {
        id,
        product,
        quantity,
    }
}
*/

const initialState = {
    3: { id: 1, name: 'bob' }
};

const cart = createReducer(initialState)({
    [types.ADD]: (state, action) => {
        const { product, quantity } = action.payload;
        return { ...state, [product.id]: { ...product, quantity } };
    },
    [types.CHANGE_QUANTITY]: (state, action) => {
        const { product, quantity } = action.payload;
        return { ...state, [product.id]: { ...product, quantity } };
    },
    [types.REMOVE]: (state, action) => {
        const { id } = action.payload;
        return _.omit(state, id);
    },
    [types.CLEAR]: () => ({}),
    [types.SET_CART]: (state = initialState, action) => {
        const { savedCart } = action.payload;
        return savedCart;
    }
});

export default cart;