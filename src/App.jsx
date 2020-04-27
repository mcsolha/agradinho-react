import React from 'react';
import { v4 as uuid } from 'uuid';
import {
  Route,
  Switch,
} from 'react-router-dom';
import routes from './router/routes';
import Header from './components/Header';
import './App.scss';

function App() {
  const routeComponents = routes.map(({ path, component }) => (
    <Route path={path} key={uuid()} component={component} />
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
