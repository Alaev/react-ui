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
   
};

const table = createReducer(initialState)({
    [types.ADD_ROW]: (state, action) => {
        const { row } = action.payload;
        return { ...state, row };
    }
   
});

export default table;