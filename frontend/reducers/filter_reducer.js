import merge from 'lodash/merge';

import UPDATE_BOUNDS from '../actions/filter_actions';

const initialState = Object.freeze({
  northEast: { lat: 90, lng: 180 },
  southWest: { lat: -90, lng: -180 },
})

const filterReducer = (state = initialState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case UPDATE_BOUNDS:
      return merge({}, action.bounds);
    default:
      return state;
  }
}

export default filterReducer;
