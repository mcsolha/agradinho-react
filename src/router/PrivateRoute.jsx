import React from 'react';
import PropTypes from 'prop-types';
import {
  Route,
  Redirect,
} from 'react-router-dom';
import { useStore } from 'react-redux';
import { ReactValidChildren } from '../js/propTypes';

function PrivateRoute({
  children, path, exact,
}) {
  const store = useStore();
  const { user } = store.getState();

  return (
    <Route path={path} exact={exact}>
      {
        user && user.emailVerified
          ? (children)
          : (
            <Redirect
              push={false}
              to={{
                pathname: '/login',
                state: {
                  hasToVerifyEmail: user && !user.emailVerified,
                },
              }}
            />
          )
      }
    </Route>
  );
}

PrivateRoute.propTypes = {
  path: PropTypes.string.isRequired,
  children: ReactValidChildren.isRequired,
  exact: PropTypes.bool,
};

PrivateRoute.defaultProps = {
  exact: false,
};

export default PrivateRoute;
