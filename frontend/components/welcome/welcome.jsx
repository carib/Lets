import React from 'react';
import { Link } from 'react-router-dom';

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(e) {
    e.preventDefault();
    this.props.logout();
  }

  userWelcome() {
    return (
      <div>
        <h3>Welcome, {this.props.user.email}!</h3>
        <button onClick={this.handleLogout}>Log Out</button>
      </div>
    );
  }

  navLinks() {
    return (
      <div>
        <Link to='/signup'>Sign Up</Link>
        <br/>
        <Link to='/login'>Log In</Link>
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
