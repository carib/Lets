import React from 'react';
import { Link, Route } from 'react-router-dom';

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.toggleModal;
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(e) {
    e.preventDefault();
    this.props.logout();
  }

  handleLink(e) {
    e.preventDefault();
    this.props.toggleModal();
  }

  userWelcome() {
    return (
      <header>
        <div className="header-right">
          <nav className="header-user-nav">
            <h3>Welcome, {this.props.user.email}!</h3>
            <button onClick={this.handleLogout}>Log Out</button>
          </nav>
        </div>
      </header>
    );
  }

  navLinks() {
    return (
      <header>
        <div className="header-right">
          <nav className="header-nav-links">
            <Link to="/login" onClick={this.props.toggleModal} value="login">Log In</Link>
            <Link to="/login" onClick={this.props.toggleModal} value="signup">Sign Up</Link>
          </nav>
        </div>
      </header>
    );
  }

  render() {
    if (this.props.user !== null) {
      return this.userWelcome();
    } else {
      return this.navLinks();
    }
  }
}

export default Welcome;
