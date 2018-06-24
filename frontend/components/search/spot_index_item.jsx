import React from 'react';
import { withRouter } from 'react-router-dom';

import times from 'lodash/times';

class SpotIndexItem extends React.Component {

  constructor(props) {
    super(props);
    this.spot = props.spot;
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.history.push(`spots/${this.spot.id}`);
  }

  render() {
    const starRating = times(this.spot.averageRating, (t) => {
      return <i className="fas fa-star" key={t}></i>
    });
    return (
      <div className="spot-index-inner-column" onClick={this.handleClick}>
        <li className="spot-item">
          <img src={this.spot.imageThumbUrl} className="spot-thumb"/>
        </li>
        <div className="spot-item-info">
          <div className="item-info-row-1">
            {this.spot.spotType}
          </div>
          <div className="item-info-row-2">
            {this.spot.description}
          </div>
          <div className="item-info-row-3">
            From <span>${this.spot.averagePricePerNight}</span> per night
          </div>
          <div className="item-info-row-4">
            <div className="item-info-stars">
              {starRating}
            </div>
            <div className="item-info-review-count">
              175
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(SpotIndexItem);
