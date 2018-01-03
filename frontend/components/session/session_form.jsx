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
    const text = (this.props.formType === 'login') ? "Log In" : "Sign Up";
    const link = (text === "Log In") ? ['signup', "Sign Up"] : ['login', "Log In"];
    return (
      <section className="session-form-section">
        <form onSubmit={this.handleSubmit}>

          <input className="session-form-email"
            type="text"
            value={this.state.email}
            onChange={this.update('email')} />

          <input
            className="session-form-password"
            type="password"
            value={this.state.password}
            onChange={this.update('password')} />

          <button type="submit" >{text}</button>
          
        </form>
        <p>{text}, or <Link to={`/${link[0]}`}>{link[1]}</Link></p>
        {this.renderErrors()}
      </section>
    )
  }
}

export default withRouter(SessionForm);
