import * as ModalUtil from '../util/modal_util';

export const RECEIVE_MODAL = 'RECEIVE_MODAL';
export const SHOW_MODAL = 'SHOW_MODAL';
export const HIDE_MODAL = 'HIDE_MODAL';

export const receiveCurrentModal = currentModal => {
  return {
    type: RECEIVE_MODAL,
    currentModal
  }
}

export const toggleModalShow = () => {
  return {
    type: SHOW_MODAL,
  }
}

export const toggleModalHide = () => {
  return {
    type: HIDE_MODAL,
  }
}

export const fetchModal = (type) => dispatch => {
  const modal = ModalUtil.fetchModal(type);

  dispatch(receiveCurrentModal(modal))
}

export const showModal = () => dispatch => {
  return dispatch(toggleModalShow())
}

export const hideModal = () => dispatch => {
  return dispatch(toggleModalHide())
}
