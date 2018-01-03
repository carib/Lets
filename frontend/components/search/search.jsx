import React from 'react';

import SpotIndex from './spot_index';
import SpotMap from './../spot_map/spot_map';

class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchSpots();
  }

  render() {
    const { fetchSpots, spots, loggedIn } = this.props;
    return (
      <div className="search-main">
        <SpotMap
          spots={spots}
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
