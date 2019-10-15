import React from 'react';
import './custom-button.styles.scss';

const CustomButton = ({
  isGoogleSignIn,
  inverted,
  children,
  type,
  onClick
}) => {
  return (
    <button
      className={`custom-button ${inverted ? 'inverted' : ''} ${
        isGoogleSignIn ? 'google-signIn' : ''
      }`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default CustomButton;
