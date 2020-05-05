/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
// import * as serviceWorker from './serviceWorker';
import Firebase, { FirebaseProvider } from './firebase/index';
import App from './App';
import './js/fontAwesomeLib';
import './index.scss';
import store from './store';

window.addEventListener('beforeunload', () => {
  const user = Firebase.auth.currentUser;

  if (user && !user.emailVerified) {
    Firebase.signOut();
  }
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <FirebaseProvider value={Firebase}>
          <App />
        </FirebaseProvider>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
