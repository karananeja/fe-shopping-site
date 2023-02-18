import React from 'react';
import './NavBar.scss';

const NavBar = () => {
  return (
    <header>
      <div className='header__left'>{/* Brand Logo */}</div>
      <div className='header__center'>{/* Search Bar */}</div>
      <div className='header__right'>{/* Options */}</div>
    </header>
  );
};

export default NavBar;
