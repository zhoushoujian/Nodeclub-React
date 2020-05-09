import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import config from "../config"

import reducers from './reducers';

const composeEnhancers = typeof window === 'object'
  && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  && !config.isProd
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      serialize: true,
  })
  : compose;

const middleWares = [ thunk ];

if (!config.isProd) {
	middleWares.push(createLogger({ collapsed: true }));
}

const enhancer = composeEnhancers(
  applyMiddleware(...middleWares),
);

export default initialState => createStore(reducers, initialState, enhancer);
