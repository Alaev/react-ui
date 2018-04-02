
import React from 'react';
import { Provider as ReduxProvider, createStore, applyMiddleware } from 'react-redux';
import { configureStore } from "../../../state/store";

const store = configureStore({});

export const Provider = ({ story }) => {
    return (
        <ReduxProvider store={store}>
            {story}
        </ReduxProvider>
    );
};


