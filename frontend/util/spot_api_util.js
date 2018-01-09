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
    data: {
      bounds
    },
  });
};
