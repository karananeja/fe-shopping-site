import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowCircleRightOutlined } from '@mui/icons-material';
import './Error.scss';

const Error = () => {
  return (
    <div className='error'>
      <h2 className='error__message'>Psych, that&apos;s the wrong url</h2>
      <h4 className='error__info'>
        Please correct the url to continue shopping or contact support for what
        you&apos;re looking
      </h4>
      <p className='error__link'>
        Click Here to go back to <ArrowCircleRightOutlined />{' '}
        <Link to='/'>Home</Link>
      </p>
    </div>
  );
};

export default Error;
