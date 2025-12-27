import ProfileMenu from '@modules/home/components/profile-settings';
import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import './profile.scss';

const Profile = () => {
  return (
    <Layout className='profile'>
      <ProfileMenu />
      <Outlet />
    </Layout>
  );
};

export default Profile;
