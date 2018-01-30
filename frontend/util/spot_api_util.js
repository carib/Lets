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
}

export const createSpot = (spot) => {
  return $.ajax({
    method: 'POST',
    url: 'api/spots',
    data: { spot },
  });
};
