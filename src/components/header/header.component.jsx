import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/icons8-sun.svg';
import { auth } from '../../firebase/firebase.utils';
import './header.styles.scss';

const Header = ({ location, currentUser }) => {
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
        </div>
      </div>
    </div>
  );
};

export default withRouter(Header);
