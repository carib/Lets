import * as ModalUtil from '../util/modal_util';

export const RECEIVE_CURRENT_MODAL = 'RECEIVE_CURRENT_MODAL';
export const SHOW_MODAL = 'SHOW_MODAL';
export const HIDE_MODAL = 'HIDE_MODAL';

export const receiveCurrentModal = currentModal => {
  return {
    type: RECEIVE_CURRENT_MODAL,
    currentModal
  }
}

export const showModal = (show) => {
  return {
    type: SHOW_MODAL,
  }
}

export const hideModal = (hide) => {
  return {
    type: HIDE_MODAL,
  }
}

export const fetchModal = (type) => dispatch => {
  return ModalUtil.fetchCurrentModal(type)
    .then(modal => dispatch(receiveCurrentModal(modal)))
}
