import React from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import Button from './Button';
import Icon from './Icon';
import { withFirebaseHOC, FirebaseShape } from '../firebase';
import '../style/Home.scss';

function Home({ firebase }) {
  const { currentUser: { displayName } } = firebase.auth;

  toast(`Bem vindo de volta ${displayName}`, {
    position: 'bottom-right',
  });
  return (
    <div className="container home">
      ❤ Agradinho ❤
      <Button type="is-link">
        <Icon icon="sign-out-alt" />
        Sair
      </Button>
    </div>
  );
}

Home.propTypes = {
  firebase: PropTypes.instanceOf(FirebaseShape).isRequired,
};

export default withFirebaseHOC(Home);
