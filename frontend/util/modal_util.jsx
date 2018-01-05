import LoginModal from '../modals/login_modal';
import merge from 'lodash/merge';

const modals = {
  'login': {},
}

export const fetchModal = (key) => {
  const currentModal = merge({ show: true }, modals[key]});
  return {
    currentModal: currentModal,
  }
}
