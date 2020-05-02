import React, { createElement, isValidElement } from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import PrivateRoute from './PrivateRoute';
import { ReactValidChildren } from '../js/propTypes';

function AgrRoute({
  path, children, meta, exact,
}) {
  const childrenEl = typeof children !== 'object' || !isValidElement(children)
    ? createElement(children)
    : children;

  return meta.authRequired
    ? (<PrivateRoute path={path} exact={exact}>{childrenEl}</PrivateRoute>)
    : (<Route path={path} exact={exact}>{childrenEl}</Route>);
}

AgrRoute.propTypes = {
  path: PropTypes.string.isRequired,
  children: ReactValidChildren.isRequired,
  meta: PropTypes.shape({
    authRequired: PropTypes.bool,
  }),
  exact: PropTypes.bool,
};

AgrRoute.defaultProps = {
  meta: { authRequired: false },
  exact: false,
};

export default AgrRoute;
