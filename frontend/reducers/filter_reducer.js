import merge from 'lodash/merge';

import { CHANGE_FILTER } from '../actions/filter_actions';

const initialState = {
  bounds: {
    northEast: { lat: 91, lng: 180 },
    southWest: { lat: -90, lng: -180 },
  }
}

const filterReducer = (state = initialState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case CHANGE_FILTER:
      return merge({}, { [action.filter]: action.value });

    default:
      return state;
  }
}

export default filterReducer;
