export const fetchBookings = spotId => {
  return $.ajax({
    method: 'GET',
    url: `api/spots/${spotId}/bookings`,
  });
}

export const fetchBooking = id => {
  return $.ajax({
    method: 'GET',
    url: `api/bookings/${id}`
  });
}

export const createBooking = booking => {
  return $.ajax({
    method: 'POST',
    url: `api/spots/${booking.spot_id}/bookings`,
    data: { booking }
  });
}

export const removeBooking = id => {
  return $.ajax({
    method: 'DELETE',
    url: `api/bookings/${id}`
  });
}
