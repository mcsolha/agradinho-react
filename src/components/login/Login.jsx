import React, { useState } from 'react';
import BaseInput from '../form/BaseInput';
import Form from '../form/Form';
import Container from '../Container';
import './scss/Login.scss';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const emailHandler = (e) => setEmail(e.target.value);
  const passwordHandler = (e) => setPassword(e.target.value);
  const performLogin = (e) => {
    e.preventDefault();

    console.log(email);
    console.log(password);
  };

  return (
    <Container isFluid>
      <Form onSubmit={performLogin}>
        <BaseInput
          onChange={emailHandler}
          label="Email"
          type="email"
          value={email}
        />
        <BaseInput
          onChange={passwordHandler}
          label="Password"
          type="password"
          value={password}
        />
        <button className="button is-dark" type="submit">Login</button>
      </Form>
    </Container>
  );
}

export default Login;
