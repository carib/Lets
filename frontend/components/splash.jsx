import React from 'react';
import { Redirect, Route } from 'react-router-dom';

import SearchBar from './search/search_bar';
// import Logo from './header/logo';
import { SmallLogo, Logo } from './header/new_logo';

class SplashPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      query: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    const searchBar = document.getElementById('search-bar-input')
    e.preventDefault()
    debugger
    return (
      <Route path=''/>
    )
  }

  componentDidMount() {
    const header = document.getElementsByClassName('main-header')[0];
    header.classList.add('splash-header');
  }

  render() {
    return (
      <main className="splash-page">
        <div className="splash-logo-wrap">
          <Logo/>
        </div>
        <form onSubmit={this.handleSubmit}>
          <SearchBar className="splash-search-bar"
            splashConfirm={true}/>
        </form>
        <h1>Find rooms to let all over the United States.</h1>
      </main>
    )
  }
}

export default SplashPage;
