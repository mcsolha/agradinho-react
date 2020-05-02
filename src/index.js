/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import Firebase, { FirebaseProvider } from './firebase/index';
import App from './App';
import './js/fontAwesomeLib';
import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <FirebaseProvider value={Firebase}>
        <App />
      </FirebaseProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
