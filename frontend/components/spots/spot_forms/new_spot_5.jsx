import React from 'react';

export const NewSpotP5 = (props) => {

  return (
    <div className="new-spot-inner">
      <form className="new-spot-1">
        <label>Description:
          <input type="text"/>
        </label>
        <label>Street Address:
          <input type="text"/>
        </label>
        <label>City:
          <input type="text"/>
        </label>
        <label>State:
          <input type="text"/>
        </label>
        <label>ZIP Code:
          <input type="text"/>
        </label>
      </form>
    </div>
  )
}
