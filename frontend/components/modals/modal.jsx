import React from 'react';
import merge from 'lodash/merge';
//
// import SessionFormContainer from '../session/session_form_container';
import SearchContainer from '../search/search_container';
import WelcomeContainer from '../welcome/welcome_container';

import LoginModalContainer from './login_modal_container';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentModal: ((this.props.currentModal) ? this.props.currentModal : null),
      modalProps: {},
      modalType: null,
      show: this.props.currentModal.isShowing,
    };
    // console.log("modal.jsx", this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ show: nextProps.show, currentModal: nextProps.currentModal })
  }


  render() {
    const toggleType = (
                        this.state.show
                          ) ? (
                            [this.props.hideModal, "modal-backdrop"]
                          ) : (
                            [this.props.showModal, "no-modal"]
                        );
    const modProps = merge(
                            {},
                            this.state.modalProps,
                            { toggle: toggleType[0],
                              fetch: this.props.fetchModal,
                              show: this.state.show }
                          );

    return (
      <main className="modal">
        <header>
          <h1>Lets!!</h1>
          <WelcomeContainer modProp={modProps} />
        </header>
        <div className={toggleType[1]}>
          <LoginModalContainer modProps={modProps} />
        </div>
        {this.props.children}
      </main>
    );
  }
}

export default Modal;
