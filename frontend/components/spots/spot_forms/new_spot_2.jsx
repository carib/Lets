import React from 'react';

import times from 'lodash/times';

export const NewSpotP2 = ({ spotDetails, update, handleClick, createNew }) => {
  function handleSubmit(e) {
    e.preventDefault()
    createNew()
  }
  return (
    <form className="new-spot-main-p2" onSubmit={ handleSubmit }>
      <div className="new-spot-inner-p2">
        <div className="new-spot-headline-p2">
          What can guests expect to find at your place?
        </div>
        <div className="new-spot-inputs-p2">
          <div className="new-spot-question-p2">
            How many bedrooms can guests use?
          </div>
          <div className="new-spot-dropdown">
            <select id="rooms-count" className="select-rooms-count"
            type="text" onChange={ update('rooms.details') }>
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
              <input type="button" className="counter-button-less" onClick={ handleClick } value="-" data-type="beds" data-operator="less"/>
              <div className="counter-count">
                {spotDetails.beds}
              </div>
              <input type="button" className="counter-button-more" onClick={ handleClick } value="+" data-type="beds" data-operator="more"/>
            </div>
          </div>
          <div className="new-spot-question-p2">
            How many bathrooms?
          </div>
          <div className="new-spot-counter">
            <div className="counter-label">Bathrooms</div>
            <div className="counter-button-container">
              <input type="button" className="counter-button-less" onClick={ handleClick } value="-" data-type="beds" data-operator="less"/>
              <div className="counter-count">
                {spotDetails.baths}
              </div>
                <input type="button" className="counter-button-more" onClick={ handleClick } value="+" data-type="baths" data-operator="more"/>
            </div>
          </div>
        </div>
        <input
          className="new-spot-submit-button"
          type="submit"
          value="Continue"
          onClick={ handleSubmit }
          />
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
