import { createSelector } from 'reselect';

// input selector
const selectCart = state => state.cart;

// output selector -> memorization / caching
export const selectCartItems = createSelector(
  // [selectCart] -> An array of selectors
  [selectCart],
  // cart -> output of the previous selector
  // cartItems -> can be used in the next selector
  cart => cart.cartItems
);

export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems => {
    // Get the total quantity of cartItems
    let itemCount = 0;
    for (const item of cartItems) itemCount += item.quantity;
    return itemCount;
  }
);

export const selectCartTotalPrice = createSelector(
  [selectCartItems],
  cartItems => {
    // Get the total price of cartItems
    let totalPrice = 0;
    for (const item of cartItems) totalPrice += item.price * item.quantity;
    return totalPrice;
  }
);
