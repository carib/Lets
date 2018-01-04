import React from 'react';
import {
  Link,
  Redirect,
  withRouter
} from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    this.nextProps.toggleModal();
  }

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
      <div className="session-modal-screen">
        <section className="session-form">

          <p>Guest login: <br/>
            email: 'user@email.com', <br/>
            password: 'password'</p>



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

            <p>{text[1]} <Link to={`/${link[0]}`}>{link[1]}</Link></p>
          </form>
          {this.renderErrors()}
        </section>
      </div>
    )
  }
}

export default withRouter(SessionForm);
