import * as types from './types';

export const addToCart = ( product, quantity ) => ( {
    type: types.ADD,
    payload: {
        product,
        quantity,
    },
} );

export const changeQuantity = ( product, quantity ) => ( {
    type: types.CHANGE_QUANTITY,
    payload: {
        product,
        quantity,
    },
} );

export const removeFromCart = ( id ) => ( {
    type: types.REMOVE,
    payload: {
        id,
    },
} );

export const clearCart = ( ) => ( {
    type: types.CLEAR,
} );

export const setCart = ( savedCart ) => ( {
    type: types.SET_CART,
    payload: {
        savedCart,
    },
} );
