import React from 'react';
import times from 'lodash/times';

import * as SVGUtil from '../../util/svg_util.jsx';
import { CalendarGrid } from './calendar_grid';
import CalendarBox from './calendar_box';

class BookBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showCalendar: false,
      toggleSelector: 'checkin',
    }
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const clickNet = document.getElementById('click-net');
    clickNet.addEventListener('click', (e) => {
      if (this.state.showCalendar && e.target.id === 'click-net') {
        this.setState({
          showCalendar: false,
        });
      }
    });
  }

  handleClick(e) {
    e.preventDefault();
    const { dateToday, month, year } = this.state;
    this.setState({
      showCalendar: true,
      toggleSelector: e.currentTarget.id,
    });
  }

  render() {
    const { spot, spotDetails, host, stars } = this.props;
    const { showCalendar, toggleSelector } = this.state;
    const { dateToday, month, year } = this.state;

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
                className={(showCalendar && toggleSelector === 'checkin') ? `input-check-in aqua` : "input-check-in"}
                type="text"
                autoComplete="off"
                placeholder="Check In"
                onClick={this.handleClick}
              />
            </div>
            <div className="date-selector-arrow">
              <SVGUtil.datePickerArrow />
            </div>
            <div className="check-out-selector">
              <input
                id="checkout"
                className={(showCalendar && toggleSelector === 'checkout') ? `input-check-out aqua` : "input-check-out"}
                type="text"
                autoComplete="off"
                placeholder="Check Out"
                onClick={this.handleClick}
              />
            </div>
          </div>
          <CalendarBox showCalendar={showCalendar} toggleSelector={toggleSelector} />
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
