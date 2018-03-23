import { connect } from 'react-redux';

import { fetchSpot } from '../../actions/spot_actions';
import { fetchBookings, createBooking } from '../../actions/booking_actions';

import SpotShow from './spot_show';

const mapStateToProps = (state) => {
  return {
    spot: state.entities.spots[state.ui.spotShow],
    spotDetails: state.entities.spotDetails,
    host: state.entities.spots.host,
    spotId: state.ui.spotShow
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSpot: id => dispatch(fetchSpot(id)),
    fetchBookings: id => dispatch(fetchBookings(id)),
    createBooking: booking => dispatch(createBooking(booking))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SpotShow);
