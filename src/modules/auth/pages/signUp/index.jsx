import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignUp.scss';
import { useRecoilValue } from 'recoil';
import { Button, Form, Input, Popover, Space, theme } from 'antd';
import { darkModeAtom } from '@store/globalState';
import { BrandLogoIcon, PASSWORD_CHECK, KEYS } from '@utils/constants';
import { useSignUp } from '@modules/auth/hooks/useSignUp';
import { CheckCircleFilled } from '@ant-design/icons';
import { setValue } from '@utils/helpers/localStorageManagement';

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
    ? document.documentElement.setAttribute(KEYS.DATA_MODE, KEYS.LIGHT)
    : document.documentElement.setAttribute(KEYS.DATA_MODE, KEYS.DARK);

  const { isLoading, mutate: signUp } = useSignUp({
    onSuccess: (data) => {
      setValue(KEYS.ACCESS_TOKEN, data.userInfo.accessToken);
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

  return (
    <div className='sign'>
      <div className='sign__logo'>
        {/* Brand Logo */}
        <Link to='/'>
          <BrandLogoIcon />
        </Link>
      </div>
      <div className='sign__form__layout'>
        <h3 className='sign__title'>{KEYS.SIGN_UP}</h3>
        <Form
          form={signUpForm}
          layout='vertical'
          autoComplete='off'
          className='sign__form'
          onFinish={handleSignUpSubmit}
          requiredMark={false}
        >
          <Item
            label={KEYS.EMAIL.LABEL}
            name={KEYS.EMAIL.NAME}
            rules={[
              {
                required: true,
                message: KEYS.EMAIL.MESSAGE,
              },
              {
                type: 'email',
                message: KEYS.EMAIL.VALID_MESSAGE,
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
              label={KEYS.PASSWORD.LABEL}
              name={KEYS.PASSWORD.NAME}
              rules={[
                {
                  required: true,
                  message: KEYS.PASSWORD.MESSAGE,
                },
                {
                  pattern: new RegExp(
                    /(?=^.{6,}$)(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[^A-Za-z0-9]).*/
                  ),
                  message: KEYS.EMAIL.REGEX_MESSAGE,
                },
              ]}
            >
              <Password onChange={handlePasswordChange} />
            </Item>
          </Popover>

          <Item
            label={KEYS.CONFIRM_PASSWORD.LABEL}
            name={KEYS.CONFIRM_PASSWORD.NAME}
            rules={[
              {
                required: true,
                message: KEYS.CONFIRM_PASSWORD.MESSAGE,
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (
                    !value ||
                    getFieldValue(KEYS.PASSWORD.NAME) === value
                  ) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error(KEYS.CONFIRM_PASSWORD.ERROR_MESSAGE)
                  );
                },
              }),
            ]}
          >
            <Password visibilityToggle={{ visible: true }} />
          </Item>

          <Button type='primary' htmlType='submit' loading={isLoading}>
            {KEYS.SIGN_UP}
          </Button>
        </Form>
        <div className='sign__user__validate'>
          Already have an account? <Link to='/auth/signin'>{KEYS.SIGN_IN}</Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
