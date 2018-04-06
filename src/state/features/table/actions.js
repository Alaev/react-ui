import * as types from './types';

export const addRow = ( product, quantity ) => ( {
    type: types.ADD_ROW,
    payload: {
        product,
        quantity,
    },
} );
