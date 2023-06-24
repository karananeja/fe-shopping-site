import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Profile.scss';
import { BrandLogoIcon, LogoutIcon } from '../../../../utils/constants/icons';
import { deleteValue } from '@utils/helpers/localStorageManagement';
import { Button, Result, Tooltip } from 'antd';
import { keys } from '../../../../utils/constants/keys';

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

      <Result
        status='404'
        subTitle={
          <>
            Sorry, the page you visited is under <b>construction/maintenance</b>
          </>
        }
        extra={
          <Button type='primary' onClick={() => navigate('/')}>
            Back Home
          </Button>
        }
      />
    </div>
  );
};

export default Profile;
