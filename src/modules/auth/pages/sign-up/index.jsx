import { useDarkMode } from '@hooks/useUtils';
import { useSignUp } from '@modules/auth/hooks';
import { Icons, KEYS, PASSWORD_CHECK } from '@utils/constants';
import { setValue } from '@utils/helpers';
import { Button, Form, Input, Popover, Space, theme } from 'antd';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './sign-up.scss';

const { Item, useForm } = Form;
const { Password } = Input;
const { useToken } = theme;

const SignUp = () => {
  const [passwordChecks, setPasswordChecks] = useState(PASSWORD_CHECK);
  const navigate = useNavigate();
  const [signUpForm] = useForm();
  const { token } = useToken();
  useDarkMode();

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
              <Icons.check
                className='sign__icon'
                style={{
                  color: token.colorPrimary,
                  filter: 'drop-shadow(0 0 4px rgba(74, 144, 226, 0.5))',
                }}
              />
            ) : (
              <Icons.check
                className='sign__icon'
                style={{ color: '#e5e5e5', opacity: 0.5 }}
              />
            )}
            {check.label}
          </Space>
        </div>
      ))}
    </>
  );

  return (
    <div className='sign sign-up'>
      <div className='sign__logo'>
        {/* Brand Logo */}
        <Link to='/'>
          <Icons.watermark />
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
              { required: true, message: KEYS.EMAIL.MESSAGE },
              { type: 'email', message: KEYS.EMAIL.VALID_MESSAGE },
            ]}
          >
            <Input
              onInput={(e) => (e.target.value = e.target.value.toLowerCase())}
            />
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
                { required: true, message: KEYS.PASSWORD.MESSAGE },
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
                  if (!value || getFieldValue(KEYS.PASSWORD.NAME) === value) {
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
          Already have an account?{' '}
          <Link to='/auth/sign-in'>{KEYS.SIGN_IN}</Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
