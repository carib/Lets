import React from 'react';
import {connect} from 'react-redux';

import { login } from '../../actions/session_actions';

import LogInModal from './login_modal';

const ModalConductor = props => {
  switch (props.currentModal) {
    case 'LOG_IN':
      return <LogInModal {...props}/>;
    default:
      return null;
  }
};

export default ModalConductor;
