import React from 'react';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { darkModeAtom } from '../../utils/globalState';
import './NavBar.scss';
import {
  AccountCircleIcon,
  BrandLogoIcon,
  LightModeIcon,
  LightModeFilledIcon,
  LoginIcon,
  ShoppingCartIcon,
  SearchIcon,
} from '../../utils/constants/icons';
import { useAuthStatus } from '../../hooks/useAuthStatus';
import { keys } from '../../utils/constants/keys';

const NavBar = () => {
  const [isDarkMode, setIsDarkMode] = useRecoilState(darkModeAtom);

  const { loggedIn } = useAuthStatus();

  !isDarkMode
    ? document.documentElement.setAttribute(keys.DATA_MODE, keys.LIGHT)
    : document.documentElement.setAttribute(keys.DATA_MODE, keys.DARK);

  return (
    <>
      <header className='header'>
        <div className='header__left'>
          {/* Brand Logo */}
          <Link to='/'>
            <BrandLogoIcon />
          </Link>
        </div>
        <div className='header__center'>
          <div className='header__searchBar'>
            <SearchIcon />
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
                {loggedIn ? (
                  <Link to='/profile'>
                    <AccountCircleIcon />
                  </Link>
                ) : (
                  <Link to='/auth/signin'>
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
    </>
  );
};

export default NavBar;
