import React from 'react';

import _ from 'lodash';

import SpotIndex from './spot_index';
import SpotMap from './../spots/spot_map';
import SearchBar from './search_bar';
import { SmallLogo, FrameLogo, Logo } from '../header/new_logo';


class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      spots: this.props.spots,
      activeFilter: {
        type: null,
        value: {},
      },
      checkBounds: false
    };
    this.searchSpots = this.searchSpots.bind(this);
  }

  componentDidMount() {
    const searchBar = document.getElementById('search-bar-input')
    this.props.fetchSpots();
    if (this.props.location.search) {
      searchBar.value = this.props.location.search.slice(1)
      this.props.history.replace('/search')
      this.extractCoords(searchBar.value)
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.spots !== nextProps.spots) {
      this.setState({ spots: nextProps.spots });
    }
  }

  searchSpots(query, queryFullAddressComponents, autocompleteFormField) {
    const autocomplete = new google.maps.places.AutocompleteService();
    autocompleteFormField.addEventListener('input', () => {
      if (autocompleteFormField.value) {
        autocomplete.getPlacePredictions({
          input: autocompleteFormField.value,
          types: ['geocode']},
          (predictions, status) => {
            if (predictions) {
              predictions.map(prediction => {
                const coords = this.extractCoords(prediction.description)
              });
            }
          }
        );
      }
    });
  }

  extractCoords(address) {
    const geo = new google.maps.Geocoder();
    geo.geocode( { 'address': address }, (results, status) => {
      if (status == 'OK') {
        results.map(result => {
          const viewport = result.geometry.viewport;
          this.updateBounds(viewport);
        })
      }
    });
  }

  updateBounds(latlng) {
    const bounds = this.parseBounds(latlng);
    this.props.updateFilter('bounds', bounds);
    this.setState({ bounds: bounds, checkBounds: true })
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

  render() {
    const { spots, checkBounds } = this.state;
    const header = document.getElementsByClassName('main-header')[0]
    const buttons = document.getElementsByTagName('button')

    if (header && buttons.length > 0) {
      header.style.backgroundColor = 'white'
      header.style.borderColor = '#e4e4e4';
      Array.from(buttons).map(btn => btn.style.color = 'black')
    }
    return (
      <div className="search-main">
        <SearchBar searchSpots={this.searchSpots} />
        <SpotMap spots={spots} checkBounds={checkBounds} />
        <SpotIndex spots={spots} />
      </div>
    )
  }
}

export default Search;
