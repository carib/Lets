import React from 'react';
import { withRouter } from 'react-router-dom';

import LoginModal from './login_modal';
import SignUpModal from './signup_modal';

class ModalRelay extends React.Component {
  constructor(props) {
    super(props);
    this.modalSwitch = this.modalSwitch.bind(this);
    this.state = {
      currentModal: this.props.currentModal,
      modProps: this.props.modProps,
    }
  }

  modalSwitch(modalType) {
    switch (modalType) {
      case 'LOGIN':
        return <LoginModal modProps={this.props} />
        return "HELLOOO"
      case 'SIGNUP':
        return <SignUpModal modProps={this.props} />
      default:
        return null;
    }
  }

  render() {
    const { currentModal, modProps } = this.props;
    return (
      <div>
        {this.modalSwitch(currentModal)}
      </div>
    )
  }
};

export default withRouter(ModalRelay);







// import React from 'react';
//
// const ModalWrapper = props => {
//   const handleBackgroundClick = e => {
//     if (e.target === e.currentTarget) props.hideModal();
//   };
//
//   const onOk = () => {
//     props.onOk();
//     props.hideModal();
//   };
//
//   const okButton = props.showOk
//     ? (
//       <button
//         onClick={onOk}
//         disabled={props.okDisabled}
//       >
//         {props.okText}
//       </button>
//     ) : null;
//
//   return (
//     <div onClick={handleBackgroundClick}>
//       <header>
//         <h1>{props.title}</h1>
//         <button onClick={props.hideModal}>Close</button>
//       </header>
//
//       {props.children}
//
//       {okButton}
//     </div>
//   );
// };
//
// export default ModalWrapper;
