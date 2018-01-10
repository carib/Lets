import React from 'react';

const NewSpotP1 = (props) => {

  // 2. What kind of place are you listing?
  //   - Home, Hotel, Something Else?
  //   - Type of property: Apartment, Condominium, House, etc
  //   - What will guests have?
  //       - (Entire place, private room, shared room)
  //   - "Is this set up as a dedicated guest space?" -Yes -No

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

export default NewSpotP1;
