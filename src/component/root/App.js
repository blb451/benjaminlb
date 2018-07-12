// Modules
import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

// Components
import HomeView from 'component/view/HomeView';
// import ProjectView from 'component/view/ProjectView';
import Decoration from 'component/base/Decoration';
import Transitions from 'component/base/SlideTransition';

// Styles
import './globalStyles';

// Fontawesome
library.add(fab, far);

const App = () => (
  <Fragment>
    <Route
      render={({ location }) => (
        <Transitions location={location.key}>
          <Switch location={location}>
            <Route path="/" component={HomeView} />
            {/* <Route exact path="/project" component={ProjectView} /> */}
          </Switch>
        </Transitions>
      )}
    />
    <Decoration />
  </Fragment>
);

export default hot(module)(App);
