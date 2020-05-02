import React from 'react';
import PropTypes from 'prop-types';
import { ButtonTypes, ReactValidChildren, BulmaColorTypes } from '../js/propTypes';

function Button({
  text, onClick, disabled, htmlType, children, type,
}) {
  const classes = [
    'button',
    type,
  ].join(' ');

  return (
    <button
      className={classes}
      type={htmlType}
      onClick={onClick}
      disabled={disabled}
    >
      { text || children }
    </button>
  );
}

Button.propTypes = {
  children: ReactValidChildren,
  text: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  htmlType: ButtonTypes,
  type: BulmaColorTypes,
};

Button.defaultProps = {
  children: undefined,
  text: '',
  onClick: () => {},
  disabled: false,
  htmlType: 'button',
  type: '',
};

export default Button;
