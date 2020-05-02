import React from 'react';
import PropTypes from 'prop-types';
import { BulmaColorTypes, ReactValidChildren } from '../js/propTypes';
import '../style/Hero.scss';
import Container from './Container';

function Hero({ isFullHeight, type, children }) {
  const classes = [
    'hero',
    isFullHeight ? 'is-fullheight' : '',
    type,
  ].join(' ');

  return (
    <section className={classes}>
      <div className="hero-body">
        <Container>
          {children}
        </Container>
      </div>
    </section>
  );
}

Hero.propTypes = {
  isFullHeight: PropTypes.bool,
  type: BulmaColorTypes,
  children: ReactValidChildren,
};

Hero.defaultProps = {
  isFullHeight: false,
  type: '',
  children: undefined,
};

export default Hero;
