import React from 'react';
import PropTypes from 'prop-types';
import { ReactValidChildren } from '../js/propTypes';

function Container({ children, isFluid }) {
  const className = `container ${isFluid ? 'is-fluid' : ''}`;
  return (
    <div className={className}>
      {children}
    </div>
  );
}

Container.propTypes = {
  children: ReactValidChildren,
  isFluid: PropTypes.bool,
};

Container.defaultProps = {
  children: undefined,
  isFluid: false,
};

export default Container;
