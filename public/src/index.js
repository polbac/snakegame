import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { Router, Route } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import registerServiceWorker from './registerServiceWorker';

import './index.css';
import App from './App';


const store = {};
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
    <Provider>
        <Router history={ history }>
            <App />
        </Router>
    </Provider>, 
    document.getElementById('root')
);

registerServiceWorker();
