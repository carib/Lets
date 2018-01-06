export default class MarkerManager {
  constructor(map, handleCLick) {
    this.map = map;
    // this.handleClick = handleClick;
    this.markers = {};
  }

  updateMarkers(spots) {
    const spotsObj = {};
    spots.forEach(spot =>
      spotsObj[spot.id] = spot
    );

    // spots.forEach(newSpot => this.createMarkerFromSpot(newSpot, this.handleClick))
    spots.forEach(newSpot => this.createMarkerFromSpot(newSpot))
  }

  createMarkerFromSpot(spot) {
    const position = new google.maps.LatLng(spot.lat, spot.lng);
    const marker = new google.maps.Marker({
      position,
      map: this.map,
      spotId: spot.id
    });

    // marker.addListener('click', () => this.handleClick(spot));
    this.markers[marker.spotId] = marker;
  }
}
