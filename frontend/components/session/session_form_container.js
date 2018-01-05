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
// const mapStateToProps = (state, ownProps) => {
//   console.log("session_form_container", state, ownProps);
//   return {
//     loggedIn: Boolean(state.session.currentUser),
//     errors: state.errors.session,
//     formType: ownProps.location.pathname.slice(1)
//   }
// }

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    login: (user) => dispatch(login(user)),
    signup: (user) => dispatch(signup(user)),
  }
}
// const mapDispatchToProps = (dispatch, ownProps) => {
//
//   const processForm = (ownProps.location.pathname.slice(1) === 'login') ? login : signup;
//   return {
//     processForm: (user) => dispatch(processForm(user))
//   }
// }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
