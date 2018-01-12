import React from 'react';

import SpotIndex from './spot_index';
import SpotMap from './../spot_map/spot_map';
import SearchBar from './search_bar_demo';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.searchSpots = this.searchSpots.bind(this);
    this.state = {
      searchPage: 1,
      loggedIn: false,
      spots: [],
      allSpots: []
    };
  }

  componentDidMount() {
    if (!this.state.spots) {
      this.props.fetchSpots();
    } else {
      const spots = JSON.parse(localStorage.getItem('spots')) || []
      this.setState({ spots: spots, allSpots: spots })
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ spots: nextProps.spots });
  }

  searchSpots(query, queryFullAddressComponents) {
    // const { lat, lng } = queryFullAddressComponents.latLng

    let spots = this.state.spots.filter((spot) => {
      // spot.lat < (lat + 2) && spot.lat > (lat - 2)
      // spot.lng < (lng + 2) && spot.lng > (lng - 2)
    });
    this.setState({ spots: spots })
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
