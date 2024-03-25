import React, { useState } from 'react';
import './ProfileMenu.scss';
import { Layout, Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { deleteValue } from '@utils/helpers/localStorageManagement';
import { KEYS } from '@utils/constants';
import { useDarkMode } from '@hooks/useUtils';

const { Sider } = Layout;

const ProfileMenu = () => {
  const [activeLink, setActiveLink] = useState('details');
  const navigate = useNavigate();
  useDarkMode();

  const items = [
    {
      key: 'account',
      label: (
        <>
          <UserOutlined className='profileMenu__icon' /> My Account
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
        { key: 'address', label: 'Address' },
        { key: 'orders', label: 'Orders' },
        { key: 'account-settings', label: 'Account Settings' },
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
