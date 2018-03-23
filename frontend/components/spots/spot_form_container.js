import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import {
  fetchSpot,
  createSpot,
} from '../../actions/spot_actions';
import SpotForm from './spot_form';

const mapStateToProps = (state, ownProps) => {
  let spotId;
  if (state.ui.spotShow) {
    spotId = state.ui.spotShow;
  }
  return {
    user: state.session.currentUser,
    spotId: spotId,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSpot: (id) => dispatch(fetchSpot(id)),
    createSpot: (payload) => dispatch(createSpot(payload))
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SpotForm));
