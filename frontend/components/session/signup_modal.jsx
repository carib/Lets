import React from 'react';

import { withRouter } from 'react-router-dom';
import {
  signup,
  receiveErrors
} from '../../actions/session_actions';

class SignupModal extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    dispatch(signup(user));
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.target.value })
    };
  }

  render() {
    return(
      <form
        className="signup-form"
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

        <button type="submit">Sign Up</button>
      </form>
    )
  }
}

export default withRouter(SignupModal);
