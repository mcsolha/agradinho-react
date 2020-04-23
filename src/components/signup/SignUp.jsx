import React from 'react';
import BaseInput from '../form/BaseInput';
import Button from '../form/Button';
import Container from '../Container';

function SignUp() {
  return (
    <Container isFluid>
      <BaseInput
        label="Display Name"
        onChange={() => {}}
        type="displayName"
        value="Your Name Here"
      />
      <BaseInput
        label="Email"
        onChange={() => {}}
        type="email"
        value="matheus@gmail.com"
      />
      <BaseInput
        label="Password"
        onChange={() => {}}
        type="password"
        value=""
      />
      <Button text="SignUp" />
    </Container>
  );
}

export default SignUp;
