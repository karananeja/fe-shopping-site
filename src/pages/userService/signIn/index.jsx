import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignIn.scss';
import '../UserService.scss';
import { Button, Form, Input } from 'antd';
import { BrandLogoIcon } from '../../../utils/constants/icons';

const { TextArea } = Input;

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
          <BrandLogoIcon />
        </Link>
      </div>
      <div className='sign__form__layout'>
        <h3 className='sign__title'>Sign In</h3>
        <Form
          component='form'
          autoComplete='off'
          className='sign__form'
          onSubmit={handleSubmit}
        >
          <TextArea
            value={email}
            size='small'
            id='email'
            label='Email'
            type='text'
            onChange={(event) => setEmail(event.target.value)}
          />

          <TextArea
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
        </Form>
        <div className='sign__user__validate'>
          Don&#39;t have an account? <Link to='/auth/signup'>Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
