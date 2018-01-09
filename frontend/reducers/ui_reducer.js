import { combineReducers } from 'redux';

import modalsReducer from './modals_reducer';
import filterReducer from './filter_reducer';

const uiReducer = combineReducers({
  modal: modalsReducer,
  filter: filterReducer,
});

export default uiReducer;
