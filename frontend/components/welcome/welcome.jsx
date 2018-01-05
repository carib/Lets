import React from 'react';
import { Link } from 'react-router-dom';

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleChoice = this.handleChoice.bind(this);
    console.log("welcome", props);
  }

  handleLogout(e) {
    e.preventDefault();
    this.props.logout();
  }

  handleChoice(e) {
    this.props.modProp.toggle();
  }

  userWelcome() {
    return (
      <div className="header-right">
        <nav className="header-user-nav">
          <h3>Welcome, {this.props.user.email}!</h3>
          <button onClick={this.handleLogout}>Log Out</button>
        </nav>
      </div>
    );
  }

  navLinks() {
    return (
      <div className="header-right">
        <nav className="header-nav-links" >
          <button
            value={"signup"}
            onClick={this.handleChoice}
          >Sign Up
        </button>

          <button
            value={"login"}
            onClick={this.handleChoice}
          >Log In
        </button>
        </nav>
      </div>
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
//
// <Link to='/signup'>Sign Up</Link>
// <Link to='/login' onClick={this.props.toggleModal}>Log In</Link>
