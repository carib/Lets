import React from 'react';
import { connect } from 'react-redux';

import Modal from './modal';

import {
  showModal,
  hideModal,
  fetchModal,
} from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    currentModal: state.ui.modal.currentModal,
    currentUser: state.session.currentUser,
    show: state.ui.modal.isShowing,
    unfixHeader: Boolean(state.ui.spotShow)
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    showModal: () => dispatch(showModal()),
    hideModal: () => dispatch(hideModal()),
    fetchModal: (modal) => dispatch(fetchModal(modal))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal);
