import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { syncGameMiddleware } from './middlewares';

import rootStore from './reducers';
import App from './App';

const rootMiddlewares = [
  logger,
  syncGameMiddleware,
];

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