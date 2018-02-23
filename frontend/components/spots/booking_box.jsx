import React from 'react';
import * as SVGUtil from '../../util/svg_util.jsx';

class BookBox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { spot, spotDetails, host, stars } = this.props;
    return (
      <section className="spot-show-book-box">
        <div className="book-box-brief">
          <div className="book-box-brief-price">
            <span className="price-nums">${Math.floor(spot.averagePricePerNight)}</span>
            <span className="price-text">  per night</span>
          </div>
          <div className="book-box-brief-rating">{stars}</div>
        </div>
        <div className="book-box-divider"></div>
        <div className="book-box-options">
          <div className="book-box-text-dates">Dates</div>
          <div className="book-box-date-selector">
            <div className="check-in-selector">
              <input
                id="checkin"
                className="input-check-in"
                type="text"
                autoComplete="off"
                placeholder="Check In"
              />
            </div>
            <div className="date-selector-arrow">
              <SVGUtil.datePickerArrow />
            </div>
            <div className="check-out-selector">
              <input
                id="checkout"
                className="input-check-out"
                type="text"
                autoComplete="off"
                placeholder="Check Out"
              />
            </div>
          </div>
          <div className="calendar-box"></div>
          <div className="book-box-text-guests">Guests</div>
          <div className="book-box-guests-selector">

          </div>
          <div className="book-box-book-button"></div>
          <div className="book-box-text-bottom">You won't be charged yet</div>
        </div>
      </section>
    )
  }
}

export default BookBox;
