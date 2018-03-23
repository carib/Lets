import merge from 'lodash/merge';

import {
  RECEIVE_SPOTS,
  RECEIVE_SPOT
} from '../actions/spot_actions';

const spotsReducer = (state = {}, action) => {
  Object.freeze(state);
  let spot;
  let host;
  switch (action.type) {
    case RECEIVE_SPOTS:
      return action.spots
    case RECEIVE_SPOT:
      spot = action.payload.spot;
      host = action.payload.host;
      return merge({}, state, { [spot.id]: spot, host: host });
    default:
      return state;
  }
};

export default spotsReducer;
