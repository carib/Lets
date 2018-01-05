import React from 'react';
import { Redirect } from 'react-router-dom';

class LoginModal extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {
      email: "",
      password: "",
    };
    // console.log("login", this.props);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.login(user);
    this.props.toggle();
    // console.log("login2", this.props);
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

  render() {
    const text = ["Log In", "Don't have an account?"];

    return (

            <div className="modal-detail-box">

              <section className="modal-inner-detail-box">

                <form onSubmit={this.handleSubmit}>
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
                    <div className="modal-divider-foot"></div>
                    <span className="modal-footer-text">{text[1]}
                      <div className="modal-footer-link">
                        <div className="modal-footer-button" onClick={this.switchForm} >Sign Up</div>
                      </div>
                  </span>
                  </div>
                </form>
              </section>
              {this.renderErrors()}
            </div>

    )
  }
};

export default LoginModal;
