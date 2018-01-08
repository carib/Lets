import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleChoice = this.handleChoice.bind(this);
  }

  handleLogout(e) {
    e.preventDefault();
    this.props.logout();
  }

  handleChoice(e) {
    this.props.modProp.toggle();
    this.props.modProp.fetch(e.target.value);

  }

  memberHeader() {
    return (
      <div className="header-right">
        <nav className="header-member-nav">
          <h3>Header, {this.props.user.email}!</h3>
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
            value={"SIGNUP"}
            onClick={this.handleChoice}
          >Sign Up
        </button>

          <button
            value={"LOGIN"}
            onClick={this.handleChoice}
          >Log In
        </button>
        </nav>
      </div>
    );
  }

  render() {
    if (this.props.user !== null) {
      return this.memberHeader();
    } else {
      return this.navLinks();
    }
  }
}

export default Header;
