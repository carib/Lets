import React from 'react';

import times from 'lodash/times';

export const NewSpotP2 = ({ spotDetails, update }) => {

  return (
    <form className="new-spot-2">
      <div className="new-spot-inner">
        <div className="new-spot-headline-p2">
          What can your guests expect to find at your place?
        </div>
        <div className="new-spot-inputs-p2">
          <div className="new-spot-question-p2">
            How many bedrooms can guests use?
          </div>
          <div className="new-spot-dropdown">
            <select id="rooms-count" className="select-rooms-count"
            type="text">
              <option>Studio</option>
              <option>1 bedroom</option>
              {
                times(49, (t) => {
                  const text = `${t+1} bedrooms`;
                  return <option key={ t } value={ text }>{ text }</option>
                })
              }
            </select>
            <div className="arrow-frame">
              <div className="dropdown-select-arrow"></div>
            </div>
          </div>
          <div className="new-spot-question-p2">
            How many beds can guests use?
          </div>
          <div className="new-spot-counter">
            <div className="counter-label">Beds</div>
            <div className="counter-button-container">
              <div className="counter-button-less">
                <span className="counter-minus-symbol">-</span>
              </div>
              <div className="counter-count">
                {spotDetails.beds}
              </div>
              <div className="counter-button-more"> + </div>
            </div>
          </div>
          <div className="new-spot-question-p2">
            How many bathrooms?
          </div>
          <div className="new-spot-counter">
            <div className="counter-label">Bathrooms</div>
            <div className="counter-button-container">
              <div className="counter-button-less">
                <span className="counter-minus-symbol">-</span>
              </div>
              <div className="counter-count">
                {spotDetails.baths}
              </div>
              <div className="counter-button-more"> + </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}
// const spotValues = {
//   rooms: 0,
//   beds: 0,
//   baths: 0,
//   tv: false,
//   pets: false,
//   kitchen: false,
//   laundry: false,
//   parking: false,
//   internet: false,
//   outdoor_area: false,
// }
//
// function adjustCount(operator, counter) {
//   console.log(operator, counter);
//   let newCount = spotValues[counter];
//   debugger
//   if (operator === 'less') newCount--;
//   if (operator === 'more') newCount++;
// }

// beds
// baths
// internet
// kitchen
// outdoor_area
// laundry
// parking
// pets
// tv
