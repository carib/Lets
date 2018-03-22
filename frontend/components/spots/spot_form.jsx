import React from 'react';
import { withRouter } from 'react-router-dom';

import times from 'lodash/times';
import merge from 'lodash/merge';

import { NewSpotP1 } from './spot_forms/new_spot_1';
import { NewSpotP2 } from './spot_forms/new_spot_2';
import { NewSpotP3 } from './spot_forms/new_spot_3';

import SearchBar from '../search/search_bar';

class SpotForm extends React.Component {
  constructor(props) {
    super(props);
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
    this.createNew = this.createNew.bind(this);
    this.update = this.update.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleRelay = this.handleRelay.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.extractCoords = this.extractCoords.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    const { details, currentForm } = this.state;
    let { type, operator } = e.target.dataset;
    let newValue;
    let newState;
    if (operator === 'less' && details[type] > 0) newValue = (details[type] - 1);
    if (operator === 'more') newValue = (details[type] + 1);
    if (currentForm === 3) {
      type = e.currentTarget.dataset.type;
      newState = merge({}, this.state, { details: { [type]: !details[type] } })
    } else {
      newState = merge({}, this.state, { details: { [type]: newValue } });
    }
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
    if (this.state.currentForm === 1) {
      const coords = this.extractCoords(address.value);
      setTimeout(() => {
        this.parseCoords(this.state.coords)
      }, 1000);
    }
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
    this.props.createSpot(newSpotPayload).then((payload) => {
      this.props.history.push(`/${payload.spot.id}`)
    });
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
                 handleSubmit={this.handleSubmit}
                 handleClick={this.handleClick}
               />
        break;
      case 3:
        return <NewSpotP3
                 update={this.update}
                 spotDetails={this.state.details}
                 createSpot={this.props.createSpot}
                 createNew={this.createNew}
                 handleClick={this.handleClick}
                 handleSubmit={this.handleSubmit}
               />
        break;
      default:
        // return <NewSpotP3
        //          update={this.update}
        //          spotDetails={this.state.details}
        //          createSpot={this.props.createSpot}
        //          createNew={this.createNew}
        //          handleClick={this.handleClick}
        //          handleSubmit={this.handleSubmit}
        //        />
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
