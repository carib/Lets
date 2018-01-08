import React from 'react';
import merge from 'lodash/merge';

export const fetchModal = (modalType) => {
  const modals = {
    'LOGIN': { currentModal: "LOGIN" },
    'SIGNUP': { currentModal: "SIGNUP" },
  };
  const currentModal = merge({}, modals[modalType]);

  return currentModal
}
