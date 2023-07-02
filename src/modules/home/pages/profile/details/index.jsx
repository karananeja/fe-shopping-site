import React from 'react';
import './Details.scss';
import {
  Button,
  Card,
  Col,
  Divider,
  Form,
  Input,
  Row,
  Select,
  Typography,
} from 'antd';
import dayjs from 'dayjs';
import { KEYS } from '@utils/constants';

const { Text, Title } = Typography;

const Details = () => {
  const [detailsForm] = Form.useForm();

  useEffect(() => {
    detailsForm.setFieldValue(
      'birthDate',
      dayjs(new Date()).format('YYYY-MM-DD')
    );
  }, []);

  const updateDetails = (values) => {
    console.log({ values });
  };

  const updateEmail = (value) => {
    console.log({ value });
  };

  const prefixSelector = (
    <Form.Item
      name='dialCode'
      noStyle
      rules={[{ required: true, message: 'Please select a country code' }]}
    >
      <Select
        bordered={false}
        loading={isLoading}
        style={{ width: 80 }}
        showSearch
        allowClear
        filterOption={(input, option) =>
          (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
        }
        options={countryList?.map(({ dialCode }) => ({
          label: dialCode,
          value: dialCode,
        }))}
      />
    </Form.Item>
  );

  return (
    <Row className='details'>
      <Col span={24}>
        <Card className='details__card'>
          <Row>
            <Col span={24}>
              <Title level={3}>My Details</Title>
            </Col>
          </Row>

          <Row>
            <Col span={24}>
              <Text type='secondary'>Personal Information</Text>
            </Col>
          </Row>

          <Divider />

          <Row gutter={24}>
            <Col span={8}>
              <Text type='secondary'>
                Please update your personal information
              </Text>
            </Col>

            <Col span={16}>
              <Form
                layout='vertical'
                autoComplete='off'
                form={detailsForm}
                onFinish={updateDetails}
                requiredMark={false}
              >
                <Row gutter={24}>
                  <Col span={12}>
                    <Form.Item
                      label={KEYS.FIRST_NAME.LABEL}
                      name={KEYS.FIRST_NAME.NAME}
                      rules={[
                        {
                          required: true,
                          message: KEYS.FIRST_NAME.MESSAGE,
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>

                    <Form.Item
                      label={KEYS.BIRTH_DATE.LABEL}
                      name={KEYS.BIRTH_DATE.NAME}
                      rules={[
                        {
                          required: true,
                          message: KEYS.BIRTH_DATE.MESSAGE,
                        },
                      ]}
                    >
                      <Input type='date' />
                    </Form.Item>

                    <Form.Item
                      label={KEYS.PHONE_NUMBER.LABEL}
                      name={KEYS.PHONE_NUMBER.NAME}
                      rules={[
                        {
                          required: true,
                          message: KEYS.PHONE_NUMBER.MESSAGE,
                        },
                        {
                          pattern: /^\d{10}$/,
                          message: KEYS.PHONE_NUMBER.VALID_MESSAGE,
                        },
                      ]}
                    >
                      <Input addonBefore={prefixSelector} />
                    </Form.Item>

                    <Form.Item>
                      <Button type='primary' htmlType='submit'>
                        Save
                      </Button>
                    </Form.Item>
                  </Col>

                  <Col span={12}>
                    <Form.Item
                      label={KEYS.LAST_NAME.LABEL}
                      name={KEYS.LAST_NAME.NAME}
                      rules={[
                        {
                          required: true,
                          message: KEYS.LAST_NAME.MESSAGE,
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>

          <Row gutter={24}>
            <Col span={8}>
              <Text type='secondary'>Please update your Email Id</Text>
            </Col>

            <Col span={16}>
              <Form
                layout='vertical'
                autoComplete='off'
                onFinish={updateEmail}
                requiredMark={false}
              >
                <Row gutter={24}>
                  <Col span={12}>
                    <Form.Item
                      label={KEYS.EMAIL.LABEL}
                      name={KEYS.EMAIL.NAME}
                      rules={[
                        {
                          required: true,
                          message: KEYS.EMAIL.MESSAGE,
                        },
                        {
                          pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: KEYS.EMAIL.VALID_MESSAGE,
                        },
                      ]}
                    >
                      <Input type='email' />
                    </Form.Item>

                    <Form.Item>
                      <Button type='primary' htmlType='submit'>
                        Save
                      </Button>
                    </Form.Item>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  );
};

export default Details;
