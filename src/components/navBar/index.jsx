import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { darkModeAtom } from '../../utils/globalState';
import './NavBar.scss';
import { Input } from 'antd';
import {
  AccountCircleIcon,
  BrandLogoIcon,
  LightModeIcon,
  LightModeFilledIcon,
  LoginIcon,
  ShoppingCartIcon,
} from '../../utils/constants/icons';

const { Search } = Input;

const NavBar = () => {
  const [userExists] = useState(false);
  const [isDarkMode, setIsDarkMode] = useRecoilState(darkModeAtom);

  !isDarkMode
    ? document.documentElement.setAttribute('data-mode', 'light')
    : document.documentElement.setAttribute('data-mode', 'dark');

  return (
    <header className='header'>
      <div className='header__left'>
        {/* Brand Logo */}
        <Link to='/'>
          <BrandLogoIcon />
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
                <ShoppingCartIcon />
              </Link>
            </li>
            <li>
              {userExists ? (
                <Link to='/profile'>
                  <AccountCircleIcon />
                </Link>
              ) : (
                <Link to='/auth/signup'>
                  <LoginIcon />
                </Link>
              )}
            </li>
            <li onClick={() => setIsDarkMode(!isDarkMode)}>
              {isDarkMode ? <LightModeFilledIcon /> : <LightModeIcon />}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
