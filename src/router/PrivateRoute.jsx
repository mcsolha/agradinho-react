import React from 'react';
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Link,
  Redirect,
  useHistory,
  useLocation,
} from 'react-router-dom';

function AuthExample() {
  return (
    <Router>
      <div>
        Blabla
      </div>
      <ul>
        <li>
          <Link to="/test">Test</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>

        <Switch>
          <Route path="/test">
            <div>
              This is the test!
            </div>
          </Route>
          <Route path="/about">
            <div>
              About this app!
            </div>
          </Route>
          <Route path="*">
            <div>
              404 not found!
            </div>
          </Route>
        </Switch>
      </ul>
    </Router>
  );
}

function PrivateRoute() {
  return (
    
  );
}

export default PrivateRoute;