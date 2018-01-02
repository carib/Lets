import { connect } from 'react-redux';

import Welcome from './welcome';
import { logout } from '../../actions/session_actions';

const mapStateToProps = (state) => {
  return {
    user: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: (user) => dispatch(logout(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Welcome);
