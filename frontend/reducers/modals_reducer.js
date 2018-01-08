import merge from 'lodash/merge';

import {
  SHOW_MODAL,
  HIDE_MODAL,
  RECEIVE_MODAL,
} from '../actions/modal_actions';


const _nullModal = Object.freeze({
  currentModal: "",
  isShowing: false,
})

const modalsReducer = (state = _nullModal, action) => {
  Object.freeze(state);

  let newState;

  switch (action.type) {
    case RECEIVE_MODAL:
      newState = merge({}, state, action.currentModal);
      return newState;
    case SHOW_MODAL:
      newState = merge({}, state, action.currentModal);
      return merge(newState, { isShowing: true });
    case HIDE_MODAL:
      newState = merge({}, state, action.currentModal);
      return merge(newState, { isShowing: false });
    default:
      return state;

  }
}

export default modalsReducer;
