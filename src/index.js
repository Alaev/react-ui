import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import App from './views/layouts/app';
import { configureStore } from './state/store';
import registerServiceWorker from './registerServiceWorker';


import 'bulma/css/bulma.css'


const REDUX_INITIAL_DATA = {};
const reduxStore = configureStore(REDUX_INITIAL_DATA);

const RootHtml = () => (
    <ReduxProvider store={reduxStore}>
        <Router>
            <App />
        </Router>
    </ReduxProvider>
);

ReactDOM.render(<RootHtml />, document.getElementById('root'));
registerServiceWorker();
