import { createSelector } from 'reselect';

// input selector
const selectCart = state => state.cart;

// output selector -> memorization / caching
export const selectCartItems = createSelector(
  [selectCart],
  // return the value we want from the selector -> cart.cartItems
  cart => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCarItems],
  cartItems => {
    let itemCount = 0;
    for (const item of cartItems) itemCount += item.quantity;
    return itemCount;
  }
);
