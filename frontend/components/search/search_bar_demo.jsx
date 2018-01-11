import React from 'react';
import _ from 'lodash';

import MagnifyIcon from 'mdi-react/MagnifyIcon';


class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      autocompleteFormFieldValue: '',
      addressComponents: {
        streetNumber: '',
        streetName: '',
        city: '',
        county: '',
        state: [],
        country: [],
        postalCode: [],
      },
      spotQueries: {
        lat: null,
        lng: null,
      },
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.mapAddressComponents = this.mapAddressComponents.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  handleSearch(e) {
    // this.props.searchSpots();
  }

  mapAddressComponents(addressComponents) {
    let addressMap = {};
    addressComponents.map(component => {
      switch (component.types[0]) {
        case street_number:
          Object.assign(addressMap, { streetNumber: component.long_name });
          break;
        case (route):
          Object.assign(addressMap, { streetName: component.long_name });
          break;
        case (sublocality_level_1 || sublocality):
          Object.assign(addressMap, { city: component.long_name });
          break;
        case (administrative_area_level_2):
          Object.assign(addressMap, { county: component.long_name });
          break;
        case (administrative_area_level_1):
          Object.assign(addressMap, { state: [component.long_name, component.short_name] });
          break;
        case (country):
          Object.assign(addressMap, { country: [component.long_name, component.short_name] });
          break;
        case (postal_code):
          Object.assign(addressMap, { postalCode: [component.long_name]});
          break;
        case (postal_code_suffix):
          addressMap.postalCode.push(component.short_name);
          break;
        default:
          return null;
      }
      return addressMap
    });
  }

  componentDidMount() {
    this.initAutocomplete();
  }

  initAutocomplete() {

    // TODO: Figure out how to interpolate the values down in autocomplete & autocompleteFormField.
    const autocompleteFormField =  document.getElementById('search-bar-input');
    const autocomplete = new google.maps.places.Autocomplete((autocompleteFormField), {
      types: [`address`],
      componentRestrictions: { 'country': ['us'] },
    });

    google.maps.event.clearInstanceListeners(autocompleteFormField);
    google.maps.event.addListener(autocomplete, 'place_changed', () => {
      const place = autocomplete.getPlace();
      const addressMap = this.mapAddressComponents(place.address_components);

      this.setState({
        autocompleteFormFieldValue: place.formatted_address,
        addressComponents: addressMap,
        spotQueries: {
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng(),
        },
      })
      console.log(this.state, addressMap);
    });
  }

  /*Hi, I just wanted to thank you for your tutorial on implementing TK!
  I'm building a clone of airbnb for my final project in AA bootcamp and I've been going out of my way to avoid using third-party packages so that I can feel confident that I understand the material (plus I doubt "just install TK package", would go over very well for "how do you" questions in job interviews). I figured using gmaps widgets was a necessary exception to this approach, so when I got to part three of your tutorial and saw that we were about to take apart the widget and build a custom one I nearly emoted all over my desk here in class!

  PS. Why did I ever use anything other than backticks?!
  */


  render() {
    return (
      <div id="search-with-results-wrapper">
        <div id="search-bar-wrapper" className="search-bar">

          <MagnifyIcon className="search-bar-icon mdi-48px"/>
            <input
              id="search-bar-input"
              className="search-input"
              type="search"
              onChange={this.handleSearch}
              placeholder="Search"
              autoComplete="off"
            />
        </div>
      </div>
    )
  }
}

export default SearchBar;
