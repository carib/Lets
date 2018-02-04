import React from 'react';
import merge from 'lodash/merge';
import { Redirect, withRouter } from 'react-router-dom';

import SearchContainer from '../search/search_container';
import HeaderContainer from '../header/header_container';

import ModalRelayContainer from './modal_relay_container';
import Logo from '../header/logo';


class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      currentModal: ((this.props.currentModal) ? this.props.currentModal : null),
      currentUser: this.props.currentUser,
      modalProps: {},
      modalType: null,
      show: this.props.currentModal.isShowing,
      unfix: this.props.unfixHeader,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      show: nextProps.show,
      currentModal: nextProps.currentModal,
      unfix: nextProps.unfixHeader,
    });
  }

  handleClick() {
    console.log(this.props);
    this.props.history.push('/');
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

    const { unfix, currentModal } = this.state
    return (
      <main className="modal">
        <header className={(unfix) ? "main-header unfix" : "main-header"}>
          <Logo handleClick={this.handleClick}/>
          <HeaderContainer modProp={modProps} unfix={unfix}/>
        </header>

        <div className={toggleType[1]}>
          <div className="modal-detail-box">
            <section className="modal-inner-detail-box">

              <ModalRelayContainer
                modProps={modProps}
                currentModal={currentModal} />
            </section>
          </div>
        </div>
        {this.props.children}
      </main>
    );
  }

}

export default withRouter(Modal);
