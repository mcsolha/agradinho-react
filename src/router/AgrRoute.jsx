import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import PrivateRoute from './PrivateRoute';

function AgrRoute({
  path, component, meta, exact,
}) {
  return meta.authRequired
    ? (<PrivateRoute path={path} exact={exact}>{component}</PrivateRoute>)
    : (<Route path={path} exact={exact}>{component}</Route>);
}

AgrRoute.propTypes = {
  path: PropTypes.string.isRequired,
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.node]).isRequired,
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
