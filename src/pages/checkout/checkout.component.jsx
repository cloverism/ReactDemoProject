import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeButton from '../../components/stripe-button/stripe-button.component';
import {
  selectCartItems,
  selectCartTotalPrice
} from '../../redux/cart/cart.selectors';

import './checkout.styles.scss';

const CheckoutPage = ({ cartItems, totalPrice }) => {
  if (cartItems.length !== 0) {
    return (
      <div className="checkout-page">
        <div className="checkout-header">
          <div className="header-block">
            <span>商品</span>
          </div>
          <div className="header-block">
            <span>数量</span>
          </div>
          <div className="header-block">
            <span>小計</span>
          </div>
          <div className="header-block">
            <span>削除</span>
          </div>
        </div>
        {cartItems.map(item => (
          <CheckoutItem key={item.id} cartItem={item} />
        ))}
        <div className="total">
          <span>
            合計: ¥{totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          </span>
        </div>
        <div className="test-warning">
          テストカードを使ってください
          <br />
          4242 4242 4242 4242 - 01/20 - 123
        </div>
        <StripeButton price={totalPrice} />
      </div>
    );
  } else {
    return (
      <div className="checkout-page checkout-page-empty">
        <h2>カゴに商品はありません</h2>
      </div>
    );
  }
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  totalPrice: selectCartTotalPrice
});

export default connect(mapStateToProps)(CheckoutPage);
