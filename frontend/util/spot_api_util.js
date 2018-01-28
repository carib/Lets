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

export const fetchSpot = (spot) => {
  return $.ajax({
    method: 'GET',
    url: `api/spots/${spot.id}`,
    data: { spot },
  })
}

export const createSpot = (spot) => {
  return $.ajax({
    method: 'POST',
    url: 'api/spots',
    data: { spot },
  });
};
