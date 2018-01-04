import { connect } from 'react-redux';

import { withRouter } from 'react-router-dom';
import Modal from './modal';
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
    formType: ownProps.location.pathname.slice(1)
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const processForm = (ownProps.location.pathname.slice(1) === 'login') ? login : signup;
  return {
    processForm: (user) => dispatch(processForm(user))
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal));
