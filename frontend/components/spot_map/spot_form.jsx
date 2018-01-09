import React from 'react';

class SpotForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {
      spotValues: {
        description: null,
        spotType: null,
        lat: null,
        lng: null,
        price: null,
        currency: null,
      },
      inputValues: {
        streetAddress: null,
        city: null,
        state: null,
        zipCode: null,
      },
    }
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

  }

  render() {
    <div>
      <form className="spot-form">
        <label>Description:
          <input type="text">
        </label>
        <label>Street Address:
          <input type="text">
        </label>
        <label>City:
          <input type="text">
        </label>
        <label>State:
          <input type="text">
        </label>
        <label>ZIP Code:
          <input type="text">
        </label>
      </form>
    </div>
  }
}

export default SpotForm;

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
