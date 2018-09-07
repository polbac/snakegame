import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import ReduxThunk from 'redux-thunk'
import { syncGameMiddleware } from './middlewares';
import config from './config';

import rootStore from './reducers';
import App from './App';

let rootMiddlewares = [
  ReduxThunk,
  syncGameMiddleware,
];

if (config.logger) {
  rootMiddlewares = [
    ...rootMiddlewares,
    logger
  ];
}

const store = createStore(
  rootStore,
  applyMiddleware(
    ...rootMiddlewares
  ),
);


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);