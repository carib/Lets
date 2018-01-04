import React from 'react';
import SessionFormContainer from '../session/session_form_container';
import SearchContainer from '../search/search_container';

class Modal extends React.Component {
  render() {
    if(!this.props.show) {
      return null;
    }

    return (
      <main>
        {this.props.children}
      </main>
    );
  }
}

export default Modal;
