import { fetchSpots, receiveSpots } from './spot_actions';
export const CHANGE_FILTER = "CHANGE_FILTER";

export const changeFilter = (filter, value) => {
  return {
    type: CHANGE_FILTER,
    filter,
    value
  }
}

export const updateFilter = (filter, value) => (dispatch, getState) => {
  dispatch(changeFilter(filter, value));
  return fetchSpots(getState().ui.filter)(dispatch);
};
