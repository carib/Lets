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
      <div className="backdrop">
        <div className="modal">
          {this.props.children}

          <div className="footer">
            <button onClick={this.props.onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Modal;
