import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import {
  fetchSpot,
  createSpot,
} from '../../actions/spot_actions';
import SpotForm from './spot_form';

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.session.currentUser,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSpot: (id) => dispatch(fetchSpot(id)),
    createSpot: (spot) => dispatch(createSpot(spot))
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SpotForm));
