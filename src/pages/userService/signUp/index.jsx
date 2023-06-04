import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignUp.scss';
import '../UserService.scss';
import { useRecoilValue } from 'recoil';
import { darkModeAtom } from '../../../utils/globalState';
import { Button, Form, Input, Popover, Space, theme } from 'antd';
import { BrandLogoIcon } from '../../../utils/constants/icons';
import { useSignUp } from '../../../hooks/useSignUp';
import Loader from '../../../components/Loader';
import { keys } from '../../../utils/constants/keys';
import { PASSWORD_CHECK } from '../../../utils/constants/constants';
import { CheckCircleFilled } from '@ant-design/icons';

const { Item, useForm } = Form;

const { Password } = Input;

const { useToken } = theme;

const SignUp = () => {
  const [passwordChecks, setPasswordChecks] = useState(PASSWORD_CHECK);
  const isDarkModeValue = useRecoilValue(darkModeAtom);
  const navigate = useNavigate();
  const [signUpForm] = useForm();
  const { token } = useToken();

  !isDarkModeValue
    ? document.documentElement.setAttribute(keys.DATA_MODE, keys.LIGHT)
    : document.documentElement.setAttribute(keys.DATA_MODE, keys.DARK);

  const { isLoading, mutate: signUp } = useSignUp({
    onSuccess: () => {
      signUpForm.resetFields();
      navigate('/');
    },
  });

  const handleSignUpSubmit = (credentials) => {
    try {
      signUp(credentials);
    } catch (err) {
      console.log({ err });
    }
  };

  const handlePasswordChange = (e) => {
    const password = e.target.value;
    signUpForm.setFieldsValue({ password });
    //run the validation criteria
    const temp = PASSWORD_CHECK.map((check) =>
      check.pattern.test(password)
        ? { ...check, valid: true }
        : { ...check, valid: false }
    );
    setPasswordChecks(temp);
  };

  const content = (
    <>
      {passwordChecks.map((check) => (
        <div key={check.id}>
          <Space>
            {check.valid ? (
              <CheckCircleFilled style={{ color: token.colorPrimary }} />
            ) : (
              <CheckCircleFilled style={{ color: '#e5e5e5' }} />
            )}
            {check.label}
          </Space>
        </div>
      ))}
    </>
  );

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
        <h3 className='sign__title'>{keys.SIGN_UP}</h3>
        <Form
          form={signUpForm}
          layout='vertical'
          autoComplete='off'
          className='sign__form'
          onFinish={handleSignUpSubmit}
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

          <Popover
            placement='topRight'
            title='Password policy'
            content={content}
            trigger='click'
          >
            <Item
              label={keys.PASSWORD.LABEL}
              name={keys.PASSWORD.NAME}
              rules={[
                {
                  required: true,
                  message: `${keys.PASSWORD.MESSAGE}`,
                },
                {
                  pattern: new RegExp(
                    /(?=^.{6,}$)(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[^A-Za-z0-9]).*/
                  ),
                  message: `${keys.EMAIL.REGEX_MESSAGE}`,
                },
              ]}
            >
              <Password onChange={handlePasswordChange} />
            </Item>
          </Popover>

          <Item
            label={keys.CONFIRM_PASSWORD.LABEL}
            name={keys.CONFIRM_PASSWORD.NAME}
            rules={[
              {
                required: true,
                message: `${keys.CONFIRM_PASSWORD.MESSAGE}`,
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (
                    !value ||
                    getFieldValue(`${keys.PASSWORD.NAME}`) === value
                  ) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error(`${keys.CONFIRM_PASSWORD.ERROR_MESSAGE}`)
                  );
                },
              }),
            ]}
          >
            <Password visibilityToggle={{ visible: true }} />
          </Item>

          <Button type='primary' htmlType='submit' loading={isLoading}>
            {keys.SIGN_UP}
          </Button>
        </Form>
        <div className='sign__user__validate'>
          Already have an account? <Link to='/auth/signin'>{keys.SIGN_IN}</Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
