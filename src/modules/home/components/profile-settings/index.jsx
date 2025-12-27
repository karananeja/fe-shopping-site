import { Icons, KEYS } from '@utils/constants';
import { deleteValue } from '@utils/helpers';
import { Layout, Menu } from 'antd';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './profile-menu.scss';

const { Sider } = Layout;

const ProfileMenu = () => {
  const { pathname } = useLocation();
  const [activeLink, setActiveLink] = useState(pathname.split('/')[2]);
  const navigate = useNavigate();

  const items = [
    {
      key: 'account',
      label: (
        <>
          <Icons.users className='profileMenu__icon' /> My Account
        </>
      ),
      type: 'group',
      children: [
        {
          key: 'details',
          label: 'Details',
          onClick: () => {
            navigate('details');
            setActiveLink('details');
          },
        },
        {
          key: 'address',
          label: 'Address',
          onClick: () => {
            navigate('address');
            setActiveLink('address');
          },
        },
        {
          key: 'orders',
          label: 'Orders',
          onClick: () => {
            navigate('orders');
            setActiveLink('orders');
          },
        },
        {
          key: 'account-settings',
          label: 'Account Settings',
          onClick: () => {
            navigate('account-settings');
            setActiveLink('account-settings');
          },
        },
        {
          key: 'logout',
          label: 'Logout',
          onClick: () => {
            deleteValue(KEYS.ACCESS_TOKEN);
            window.location.reload();
          },
        },
      ],
    },
  ];

  return (
    <Sider className='profileMenu'>
      <Menu items={items} selectedKeys={[activeLink]} />
    </Sider>
  );
};

export default ProfileMenu;
