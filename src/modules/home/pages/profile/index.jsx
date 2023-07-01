import React from 'react';
import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import ProfileMenu from '@modules/home/components/profileSettings';
import './Profile.scss';

const Profile = () => {
  return (
    <Layout className='profile'>
      <ProfileMenu />
      <Outlet />
    </Layout>
  );
};

export default Profile;
