import React from 'react';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import './NavBar.scss';
import { darkModeAtom } from '@store/globalState';
import {
  AccountCircleIcon,
  BrandLogoIcon,
  LightModeFilledIcon,
  LightModeIcon,
  LoginIcon,
  SearchIcon,
  ShoppingCartIcon,
  KEYS,
} from '@utils/constants';
import { useAuthStatus } from '@modules/auth/hooks/useAuthStatus';

const NavBar = () => {
  const [isDarkMode, setIsDarkMode] = useRecoilState(darkModeAtom);

  const { loggedIn } = useAuthStatus();

  !isDarkMode
    ? document.documentElement.setAttribute(KEYS.DATA_MODE, KEYS.LIGHT)
    : document.documentElement.setAttribute(KEYS.DATA_MODE, KEYS.DARK);

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
