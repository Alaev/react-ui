import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import * as reducers from './features';
import { logger } from './middlewares';

declare global {
    interface Window { __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any; }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export function configureStore (initialState: any) {
    const rootReducer = combineReducers(reducers);

    return createStore(
        rootReducer,
        initialState,
        composeEnhancers(applyMiddleware(
            logger,
            thunkMiddleware,
        )),
    );
}