import { BrandingWatermarkOutlined } from '@mui/icons-material';
import React from 'react';
import { Link } from 'react-router-dom';
import './Profile.scss';

const Profile = () => {
  return (
    <div className='profile'>
      <Link to='/'>
        <BrandingWatermarkOutlined />
      </Link>
    </div>
  );
};

export default Profile;
