import { connect } from 'react-redux';

import ModalRelay from './modal_relay';

import {
  login,
  signup,
  receiveErrors
} from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    currentModal: state.ui.modal.currentModal,
    isShowing: state.ui.modal.isShowing,
    loggedIn: Boolean(state.session.currentUser),
    errors: state.errors.session,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const {toggle, fetch} = (ownProps.modProps);
  return {
    toggle: (modal) => dispatch(receiveCurrentModal(modal)),
    login: (user) => dispatch(login(user)),
    signup: (user) => dispatch(signup(user)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalRelay);
