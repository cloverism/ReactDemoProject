import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
// storage -> Use localStorage
// sessionStorage -> Use sessionStorage
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';

const persistConfig = {
  key: 'root',
  storage,
  // select the reducer need to be saved in localStorage
  whitelist: ['cart']
};

// FULL STATE IN REDUX
const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer
});

// Use redux-persist in the root reducer
export default persistReducer(persistConfig, rootReducer);
