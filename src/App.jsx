import React from 'react';
import { v4 as uuid } from 'uuid';
import {
  Switch,
} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import PropTypes from 'prop-types';
import routes from './router/routes';
import AgrRoute from './router/AgrRoute';
import { withFirebaseHOC, FirebaseShape } from './firebase';
import './App.scss';
import 'react-toastify/dist/ReactToastify.css';
import Splash from './components/Splash';

function App({ firebase }) {
  const routeComponents = routes.map(({
    path, component, meta, exact,
  }) => (
    <AgrRoute
      path={path}
      key={uuid()}
      exact={exact}
      meta={meta}
    >
      {component}
    </AgrRoute>
  ));

  return (
    <div className="agradinho">
      <Splash>
        {/* <Header /> */}
        <main>
          <Switch>
            {routeComponents}
          </Switch>
        </main>
        <ToastContainer />
      </Splash>
    </div>
  );
}

App.propTypes = {
  firebase: PropTypes.instanceOf(FirebaseShape).isRequired,
};

export default withFirebaseHOC(App);
