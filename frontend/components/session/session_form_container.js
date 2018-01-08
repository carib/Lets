import { connect } from 'react-redux';

import SessionForm from './session_form';

import {
  login,
  signup,
  receiveErrors
} from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    errors: state.errors.session,
    formType: 'login'
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    login: (user) => dispatch(login(user)),
    signup: (user) => dispatch(signup(user)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
