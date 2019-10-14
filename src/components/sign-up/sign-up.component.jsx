import React, { Component } from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './sign-up.styles.scss';

export default class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    };
  }

  handleSubmit = async e => {
    e.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      alert('パスワードは一致しない');
      return;
    }
    try {
      // Creates a new user account associated with the specified email address and password.
      // On successful creation of the user account, this user will also be signed in to your application.
      // Gives back a userAuth object on the key user
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });
      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = e => {
    // e.target -> <input name="xxx" type="xxx" value="xxx"> itself
    const { value, name } = e.target;
    // [name] -> dynamic value -> can be password or email
    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="container__signUp">
        <div className="signUp">
          <h2 className="title">新規登録をご希望の方</h2>
          <span>アカウントを登録してください</span>

          <form className="sign-up-form" onSubmit={this.handleSubmit}>
            <FormInput
              type="text"
              name="displayName"
              value={displayName}
              handleChange={this.handleChange}
              label="ニックネーム"
              required
            />
            <FormInput
              type="email"
              name="email"
              value={email}
              handleChange={this.handleChange}
              label="メールアドレス"
              required
            />
            <FormInput
              type="password"
              name="password"
              value={password}
              handleChange={this.handleChange}
              label="パスワード"
              required
            />
            <FormInput
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              handleChange={this.handleChange}
              label="パスワード (確認用)"
              required
            />
            <CustomButton type="submit">登録</CustomButton>
          </form>
        </div>
      </div>
    );
  }
}
