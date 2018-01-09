import React from 'react';

import MagnifyIcon from 'mdi-react/MagnifyIcon';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(e) {
    this.props.searchSpots(e.target.value);
  }

  render() {
    return (
      <div className="search-bar">

        <MagnifyIcon className="search-bar-icon mdi-48px"/>
        <input
          className="search-input"
          type="text"
          onChange={this.handleSearch}
          placeholder="Search"
        />
      </div>
    )
  }
}

export default SearchBar;
