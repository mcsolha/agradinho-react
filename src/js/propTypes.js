import PropTypes from 'prop-types';

export const ReactValidChildren = PropTypes.oneOfType([PropTypes.func, PropTypes.node]);

export const BulmaColorTypes = PropTypes.oneOf([
  'is-primary',
  'is-link',
  'is-info',
  'is-success',
  'is-warning',
  'is-danger',
  '',
]);

export const ButtonTypes = PropTypes.oneOf([
  'button',
  'submit',
  'reset',
]);
