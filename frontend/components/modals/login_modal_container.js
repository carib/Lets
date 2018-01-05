import { connect } from 'react-redux';

import LoginModal from './login_modal';

import {
  login,
  signup,
  receiveErrors
} from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    errors: state.errors.session,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const toggle = (ownProps.modProps.toggle)
  return {
    toggle: () => dispatch(toggle()),
    login: (user) => dispatch(login(user)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginModal);
