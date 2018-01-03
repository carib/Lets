export const fetchSpots = (filters) => {
  return $.ajax({
    method: 'GET',
    url: 'api/spots',
    error: (err) => console.log(err)
  })
}
