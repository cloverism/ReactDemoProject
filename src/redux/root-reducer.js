import { combineReducers } from 'redux';
import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';

// FULL STATE IN REDUX
export default combineReducers({
  user: userReducer,
  cart: cartReducer
});
