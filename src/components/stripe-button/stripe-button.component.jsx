import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { clearCart } from '../../redux/cart/cart.actions';

const StripeButton = ({ price, history, clearCart }) => {
  const publishableKey = 'pk_test_GfimI3mzikHZ80N8No0x3yr8';

  const onToken = () => {
    history.push('/home');
    clearCart();
    alert('お支払いが完了しました');
  };

  return (
    <StripeCheckout
      label="注文を確定する"
      name="ばくまる通販"
      billingAddress
      shippingAddress
      description={`合計: ¥${price
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}
      amount={price}
      panelLabel="注文を確定する"
      locale="ja"
      currency="JPY"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

const mapDispatchToProps = dispatch => ({
  clearCart: () => dispatch(clearCart())
});

export default compose(
  withRouter,
  connect(
    null,
    mapDispatchToProps
  )
)(StripeButton);
