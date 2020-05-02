import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { Redirect, Link } from 'react-router-dom';
import BaseInput from './BaseInput';
import Button from './Button';
import { withFirebaseHOC, FirebaseShape } from '../firebase/index';
import '../style/SignUp.scss';
import LogoForm from './LogoForm';

function SignUp({ firebase }) {
  const [formData, setFormData] = useState({
    displayName: '',
    email: '',
    password: '',
  });

  const [disabled, setDisabled] = useState(false);
  const [registered, setRegistered] = useState(false);

  function onChangeInput({ target }) {
    setFormData({ ...formData, [target.name]: target.value });
  }

  async function registerNewUser(e) {
    const { displayName, email, password } = formData;

    e.preventDefault();

    setDisabled(true);

    try {
      await firebase.signupWithEmail(email, password, displayName);

      setRegistered(true);

      toast('Verifique seu email!');
    } catch (err) {
      toast('Algo deu errado: ', err.message);
      setDisabled(false);
    }
  }

  const registerFormJSX = (
    <LogoForm
      onFormSubmit={registerNewUser}
      className="signup"
    >
      <BaseInput
        label="display name"
        onChange={onChangeInput}
        type="text"
        value={formData.displayName}
        placeholder="Your Name"
        disabled={disabled}
        leftIcons={['id-card']}
      />
      <BaseInput
        label="email"
        onChange={onChangeInput}
        type="email"
        value={formData.email}
        placeholder="Email"
        disabled={disabled}
        leftIcons={['envelope']}
      />
      <BaseInput
        label="password"
        onChange={onChangeInput}
        type="password"
        value={formData.password}
        placeholder="Password"
        disabled={disabled}
        leftIcons={['lock']}
      />
      <div className="field half-margin">
        <Button
          text="Registrar"
          disabled={disabled}
          htmlType="submit"
        />
      </div>

      <div className="field">
        <span className="signup__login-text">
          Já possui uma conta? Faça login
          {' '}
          <Link to="/login">aqui!</Link>
        </span>
      </div>
    </LogoForm>
  );

  const redirectJSX = (
    <Redirect to="/login" />
  );

  return registered
    ? redirectJSX
    : registerFormJSX;
}

SignUp.propTypes = {
  firebase: PropTypes.instanceOf(FirebaseShape),
};

SignUp.defaultProps = {
  firebase: undefined,
};

export default withFirebaseHOC(SignUp);
