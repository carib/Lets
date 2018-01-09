import React from 'react';

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
        <i className="fa fa-search search-icon"></i>
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
