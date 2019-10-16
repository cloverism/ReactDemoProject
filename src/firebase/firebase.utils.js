import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDiewIl_6nZiPR703RyCqAsl6S3aVM1zK8',
  authDomain: 'personalproject-db.firebaseapp.com',
  databaseURL: 'https://personalproject-db.firebaseio.com',
  projectId: 'personalproject-db',
  storageBucket: 'personalproject-db.appspot.com',
  messagingSenderId: '840291590453',
  appId: '1:840291590453:web:f0383327c3a2c8fbf46c7c',
  measurementId: 'G-PR20SMC1PG'
};

// userAuth -> information about logged in user -> same as "userAuth" in app.js
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  // QUERY -> Get a query reference
  // Firestore will ALWAYS return ref/snapshot
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  // Firestore give back a snapshot from the ref using .get()
  // snapShot.exists -> true/false -> false if data does not exist
  const snapShot = await userRef.get();

  // Write into Firestore if user data does not exist
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.error('Error at creating user: ', error.message);
    }
  }
  // If user already exists, just return userRef object -> update currentUser state in app.js
  return userRef;
};

firebase.initializeApp(config);

// Google Authentication
export const auth = firebase.auth();
// Google Firestore
export const firestore = firebase.firestore();

// Google Auth config
const provider = new firebase.auth.GoogleAuthProvider();
// Always trigger Google popup to signIn
provider.setCustomParameters({ prompt: 'select_account' });
// Sign in
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
