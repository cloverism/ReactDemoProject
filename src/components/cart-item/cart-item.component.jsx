import React from 'react';
import './cart-item.styles.scss';

const CartItem = ({ item }) => {
  return (
    <div className="cart-item">
      <img src={item.imageUrl} alt="item" />
      <div className="item-details">
        <span className="name">{item.name}</span>
        <span className="price">
          {item.quantity} ×{' '}
          <b>¥{item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</b>
        </span>
      </div>
    </div>
  );
};

export default CartItem;
