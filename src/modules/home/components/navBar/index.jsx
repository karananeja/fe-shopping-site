import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.scss';
import {
  AccountCircleIcon,
  BrandLogoIcon,
  LightModeFilledIcon,
  LightModeIcon,
  LoginIcon,
  SearchIcon,
  ShoppingCartIcon,
} from '@utils/constants';
import { useAuthStatus } from '@modules/auth/hooks/useAuthStatus';
import { useGetUserInfo } from '@modules/home/hooks/useHome';
import { Avatar } from 'antd';
import { useDarkMode } from '@hooks/useUtils';

const NavBar = () => {
  const { isDarkMode, setIsDarkMode } = useDarkMode();
  const { loggedIn } = useAuthStatus();
  const { isLoading: isInfoLoading, data: userInfo } = useGetUserInfo({
    enabled: loggedIn,
    select: (data) => data?.userInfo,
  });

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
                <Link to='/profile/details'>
                  {isInfoLoading ? (
                    <AccountCircleIcon />
                  ) : (
                    <Avatar className='header__profile-avatar' size={24}>
                      {userInfo?.firstName[0] ??
                        userInfo?.email[0].toUpperCase()}
                    </Avatar>
                  )}
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
  );
};

export default NavBar;
