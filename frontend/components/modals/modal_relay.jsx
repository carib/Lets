import React from 'react';
import { withRouter } from 'react-router-dom';

import LoginModal from './login_modal';
import SignUpModal from './signup_modal';

class ModalRelay extends React.Component {
  constructor(props) {
    super(props);
    this.modalSwitch = this.modalSwitch.bind(this);
    this.state = {
      currentModal: this.props.currentModal,
      modProps: this.props.modProps,
    }
  }

  modalSwitch(modalType) {
    switch (modalType) {
      case 'LOGIN':
        return <LoginModal modProps={this.props} />
        return "HELLOOO"
      case 'SIGNUP':
        return <SignUpModal modProps={this.props} />
      default:
        return null;
    }
  }

  render() {
    const { currentModal, modProps } = this.props;
    return (
      <div>
        {this.modalSwitch(currentModal)}
      </div>
    )
  }
};

export default withRouter(ModalRelay);
