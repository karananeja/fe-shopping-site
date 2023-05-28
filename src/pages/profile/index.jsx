import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Profile.scss';
import { BrandLogoIcon, LogoutIcon } from '../../utils/constants/icons';
import { deleteValue } from '../../infrastructure/storeManagement';
import { Tooltip } from 'antd';

const Profile = () => {
  const navigate = useNavigate();

  return (
    <div className='profile'>
      <Link to='/'>
        <BrandLogoIcon />
      </Link>
      <Tooltip title='Logout'>
        <LogoutIcon
          onClick={() => {
            deleteValue('accessToken');
            navigate('/');
          }}
        />
      </Tooltip>
    </div>
  );
};

export default Profile;
