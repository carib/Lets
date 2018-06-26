import React from 'react';
import { Redirect, Route } from 'react-router-dom';

import SearchBar from './search/search_bar';

import { SmallLogo, Logo, FrameLogo, FrameLogoWhite } from './header/new_logo';

class SplashPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      query: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    const header = document.getElementsByClassName('main-header')[0];
    header.classList.add('splash-header');
    document.addEventListener('mousedown', (e) => {
      const firstCheck = e.target.classList.contains('pac-item')
      const secondCheck = e.target.classList.contains('pac-item-query')
      let query;
      if (firstCheck || secondCheck) {
        if (firstCheck) {
          query = Array.from(e.target.children).map(child => child.innerText)
          if (query[0]) {
            query = query.join()
          } else {
            query = query.slice(1).join(', ')
          }
        } else {
          query = e.target.innerText
        }
        this.props.history.push(`/search?${query}`)
      }
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    const searchBar = document.getElementById('search-bar-input')
    this.props.history.push(`/search?${searchBar.value}`)
  }

  render() {
    return (
      <main className="splash-page">
        <div className="splash-logo-wrap">
          <Logo/>
        </div>
        <form onSubmit={this.handleSubmit}>
          <SearchBar className="splash-search-bar" />
        </form>
        <h1>Find rooms for rent all over the United States.</h1>
      </main>
    )
  }
}

export default SplashPage;
