import React from 'react';
import { connect } from 'react-redux';

import Modal from './modal';

import {
  showModal,
  hideModal,
  fetchModal,
} from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {

  console.log(state);
  return {
    currentModal: state.ui.modal.currentModal,
    show: state.ui.modal.isShowing
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {


  return {
    showModal: () => dispatch(showModal()),
    hideModal: () => dispatch(hideModal())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal);
