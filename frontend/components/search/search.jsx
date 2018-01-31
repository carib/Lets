import React from 'react';

import SpotIndex from './spot_index';
import SpotMap from './../spots/spot_map';
import SearchBar from './search_bar';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.searchSpots = this.searchSpots.bind(this);
    this.updateBounds = this.updateBounds.bind(this);
    this.parseBounds = this.parseBounds.bind(this);
    this.extractCoords = this.extractCoords.bind(this);
    this.state = {
      searchPage: 1,
      loggedIn: false,
      spots: this.props.spots,
      allSpots: [],
      activeFilter: {
        type: null,
        value: {},
      }
    };
  }

  componentDidMount() {
    this.props.fetchSpots();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ spots: nextProps.spots });
  }

  searchSpots(query, queryFullAddressComponents, autocompleteFormField) {
    const autocomplete = new google.maps.places.AutocompleteService();
    this.setState({
      input: autocompleteFormField,
      query: query,
    });
    
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
  }

  parseBounds(latlng) {
    const ne = latlng.getNorthEast()
    const sw = latlng.getSouthWest()
    const bounds = {
      northEast: { lat: ne.lat(), lng: ne.lng() },
      southWest: { lat: sw.lat(), lng: sw.lng() },
    };
    this.newBounds = bounds;
    return bounds;
  }

  render() {
    const {
      fetchSpots,
      loggedIn,
      updateFilter
    } = this.props;

    const {
      spots,
      searchPage,
      input,
      query,
    } = this.state;

    const spotValues = {
      streetAddress: '',
    }
    let mapCenter;

    if (spots.length > 0) {
      mapCenter = this.newBounds
    }

    return (
      <div className="search-main">
        <SearchBar
          searchSpots={this.searchSpots}
          spotValues={spotValues}
        />
        <SpotMap
          spots={spots}
          updateFilter={updateFilter}
          mapCenter={mapCenter}
          input={input}
          query={query}
        />
        <SpotIndex
          fetchSpots={fetchSpots}
          spots={spots}
          loggedIn={loggedIn}
        />
      </div>
    )
  }
}

export default Search;
