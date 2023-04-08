import React from 'react';
import { Link } from 'react-router-dom';
import './Profile.scss';
import { BrandLogoIcon } from '../../utils/constants/icons';

const Profile = () => {
  return (
    <div className='profile'>
      <Link to='/'>
        <BrandLogoIcon />
      </Link>
    </div>
  );
};

export default Profile;
