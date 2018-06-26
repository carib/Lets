import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { AuthRoute } from '../util/route_util';

// import HeaderContainer from './header/header_container';
import SplashPage from './splash'
import SpotFormContainer from './spots/spot_form_container';
import SpotShowContainer from './spots/spot_show_container';
import SearchContainer from './search/search_container';
import ModalContainer from './modals/modal_container';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="lets-app">
        <ModalContainer>
          <Switch>
            <Route exact path="/" component={ SplashPage } />
            <Route path="/new" component={ SpotFormContainer } />
            <Route path="/spots/:spotId" component={ SpotShowContainer } />
            <Route path="/search" component={ SearchContainer } />
          </Switch>
        </ModalContainer>
      </div>
    );
  }
}

export default App;
