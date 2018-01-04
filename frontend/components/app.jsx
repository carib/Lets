import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { AuthRoute } from '../util/route_util';

import Modal from './session/modal';

import WelcomeContainer from './welcome/welcome_container';
import SessionFormContainer from './session/session_form_container';
import SearchContainer from './search/search_container';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showModal: false };
    this.toggleModal = this.toggleModal.bind(this);
  }


  toggleModal() {
    this.setState({
      showModal: !this.state.showModal
    });
  }

  render() {
    return (
      <div className="App">
        <WelcomeContainer
          toggleModal={this.toggleModal}/>
        <Route exact path="/" component={ SearchContainer } />
        <Modal
          show={this.state.showModal}
          onClose={this.toggleModal}
          toggleModal={this.toggleModal}>
          <AuthRoute
               path="/login"
               component={ SessionFormContainer }
               toggleModal={ this.toggleModal } />
          <AuthRoute
            path="/signup"
            component={ SessionFormContainer }
            toggleModal={ this.toggleModal } />
        </Modal>
      </div>
    )
  }
}


export default App;
//
// <div>
//   <header>
//     <h1>Lets!!</h1>
//     <WelcomeContainer />
//   </header>
//   <AuthRoute
//     path="/login"
//     component={ SessionFormContainer }
//     toggleModal={ this.toggleModal } />
//   <AuthRoute
//     path="/signup"
//     component={ SessionFormContainer }
//     toggleModal={ this.toggleModal } />
//   <Route exact path="/" component={ SearchContainer } />
// </div>
