import merge from 'lodash/merge';

import { RECEIVE_SPOT } from '../actions/spot_actions';

const spotDetailsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_SPOT:
      const spotDetails = action.payload.spotDetails.reduce((acc, detail) => {
        acc[detail.id] = detail;
        return acc;
      }, {})
      return merge({}, state, spotDetails)
    default:
      return state;
  }
};

export default spotDetailsReducer
