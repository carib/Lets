import React from 'react';
import merge from 'lodash/merge';

import LoginModal from '../components/modals/login_modal';


export const fetchModal = (modalType) => {
  const modals = {
    'login': { currentModal: LoginModal },
  };

  

  const currentModal = merge({}, modals[modalType]);
  console.log(currentModal)
  return { currentModal: <LoginModal /> }
}
