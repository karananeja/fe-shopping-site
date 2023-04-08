import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignUp.scss';
import '../UserService.scss';
import { useRecoilValue } from 'recoil';
import { darkModeAtom } from '../../../utils/globalState';
import { Button, Form, Input } from 'antd';

const { TextArea } = Input;

const SignUp = () => {
  const [email, setEmail] = useState('');
  const isDarkModeValue = useRecoilValue(darkModeAtom);
  const navigate = useNavigate();

  !isDarkModeValue
    ? document.documentElement.setAttribute('data-mode', 'light')
    : document.documentElement.setAttribute('data-mode', 'dark');

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log({ email: event?.target[0]?.value });

    setEmail('');

    setTimeout(() => navigate('/auth/set-password'), 2000);
  };

  return (
    <div className='sign'>
      <div className='sign__logo'>
        {/* Brand Logo */}
        <Link to='/'>Brand Logo</Link>
      </div>
      <div className='sign__form__layout'>
        <h3 className='sign__title'>Sign Up</h3>
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

          <Button type='submit' variant='contained'>
            Sign Up
          </Button>
        </Form>
        <div className='sign__user__validate'>
          Already have an account? <Link to='/auth/signin'>Sign In</Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
