import { useSignIn } from '@modules/auth/hooks/useSignIn';
import { BrandLogoIcon, KEYS } from '@utils/constants';
import { setValue } from '@utils/helpers/localStorageManagement';
import { Button, Form, Input } from 'antd';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../AuthHome.scss';
import './SignIn.scss';

const { Item, useForm } = Form;
const { Password } = Input;

const SignIn = () => {
  const navigate = useNavigate();
  const [signInForm] = useForm();
  const { isLoading, mutate: signIn } = useSignIn({
    onSuccess: (data) => {
      setValue(KEYS.ACCESS_TOKEN, data.userInfo.accessToken);
      signInForm.resetFields();
      navigate('/');
    },
  });

  const handleSignInSubmit = (credentials) => {
    const payload = {
      email: credentials.email,
      password: credentials.password,
    };

    try {
      signIn(payload);
    } catch (err) {
      console.log({ err });
    }
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
        <h3 className='sign__title'>{KEYS.SIGN_IN}</h3>
        <Form
          form={signInForm}
          layout='vertical'
          autoComplete='off'
          className='sign__form'
          onFinish={handleSignInSubmit}
          requiredMark={false}
        >
          <Item
            label={KEYS.EMAIL.LABEL}
            name={KEYS.EMAIL.NAME}
            rules={[
              { required: true, message: KEYS.EMAIL.MESSAGE },
              { type: 'email', message: KEYS.EMAIL.VALID_MESSAGE },
            ]}
          >
            <Input />
          </Item>

          <Item
            label={KEYS.PASSWORD.LABEL}
            name={KEYS.PASSWORD.NAME}
            rules={[{ required: true, message: KEYS.PASSWORD.MESSAGE }]}
          >
            <Password />
          </Item>

          <Button type='primary' htmlType='submit' loading={isLoading}>
            {KEYS.SIGN_IN}
          </Button>
        </Form>
        <div className='sign__user__validate'>
          Don&#39;t have an account?{' '}
          <Link to='/auth/signup'>{KEYS.SIGN_UP}</Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
