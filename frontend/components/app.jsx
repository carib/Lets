import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { AuthRoute } from '../util/route_util';

import HeaderContainer from './header/header_container';
import SessionFormContainer from './session/session_form_container';
import SearchContainer from './search/search_container';
import ModalContainer from './modals/modal_container';

class App extends React.Component {
  constructor(props) {
    super(props);
  }


  // REMOVE AFTER TESTING
  testFunc() {
    console.log("This works!");
  }

  render() {
    return (
      <div>
        <ModalContainer func={this.testFunc}>
          <Route exact path="/" component={ SearchContainer } />
        </ModalContainer>
      </div>
    );
  }
}

export default App;
