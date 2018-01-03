import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { AuthRoute } from '../util/route_util';

import WelcomeContainer from './welcome/welcome_container';
import SessionFormContainer from './session/session_form_container';
import SpotIndexContainer from './spots/spot_index_container';

const App = (props) => (
  <div>
    <header>
      <h1>Lets!!</h1>
      <Switch>
        <Route path="/login" />
        <Route path="/signup" />
        <WelcomeContainer />
      </Switch>
    </header>

    <AuthRoute path="/login" component={ SessionFormContainer } />
    <AuthRoute path="/signup" component={ SessionFormContainer } />
    <Route exact path="/" component={ SpotIndexContainer } />
  </div>
);

export default App;
