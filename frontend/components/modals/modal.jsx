import React from 'react';
import SessionFormContainer from '../session/session_form_container';
import SearchContainer from '../search/search_container';

class Modal extends React.Component {
  render() {
    if(!this.props.show) {
      return null;
    }

    return (
      <main className="modal">
        <div className="modal-backdrop">
          {this.props.children}
          <SessionFormContainer />
        </div>
      </main>
    );
  }
}

export default Modal;
