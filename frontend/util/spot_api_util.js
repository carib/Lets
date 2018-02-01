export const fetchSpots = (filters) => {
  let bounds;
  if (filters !== undefined) {
    bounds = filters.bounds;
  } else {
    bounds = {
      'northEast': { 'lat': '90', 'lng': '180' },
      'southWest': { 'lat': '-90', 'lng': '-180'} ,
    };
  }

  return $.ajax({
    method: 'GET',
    url: 'api/spots',
    data: { bounds },
  });
};

export const fetchSpot = (spotId) => {
  return $.ajax({
    method: 'GET',
    url: `api/spots/${spotId}`,
  })
};

export const createSpot = (payload) => {
  const spot = payload.spot;
  return $.ajax({
    method: 'POST',
    url: 'api/spots',
    data: { spot },
  });
};

export const createSpotDetails = (payload) => {
  const spot = payload.spot;
  const details = payload.spotDetails;
  return $.ajax({
    method: 'POST',
    url:`api/spots/${spot.id}/spot_details`,
    data: { details }
  });
}
