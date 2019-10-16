import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';
import persistReducer from './root-reducer';

// Define middlewares
const middlewares = [logger];

// Apply middleware and create the store
export const store = createStore(
  persistReducer,
  applyMiddleware(...middlewares)
);

// redux-persist -> Save state into localStorage/sessionStorage
export const persistor = persistStore(store);
