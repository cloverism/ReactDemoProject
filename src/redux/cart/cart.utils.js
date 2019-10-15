// Check if the new item added is already existed in the array
export const addItemToCart = (cartItems, newCartItem) => {
  const existingCartItem = cartItems.find(item => item.id === newCartItem.id);

  // If the newItem is already existed in the current array
  // -> update the quantity property by + 1
  if (existingCartItem) {
    return cartItems.map(item =>
      item.id === newCartItem.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }

  // If a brand new item is added
  // -> update the new item object with a new property of quantity
  // Return a new array
  return [...cartItems, { ...newCartItem, quantity: 1 }];
};
