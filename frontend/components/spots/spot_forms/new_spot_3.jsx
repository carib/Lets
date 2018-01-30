import React from 'react';

const NewSpotP1 = (props) => {

  // 3. How many guests can your place accomodate?
  //   - n Guests, 1-16+
  //   - How many bedrooms can guests use? (Studio - 50 rooms)
  //   - How many beds can guests use? 1 - ???
  //   - Sleeping arrangements: Options component to describe sleeping sitch

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
