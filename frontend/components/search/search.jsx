import React from 'react';

import SpotIndex from './spot_index';
import SpotMap from './../spot_map/spot_map';
import SearchBar from './search_bar_demo';

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
    autocompleteFormField.addEventListener(`input`, () => {
      if (autocompleteFormField.value) {
        autocomplete.getPlacePredictions({
          input: autocompleteFormField.value,
          types: [`geocode`]},
          (predictions, status) => {
            predictions.map(prediction => {
              const coords = this.extractCoords(prediction.description)
            })
          }
        );
      } else {
        predictionList.style.display = `none`;
      }
    });
  }

  extractCoords(address) {
    const geo = new google.maps.Geocoder();
    let newBounds;
    geo.geocode( { 'address': address }, (results, status) => {
      if (status == 'OK') {
        results.map(result => {
          console.log(result);
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
      searchPage
    } = this.state;

    const spotValues = {
      streetAddress: '',
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
