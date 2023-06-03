import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignIn.scss';
import '../UserService.scss';
import { Button, Form, Input } from 'antd';
import { BrandLogoIcon } from '../../../utils/constants/icons';
import { useRecoilValue } from 'recoil';
import { darkModeAtom } from '../../../utils/globalState';
import { keys } from '../../../utils/constants/keys';

const { Item, useForm } = Form;

const { Password } = Input;

const SignIn = () => {
  const isDarkModeValue = useRecoilValue(darkModeAtom);
  const navigate = useNavigate();
  const [signInForm] = useForm();

  !isDarkModeValue
    ? document.documentElement.setAttribute(keys.DATA_MODE, keys.LIGHT)
    : document.documentElement.setAttribute(keys.DATA_MODE, keys.DARK);

  const handleSubmit = (credentials) => {
    console.log({
      email: credentials.email,
      password: credentials.password,
    });

    signInForm.resetFields();

    setTimeout(() => navigate('/'), 1000);
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
          form={signInForm}
          layout='vertical'
          autoComplete='off'
          className='sign__form'
          onFinish={handleSubmit}
          onFinishFailed={(err) => console.log({ err })}
        >
          <Item
            label='Email'
            name='email'
            rules={[
              {
                required: true,
                message: 'Please enter your email.',
              },
              {
                type: 'email',
                message: 'Please enter a valid email.',
              },
            ]}
          >
            <Input size='small' />
          </Item>

          <Item
            label='Password'
            name='password'
            rules={[
              {
                required: true,
                message: 'Please enter your password!',
              },
            ]}
          >
            <Password size='small' />
          </Item>

          <Button type='primary' htmlType='submit'>
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
