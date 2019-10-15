import React from 'react';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';

const CartIcon = ({ toggleCartHidden, itemCount }) => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

// props generated -> this.props.toggleCartHidden
const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

// Count all quantity properties
const mapStateToProps = state => {
  let itemCount = 0;
  const items = state.cart.cartItems;
  for (const item of items) itemCount += item.quantity;
  return {
    itemCount
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon);
