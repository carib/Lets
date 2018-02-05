import merge from 'lodash/merge';

import {
  RECEIVE_SPOT,
  RECEIVE_SPOTS
} from '../actions/spot_actions';

const spotShowReducer = (state = null, action) => {
  Object.freeze(state);
  let spotDetails;
  console.log('spotShowReducer', action);
  switch (action.type) {
    case RECEIVE_SPOTS:
      return null;
    case RECEIVE_SPOT:
      const spot = action.payload.spot;
      return spot.id;
    default:
      return state;
  }
};

export default spotShowReducer
