import React from 'react';

import ModalWrapper from './ModalWrapper.jsx';

const LogIn = props => {
  const logIn = provider => {
    props.hideModal();
    props.logIn(provider);
  };

  return (
    <ModalWrapper
      {...props}
      title="Log In"
      width={400}
      showOk={false}
    >
      <p>Contents</p>
    </ModalWrapper>
  );
};

export default LogIn;
