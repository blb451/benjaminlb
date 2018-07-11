// Modules
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader';

// Components
import HomeView from 'component/view/HomeView';

// Styles
import './globalStyles';

const App = () => (
  <Switch>
    <Route exact path="/" component={HomeView} />
    <Route exact path="/home" component={HomeView} />
  </Switch>
);

export default hot(module)(App);
