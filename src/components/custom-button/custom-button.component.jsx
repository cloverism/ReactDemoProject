import React from 'react';
import './custom-button.styles.scss';

const CustomButton = ({ isGoogleSignIn, children, type, onClick }) => {
  return (
    <button
      className={`custom-button ${isGoogleSignIn ? 'google-signIn' : ''}`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default CustomButton;
