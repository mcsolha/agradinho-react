import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as LogoSVG } from '../svg/logo.svg';
import '../style/Logo.scss';

function Logo({ className, onForm }) {
  const onFormClass = onForm ? 'on-form' : '';

  return (
    <div className={`logo ${className} ${onFormClass}`}>
      <LogoSVG />
    </div>
  );
}

Logo.propTypes = {
  className: PropTypes.string,
  onForm: PropTypes.bool,
};

Logo.defaultProps = {
  className: '',
  onForm: false,
};

export default Logo;
