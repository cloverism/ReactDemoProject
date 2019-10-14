import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import './App.css';
import LandingPage from './pages/landing-page/landing-page.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop-page.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends React.Component {
  constructor() {
    super();
    // Save info about user logged in
    this.state = {
      currentUser: null
    };
  }

  // unsubscribe from the listener when unmounted
  unsubscribeFromAuth = null;

  componentDidMount() {
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
          // snapShot.data() -> returns a JSON object of the document
          this.setState({
            // set id, displayName, email, createdAt of this.state.currentUser
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });
      } else {
        this.setState({ currentUser: null });
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
        {this.props.location.pathname !== '/' && (
          <Header currentUser={this.state.currentUser} />
        )}
        <div className="container">
          {/* switch -> only render 1 matched route */}
          <Switch>
            {/* exact -> path must be exactly '/' */}
            <Route exact path="/" component={LandingPage} />
            <Route path="/home" component={HomePage} />
            <Route exact path="/shop" component={ShopPage} />
            <Route path="/signIn" component={SignInAndSignUpPage} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default withRouter(App);
