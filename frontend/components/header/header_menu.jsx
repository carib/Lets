import React from 'react';
import CSSTransitionGroup from 'react-transition-group';

class HeaderMenu extends React.Component {
  constructor(props) {
    super(props);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.state = {
      menuActive: false,
    }
  }

  toggleMenu() {
    let menuState = !this.state.menuActive;
    this.setState({
      menuActive: menuState,
    });
  }

  render() {
    let menu;
    if (this.state.menuActive) {
      menu =  <div>
                <ul>
                  <li>
                    <button onClick={this.handleLogout}>Log Out</button>
                  </li>
                </ul>
              </div>
    } else {
      menu = "";
    }
    return (
      <div className="header-right">
        <nav className="header-member-nav">
          <button className="header-member-button" onClick={this.toggleMenu} />
          {menu}
        
        </nav>
      </div>
    );
  }
}

export default HeaderMenu;
