import merge from 'lodash/merge';

import {
  RECEIVE_SPOTS,
  RECEIVE_SPOT
} from '../actions/spot_actions';

const spotsReducer = (state = {}, action) => {
  Object.freeze(state);
  let spot;
  switch (action.type) {
    case RECEIVE_SPOTS:
      return merge({}, state, action.spots);
    case RECEIVE_SPOT:
      spot = action.payload.spots
      return merge({}, state, { [spot.id]: spot });
    default:
      return state;
  }
};

export default spotsReducer;
