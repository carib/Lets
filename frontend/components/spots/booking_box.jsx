import React from 'react';
import times from 'lodash/times';

import * as SVGUtil from '../../util/svg_util.jsx';
import { CalendarGrid } from './calendar_grid';
import CalendarBox from './calendar_box';

class BookBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      year: new Date().getFullYear(),
      month: new Date().getMonth(),
      dateToday: new Date().getDate(),
      showCalendar: false,
      toggleSelector: 'checkin',
    }
    this.handleClick = this.handleClick.bind(this);
    this.incrementMonth = this.incrementMonth.bind(this);
    this.decrementMonth = this.decrementMonth.bind(this);
  }

  componentDidMount() {
    const dateArray = `${new Date()}`.match(/^.* 2\d{3}/)[0].split(' ');
  }

  handleClick(e) {
    const { dateToday, month, year } = this.state;
    e.preventDefault();
    this.setState({
      showCalendar: true,
      toggleSelector: e.currentTarget.id,
    });
  }

  incrementMonth() {
    const display = document.getElementById("month-display");
    const { month, year } = this.state;
    const newMonth = (month === 11) ? 0 : (month + 1);
    const newYear = (month === 11) ? (year + 1) : year;
    this.setState({
      year: newYear,
      month: newMonth,
    });
  }

  decrementMonth() {
    const display = document.getElementById("month-display");
    const { month, year } = this.state;
    const newMonth = (month === 0) ? 11 : (month - 1);
    const newYear = (month === 0) ? (year - 1) : year;
    this.setState({
      year: newYear,
      month: newMonth,
    });
  }

  render() {
    const { spot, spotDetails, host, stars } = this.props;
    const { showCalendar, toggleSelector } = this.state;
    const { dateToday, month, year } = this.state;
    let nextYear = (month === 11) ? (year + 1) : year;
    let nextMonth = (month === 11) ? 0 : (month + 1);
    let lastYear = (month === 0) ? (year - 1) : year;
    let lastMonth = (month === 0) ? 11 : (month - 1);
    const fullMonth = {
      0: 'January', 1: 'February', 2: 'March', 3: 'April',
      4: 'May', 5: 'June', 6: 'July', 7: 'August',
      8: 'September', 9: 'October', 10: 'November', 11: 'December'
    };

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
                onClick={this.handleClick}
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
                onClick={this.handleClick}
              />
            </div>
          </div>
          <div className={`cal-pointer-box ${toggleSelector}`}>
            <SVGUtil.calendarPointer/>
          </div>
          <CalendarBox/>
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
// className={ showCalendar ? "calendar" : "calendar hidden" }
