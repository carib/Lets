import { combineReducers } from 'redux';

import spotShowReducer from './spot_show_reducer';
import modalsReducer from './modals_reducer';
import filterReducer from './filter_reducer';

const uiReducer = combineReducers({
  spotShow: spotShowReducer,
  modal: modalsReducer,
  filter: filterReducer,
});

export default uiReducer;
