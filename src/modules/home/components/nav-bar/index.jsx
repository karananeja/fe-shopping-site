import { CloseCircleOutlined } from '@ant-design/icons';
import { useAuthStatus } from '@modules/auth/hooks';
import { useGetUserInfo } from '@modules/home/hooks/useHome';
import { cartItemsAtom, searchQueryAtom } from '@store/globalState';
import { Icons } from '@utils/constants';
import { Avatar } from 'antd';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import './nav-bar.scss';

const NavBar = () => {
  const { loggedIn } = useAuthStatus();

  const cartItems = useRecoilValue(cartItemsAtom);
  const [searchQuery, setSearchQuery] = useRecoilState(searchQueryAtom);

  const inputRef = useRef(null);

  const { isLoading: isInfoLoading, data: userInfo } = useGetUserInfo({
    enabled: loggedIn,
    select: (data) => data?.userInfo,
  });

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className='header'>
      <div className='header__left'>
        <Link to='/' className='header__logo'>
          <Icons.watermark />
        </Link>
      </div>
      <div className='header__center'>
        <div className='header__searchBar'>
          <Icons.search
            className='header__searchBar-icon'
            onClick={() => inputRef.current.focus()}
          />
          <input
            ref={inputRef}
            type='text'
            placeholder="Search the name of the product you're looking for"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            autoFocus
          />
          {searchQuery && (
            <CloseCircleOutlined
              className='header__searchBar-clear'
              onClick={() => setSearchQuery('')}
            />
          )}
        </div>
      </div>
      <div className='header__right'>
        <nav className='header__nav'>
          <ul className='header__unorderedList'>
            <li className='header__cart-item'>
              <Link to='/cart' className='header__cart-link'>
                <div className='header__cart-wrapper'>
                  <Icons.shoppingCart className='header__cart-icon' />
                  {totalItems > 0 && (
                    <span className='header__cart-item-count'>
                      {totalItems}
                    </span>
                  )}
                </div>
              </Link>
            </li>
            <li className='header__nav-item'>
              {loggedIn ? (
                <Link to='/profile/details' className='header__profile-link'>
                  {isInfoLoading ? (
                    <Icons.account className='header__profile-icon' />
                  ) : (
                    <Avatar className='header__profile-avatar' size={28}>
                      {userInfo?.firstName[0] ??
                        userInfo?.email[0].toUpperCase()}
                    </Avatar>
                  )}
                </Link>
              ) : (
                <Link to='/auth/sign-in' className='header__login-link'>
                  <Icons.login className='header__login-icon' />
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
