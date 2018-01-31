import React from 'react';

class SpotShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      spot: {},
      spotDetails: {},
    };
  }

  componentDidMount() {
    this.props.fetchSpot(this.props.match.params.spotId);
    document.addEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    const bookBox = $('.spot-show-book-box');
    // debugger
    if (window.scrollY > 632) {
      bookBox.addClass('fixbox');
    } else {
      bookBox.removeClass('fixbox');
    }
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      spot: newProps.spot,
      spotDetails: newProps.spotDetails,
    });
  }

  render() {
    const { spot, spotDetails } = this.state;



    return (
      <div className="spot-show-main">
        <section className="spot-hero-container">
          <img src={spot.imageHeroUrl} className="spot-hero"></img>
        </section>
        <section className="spot-show-details">
          <nav className="spot-show-nav">
            <ul className="spot-show-nav-list">
              <li className="spot-show-nav-list-item">Overview </li> ·
              <li className="spot-show-nav-list-item">Reviews</li> ·
              <li className="spot-show-nav-list-item">The Host</li> ·
              <li className="spot-show-nav-list-item">Location</li>
            </ul>
          </nav>
          <section className="spot-show-description">
            <div className="spot-show-headline">Malibu Yurt Retreat On Organic Farm</div>
            <div className="spot-show-host-avatar"></div>
          </section>
          <section className="spot-show-book-box">BOOK BOX</section>
        </section>
      </div>
    )
  }
}

export default SpotShow;
