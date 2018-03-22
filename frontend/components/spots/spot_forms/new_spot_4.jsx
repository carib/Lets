import React from 'react';

export const NewSpotP4 = ({ spotDetails, handleClick, createNew }) => {
  function storeSpotBlurb(e) {
    const blurb = document.getElementById('blurb');
    const description = document.getElementById('description');
    const mockEvent = {
      blurb: 'blurb',
      blurbValue: blurb.value,
      description: 'description',
      descriptionValue: description.value,
    };
    handleClick(mockEvent).then(() => {
      createNew();
    });
  }

  return (
    <form className="new-spot-main-p4" >
      <div className="new-spot-inner-p4">
        <div className="new-spot-headline-p4">
          Here's your chance to give your guests a first-hand description of your place.
        </div>
        <input id="description" type="text" className="new-spot-description-input" placeholder="Give your spot a headline..."/>
        <textarea id="blurb" className="new-spot-blurb-input" type="textarea" rows="20" cols="65" placeholder="Tell them why they should rent your spot!" autoFocus="true" autoComplete="off"/>
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
