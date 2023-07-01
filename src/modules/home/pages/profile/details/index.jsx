import React from 'react';
import './Details.scss';
import { Button, Card, Col, Divider, Form, Input, Row, Typography } from 'antd';

const { Text, Title } = Typography;

const Details = () => {
  const [detailsForm] = Form.useForm();

  const handleSubmit = (values) => {
    console.log({ values });
  };

  return (
    <Row className='details'>
      <Col span={24}>
        <Card>
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
                onFinish={handleSubmit}
              >
                <Row gutter={24}>
                  <Col span={12}>
                    <Form.Item label='First Name' name='firstname'>
                      <Input />
                    </Form.Item>

                    <Form.Item label='Birth Date' name='birthdate'>
                      <Input type='date' />
                    </Form.Item>

                    <Form.Item label='Phone Number' name='phoneno'>
                      <Input type='number' />
                    </Form.Item>

                    <Form.Item>
                      <Button type='primary' htmlType='submit'>
                        Save
                      </Button>
                    </Form.Item>
                  </Col>

                  <Col span={12}>
                    <Form.Item label='Last Name' name='lastname'>
                      <Input />
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
