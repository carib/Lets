import merge from 'lodash/merge';

import { RECEIVE_SPOT } from '../actions/spot_actions';

const spotShowReducer = (state = null, action) => {
  Object.freeze(state);
  let spotDetails;
  switch (action.type) {
    case RECEIVE_SPOT:
      const spot = action.payload.spots;
      return spot.id;
    default:
      return state;
  }
};

export default spotShowReducer
