import React from 'react';

import SessionForm from './session_form';
import SessionFormContainer from './session_form_container';


class Modal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if(!this.props.show) {
      return null;
    }

    return (
      <div>

          {this.props.children}

      </div>
    )
  }
}

export default Modal;
