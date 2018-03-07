import {
  RECEIVE_BOOKINGS,
  RECEIVE_BOOKING
} from '../actions/booking_actions';
import { RECEIVE_SPOT } from '../actions/spot_actions';

import merge from 'lodash/merge';

const BookingsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action) {
    case RECEIVE_BOOKINGS:
      return merge({}, state, action.bookings);
    case RECEIVE_BOOKING:
      return merge({}, state, { [action.booking.id]: action.booking });
    case RECEIVE_SPOT:
      return merge({}, state, action.bookings);
    default:
      return state;
  }
}

export default BookingsReducer;
