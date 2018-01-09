import React from 'react';

import SpotIndex from './spot_index';
import SpotMap from './../spot_map/spot_map';
import SearchBar from './search_bar';

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

  searchSpots(query) {
    let spots = this.state.spots.filter((spot) => {
      return spot.description.includes(query)
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

    return (
      <div className="search-main">
        <SearchBar
          searchSpots={this.searchSpots}
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
