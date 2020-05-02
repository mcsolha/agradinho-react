// @flow
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import config from './config';

// Initialize Firebase
const app = firebase.initializeApp(config);
const auth = app.auth();

export function FirebaseShape() {
  this.auth = auth;

  this.loginWithEmail = (email, password) => auth
    .signInWithEmailAndPassword(email, password);

  this.signupWithEmail = async (email, password, displayName) => {
    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);

      try {
        await user.updateProfile({ displayName });
      } catch (error) {
        // TODO: Treat error
      }

      user.sendEmailVerification();
    } catch (error) {
      // TODO: Treat error
    }
  };

  this.signOut = () => auth.signOut();

  this.checkUserAuth = (observer) => auth.onAuthStateChanged(observer);
}

const Firebase = new FirebaseShape();

export default Firebase;
