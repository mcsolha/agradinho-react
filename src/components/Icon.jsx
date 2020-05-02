import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

function Icon({ icon, className }) {
  return (
    <span className={`icon ${className}`}>
      <FontAwesomeIcon icon={icon} />
    </span>
  );
}

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  className: PropTypes.string,
};

Icon.defaultProps = {
  className: '',
};

export default Icon;
