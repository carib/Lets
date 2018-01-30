import React from 'react';

const NewSpotP1 = (props) => {

  // 5. Where's your place located?
  //   - Country
  //   - Street Address
  //   - Apt, Suite, Bldg. (optional)
  //   - City
  //   - State
  //   - ZIP Code

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
