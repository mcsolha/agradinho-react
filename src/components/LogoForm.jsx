import React from 'react';
import PropTypes from 'prop-types';
import Hero from './Hero';
import Logo from './Logo';
import Form from './Form';
import { ReactValidChildren } from '../js/propTypes';
import '../style/LogoForm.scss';

function LogoForm({ children, className, onFormSubmit }) {
  return (
    <Hero isFullHeight>
      <div className={`logo-form ${className}`}>
        <Logo onForm />
        <Form onSubmit={onFormSubmit}>
          {children}
        </Form>
      </div>
    </Hero>
  );
}

LogoForm.propTypes = {
  children: ReactValidChildren,
  className: PropTypes.string,
  onFormSubmit: PropTypes.func.isRequired,
};

LogoForm.defaultProps = {
  children: undefined,
  className: '',
};

export default LogoForm;
