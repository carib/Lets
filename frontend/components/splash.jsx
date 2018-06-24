import React from 'react';

import SearchBar from './search/search_bar';
import Logo from './header/logo';

class SplashPage extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const header = document.getElementsByClassName('main-header')[0];
    header.classList.add('splash-header');
  }

  render() {
    return (
      <main className="splash-page">

        <div className="splash-logo-wrap">
          <svg width='300' height='200' viewBox='0 0 250 250' xmlns="http://www.w3.org/2000/svg">
            <circle
              cx='120' cy='110' r='100'
              fill='#d6fdfa'
              stroke='#ff888f'
              strokeWidth='5'/>
            <text id='splash-logo-gel'
              x='115' y='135'
              fill='#ff888f'
              textAnchor='middle'
              fontFamily='Mrs Sheppards'
              fontSize='3em'>Lets!</text>
            <text id='splash-logo-text'
              x='115' y='130'
              fill='white'
              textAnchor='middle'
              fontFamily='Mrs Sheppards'
              fontSize='3em'>Lets!</text>
          </svg>
        </div>
        <SearchBar className="splash-search-bar"/>
        <h1>Find rooms to let all over the United States.</h1>
      </main>
    )
  }
}

export default SplashPage;
