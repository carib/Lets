import { combineReducers } from 'redux';

import spotsReducer from './spots_reducer';
import spotDetailsReducer from './spot_details_reducer';
import bookingsReducer from './bookings_reducer';

const entitiesReducer = combineReducers({
  spots: spotsReducer,
  spotDetails: spotDetailsReducer,
  bookings: bookingsReducer,
});

export default entitiesReducer;
