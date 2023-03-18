import { BrandingWatermarkOutlined } from '@mui/icons-material';
import { Button, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignUp.scss';
import '../UserService.scss';
import { useRecoilValue } from 'recoil';
import { darkModeAtom } from '../../../utils/globalState';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const isDarkModeValue = useRecoilValue(darkModeAtom);

  !isDarkModeValue
    ? document.documentElement.setAttribute('data-mode', 'light')
    : document.documentElement.setAttribute('data-mode', 'dark');

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log({
      email: event?.target[0]?.value,
      password: event?.target[2]?.value,
      confirmPassword: event?.target[4]?.value,
    });

    setEmail('');
    setPassword('');
    setConfirmPassword('');
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
        <h3 className='sign__title'>Sign Up</h3>
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

          <TextField
            value={confirmPassword}
            size='small'
            id='confirm-password'
            label='Confirm Password'
            type='password'
            onChange={(event) => setConfirmPassword(event.target.value)}
          />

          <Button type='submit' variant='contained'>
            Sign Up
          </Button>
        </Box>
        <div className='sign__user__validate'>
          Already have an account? <Link to='/auth/signin'>Sign In</Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
