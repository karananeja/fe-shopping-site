import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignUp.scss';
import '../UserService.scss';
import { useRecoilValue } from 'recoil';
import { darkModeAtom } from '../../../utils/globalState';
import { Button, Form, Input } from 'antd';
import { BrandLogoIcon } from '../../../utils/constants/icons';

const { Item, useForm } = Form;

const SignUp = () => {
  const isDarkModeValue = useRecoilValue(darkModeAtom);
  const navigate = useNavigate();
  const [signUpForm] = useForm();

  !isDarkModeValue
    ? document.documentElement.setAttribute('data-mode', 'light')
    : document.documentElement.setAttribute('data-mode', 'dark');

  const handleSubmit = (credentials) => {
    console.log({ email: credentials.email });
    signUpForm.resetFields();

    setTimeout(() => navigate('/auth/set-password'), 1000);
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
        <h3 className='sign__title'>Sign Up</h3>
        <Form
          form={signUpForm}
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
                message: 'Please enter your email!',
              },
              {
                type: 'email',
                message: 'Please input a valid email.',
              },
            ]}
          >
            <Input size='small' />
          </Item>

          <Button type='primary' htmlType='submit'>
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
