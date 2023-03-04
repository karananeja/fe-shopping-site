import {
  AccountCircleOutlined,
  BrandingWatermarkOutlined,
  Search,
  ShoppingCartOutlined,
} from '@mui/icons-material';
import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.scss';

const NavBar = () => {
  return (
    <header className='header'>
      <div className='header__left'>
        {/* Brand Logo */}
        <Link to='/'>
          <BrandingWatermarkOutlined />
        </Link>
      </div>
      <div className='header__center'>
        <div className='header__searchBar'>
          <Search />
          <input
            type='text'
            placeholder="Search the name of the product you're looking for"
          />
        </div>
      </div>
      <div className='header__right'>
        {/* Options */}
        <nav className='header__nav'>
          <ul className='header__unorderedList'>
            <li>
              <Link to='/cart'>
                <ShoppingCartOutlined />
              </Link>
            </li>
            <li>
              <Link to='/profile'>
                <AccountCircleOutlined />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
