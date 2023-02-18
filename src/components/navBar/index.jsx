import { Search } from '@mui/icons-material';
import React from 'react';
import './NavBar.scss';

const NavBar = () => {
  return (
    <header className='header'>
      <div className='header__left'>
        {/* Brand Logo */}
        Brand Logo
      </div>
      <div className='header__center'>
        {/* Search Bar */}
        <div className='header__searchBar'>
          <Search />
          <input
            type='text'
            placeholder="Type the name of the product you're looking for"
          />
        </div>
      </div>
      <div className='header__right'>
        {/* Options */}
        <nav className='header__nav'>
          <ul className='header__unorderedList'>
            <li>Cart</li>
            <li>Account</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
