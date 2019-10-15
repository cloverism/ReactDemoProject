import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { ReactComponent as Logo } from '../../assets/icons8-sun.svg';
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import './header.styles.scss';

const Header = ({ location, currentUser, hidden }) => {
  return (
    <div className="header__container">
      <div className="header">
        <Link className="logo-container" to="/home">
          <Logo className="logo" />
        </Link>
        <div className="options">
          <Link
            className={`option ${
              location.pathname === '/shop' ? 'option-active' : ''
            }`}
            to="/shop"
          >
            SHOP
          </Link>
          <Link
            className={`option ${
              location.pathname === '/contact' ? 'option-active' : ''
            }`}
            to="/contact"
          >
            CONTACT
          </Link>
          {currentUser ? (
            <Link className="option" onClick={() => auth.signOut()} to="/">
              SIGN OUT
            </Link>
          ) : (
            <Link
              className={`option ${
                location.pathname === '/signin' ? 'option-active' : ''
              }`}
              to="/signin"
            >
              SIGN IN
            </Link>
          )}
          <CartIcon className="cart-icon" />
        </div>
        {hidden ? null : <CartDropdown />}
      </div>
    </div>
  );
};

// the function to allow access to state in root-reducer
// state -> state in root-reducer -> defined in user.reducer.js / cart.reducer.js etc...
// set props (currentUser) as value in root-reducer
const mapStateToProps = state => ({
  currentUser: state.user.currentUser,
  hidden: state.cart.hidden
});

// compose() -> Multiple HOC
export default compose(
  connect(mapStateToProps),
  withRouter
)(Header);
