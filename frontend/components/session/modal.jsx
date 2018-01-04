import React from 'react';
import { withRouter } from 'react-router-dom';
//
// import SessionFormContainer from './session_form_container';
import LoginModal from './login_modal';
import SignupModal from './Signup_modal';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      path: this.props.match.path
    };
  }

  componentDidMount() {
    const newPath = Object.values(this.props.location);

    this.setState({
      path: newPath.slice(1)
    });
  }

  modalConductor() {
    switch (this.state.path) {
      case 'login':
        return <LoginModal props={this.props}/>
      case 'signup':
        return <SignupModal props={this.props}/>
      default:

    }
  }

  render() {
    const currentModal = this.modalConductor(this.state.path);
    if(!this.props.show) {
      return null;
    }
    switch (this.state.path) {
      case 'login':

        return (
          <div className="backdrop">
            <section className="modal">
              {this.props.children}
              <LoginModal props={this.props}/>
            </section>
          </div>
        )
      case 'signup':
        return (
          <div className="backdrop">
            <section className="modal">
              {this.props.children}
              <SignupModal props={this.props}/>
            </section>
          </div>
        )
      default:
      <LoginModal props={this.props}/>
    }
  }
}

export default withRouter(Modal);
// <SessionFormContainer
//   toggleModal={this.props.toggleModal}
//   childType={this.props.children.map(child =>
//     child.props.path.slice(1)
//   )}/>
