import React from 'react';

import times from 'lodash/times';

import SearchBar from '../../search/search_bar';

export const NewSpotP1 = ({ formProps }) => {

const { user, userLocation, createSpot, handleClick } = formProps;
const placeholder = "New York, NY, USA"
  return (
    <div className="new-spot-inner">
      <div className="new-spot-headline">
        Hi, {user.firstName}! Let's get started listing your space.
      </div>
      <div className="new-spot-step">STEP 1</div>
      <div className="new-spot-question">What kind of place do you have?</div>
      <div className="new-spot-inputs">

        <select className="select-spot-type" type="text">
          <option value="Entire place">Entire place</option>
          <option value="Private room">Private room</option>
          <option value="Shared room">Shared room</option>
        </select>

        <select className="select-occupancy" type="text" defaultValue="for 4 guests">
          {
            times(16, (t) => {
              const text = `for ${t} guests `;
              return <option key={t} value={text}>{text}</option>
            })
          }
        </select>
        <SearchBar formProps={formProps}  placeholder={placeholder}/>
        <input
          className="new-spot-submit-button"
          type="submit"
          value="Continue"
          onClick={handleClick}
          />
      </div>
    </div>
  )
}
