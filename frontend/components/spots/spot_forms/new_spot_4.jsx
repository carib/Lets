import React from 'react';

export const NewSpotP4 = ({ spotDetails, update, handleClick, handleSubmit }) => {
  function storeSpotBlurb(e) {
    const blurb = document.getElementById('blurb');
    const mockEvent = {
      target: 'description',
      value: blurb.value,
    };
    handleClick(mockEvent);
    handleSubmit(e);
  }

  return (
    <form className="new-spot-main-p4" >
      <div className="new-spot-inner-p4">
        <div className="new-spot-headline-p4">
          Here's your chance to give your guests a first-hand description of your place.
        </div>
        <textarea id="blurb" className="new-spot-blurb-input" type="textarea" rows="20" cols="65" placeholder="This house rules!" autoFocus="true" autoComplete="off"/>
        <input
          className="new-spot-submit-button"
          type="submit"
          value="Continue"
          onClick={ storeSpotBlurb }
          />
      </div>
    </form>
  )
}
