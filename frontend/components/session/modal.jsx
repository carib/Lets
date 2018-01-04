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
        <div className="backdrop">
          <section className="modal">
        {this.props.children}
      </section>
    </div>
      </div>
    )
  }
}

export default Modal;
