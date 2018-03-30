import * as types from "./types";

export const fetchDetails = ( ) => ( {
    type: types.FETCH_HOME,
    meta: {
        method: "GET",
    },
} );
