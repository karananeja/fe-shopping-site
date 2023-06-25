import React from 'react';
import './ProfileSettings.scss';
import { Layout, Menu } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { deleteValue } from '@utils/helpers/localStorageManagement';
import { keys } from '@utils/constants';

const { Sider } = Layout;

const ProfileSettings = () => {
  const navigate = useNavigate();

  const items = [
    {
      key: 'settings',
      label: (
        <>
          <SettingOutlined className='profileSettings__icon' /> Settings
        </>
      ),
      type: 'group',
      children: [
        { key: 'account', path: 'account', label: 'Account' },
        { key: 'payment', path: 'payment', label: 'Payment' },
        { key: 'privacy', path: 'privacy', label: 'Privacy' },
        {
          key: 'advanced-settings',
          path: 'advanced-settings',
          label: 'Advanced Settings',
        },
        {
          key: 'logout',
          label: 'Logout',
          onClick: () => {
            deleteValue(keys.ACCESS_TOKEN);
            navigate('/');
          },
        },
      ],
    },
  ];

  return (
    <Sider className='profileSettings'>
      <Menu items={items} />
    </Sider>
  );
};

export default ProfileSettings;
