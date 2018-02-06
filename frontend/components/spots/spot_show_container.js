import { connect } from 'react-redux';

import { fetchSpot } from '../../actions/spot_actions';

import SpotShow from './spot_show';

const mapStateToProps = (state) => {
  console.log('state', state);
  return {
    spot: state.entities.spots[state.ui.spotShow],
    spotDetails: state.entities.spotDetails,
    host: state.entities.spots.host,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSpot: id => dispatch(fetchSpot(id))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SpotShow);
