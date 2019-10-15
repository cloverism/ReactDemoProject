import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import './cart-dropdown.styles.scss';

const CartDropdown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length !== 0 ? (
          cartItems.map(item => <CartItem key={item.id} item={item} />)
        ) : (
          <h3>カゴに商品はありません</h3>
        )}
      </div>
      <CustomButton>CHECK OUT</CustomButton>
    </div>
  );
};

// Get cart props from redux
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default connect(mapStateToProps)(CartDropdown);
