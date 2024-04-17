import ProfileMenu from '@modules/home/components/profileSettings';
import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
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
