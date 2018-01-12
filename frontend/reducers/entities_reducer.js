import { combineReducers } from 'redux';

import spotsReducer from './spots_reducer';
import spotDetailsReducer from './spot_details_reducer';

const entitiesReducer = combineReducers({
  spots: spotsReducer,
  spotDetails: spotDetailsReducer,
});

export default entitiesReducer;
