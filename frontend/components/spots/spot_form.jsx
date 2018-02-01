import React from 'react';
import { withRouter } from 'react-router-dom';

import times from 'lodash/times';
import merge from 'lodash/merge';

import { NewSpotP1 } from './spot_forms/new_spot_1';
import { NewSpotP2 } from './spot_forms/new_spot_2';

import SearchBar from '../search/search_bar';

class SpotForm extends React.Component {
  constructor(props) {
    super(props);
    this.createNew = this.createNew.bind(this);
    this.update = this.update.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleRelay = this.handleRelay.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.extractCoords = this.extractCoords.bind(this);
    this.state = {
      description: 'New Listing!',
      spotType: 'Entire Place',
      lat: 0.0,
      lng: 0.0,
      coords: {
        lat: 0.0,
        lng: 0.0,
      },
      price: 0.00,
      currency: 'USD',
      city: '',
      state: '',
      country: '',
      occupancy: 0,
      details: {
        rooms: 0,
        beds: 0,
        baths: 0,
        tv: false,
        pets: false,
        kitchen: false,
        laundry: false,
        parking: false,
        internet: false,
        outdoor_area: false,
      },
      currentForm: 1,
    };
  }

  handleClick(e) {
    e.preventDefault();
    const { details } = this.state;
    const { type, operator } = e.target.dataset
    let newValue;
    if (operator === 'less' && details[type] > 0) newValue = (details[type] - 1);
    if (operator === 'more') newValue = (details[type] + 1);
    const newState = merge({}, this.state, { details: { [type]: newValue } })
    this.setState(newState);
  }

  extractCoords(address) {
    const geo = new google.maps.Geocoder();
    let spotCoords;
    geo.geocode( { 'address': address }, (results, status) => {
      if (status == 'OK') {
        spotCoords = {
          lat: results[0].geometry.location.lat(),
          lng: results[0].geometry.location.lng(),
        };
      }
      this.setState({
        description: address,
        lat: spotCoords.lat,
        lng: spotCoords.lng,
        coords: spotCoords,
      });
    });
  }

  parseCoords(coords) {
    const geo = new google.maps.Geocoder();
    geo.geocode({ 'location': coords }, (results, status) => {
      if (status === 'OK') {
        const loc = results[0].address_components;
        let city;
        let state;
        let country;
        loc.map(result => {
          const types = result.types.join();
          if (/locality/.test(types)) city = result.long_name;
          if (/administrative_area/.test(types)) state = result.long_name;
          if (/country/.test(types)) country = result.long_name;
        });
        this.setState({
          city: city,
          state: state,
          country: country,
        });
      }
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const address = document.getElementById('search-bar-input')
    const coords = this.extractCoords(address.value);
    setTimeout(() => {
      this.parseCoords(this.state.coords)
    }, 1000);
    setTimeout(() => {
      this.handleRelay()
    }, 1);
  }

  createNew() {
    const newSpotPayload = {
        description: this.state.description,
        spotType: this.state.spotType,
        lat: this.state.lat,
        lng: this.state.lng,
        currency: this.state.currency,
        occupancy: this.state.occupancy,
        rooms: this.state.details.rooms,
        beds: this.state.details.beds,
        baths: this.state.details.baths,
        city: this.state.city,
        state_province: this.state.state,
        country: this.state.country,
      };
    this.props.createSpot(newSpotPayload);
  }

  update(field) {
    const { details } = this.state
    return e => {
      switch (field) {
        case (/(\.\w*)/).test(field):
          field = field.split('.');
          this.setState({
            details: {
              [field]: e.target.value
            }
          });
          break;
        default:
          this.setState({ [field]: e.target.value });
      }
    };
  }

  handleRelay() {
    const formNum = (this.state.currentForm + 1);
    this.setState({ currentForm: formNum });
    this.spotFormRelay();
  }

  spotFormRelay() {
    switch (this.state.currentForm) {
      case 2:
        return <NewSpotP2
                 update={this.update}
                 spotDetails={this.state.details}
                 createSpot={this.props.createSpot}
                 createNew={this.createNew}
                 handleClick={this.handleClick}
               />
        break;
      default:
        return <NewSpotP1

                  update={this.update}
                  formProps={this.props}
                  spotDetails={this.state.details}
                  handleClick={this.handleClick}
                  handleSubmit={this.handleSubmit}
                />
    }
  }

  render() {
    return this.spotFormRelay();
  }
}

export default withRouter(SpotForm);

// 1. What kind of place do you have?
//   - Entire Place, Private Room, Shared Room
//   - for n guests
//   - Location search
// 2. What kind of place are you listing?
//   - Home, Hotel, Something Else?
//   - Type of property: Apartment, Condominium, House, etc
//   - What will guests have? (Entire place, private room, shared room)
//   - "Is this set up as a dedicated guest space?" -Yes -No
// 3. How many guests can your place accomodate?
//   - n Guests, 1-16+
//   - How many bedrooms can guests use? (Studio - 50 rooms)
//   - How many beds can guests use? 1 - ???
//   - Sleeping arrangements: Options component to describe sleeping sitch
// 4. How many bathrooms?
//   - 1 - ??
// 5. Where's your place located?
//   - Country
//   - Street Address
//   - Apt, Suite, Bldg. (optional)
//   - City
//   - State
//   - ZIP Code
// 6. Confirm map pin in correct location
// 7. What amenities do you offer?
//   - Essentials
//   - Towels, bed sheets, soap, and toilet paper
//   - Wifi
//   - Shampoo
//   - Closet/drawers
//   - TV
//   - Heat
//   - Air conditioning
//   - Breakfast, coffee, tea
//   - Desk/workspace
//   - Fireplace
//   - Iron
//   - Hair dryer
//   - Pets in the house
//   - Private entrance
//   - Safety amenities
//     - Smoke detector
//     - Check your local laws, which may require a working smoke detector in every room
//     - Carbon monoxide detector
//     - Check your local laws, which may require a working carbon monoxide detector in every room
//     - First aid kit
//     - Safety card
//     - Posted emergency information and resources
//     - Fire extinguisher
//     - Lock on bedroom door
//     - Private room can be locked for safety and privacy
// 8. What spaces can guests use?
//   - Pool
//   - Kitchen
//   - Laundry – washer
//   - Laundry – dryer
//   - Parking
//   - Elevator
//   - Hot tub
//   - Gym
