import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Profile.scss';
import { BrandLogoIcon, LogoutIcon } from '../../utils/constants/icons';
import { deleteValue } from '../../infrastructure/storeManagement';
import { Tooltip } from 'antd';
import { keys } from '../../utils/constants/keys';

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
            deleteValue(keys.ACCESS_TOKEN);
            navigate('/');
          }}
        />
      </Tooltip>
    </div>
  );
};

export default Profile;
