import { useDarkMode } from '@hooks/use-utils';
import { useResetPassword } from '@modules/home/hooks/use-home';
import { Icons, PASSWORD_CHECK } from '@utils/constants';
import { displayNotification } from '@utils/helpers';
import {
  Button,
  Card,
  Col,
  Divider,
  Form,
  Input,
  Popover,
  Row,
  Space,
  Switch,
  Typography,
  theme,
} from 'antd';
import { useState } from 'react';
import './account-settings.scss';

const { Item, useForm } = Form;
const { Password } = Input;
const { useToken } = theme;
const { Text, Title } = Typography;

const AccountSettings = () => {
  const { isDarkMode, setIsDarkMode } = useDarkMode();

  const [editMode, setEditMode] = useState(false);
  const [passwordChecks, setPasswordChecks] = useState(PASSWORD_CHECK);

  const [passwordForm] = useForm();
  const { token } = useToken();

  const { isLoading, mutateAsync: resetPassword } = useResetPassword({
    onSuccess: () => {
      displayNotification({
        type: 'success',
        description: 'Password reset successfully!',
      });
      passwordForm.resetFields();
      setPasswordChecks(PASSWORD_CHECK);
      setEditMode(false);
    },
    onError: (error) => {
      displayNotification({
        type: 'error',
        description:
          error?.response?.data?.message || 'Failed to reset password',
      });
    },
  });

  const handlePasswordChange = (e) => {
    const password = e.target.value;
    passwordForm.setFieldsValue({ password });
    const temp = PASSWORD_CHECK.map((check) =>
      check.pattern.test(password)
        ? { ...check, valid: true }
        : { ...check, valid: false }
    );
    setPasswordChecks(temp);
  };

  const handleResetPassword = async (values) => {
    try {
      await resetPassword({
        currentPassword: values.currentPassword,
        newPassword: values.newPassword,
      });
    } catch (err) {
      console.log({ err });
    }
  };

  const passwordPolicyContent = (
    <>
      {passwordChecks.map((check) => (
        <div key={check.id}>
          <Space>
            {check.valid ? (
              <Icons.check
                className='accountSettings__icon'
                style={{
                  color: token.colorPrimary,
                  filter: 'drop-shadow(0 0 4px rgba(74, 144, 226, 0.5))',
                }}
              />
            ) : (
              <Icons.check
                className='accountSettings__icon'
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
    <Row className='accountSettings'>
      <Col span={24}>
        <Card className='accountSettings__card'>
          <Row>
            <Col span={24}>
              <Title level={3}>Account Settings</Title>
            </Col>
          </Row>

          <Row
            justify='space-between'
            align='middle'
            gutter={48}
            className='accountSettings__infoRow'
          >
            <Col>
              <Text type='secondary'>Security & Password</Text>
            </Col>

            {!editMode && (
              <Col>
                <Button
                  type='primary'
                  className='accountSettings__editBtn'
                  onClick={() => setEditMode(true)}
                >
                  <Icons.edit /> Edit
                </Button>
              </Col>
            )}
          </Row>

          <Divider />

          <Row
            justify='space-between'
            align='middle'
            gutter={48}
            className='accountSettings__infoRow'
          >
            <Col>
              <Space align='start'>
                {isDarkMode ? (
                  <Icons.lightModeFilled className='accountSettings__theme-icon' />
                ) : (
                  <Icons.lightMode className='accountSettings__theme-icon' />
                )}
                <Text type='secondary'>Dark Mode</Text>
              </Space>
            </Col>
            <Col>
              <Switch
                checked={isDarkMode}
                onChange={setIsDarkMode}
                className='accountSettings__theme-switch'
              />
            </Col>
          </Row>

          <Divider />

          <Row gutter={24}>
            <Col span={16}>
              <Form
                layout='vertical'
                autoComplete='off'
                form={passwordForm}
                onFinish={handleResetPassword}
                requiredMark={false}
                className='accountSettings__form'
              >
                <Row gutter={24}>
                  <Col span={24}>
                    <Item
                      label='Current Password'
                      name='currentPassword'
                      rules={[
                        {
                          required: true,
                          message: 'Please enter your current password',
                        },
                      ]}
                    >
                      <Password
                        placeholder='Enter your current password'
                        disabled={!editMode}
                      />
                    </Item>
                  </Col>

                  <Col span={24}>
                    <Popover
                      placement='topRight'
                      title='Password policy'
                      content={passwordPolicyContent}
                      trigger='click'
                      className='accountSettings__popover'
                    >
                      <Item
                        label='New Password'
                        name='newPassword'
                        rules={[
                          {
                            required: true,
                            message: 'Please enter a new password',
                          },
                          {
                            pattern: new RegExp(
                              /(?=^.{6,}$)(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[^A-Za-z0-9]).*/
                            ),
                            message: 'Password must meet all requirements',
                          },
                        ]}
                      >
                        <Password
                          placeholder='Enter new password'
                          onChange={handlePasswordChange}
                          disabled={!editMode}
                        />
                      </Item>
                    </Popover>
                  </Col>

                  <Col span={24}>
                    <Item
                      label='Confirm New Password'
                      name='confirmPassword'
                      dependencies={['newPassword']}
                      rules={[
                        {
                          required: true,
                          message: 'Please confirm your new password',
                        },
                        ({ getFieldValue }) => ({
                          validator(_, value) {
                            if (
                              !value ||
                              getFieldValue('newPassword') === value
                            ) {
                              return Promise.resolve();
                            }
                            return Promise.reject(
                              new Error('The two passwords do not match!')
                            );
                          },
                        }),
                      ]}
                    >
                      <Password
                        placeholder='Confirm your new password'
                        disabled={!editMode}
                      />
                    </Item>
                  </Col>
                </Row>

                {editMode && (
                  <Row gutter={24}>
                    <Col span={3}>
                      <Form.Item>
                        <Button
                          onClick={() => {
                            passwordForm.resetFields();
                            setPasswordChecks(PASSWORD_CHECK);
                            setEditMode(false);
                          }}
                          disabled={isLoading}
                        >
                          Cancel
                        </Button>
                      </Form.Item>
                    </Col>

                    <Col span={3}>
                      <Form.Item>
                        <Button
                          type='primary'
                          htmlType='submit'
                          loading={isLoading}
                          className='accountSettings__submitBtn'
                        >
                          Update Password
                        </Button>
                      </Form.Item>
                    </Col>
                  </Row>
                )}
              </Form>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  );
};

export default AccountSettings;
