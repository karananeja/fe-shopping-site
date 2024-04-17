import { useDarkMode } from '@hooks/useUtils';
import { useAuthStatus } from '@modules/auth/hooks';
import { useGetUserInfo } from '@modules/home/hooks/useHome';
import { Icons } from '@utils/constants';
import { Avatar } from 'antd';
import { Link } from 'react-router-dom';
import './NavBar.scss';

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
          <Icons.watermark />
        </Link>
      </div>
      <div className='header__center'>
        <div className='header__searchBar'>
          <Icons.search />
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
                <Icons.shoppingCart />
              </Link>
            </li>
            <li>
              {loggedIn ? (
                <Link to='/profile/details'>
                  {isInfoLoading ? (
                    <Icons.account />
                  ) : (
                    <Avatar className='header__profile-avatar' size={24}>
                      {userInfo?.firstName[0] ??
                        userInfo?.email[0].toUpperCase()}
                    </Avatar>
                  )}
                </Link>
              ) : (
                <Link to='/auth/signin'>
                  <Icons.login />
                </Link>
              )}
            </li>
            <li onClick={() => setIsDarkMode(!isDarkMode)}>
              {isDarkMode ? <Icons.lightModeFilled /> : <Icons.lightMode />}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
