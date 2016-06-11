import React, { PropTypes } from 'react'

class Header extends React.Component {
  render () {
    return (
      <div className="ui fixed menu">
        <div className="ui container">
          <a href="#" className="header item">
            Yukebox
          </a>
        </div>
      </div>
    );
  }
}

export default Header;
