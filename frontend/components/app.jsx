import React from 'react';
import { Switch, Route } from 'react-router-dom';

import WelcomeContainer from './welcome/welcome_container';

const App = (props) => (
  <div>
    <header>
      <h1>Lets!!</h1>
      <WelcomeContainer />
    </header>
  </div>
);

export default App;
