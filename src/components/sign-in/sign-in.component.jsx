import React, { Component } from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import { withRouter } from 'react-router';
import './sign-in.styles.scss';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleChange = e => {
    // e.target -> <input name="xxx" type="xxx" value="xxx"> itself
    const { value, name } = e.target;
    // [name] -> dynamic value -> can be password or email
    this.setState({ [name]: value });
  };

  handleSubmit = async e => {
    e.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.props.history.push('/home');
      this.setState({ email: '', password: '' });
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    return (
      <div className="container__signIn">
        <div className="sign-in">
          <h2 className="title">既にアカウントをお持ちの方</h2>
          <span>ログインしてください</span>

          <form onSubmit={this.handleSubmit}>
            <FormInput
              name="email"
              type="email"
              label="メールアドレス"
              value={this.state.email}
              handleChange={this.handleChange}
              required
            />
            <FormInput
              name="password"
              type="password"
              label="パスワード"
              value={this.state.password}
              handleChange={this.handleChange}
              required
            />
            <div className="buttons">
              <CustomButton type="submit">ログイン</CustomButton>
              <CustomButton
                type="button"
                onClick={signInWithGoogle}
                isGoogleSignIn
              >
                Googleでログイン
              </CustomButton>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
const SignInWithRouter = withRouter(SignIn);
export default SignInWithRouter;
