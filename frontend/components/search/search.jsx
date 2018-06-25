import React from 'react';
import { Redirect, Route, Link } from 'react-router-dom';

import SpotIndex from './spot_index';
import SpotMap from './../spots/spot_map';
import SearchBar from './search_bar';
import { SmallLogo, FrameLogo, Logo } from '../header/new_logo';


class Search extends React.Component {
  constructor(props) {
    super(props);
    this.searchSpots = this.searchSpots.bind(this);
    this.sendToSearch = this.sendToSearch.bind(this);
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
      },
      query: ''
    };
  }

  componentDidMount() {
    this.props.fetchSpots();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.location.state) {
      const searchBar = this.props.location.state
      const nextSearch = document.getElementById('search-bar-input')
      nextSearch.setAttribute('value', searchBar.value)
      this.searchSpots(searchBar.value, null, searchBar)
      if (this.state.bounds) {
        this.extractCoords(searchBar.value)
      }
    }
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
    this.setState({ bounds: bounds })
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

  sendToSearch(e) {
    e.preventDefault()
    const searchBar = document.getElementById('search-bar-input');

    this.props.location.state = searchBar
    this.props.history.push('/search')
  }

  render() {
    const {
      spotShow,
      fetchSpot,
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
    if (this.props.location.pathname.includes('/search')) {
      const header = document.getElementsByClassName('main-header')[0]
      const buttons = document.getElementsByTagName('button')
      if (header && buttons.length > 0) {
        header.style.backgroundColor = 'white'
        header.style.borderColor = '#e4e4e4';
        Array.from(buttons).map(btn => btn.style.color = 'black')
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
            spotShow={spotShow}
            fetchSpots={fetchSpots}
            fetchSpot={fetchSpot}
            spots={spots}
            loggedIn={loggedIn}
            />
        </div>
      )
    } else {
      if (this.props.location.pathname === '/') {
        const header = document.getElementsByClassName('main-header')[0]
        const buttons = document.getElementsByTagName('button')
        if (header && buttons.length > 0) {
          header.style.borderColor = 'transparent';
          Array.from(buttons).map(btn => btn.style.color = 'white')
        }
      }
      return (
        <main className="splash-page">
          <div className="splash-logo-wrap">
            <Logo/>
          </div>
          <form className='splash-form' onSubmit={this.sendToSearch}>
            <SearchBar className="splash-search-bar"
              searchSpots={this.searchSpots}
              spotValues={spotValues}
              splashConfirm={true}
              />
          </form>
          <h1>Find rooms to let all over the United States.</h1>
        </main>
      )
    }
  }
}

export default Search;
