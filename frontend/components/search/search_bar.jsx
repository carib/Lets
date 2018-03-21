import React from 'react';

import _ from 'lodash';
import MagnifyIcon from 'mdi-react/MagnifyIcon';

import * as SVGUtil from '../../util/svg_util.jsx';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const searchInput = document.getElementById('search-bar-input');
    this.initAutocomplete(searchInput);
  }

  initAutocomplete(searchInput) {
    const autocomplete = new google.maps.places.Autocomplete(searchInput);
  }

  handleSubmit(e) {
    e.preventDefault();
    const searchBar = document.getElementById('search-bar-input');
    this.setState({ autocompleteFormFieldValue: searchBar.innerHTML });
  }

  handleSearch(e) {
    if (this.props.searchSpots) {
      this.props.searchSpots(this.state.searchQuery, null, document.getElementById('search-bar-input'));
    }
  }


  render() {
    return (
      <div id="search-with-results-wrapper">
        <div id="search-bar-wrapper" className="search-bar">
          <MagnifyIcon className="search-bar-icon mdi-48px"/>
            <input
              id="search-bar-input"
              className="search-input"
              type="search"
              onChange={this.handleSearch}
              placeholder="Try 'Texas'"
              autoComplete="off"
            />
        </div>
      </div>
    )
  }
}

export default SearchBar;
