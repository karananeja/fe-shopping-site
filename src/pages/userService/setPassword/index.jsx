import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../UserService.scss';
import { useRecoilValue } from 'recoil';
import { darkModeAtom } from '../../../utils/globalState';
import { Button, Form, Input, Popover, Space, theme } from 'antd';
import { BrandLogoIcon } from '../../../utils/constants/icons';
import { PASSWORD_CHECK } from '../../../utils/constants/constants';
import { CheckCircleFilled } from '@ant-design/icons';

const { Item, useForm } = Form;

const { Password } = Input;

const { useToken } = theme;

const SetPassword = () => {
  const [passwordChecks, setPasswordChecks] = useState(PASSWORD_CHECK);
  const isDarkModeValue = useRecoilValue(darkModeAtom);
  const navigate = useNavigate();
  const [setPasswordForm] = useForm();
  const { token } = useToken();

  !isDarkModeValue
    ? document.documentElement.setAttribute('data-mode', 'light')
    : document.documentElement.setAttribute('data-mode', 'dark');

  const handleSubmit = (credentials) => {
    console.log({
      password: credentials.password,
      confirmPassword: credentials.confirmPassword,
    });

    setPasswordForm.resetFields();

    setTimeout(() => navigate('/'), 1000);
  };

  const handlePasswordChange = (e) => {
    const password = e.target.value;
    setPasswordForm.setFieldsValue({ password });
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
        <h3 className='sign__title'>Set Password</h3>
        <Form
          form={setPasswordForm}
          layout='vertical'
          autoComplete='off'
          className='sign__form'
          onFinish={handleSubmit}
          onFinishFailed={(err) => console.log({ err })}
        >
          <Popover
            placement='topRight'
            title={'Password policy'}
            content={content}
            trigger='click'
          >
            <Item
              label='Password'
              name='password'
              rules={[
                {
                  required: true,
                  message: 'Please enter your password!',
                },
                {
                  pattern: new RegExp(
                    /(?=^.{6,}$)(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[^A-Za-z0-9]).*/
                  ),
                  message: 'Your password should meet the password policy.',
                },
              ]}
            >
              <Password size='small' onChange={handlePasswordChange} />
            </Item>
          </Popover>

          <Item
            label='Confirm Password'
            name='confirmPassword'
            rules={[
              {
                required: true,
                message: 'Please enter your password!',
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error(
                      'The two passwords that you entered do not match!'
                    )
                  );
                },
              }),
            ]}
          >
            <Password size='small' />
          </Item>

          <Button type='primary' htmlType='submit'>
            Set Password
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default SetPassword;
