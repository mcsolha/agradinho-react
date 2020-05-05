import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withFirebaseHOC, FirebaseShape } from '../firebase';
import Icon from './Icon';
import Hero from './Hero';
import '../style/Splash.scss';
import { ReactValidChildren } from '../js/propTypes';

function Splash({ firebase, children }) {
  const [userCheck, setUserCheck] = useState(false);

  const unsubscribe = firebase.checkUserAuth((user) => {
    unsubscribe();
    setUserCheck(true);
  });

  return !userCheck
    ? (
      <Hero
        className="splash"
        isFullHeight
      >
        <Icon icon="spinner" pulse size="2x" />
      </Hero>
    )
    : (children);
}

Splash.propTypes = {
  firebase: PropTypes.instanceOf(FirebaseShape).isRequired,
  children: ReactValidChildren.isRequired,
};

export default withFirebaseHOC(Splash);
