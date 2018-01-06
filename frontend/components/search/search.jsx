import React from 'react';

import SpotIndex from './spot_index';
import SpotMap from './../spot_map/spot_map';

class Search extends React.Component {
  constructor(props) {
    super(props);
    console.log('search', this.props, this.state);
    this.state = {
      searchPage: 1,
      loggedIn: false,
      spots: []
    }
  }

  componentDidMount() {
    this.props.fetchSpots();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ spots: nextProps.spots })
  }

  render() {
    const { fetchSpots, loggedIn } = this.props;
    const { spots } = this.state;
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
