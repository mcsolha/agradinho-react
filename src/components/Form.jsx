import React from 'react';
import PropTypes from 'prop-types';
import { ReactValidChildren } from '../js/propTypes';

function Form({ children, onSubmit, className }) {
  return (
    <form className={`form ${className}`} onSubmit={onSubmit}>
      { children }
    </form>
  );
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  children: ReactValidChildren,
  className: PropTypes.string,
};

Form.defaultProps = {
  children: undefined,
  className: '',
};

export default Form;
