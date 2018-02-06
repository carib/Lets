import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { CSSTransitionGroup } from 'react-transition-group';
import SpotFormContainer from '../spots/spot_form_container';


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.handleHeaderNavSelection = this.handleHeaderNavSelection.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleChoice = this.handleChoice.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.state = {
      menuActive: false,
      user: props.user
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

  userAvatar() {
    if (this.state.user.imageThumbUrl.match(/missing/)) {
      return <i className="fa fa-user-circle"></i>
    } else {
      return <img src={this.state.user.imageThumbUrl}></img>
    }
  }

  handleHeaderNavSelection(e) {
    switch (e.target.value) {
      case '/':
        this.props.history.push("/");
      case 'new':
        this.props.history.push("/new");
      default:
        return null;
    }
  }

  memberHeader() {
    const userAvatar = this.userAvatar();
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
        <div className="header-nav-buttons">
          <button
            className="header-add-spot-btn"
            value="new"
            onClick={this.handleHeaderNavSelection}
          >Add a new listing</button>
        </div>
        <nav className="header-member-nav">
          <div className="member-icon-box" onClick={this.toggleMenu}>
            {userAvatar}
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
          >Sign Up</button>
          <button
            value={"LOGIN"}
            onClick={this.handleChoice}
          >Log In</button>
        </nav>
      </div>
    );
  }

  showHeader() {
    const userAvatar = this.userAvatar();
    let menu;
    if (this.state.menuActive) {
      menu =  <div className="show-header-member-menu">
                <ul className="show-menu-list">
                  <li>
                    <div onClick={this.handleLogout} className="show-menu-item">Log Out</div>
                  </li>
                </ul>
              </div>
    } else {
      menu = "";
    }
    return (
      <div className="spot-show-header">

        <div className="show-header-right">
          <div className="show-header-nav-buttons">
            <button
              className="show-header-add-spot-btn"
              value="new"
              onClick={this.handleHeaderNavSelection}
            >Add a new listing</button>
          </div>
          <nav className="show-header-member-nav">
            <div className="show-member-icon-box" onClick={this.toggleMenu}>
              {userAvatar}
            </div>
          {menu}
          </nav>
        </div>
      </div>
    )
  }

  render() {
    if (this.props.unfix) {
      return this.showHeader();
    }
    if (this.props.user !== null) {
      return this.memberHeader();
    } else {
      return this.navLinks();
    }
  }
}

export default withRouter(Header);
