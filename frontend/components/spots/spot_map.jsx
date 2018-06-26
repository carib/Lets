import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';

import MarkerManager from '../../util/marker_manager';

class SpotMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLocation: {
        lat: 40.751336,
        lng: -73.983848
      },
      spots: [],
    }
  }

  componentDidMount() {
    const searchBar = document.getElementById('search-bar-input');
    this.initializeMap();
    this.searchListener = searchBar.addEventListener('keydown', (e) => { this.panToNewBounds(e) });
    this.mapDragListener = this.map.addListener('drag', this.updateBounds);
  }

  componentWillReceiveProps(newProps) {
    this.MarkerManager.updateMarkers(newProps.spots);
    this.setState({ spots: newProps.spots });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.checkBounds) {
      this.panToNewBounds({ keyCode: 13 })
    }
  }

  componentWillUnmount() {
    google.maps.event.clearListeners(this.map, 'drag');
  }

  initializeMap() {
    const mapOptions = {
      center: this.state.currentLocation,
      zoom: 5,
      gestureHandling: 'cooperative'
    };
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
    this.MarkerManager.updateMarkers(this.props.spots);
  }

  panToNewBounds(e) {
    const { spots } = this.state;
    if ([9, 13].includes(e.keyCode) && spots.length > 0) {
      const newBounds = new google.maps.LatLng(spots[0].lat, spots[0].lng)
      this.map.panTo(newBounds)
      if (spots.length < 4) this.map.setZoom(8)
      else if (spots.length < 3) this.map.setZoom(9)
    }
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
