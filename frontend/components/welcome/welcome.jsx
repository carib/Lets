import React from 'react';
import { Link } from 'react-router-dom';

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps)
    console.log(this.props)

  }

  handleLogout(e) {
    e.preventDefault();
    this.props.logout();
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
          <p onClick={this.props.toggleModal}>Sign Up</p>
          <p onClick={this.props.toggleModal}>Log In</p>
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
