import React from 'react';
import { Redirect } from 'react-router-dom';
import times from 'lodash/times';

import SearchBar from '../../search/search_bar';

export const NewSpotP1 = ({ formProps, handleSubmit, handleRelay, update, handleClick, spotDetails }) => {
  const placeholder = "New York, NY, USA"
  return (
    <form className="new-spot-main" onSubmit={ handleSubmit }>
      <div className="new-spot-inner">
        <div className="new-spot-headline">
          Hi, { formProps.user.firstName }!
          Let's get started listing your space.
        </div>
        <div className="new-spot-step">STEP 1</div>
        <div className="new-spot-question">
          What kind of place do you have?
        </div>
        <div className="new-spot-inputs">
          <select id="spot-type" className="select-spot-type"
          type="text" onChange={  update('spotType') }>
            <option value="Entire place">Entire place</option>
            <option value="Private room">Private room</option>
            <option value="Shared room">Shared room</option>
          </select>
          <select id="occupancy" className="select-occupancy" type="text"
          defaultValue="for 4 guests" onChange={ update('occupancy') }>
            {
              times(16, (t) => {
                const text = `for ${t} guests `;
                return <option key={ t } value={ text }>{ text }</option>
              })
            }
          </select>
          <SearchBar
            formProps={ formProps }
            placeholder='New York, NY, US'
          />
          <input
            className="new-spot-submit-button"
            type="submit"
            value="Continue"
            onClick={ handleSubmit }
          />
        </div>
      </div>
    </form>
  )
}
