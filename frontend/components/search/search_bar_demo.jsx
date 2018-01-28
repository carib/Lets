import React from 'react';
import merge from 'lodash/merge';

import MagnifyIcon from 'mdi-react/MagnifyIcon';


class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      autocompleteFormFieldValue: this.props.spotValues.streetAddress,
      addressComponents: {
        streetNumber: '',
        streetName: '',
        city: '',
        county: '',
        state: [],
        country: [],
        postalCode: '',
      },
      spotValues: this.props.spotValues,
      currentQueryPlace: {},
    }

    this.handleSearch = this.handleSearch.bind(this);
    this.mapAddressComponents = this.mapAddressComponents.bind(this);
  }

  handleSearch(e) {
    const autocompleteFormField =  document.getElementById('search-bar-input');
    if (this.props.searchSpots) {
      this.props.searchSpots(e, this.state, autocompleteFormField);
    }
  }
  //
  componentDidMount() {
    this.initAutocomplete();
  }

  initAutocomplete() {
    // TODO: Figure out how to interpolate the values down in autocomplete & autocompleteFormField.
    const autocompleteFormField =  document.getElementById('search-bar-input');
    const autocomplete = new google.maps.places.AutocompleteService();

    google.maps.event.clearInstanceListeners(autocompleteFormField);
    google.maps.event.addListener(autocomplete, 'place_changed', () => {
      const place = autocomplete.getPlace();
      const addressMap = this.mapAddressComponents(place.address_components);
                        console.log('sbd', place);
      this.setState({
        autocompleteFormFieldValue: place.formatted_address,
        latLng: {
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng(),
        },
        currentQueryPlace: place
      });
    });
  }

  render() {
    return (
      <div id="search-with-results-wrapper">
        <div id="search-bar-wrapper" className="search-bar">

          <MagnifyIcon className="search-bar-icon mdi-48px"/>
            <input
              id="search-bar-input"
              className="search-input"
              type="search"
              onKeyUp={this.handleSearch}
              placeholder={this.props.placeholder}
              autoComplete="off"
            />
        </div>
      </div>
    )
  }

  mapAddressComponents(addressComponents) {
    let newState;
    addressComponents.map(component => {
      switch (component.types[0]) {
        case ('sublocality_level_1' || 'sublocality'):
          newState = Object.assign({}, this.state.spotValues, { spotValues: { city: component.long_name } });
          if (this.props.mapValuesToState) {
            this.props.mapValuesToState(newState);
          }
          this.setState(newState);
          break;
        case ('administrative_area_level_2'):
          newState = Object.assign({}, this.state.spotValues, { spotValues: { county: component.long_name } });
          if (this.props.mapValuesToState) {
            this.props.mapValuesToState(newState);
          }
          this.setState(newState);
          break;
        case ('route' || 'street_name'):
          newState = Object.assign({}, this.state.spotValues, { spotValues: { streetName: component.long_name } });
          if (this.props.mapValuesToState) {
            this.props.mapValuesToState(newState);
          }
          this.setState(newState);
          break;
        case ('postal_code'):
          newState = Object.assign({}, this.state.spotValues, { spotValues: { postalCode: component.long_name } });
          if (this.props.mapValuesToState) {
            this.props.mapValuesToState(newState);
          }
          this.setState(newState);
          break;
        case 'street_number':
          newState = Object.assign({}, this.state.spotValues, { spotValues: { streetNumber: component.long_name } });
          if (this.props.mapValuesToState) {
            this.props.mapValuesToState(newState);
          }
          this.setState(newState);
          break;
        case ('administrative_area_level_1'):
          newState = Object.assign({}, this.state.spotValues, { spotValues: { state: component.long_name } });
          if (this.props.mapValuesToState) {
            this.props.mapValuesToState(newState);
          }
          this.setState(newState);
          break;
        case ('country'):
          newState = Object.assign({}, this.state.spotValues, { spotValues: { country: component.long_name } });
          if (this.props.mapValuesToState) {
            this.props.mapValuesToState(newState);
          }
          this.setState(newState);
          break;
        default:
          return null;
      }
    });
  }
}

export default SearchBar;
