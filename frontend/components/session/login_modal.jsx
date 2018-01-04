import React from 'react';

import { withRouter, Redirect } from 'react-router-dom';
import {
  login,
  receiveErrors
} from '../../actions/session_actions';

class LoginModal extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      email: '',
      password: ''
    }
  }

  componentWillReceiveProps(nextProps) {
    this.nextProps.toggleModal();
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    dispatch(login(user));
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.target.value })
    };
  }

  render() {
    if (this.props.loggedIn) {
      <Redirect to="/" />
    }
    return(
      <form
        className="login-form modal-form"
        onSubmit={this.handleSubmit}>

        <input className="modal-form-email"
          type="text"
          value={this.state.email}
          onChange={this.update('email')}
          placeholder="Email Address" />

        <input
          className="modal-form-password"
          type="password"
          value={this.state.password}
          onChange={this.update('password')}
          placeholder="Password" />

        <button type="submit">Log In</button>
      </form>
    )
  }
}

export default withRouter(LoginModal);

//
// <p>Guest login: <br/>
//   email: 'user@email.com', <br/>
//   password: 'password'</p>
//
// <form className={"modal-form"} onSubmit={this.handleSubmit}>
//   <input className="modal-form-email"
//     type="text"
//     value={this.state.email}
//     onChange={this.update('email')}
//     placeholder="Email Address" />
//
//   <input
//     className="modal-form-password"
//     type="password"
//     value={this.state.password}
//     onChange={this.update('password')}
//     placeholder="Password" />
//
//   <button type="submit" >{text[0]}</button>
//
//   <p>{text[1]} <span
//     value={link[1]}
//     onClick={this.toggleFormType}
//     >{link[1]}</span></p>
// </form>
