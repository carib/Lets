import React from 'react';
import { Redirect } from 'react-router-dom';

class SignUpModal extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this)
    this.switchForm = this.switchForm.bind(this)
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.modProps.signup(user);
    this.props.modProps.toggle();
  }

  renderErrors() {
    if (this.props.errors) {
      return (
        <ul>
          {
            this.props.errors.map((err, id) => {
              <l key={id}>{err}</l>;
            })
          }
        </ul>
      )
    }
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.target.value })
    };
  }

  switchForm() {
    this.props.modProps.fetch("LOGIN");
  }

  render() {
    const text = ["Sign Up", "Already have an account?"];

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            className="session-form-email"
            type="text"
            value={this.state.email}
            onChange={this.update('email')}
            placeholder="Email Address"
          />
          <input
            className="session-form-first-name"
            type="text"
            value={this.state.firstName}
            onChange={this.update('firstName')}
            placeholder="First name"
          />
          <input
            className="session-form-last-name"
            type="text"
            value={this.state.lastName}
            onChange={this.update('lastName')}
            placeholder="Last name"
          />
          <input
            className="session-form-password"
            type="password"
            value={this.state.password}
            onChange={this.update('password')}
            placeholder="Password"
          />
          <button type="submit">{text[0]}</button>
          <div className="modal-footer">
            <div className="modal-divider-foot"></div>
            <span className="modal-footer-text">{text[1]}
              <div className="modal-footer-link">
                <div className="modal-footer-button" onClick={this.switchForm}>Log In</div>
              </div>
          </span>
          </div>
        </form>
        {this.renderErrors()}
      </div>
    )
  }
};

export default SignUpModal;
