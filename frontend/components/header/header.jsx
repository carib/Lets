import React from 'react';
import { Link } from 'react-router-dom';
import { CSSTransitionGroup } from 'react-transition-group';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleChoice = this.handleChoice.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.state = {
      menuActive: false,
    };
  }

  handleLogout(e) {
    e.preventDefault();
    this.props.logout();
  }

  handleChoice(e) {
    this.props.modProp.toggle();
    this.props.modProp.fetch(e.target.value);
  }

  toggleMenu() {
    let menuState = !this.state.menuActive;
    this.setState({
      menuActive: menuState,
    });
  }

  memberHeader() {
    let menu;
    if (this.state.menuActive) {
      menu =  <div className="header-member-menu">
                <ul className="menu-list">
                  <li>
                    <div onClick={this.handleLogout} className="menu-item">Log Out</div>
                  </li>
                </ul>
              </div>
    } else {
      menu = "";
    }
    return (
      <div className="header-right">
        <nav className="header-member-nav">
          <div className="member-icon-box" onClick={this.toggleMenu}>
            <i className="fa fa-user-circle" />
          </div>
        {menu}
        </nav>
      </div>
    );
  }

  navLinks() {
    return (
      <div className="header-right">
        <nav className="header-nav-links">
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
