import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { AuthRoute } from '../util/route_util';

import HeaderContainer from './header/header_container';
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
      <div>
        <ModalContainer>
          <Route exact path="/:spotId" component={ SpotShowContainer } />
          <AuthRoute path="/new" component={ SpotFormContainer } />
          <Route exact path="/" component={ SearchContainer } />
        </ModalContainer>
      </div>
    );
  }
}

export default App;
