import * as ApiUtil from '../util/spot_api_util';

export const RECEIVE_SPOTS = "RECEIVE_SPOTS";
export const RECEIVE_SPOT = "RECEIVE_SPOT";


export const receiveSpots = spots => {
  return {
    type: RECEIVE_SPOTS,
    spots
  }
}

export const receiveSpot = payload => {
  return {
    type: RECEIVE_SPOT,
    payload
  }
}

export const fetchSpots = (filters) => dispatch => {
  return ApiUtil.fetchSpots(filters).then(spots => {
    dispatch(receiveSpots(spots));
    return spots;
  });
}

export const fetchSpot = (spotId) => dispatch => {
  return ApiUtil.fetchSpot(spotId).then(spot => {
    dispatch(receiveSpot(spot));
    return spot;
  });
}

export const createSpot = (spot) => dispatch => {
  return ApiUtil.createSpot(spot).then(spot => {
    dispatch(receiveSpot(spot));
    return spot;
  });
}
