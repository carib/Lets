import React from 'react';

const NewSpotP4 = (props) => {

  return (
    <form className="new-spot-main-p4" onSubmit={ handleSubmit }>
      <div className="new-spot-inner-p4">
        <div className="new-spot-headline-p4">
          Here's your chance to give your guests a first-hand description of your place.
        </div>
        <input className="new-spot-blurb-input" type="textarea"></input>
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
