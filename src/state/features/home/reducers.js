import { combineReducers } from "redux";
import * as types from "./types";
import { createReducer } from "../../utils";

/* State shape
{
    homepage: {
        details
    }
}
*/

const detailsReducer = createReducer( {} )( {
    [ types.FETCH_HOME_COMPLETED ]: {
        details:'1'
    }
} );

export default combineReducers( {
    details: detailsReducer,
} );
