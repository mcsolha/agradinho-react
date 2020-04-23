import React from 'react';
import PropTypes from 'prop-types';

function Container({ children, isFluid }) {
  const className = `container ${isFluid ? 'is-fluid' : ''}`;
  return (
    <div className={className}>
      {children}
    </div>
  );
}

Container.propTypes = {
  children: PropTypes.node,
  isFluid: PropTypes.bool,
};

Container.defaultProps = {
  children: undefined,
  isFluid: false,
};

export default Container;
