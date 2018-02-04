import React from 'react';

const Logo = ({ handleClick }) => {
  return (
    <div className="logo-box" onClick={handleClick}>
      <div className="logo-gel">L</div>
      <div className="logo">L</div>
    </div>
  )
}

export default Logo;
