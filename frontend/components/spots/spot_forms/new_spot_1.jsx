import React from 'react';

import times from 'lodash/times';

import SearchBar from '../../search/search_bar';

export const NewSpotP1 = ({ formProps, searchProps, handleSubmit, handleRelay, update, extractCoords }) => {
  const { user, userLocation, createSpot  } = formProps;
  const { searchValues, mapValuesToState } = searchProps;
  const placeholder = "New York, NY, USA"
  const extractLatLng = (e) => {
    const coords = extractCoords(e.target.value);
    // searchValues.lat = coords.lat;
    // searchValues.lng = coords.lng;
    console.log(coords);
    this.setState({
      lat: coords.lat,
      lng: coords.lng,
    });
  };

  return (
    <form className="new-spot-main" onSubmit={ handleRelay }>
      <div className="new-spot-inner">
        <div className="new-spot-headline">
          Hi, { user.firstName }! Let's get started listing your space.
        </div>
        <div className="new-spot-step">STEP 1</div>
        <div className="new-spot-question">What kind of place do you have?</div>
        <div className="new-spot-inputs">
          <select id="spot-type" className="select-spot-type"
          type="text" onChange={  update('spotType') }>
            <option value="Entire place">Entire place</option>
            <option value="Private room">Private room</option>
            <option value="Shared room">Shared room</option>
          </select>

          <select id="occupancy" className="select-occupancy" type="text" defaultValue="for 4 guests" onChange={ update('occupancy') }>
            {
              times(16, (t) => {
                const text = `for ${t} guests `;
                return <option key={ t } value={ text }>{ text }</option>
              })
            }
          </select>
          <SearchBar
            formProps={ formProps }
            spotValues={ searchValues }
            placeholder='New York, NY, US'
            mapValuesToState={ mapValuesToState }
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

// <div className="new-spot-inner">
//   <div className="new-spot-headline">
//     Hi, {user.firstName}! Let's get started listing your space.
//   </div>
//   <div className="new-spot-step">STEP 1</div>
//   <div className="new-spot-question">What kind of place do you have?</div>
//   <div className="new-spot-inputs">
//
//     <select className="select-spot-type" type="text">
//       <option value="Entire place">Entire place</option>
//       <option value="Private room">Private room</option>
//       <option value="Shared room">Shared room</option>
//     </select>
//
//     <select className="select-occupancy" type="text" defaultValue="for 4 guests">
//       {
//         times(16, (t) => {
//           const text = `for ${t} guests `;
//           return <option key={t} value={text}>{text}</option>
//         })
//       }
//     </select>
//     <SearchBar formProps={formProps}  placeholder={placeholder}/>
//     <input
//       className="new-spot-submit-button"
//       type="submit"
//       value="Continue"
//       onClick={handleClick}
//       />
//   </div>
// </div>
