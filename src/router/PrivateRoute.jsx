import React from 'react';
import PropTypes from 'prop-types';
import {
  Route,
  Redirect,
} from 'react-router-dom';
import storage from '../store/storage';

function PrivateRoute({ children, path, exact }) {
  return (
    <Route path={path} exact={exact}>
      {
        !storage.isAuthenticated
          ? (<Redirect to="/signup" />)
          : (children)
      }
    </Route>
  );
}

PrivateRoute.propTypes = {
  path: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.node]).isRequired,
  exact: PropTypes.bool,
};

PrivateRoute.defaultProps = {
  exact: false,
};

export default PrivateRoute;
