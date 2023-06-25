import React from 'react';
import { Layout } from 'antd';
import ProfileSettings from '@modules/home/components/profileSettings';
import SettingsContent from '@modules/home/components/settingsContent';
import './Profile.scss';

const Profile = () => {
  return (
    <div className='profile'>
      <Layout>
        <ProfileSettings />
        <SettingsContent />
      </Layout>
    </div>
  );
};

export default Profile;
