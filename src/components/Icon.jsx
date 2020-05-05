import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

function Icon({
  icon, className, pulse, size,
}) {
  return (
    <span className={`icon ${className}`}>
      <FontAwesomeIcon icon={icon} pulse={pulse} size={size} />
    </span>
  );
}

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  className: PropTypes.string,
  pulse: PropTypes.bool,
  size: PropTypes.string,
};

Icon.defaultProps = {
  className: '',
  pulse: false,
  size: '1x',
};

export default Icon;
