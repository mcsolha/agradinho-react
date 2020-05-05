import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Link, useHistory, useLocation, Redirect,
} from 'react-router-dom';
import { toast } from 'react-toastify';
import BaseInput from './BaseInput';
import Button from './Button';
import { withFirebaseHOC, FirebaseShape } from '../firebase/index';
import '../style/Login.scss';
import LogoForm from './LogoForm';
import paths from '../router/paths';

function Login({ firebase }) {
  const { currentUser } = firebase.auth;
  const { state } = useLocation();
  const [email, setEmail] = useState(state && state.email);
  const [password, setPassword] = useState('');
  const [hasToVerifyEmail, setHasToVerifyEmail] = useState(state && state.hasToVerifyEmail);
  const history = useHistory();

  const emailHandler = (e) => setEmail(e.target.value);
  const passwordHandler = (e) => setPassword(e.target.value);

  useEffect(() => {
    if (hasToVerifyEmail) {
      toast('Por favor, verifique seu email e realize o login.');
    }
  }, [hasToVerifyEmail]);

  async function performLogin(e) {
    e.preventDefault();

    try {
      const { user } = await firebase.loginWithEmail(email, password);

      if (user.emailVerified) {
        return history.replace(paths.HOME);
      }

      setPassword('');

      setHasToVerifyEmail(true);

      return toast('Por favor, verifique seu email e realize o login.');
    } catch (err) {
      const { code } = err;

      console.log(code);

      switch (code) {
        case 'auth/wrong-password':
          toast('Oops, senha incorreta!');

          return undefined;

        case 'auth/user-not-found':
          toast(`Não encontramos nenhum usuário com o email ${email}`);

          return undefined;
        default:
          return code;
      }
    }
  }

  async function resendVerificationEmail() {
    firebase.auth.currentUser.sendEmailVerification();
    toast('Email de verificação enviado. Cheque seu email 😉');
  }

  return currentUser && currentUser.emailVerified
    ? (<Redirect to={paths.HOME} />)
    : (
      <LogoForm
        className="login"
        onFormSubmit={performLogin}
      >
        <BaseInput
          onChange={emailHandler}
          label="Email"
          type="email"
          value={email}
          placeholder="Email"
          leftIcons={['envelope']}
        />
        <BaseInput
          onChange={passwordHandler}
          label="Password"
          type="password"
          value={password}
          placeholder="Password"
          leftIcons={['lock']}
        />
        <div className="field half-margin">
          <Button text="Login" htmlType="submit" />
        </div>
        <span className="login__signup-text">
          Ainda não possui uma conta? Registre-se
          {' '}
          <Link to="/signup">aqui!</Link>
        </span>
        {
        hasToVerifyEmail && (
        <div className="field">
          <button
            className="login__verify-link"
            type="button"
            onClick={resendVerificationEmail}
          >
            Não recebeu o email de verificação?
          </button>
        </div>
        )
      }
      </LogoForm>
    );
}

Login.propTypes = {
  firebase: PropTypes.instanceOf(FirebaseShape).isRequired,
};

export default withFirebaseHOC(Login);
