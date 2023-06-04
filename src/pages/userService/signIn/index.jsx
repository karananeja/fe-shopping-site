import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignIn.scss';
import '../UserService.scss';
import { Button, Form, Input } from 'antd';
import { BrandLogoIcon } from '../../../utils/constants/icons';
import { useRecoilValue } from 'recoil';
import { darkModeAtom } from '../../../utils/globalState';
import { useSignIn } from '../../../hooks/useSignIn';
import { setValue } from '../../../infrastructure/storeManagement';
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

  const { isLoading, mutate: signIn } = useSignIn({
    onSuccess: (data) => {
      setValue(keys.ACCESS_TOKEN, data.userInfo.accessToken);
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
        <h3 className='sign__title'>{keys.SIGN_IN}</h3>
        <Form
          form={signInForm}
          layout='vertical'
          autoComplete='off'
          className='sign__form'
          onFinish={handleSignInSubmit}
          requiredMark={false}
        >
          <Item
            label={keys.EMAIL.LABEL}
            name={keys.EMAIL.NAME}
            rules={[
              {
                required: true,
                message: `${keys.EMAIL.MESSAGE}`,
              },
              {
                type: 'email',
                message: `${keys.EMAIL.VALID_MESSAGE}`,
              },
            ]}
          >
            <Input />
          </Item>

          <Item
            label={keys.PASSWORD.LABEL}
            name={keys.PASSWORD.NAME}
            rules={[
              {
                required: true,
                message: `${keys.PASSWORD.MESSAGE}`,
              },
            ]}
          >
            <Password />
          </Item>

          <Button type='primary' htmlType='submit' loading={isLoading}>
            {keys.SIGN_IN}
          </Button>
        </Form>
        <div className='sign__user__validate'>
          Don&#39;t have an account?{' '}
          <Link to='/auth/signup'>{keys.SIGN_UP}</Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
