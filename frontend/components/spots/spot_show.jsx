import React from 'react';

import times from 'lodash/times';

class SpotShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      spot: this.props.spot,
      spotDetails: this.props.spotDetails,
    };
  }

  componentDidMount() {
    this.props.fetchSpot(this.props.match.params.spotId);
    document.addEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    const bookBox = $('.spot-show-book-box');
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

  quickKeyHelper(itemNum, itemNoun) {
    itemNum = (itemNum < 1) ? 0 : itemNum;
    itemNoun = (itemNum > 1) ? `${itemNoun}s` : itemNoun;
    return [itemNum, itemNoun]
  }

  render() {
    const { spot, spotDetails } = this.state;
    if (this.state.spot) {
      console.log(spot, this.state);
      const occupancy = this.quickKeyHelper(spot.occupancy, "guest");
      const rooms = this.quickKeyHelper(spotDetails.rooms, "room");
      const beds = this.quickKeyHelper(spotDetails.beds, "bed");
      const baths = this.quickKeyHelper(spotDetails.baths, "bath");
      const stars = times(spot.averageRating, (t) => {
        return <i className="fas fa-star" key={t}></i>
      })
      return (
        <div className="spot-show-main">
          <section className="spot-hero-container">
            <img src={spot.imageFullUrl} className="spot-hero"></img>
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
              <div className="spot-show-info-container">
                <div className="spot-show-type">{spot.spotType}</div>
                <div className="spot-show-headline">{spot.description}</div>
                <div className="spot-show-location">{spotDetails.city}</div>
                <div className="spot-show-quick-key">
                  <div className="spot-show-key-item-occupancy">
                    <i className="fas fa-users"></i>
                    {`${occupancy[0]} ${occupancy[1]}`}
                  </div>
                <div className="spot-show-key-item-rooms">
                  <i className="fas fa-home"></i>
                  {`${rooms[0]} ${rooms[1]}`}
                </div>
              <div className="spot-show-key-item-beds">
                <i className="fas fa-bed"></i>
                {`${beds[0]} ${beds[1]}`}
              </div>
            <div className="spot-show-key-item-baths">
              <i className="fas fa-bath"></i>
              {`${baths[0]} ${baths[1]}`}
            </div>
                </div>
              </div>
              <div className="spot-show-host-avatar"></div>
            </section>
            <section className="spot-show-book-box">
              <div className="book-box-brief">
                <div className="book-box-brief-price">
                  <span className="price-nums">${Math.floor(spot.averagePricePerNight)}</span>
                  <span className="price-text">  per night</span>
                </div>
                <div className="book-box-brief-rating">{stars}</div>
              </div>
              <div className="book-box-divider"></div>
            </section>
          </section>
        </div>
      )
    } else {
      return null
    }
  }
}

export default SpotShow;
