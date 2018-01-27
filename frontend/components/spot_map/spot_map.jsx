import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';

import MarkerManager from '../../util/marker_manager';

class SpotMap extends React.Component {
  constructor(props) {
    super(props);
    this.handleCLick = this.handleCLick.bind(this);
    this.updateBounds = this.updateBounds.bind(this);
    this.state = {
      currentLocation: {
        lat: 40.751336,
        lng: -73.983848
      }
    }
  }

  // Google Maps API key:
  // AIzaSyA3MOvbKg_cM1xTb1_HyBnykwshCHtXSJk

  initializeMap() {
    const mapOptions = {
      center: this.state.currentLocation,
      zoom: 2
    };
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
    this.MarkerManager.updateMarkers(this.props.spots);
  }

  componentDidMount() {
    this.initializeMap();
    this.map.addListener('idle', this.updateBounds);
    navigator.geolocation.getCurrentPosition((pos) => {
      const coords = pos.coords;
      this.setState({
        currentLocation: {
          lat: coords.latitude,
          lng: coords.longitude
        }
      });
    });
  }

  updateBounds() {
    const latlng = this.map.getBounds();
    const bounds = this.parseBounds(latlng);
    this.props.updateFilter('bounds', bounds);
  }

  parseBounds(latlng) {
    const ne = latlng.getNorthEast()
    const sw = latlng.getSouthWest()
    const bounds = {
      northEast: { lat: ne.lat(), lng: ne.lng() },
      southWest: { lat: sw.lat(), lng: sw.lng() },
    };

    return bounds;
  }

  componentWillReceiveProps(newProps) {
    const { spots } = newProps;
    this.MarkerManager.updateMarkers(newProps.spots);
    // this.map.setCenter(latlng: { lat: spots.lat, lng: spots.lng });
  }
  componentDidReceiveProps

  handleCLick(coords) {
    this.props.history.push({
      pathname: 'spots/new',
      search: `lat=${coords.lat}&lng=${coords.lng}`
    });
  }

  render() {
    return (
      <aside className='map-wrap'>
        <div
          ref={ map => this.mapNode = map }
          id='map-container'>
          Map
        </div>
      </aside>
    )
  }
}

export default withRouter(SpotMap);
