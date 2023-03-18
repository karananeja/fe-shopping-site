import {
  AccountCircleOutlined,
  BrandingWatermarkOutlined,
  LightMode,
  LightModeOutlined,
  Search,
  ShoppingCartOutlined,
} from '@mui/icons-material';
import React from 'react';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { darkModeAtom } from '../../utils/globalState';
import './NavBar.scss';

const NavBar = () => {
  const [isDarkMode, setIsDarkMode] = useRecoilState(darkModeAtom);

  !isDarkMode
    ? document.documentElement.setAttribute('data-mode', 'light')
    : document.documentElement.setAttribute('data-mode', 'dark');

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
              {isDarkMode ? <LightMode /> : <LightModeOutlined />}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
