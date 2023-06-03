import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignUp.scss';
import '../UserService.scss';
import { useRecoilValue } from 'recoil';
import { darkModeAtom } from '../../../utils/globalState';
import { Button, Form, Input } from 'antd';
import { BrandLogoIcon } from '../../../utils/constants/icons';
import { useSignUp } from '../../../hooks/useLogin';
import Loader from '../../../components/Loader';
import { setValue } from '../../../infrastructure/storeManagement';
import { keys } from '../../../utils/constants/keys';

const { Item, useForm } = Form;

const SignUp = () => {
  const isDarkModeValue = useRecoilValue(darkModeAtom);
  const navigate = useNavigate();
  const [signUpForm] = useForm();

  !isDarkModeValue
    ? document.documentElement.setAttribute(keys.DATA_MODE, keys.LIGHT)
    : document.documentElement.setAttribute(keys.DATA_MODE, keys.DARK);

  const { isLoading, data, mutateAsync: signUp } = useSignUp();

  useEffect(() => {
    if (data) {
      setValue(keys.ACCESS_TOKEN, data.userInfo.accessToken);
      navigate('/auth/set-password');
    }
  }, [data]);

  const handleSubmit = async (credentials) => {
    const payload = { email: credentials.email };

    setValue('userEmail', JSON.stringify(payload));

    try {
      await signUp(payload);
    } catch (err) {
      console.log({ err });
    }

    signUpForm.resetFields();
  };

  if (isLoading) return <Loader />;

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
