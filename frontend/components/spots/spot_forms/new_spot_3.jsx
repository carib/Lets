import React from 'react';

export const NewSpotP3 = ({ update, spotDetails, createSpot, createNew, handleClick, handleSubmit }) => {
  function clickToggle(e) {
    const { classList } = e.currentTarget.children[1];
    if (classList.contains('on')) {
      classList.replace('on', 'off');
    } else {
      classList.replace('off', 'on');
    }
    handleClick(e);
  }
  
  return (
    <form className="new-spot-main-p3" onSubmit={ handleSubmit }>
      <div className="new-spot-inner-p3">
        <div className="new-spot-headline-p3">
          What sets your place apart from the rest?
        </div>
        <div className="amenity-selectors-container">
          <div className="internet-selector" data-type="internet" onClick={clickToggle}>
            <div className="amenity-selectors-text">Internet?</div>
            <div className="amenity-selectors-switch off">
              <div className="selector-switch-ball"></div>
            </div>
          </div>
          <div className="outdoor-area-selector" data-type="outdoor_area" onClick={clickToggle}>
            <div className="amenity-selectors-text">Outdoor area?</div>
            <div className="amenity-selectors-switch off">
              <div className="selector-switch-ball"></div>
            </div>
          </div>
          <div className="parking-selector" data-type="parking" onClick={clickToggle}>
            <div className="amenity-selectors-text">Parking?</div>
            <div className="amenity-selectors-switch off">
              <div className="selector-switch-ball"></div>
            </div>
          </div>
          <div className="tv-selector" data-type="tv" onClick={clickToggle}>
            <div className="amenity-selectors-text">Tv?</div>
            <div className="amenity-selectors-switch off">
              <div className="selector-switch-ball"></div>
            </div>
          </div>
          <div className="kitchen-selector" data-type="kitchen" onClick={clickToggle}>
            <div className="amenity-selectors-text">Kitchen?</div>
            <div className="amenity-selectors-switch off">
              <div className="selector-switch-ball"></div>
            </div>
          </div>
          <div className="laundry-selector" data-type="laundry" onClick={clickToggle}>
            <div className="amenity-selectors-text">Laundry?</div>
            <div className="amenity-selectors-switch off">
              <div className="selector-switch-ball"></div>
            </div>
          </div>
          <div className="pets-selector" data-type="pets" onClick={clickToggle}>
            <div className="amenity-selectors-text">Pets?</div>
            <div className="amenity-selectors-switch off">
              <div className="selector-switch-ball"></div>
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
// Internet
// Outdoor area
// Parking
// Tv
// Kitchen
// Laundry
// Pets

// Blurb
// Images
