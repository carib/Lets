import React from 'react';
import times from 'lodash/times';

import * as SVGUtil from '../../util/svg_util.jsx';
import { CalendarGrid } from './calendar_grid';

class CalendarBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      year: new Date().getFullYear(),
      month: new Date().getMonth(),
      dateToday: new Date().getDate(),
      showCalendar: this.props.showCalendar,
    }
    this.incrementMonth = this.incrementMonth.bind(this);
    this.decrementMonth = this.decrementMonth.bind(this);
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
    const { month, year } = this.state;
    const newMonth = (month === 0) ? 11 : (month - 1);
    const newYear = (month === 0) ? (year - 1) : year;
    this.setState({
      year: newYear,
      month: newMonth,
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props) {
      this.setState(nextProps);
    }
  }

  render() {
    const { dateToday, month, year, showCalendar, toggleSelector } = this.state;
    let togglePointer = (showCalendar) ? '' : 'hidden';
    let lastYear = (month === 0) ? (year - 1) : year;
    let lastMonth = (month === 0) ? 11 : (month - 1);
    let nextYear = (month === 11) ? (year + 1) : year;
    let nextMonth = (month === 11) ? 0 : (month + 1);
    const fullMonth = {
      0: 'January', 1: 'February', 2: 'March', 3: 'April',
      4: 'May', 5: 'June', 6: 'July', 7: 'August',
      8: 'September', 9: 'October', 10: 'November', 11: 'December'
    };

    return (
      <div className="calendar-box-wrapper">
        <div className={`cal-pointer-box ${togglePointer} ${toggleSelector}`}>
          <SVGUtil.calendarPointer/>
        </div>
        <div id="calendar" className={ showCalendar ? "calendar" : "calendar hidden" }>
          <div className="calendar-top">
            <div id="arrow-left" className="month-select-left" onClick={this.decrementMonth}>
              <SVGUtil.calendarLeftArrow/>
            </div>
            <div className="month-display">
              {`${fullMonth[month]} ${year}`}
            </div>
            <div id="arrow-right" className="month-select-right" onClick={this.incrementMonth}>
              <SVGUtil.calendarRightArrow/>
            </div>
          </div>
          <div className="calendar-week">
            <div className="cal-day">Su</div>
            <div className="cal-day">Mo</div>
            <div className="cal-day">Tu</div>
            <div className="cal-day">We</div>
            <div className="cal-day">Th</div>
            <div className="cal-day">Fr</div>
            <div className="cal-day">Sa</div>
          </div>
          <CalendarGrid
            year={year}
            month={month}
            date={dateToday}
            />
          <div className="calendar-bottom">
            <div className="calendar-bottom-text">Minimum stay varies</div>
            <div className="calendar-bottom-text">Updated 22 days ago</div>
          </div>
        </div>
        <div id="click-net" className={`click-net ${togglePointer}`}></div>
      </div>
    )
  }
}

export default CalendarBox;
