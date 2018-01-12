import React from 'react';
import { Redirect } from 'react-router-dom';

class LoginModal extends React.Component {
  constructor(props) {
    super(props);
    this.handleGuestLogin = this.handleGuestLogin.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.switchForm = this.switchForm.bind(this);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.modProps.login(user);
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

  update(field, isDemo = false) {
    if (!isDemo) {
      return e => {
        this.setState({ [field]: e.target.value })
      };
    } else {
      const guestEmail = "user@email.com";
      const guestPassword = "password";
      this.setState({
        [field]: ((field === 'email') ? guestEmail : guestPassword)
      });
    }
  }

  switchForm() {
    this.props.modProps.fetch("SIGNUP");
  }

  handleGuestLogin() {
    const user = { email: "user@email.com", password: "password" };
    this.props.modProps.login(user);
    this.props.modProps.toggle();
  }

  render() {
    const text = ["Log In", "Don't have an account?"];
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div
            className="guest-login-button"
            onClick={this.handleGuestLogin}
          >Guest Log In</div>

          <input className="session-form-email"
            type="text"
            value={this.state.email}
            onChange={this.update('email')}
            placeholder="Email Address" />

          <input
            className="session-form-password"
            type="password"
            value={this.state.password}
            onChange={this.update('password')}
            placeholder="Password" />

          <button type="submit" >{text[0]}</button>
          <div className="modal-footer">
            <div id="login-divider" className="modal-divider-foot"></div>
            <span className="modal-footer-text">{text[1]}
              <div className="modal-footer-link">
                <div
                  className="modal-footer-button"
                  value="SIGNUP"
                  onClick={this.switchForm}
                >Sign Up</div>
              </div>
            </span>
          </div>
        </form>

        {this.renderErrors()}
      </div>
    )
  }
};

export default LoginModal;
