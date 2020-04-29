import React from 'react';
import { v4 as uuid } from 'uuid';
import {
  Switch,
} from 'react-router-dom';
import routes from './router/routes';
import Header from './components/Header';
import AgrRoute from './router/AgrRoute';
import './App.scss';

function App() {
  const routeComponents = routes.map(({
    path, component, meta, exact,
  }) => (
    <AgrRoute
      path={path}
      key={uuid()}
      exact={exact}
      meta={meta}
      component={component}
    />
  ));

  return (
    <div className="agradinho">
      <Header />
      <main>
        <Switch>
          {routeComponents}
        </Switch>
      </main>
    </div>
  );
}

export default App;
