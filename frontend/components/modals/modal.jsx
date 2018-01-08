import React from 'react';
import merge from 'lodash/merge';

import SearchContainer from '../search/search_container';
import HeaderContainer from '../header/header_container';
import HeaderMenu from '../header/header_menu';


import ModalRelayContainer from './modal_relay_container';


class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentModal: ((this.props.currentModal) ? this.props.currentModal : ""),
      modalProps: {},
      modalType: null,
      show: this.props.currentModal.isShowing,
    };
    console.log("modal.jsx", this.props);
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
        <header className="main-header">
          <h1>Lets!!</h1>
          <HeaderContainer modProp={modProps} />
        </header>
        <div className="search-filters-bar">
        </div>
        <div className={toggleType[1]}>
          <div className="modal-detail-box">
            <section className="modal-inner-detail-box">

              <ModalRelayContainer
                modProps={modProps}
                currentModal={this.state.currentModal} />
            </section>
          </div>
        </div>
        {this.props.children}
      </main>
    );
  }
}

export default Modal;
