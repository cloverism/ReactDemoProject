import React from 'react';
import './sign-in-and-sign-up.styles.scss';
import SignInWithRouter from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

const SignInAndSignUpPage = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignInWithRouter />
      <SignUp />
    </div>
  );
};

export default SignInAndSignUpPage;
