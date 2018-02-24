import React from 'react';

import * as SVGUtil from '../../../util/svg_util.jsx';

class GuestBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      adults: 1,
      children: 0,
      infants: 0,
      showGuestBox: this.props.showGuestBox,
      toggleSelected: '',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props) {
      this.setState(nextProps);
    }
  }

  handleClick(e) {
    e.preventDefault();
    const eId = e.target.id;
    const num = this.state[eId];
    let newCount;
    if (/more/.test(e.target.dataset.value)) {
      newCount = (num + 1);
    } else {
      if (/adults/.test(eId)) {
        newCount = (num === 1) ? 1 : (num - 1);
      } else {
        newCount = (num === 0) ? 0 : (num - 1);
      }
    }
    this.setState({
      [eId]: newCount,
      toggleSelected: [eId],
    });
  }

  render() {
    const {
      adults,
      children,
      infants,
      showGuestBox,
      toggleSelected
    } = this.state;

    let guestNum = (adults > 1 || children > 0) ? `${adults + children} guests` : `${adults} guest`;
    let infantNum;
    if (infants === 1) {
      infantNum = `${infants} infant`;
    } else if (infants > 1) {
      infantNum = `${infants} infants`;
    };

    return (
      <div className="guest-box-wrapper">
        <div className="count-wrapper">
          <div
            id="main"
            className={(showGuestBox && !/infants/.test(toggleSelected)) ? "guest-count-adults aqua" : "guest-count-adults"}>
            {guestNum}
          </div>
          <div className={(infants > 0) ? "guest-count-comma" : "hidden"}>,</div>
          <div
            id="infant"
            className={(showGuestBox && /infants/.test(toggleSelected) && infants > 0) ? "guest-count-infants aqua" : "guest-count-infants"}>
            {infantNum}
          </div>
        </div>
        <div className={showGuestBox ? "guestbox" : "guestbox hidden"}>
          <div className="adult-counter-text">Adults</div>
          <div className="adult-counter-less-button">
            <button id="adults" data-value="less" className="button-screen" onClick={this.handleClick}>
            </button>
            <SVGUtil.lessButton />
          </div>
          <div className="adult-counter-count">{adults}</div>
          <div className="adult-counter-more-button">
            <button id="adults" data-value="more" className="button-screen" onClick={this.handleClick}>
            </button>
            <SVGUtil.moreButton />
          </div>
          <div className="child-counter-text">
            <div className="counter-main-text">Children</div>
            <div className="counter-sub-text">Ages 2 - 12</div>
          </div>
          <div className="child-counter-less-button">
            <button id="children" data-value="less" className="button-screen" onClick={this.handleClick}>
            </button>
            <SVGUtil.lessButton />
          </div>
          <div className="child-counter-count">{children}</div>
          <div className="child-counter-more-button">
            <button id="children" data-value="more" className="button-screen" onClick={this.handleClick}>
            </button>
            <SVGUtil.moreButton />
          </div>
          <div className="infant-counter-text">
            <div className="counter-main-text">Infants</div>
            <div className="counter-sub-text">Under 2</div>
          </div>
          <div className="infant-counter-less-button">
            <button id="infants" data-value="less" className="button-screen" onClick={this.handleClick}>
            </button>
            <SVGUtil.lessButton />
          </div>
          <div className="infant-counter-count">{infants}</div>
          <div className="infant-counter-more-button">
            <button id="infants" data-value="more" className="button-screen" onClick={this.handleClick}>
            </button>
            <SVGUtil.moreButton />
          </div>
        </div>

      </div>
    )
  }
}

export default GuestBox;
