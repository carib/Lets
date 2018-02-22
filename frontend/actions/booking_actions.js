import * as ApiUtil from '../util/booking_api_util';

export const RECEIVE_BOOKINGS = "RECEIVE_BOOKINGS";
export const RECEIVE_BOOKING = "RECEIVE_BOOKING";
export const RECEIVE_BOOKING_ERRORS = "RECEIVE_BOOKING_ERRORS";

export const receiveBookings = bookings => {
  return {
    type: RECEIVE_BOOKINGS,
    bookings
  }
}

export const receiveBooking = booking => {
  return {
    type: RECEIVE_BOOKING,
    booking
  }
}

export const receiveBookingErrors = errors => {
  return {
    type: RECEIVE_BOOKING_ERRORS,
    errors
  }
}

export const fetchBookings = spotId => dispatch => {
  return ApiUtil.fetchBookings(spotId).then(bookings => (
    dispatch(receiveBookings(bookings)),
    err => dispatch(receiveBookingErrors(err.responseJSON))
  ))
}

export const createBooking = booking => dispatch => {
  return ApiUtil.createBooking(booking).then(booking => {
    return dispatch(receiveBooking(booking)),
    err => dispatch(receiveBookingErrors(err.responseJSON))
  });
}
