export const fetchSpots = (filters) => {
  let bounds;
  if (!filters) {
    bounds = {
      'northEast': { 'lat': '93', 'lng': '180'},
      'southWest': { 'lat': '-90', 'lng': '-180'},
    };
  } else {
    bounds = filters.bounds;
  }

  return $.ajax({
    method: 'GET',
    url: 'api/spots',
    data: {
      bounds,
    },
  });
};
