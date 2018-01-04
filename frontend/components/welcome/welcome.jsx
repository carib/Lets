import React from 'react';
import { Link } from 'react-router-dom';

import Modal from '../session/modal';

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

  renderModal() {
    return <Modal />
  }

  navLinks() {
    return (
      <header>
        <div className="header-right">
          <nav className="header-nav-links">
            <Link to='/signup' onClick={this.props.toggleModal}>Sign Up</Link>
            <Link to='/login' onClick={this.props.toggleModal}>Log In</Link>
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
