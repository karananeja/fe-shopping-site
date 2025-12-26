import { CloseCircleOutlined } from '@ant-design/icons';
import { useDarkMode } from '@hooks/useUtils';
import { useAuthStatus } from '@modules/auth/hooks';
import { useGetUserInfo } from '@modules/home/hooks/useHome';
import { cartItemsAtom, productSearchQueryAtom } from '@store/globalState';
import { Icons } from '@utils/constants';
import { Avatar } from 'antd';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import './NavBar.scss';

const NavBar = () => {
  const { isDarkMode, setIsDarkMode } = useDarkMode();
  const { loggedIn } = useAuthStatus();

  const cartItems = useRecoilValue(cartItemsAtom);
  const [productSearchQuery, setProductSearchQuery] = useRecoilState(
    productSearchQueryAtom
  );

  const inputRef = useRef(null);

  const { isLoading: isInfoLoading, data: userInfo } = useGetUserInfo({
    enabled: loggedIn,
    select: (data) => data?.userInfo,
  });

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

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
          <Icons.search
            className='header__searchBar-icon'
            onClick={() => inputRef.current.focus()}
          />
          <input
            ref={inputRef}
            type='text'
            placeholder="Search the name of the product you're looking for"
            value={productSearchQuery}
            onChange={(e) => setProductSearchQuery(e.target.value)}
            autoFocus
          />
          {productSearchQuery && (
            <CloseCircleOutlined onClick={() => setProductSearchQuery('')} />
          )}
        </div>
      </div>
      <div className='header__right'>
        {/* Options */}
        <nav className='header__nav'>
          <ul className='header__unorderedList'>
            <li className='header__cart-item'>
              <Link to='/cart'>
                <span className='header__cart-item-count'>{totalItems}</span>
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
