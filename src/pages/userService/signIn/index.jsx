import { BrandingWatermarkOutlined } from '@mui/icons-material';
import { Button, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignIn.scss';
import '../UserService.scss';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log({
      email: event?.target[0]?.value,
      password: event?.target[2]?.value,
    });

    setEmail('');
    setPassword('');
  };

  return (
    <div className='sign'>
      <div className='sign__logo'>
        {/* Brand Logo */}
        <Link to='/'>
          <BrandingWatermarkOutlined />
        </Link>
      </div>
      <div className='sign__form__layout'>
        <h3 className='sign__title'>Sign In</h3>
        <Box
          component='form'
          autoComplete='off'
          className='sign__form'
          onSubmit={handleSubmit}
        >
          <TextField
            value={email}
            size='small'
            id='email'
            label='Email'
            type='text'
            onChange={(event) => setEmail(event.target.value)}
          />

          <TextField
            value={password}
            size='small'
            id='password'
            label='Password'
            type='password'
            onChange={(event) => setPassword(event.target.value)}
          />

          <Button type='submit' variant='contained'>
            Sign In
          </Button>
        </Box>
        <div className='sign__user__validate'>
          Don&#39;t have an account? <Link to='/auth/signup'>Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
