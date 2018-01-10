import React from 'react';
import { withRouter } from 'react-router-dom';

import NewSpotP1 from './spot_forms/new_spot_1';

class SpotForm extends React.Component {
  constructor(props) {
    super(props);
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.userLocation = this.userLocation.bind(this);
    this.extractCoords = this.extractCoords.bind(this);

    this.state = {
      spotValues: {
        description: '',
        spotType: '',
        lat: 0.0,
        lng: 0.0,
        price: 0.00,
        currency: 'USD',
      },
      inputValues: {
        streetAddress: '',
        city: '',
        state: '',
        zipCode: '',
      },
      currentForm: '',
    };

  }

  /*
  props:
    - user location?
    -
  */

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
    });
    this.setState({ spotValues: spotCoords });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('spot form main', this.props, this.state, e.target);
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.target.value })
    };
  }

  userLocation() {
    let loc;
    navigator.geolocation.getCurrentPosition(pos => {
      loc = {
        lat: pos.coords.latitude,
        lng: pos.coords.longitude
      };
    });
    return loc;
  }

  render() {
    const formProps = {

    };
    return (
      <form className="new-spot-main" onSubmit={this.handleSubmit}>
        <NewSpotP1
          props={this.props}
          update={this.update}
          handleSubmit={this.handleSubmit}
          userLocation={this.userLocation()}
          extractCoords={this.extractCoords}
        />
    </form>
    )
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
