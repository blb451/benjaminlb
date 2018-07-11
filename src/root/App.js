// Modules
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader';

// Components

// Styles
import './globalStyles';

const App = () => (
  <Switch>
    <Route exact path="/" component={} />
    <Route exact path="/new" component={} />
  </Switch>
);

export default hot(module)(App);
