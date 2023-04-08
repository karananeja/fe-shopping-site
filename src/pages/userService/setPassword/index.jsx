import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../UserService.scss';
import { useRecoilValue } from 'recoil';
import { darkModeAtom } from '../../../utils/globalState';
import { Button, Form, Input } from 'antd';

const { TextArea } = Input;

const SetPassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const isDarkModeValue = useRecoilValue(darkModeAtom);
  const navigate = useNavigate();

  !isDarkModeValue
    ? document.documentElement.setAttribute('data-mode', 'light')
    : document.documentElement.setAttribute('data-mode', 'dark');

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log({
      password: event?.target[0]?.value,
      confirmPassword: event?.target[2]?.value,
    });

    setPassword('');
    setConfirmPassword('');

    setTimeout(() => navigate('/'), 2000);
  };

  return (
    <div className='sign'>
      <div className='sign__logo'>
        {/* Brand Logo */}
        <Link to='/'>Brand Logo</Link>
      </div>
      <div className='sign__form__layout'>
        <h3 className='sign__title'>Set Password</h3>
        <Form
          component='form'
          autoComplete='off'
          className='sign__form'
          onSubmit={handleSubmit}
        >
          <TextArea
            value={password}
            size='small'
            id='password'
            label='Password'
            type='password'
            onChange={(event) => setPassword(event.target.value)}
          />

          <TextArea
            value={confirmPassword}
            size='small'
            id='confirmPassword'
            label='Confirm Password'
            type='password'
            onChange={(event) => setConfirmPassword(event.target.value)}
          />

          <Button type='submit' variant='contained'>
            Set Password
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default SetPassword;
