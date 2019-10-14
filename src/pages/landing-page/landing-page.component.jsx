import React from 'react';
import { Link } from 'react-router-dom';
import './landing-page.styles.scss';

const LandingPage = () => {
  return (
    <div className="landing__container">
      <Link to="/home">
        <div className="landing__btn">
          <h1 className="landing__text">ENTER</h1>
        </div>
      </Link>
      <div className="landing__title">
        <h1>ばくまる通販</h1>
      </div>
    </div>
  );
};

export default LandingPage;
