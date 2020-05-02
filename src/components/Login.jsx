import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BaseInput from './BaseInput';
import Button from './Button';
import { withFirebaseHOC } from '../firebase/index';
import '../style/Login.scss';
import LogoForm from './LogoForm';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const emailHandler = (e) => setEmail(e.target.value);
  const passwordHandler = (e) => setPassword(e.target.value);
  const performLogin = (e) => {
    e.preventDefault();
  };

  return (
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
        <Button text="Login" />
      </div>
      <span className="login__signup-text">
        Ainda não possui uma conta? Registre-se
        {' '}
        <Link to="/signup">aqui!</Link>
      </span>
    </LogoForm>
  );
}

export default withFirebaseHOC(Login);
