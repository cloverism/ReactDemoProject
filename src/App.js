import React from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import LandingPage from './pages/landing-page/landing-page.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop-page.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';

import './App.css';

class App extends React.Component {
  // unsubscribe from the listener when unmounted
  unsubscribeFromAuth = null;

  componentDidMount() {
    // REDUX
    const { setCurrentUser } = this.props;

    // Subscription
    // Listen to the auth -> When signIn/signOut, change the state
    // user -> information about logged in user
    // auth.onAuthStateChanged() -> Get back a function to unsubscribe from the listener
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        // Subscription
        // Send back snapshot (data currently stored in Firestore)
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            // snapShot.data() -> returns a JSON object of the document
            // set id, displayName, email, createdAt of this.state.currentUser
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      } else {
        setCurrentUser(null);
      }
    });
  }

  // unsubscribe from the listener when unmounted
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        {/* exclude <Header/> for landing page */}
        {this.props.location.pathname !== '/' && <Header />}
        <div className="container">
          {/* switch -> only render 1 matched route */}
          <Switch>
            {/* exact -> path must be exactly '/' */}
            <Route exact path="/" component={LandingPage} />
            <Route path="/home" component={HomePage} />
            <Route exact path="/shop" component={ShopPage} />
            <Route
              exact
              path="/signIn"
              render={() =>
                this.props.currentUser ? (
                  <Redirect to="/home" />
                ) : (
                  <SignInAndSignUpPage />
                )
              }
            />
          </Switch>
        </div>
      </div>
    );
  }
}

// Get access to state.user.currentUser
// Use reselect
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

// Set user.actions "setCurrentUser" as this.props.setCurrentUser
const mapDispatchToProps = dispatch => ({
  // Invoke setCurrentUser and use "user" object as the payload
  // props generated -> this.props.setCurrentUser
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

// compose() -> Multiple HOC
export default compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(App);
