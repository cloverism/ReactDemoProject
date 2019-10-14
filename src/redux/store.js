import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from './root-reducer';

// Define middlewares
const middlewares = [logger];

// Apply middleware and create the store
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
