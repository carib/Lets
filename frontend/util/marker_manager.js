export default class MarkerManager {
  constructor(map, handleClick) {
    this.map = map;
    // this.handleClick = handleClick;
    this.markers = {};
  }

  updateMarkers(spots) {
    // const page = (searchPage * 18);
    const currentSpots = spots.slice(0, 18);
    const spotsObj = {};
    currentSpots.forEach(spot =>
      spotsObj[spot.id] = spot
    );

    // spots.forEach(newSpot => this.createMarkerFromSpot(newSpot, this.handleClick))
    currentSpots.forEach(newSpot => this.createMarkerFromSpot(newSpot))
  }

  createMarkerFromSpot(spot) {
    const position = new google.maps.LatLng(spot.lat, spot.lng);
    const marker = new google.maps.Marker({
      position,
      map: this.map,
      spotId: spot.id,
    });

    // marker.addListener('click', () => this.handleClick(spot));
    this.markers[marker.spotId] = marker;
  }
}
