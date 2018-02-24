import React from 'react';
import times from 'lodash/times';

import * as SVGUtil from '../../../util/svg_util.jsx';
import CalendarBox from './calendar_box';
import GuestBox from './guest_box';

class BookBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showCalendar: false,
      showGuestBox: false,
      toggleSelector: '',
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { showCalendar, showGuestBox } = this.state;
    const clickNet = document.getElementById('click-net');
    clickNet.addEventListener('click', (e) => {
      if (e.currentTarget.id === 'click-net') {
        this.setState({
          showCalendar: false,
          showGuestBox: false,
        });
      }
    });
  }

  handleClick(e) {
    e.preventDefault();
    const { dateToday, month, year } = this.state;
    if (/check/.test(e.currentTarget.id)) {
      this.setState({
        showCalendar: true,
        showGuestBox: false,
        toggleSelector: e.currentTarget.id,
      });
    } else if (/guest/.test(e.currentTarget.id)){
      this.setState({
        showCalendar: false,
        showGuestBox: true,
        toggleSelector: e.currentTarget.id,
      });
    } else {
      this.setState({
        showCalendar: false,
        showGuestBox: false,
      });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('BOOKINGS COMING SOON!');
  }

  render() {
    const { spot, spotDetails, host, stars } = this.props;
    const { showCalendar, showGuestBox, toggleSelector } = this.state;
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
            <div id="guestbox" className="guest-input-field" onClick={this.handleClick}>
              <GuestBox showGuestBox={showGuestBox} toggleSelector={toggleSelector} />
            </div>
          </div>
          <input
            type="submit"
            className="book-box-book-button"
            value="Request to Book"
            style={(showGuestBox) ? {zIndex:0} : {zIndex:1}}
            onClick={this.handleSubmit}/>
          <div className="book-box-text-bottom">You won't be charged yet</div>
        </div>
        <div id="click-net" className={`click-net`}></div>
      </section>
    )
  }
}

export default BookBox;
