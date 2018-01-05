import React from 'react';
import {
  Link,
  Redirect,
  withRouter
} from 'react-router-dom';

import Modal from '../modals/modal';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  //
  // componentWillReceiveProps(newProps) {
  //   this.newProps.toggleModal();
  // }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
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
    if (this.props.loggedIn) {
      return <Redirect to="/" />;
    }

    const text = (
                  this.props.formType === 'login'
                    ) ? (
                      ["Log In", "Don't have an account?"]
                    ) : (
                      ["Sign Up", "Already have an account?"]
                  );

    const link = (
                  text[0] === "Log In"
                    ) ? (
                      ['signup', "Sign Up"]
                    ) : (
                      ['login', "Log In"]
                  );

    return (
      <main className="modal">
        <div className="modal-backdrop">
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
                      <Link to={`/${link[0]}`} >{link[1]}</Link>
                    </div>
                </span>
                </div>
              </form>
            </section>

            {this.renderErrors()}
          </div>
        </div>
      </main>
    )
  }
}

export default withRouter(SessionForm);
