import merge from 'lodash/merge';

import { RECEIVE_SPOT } from '../actions/spot_actions';

const spotDetailsReducer = (state = {}, action) => {
  Object.freeze(state);
  let spotDetails;
  switch (action.type) {
    case RECEIVE_SPOT:
      spotDetails = action.payload.spot_detail;
      return merge({}, state, spotDetails);
    default:
      return state;
  }
};

export default spotDetailsReducer
