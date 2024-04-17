import {
  useCountryList,
  useGetUserInfo,
  useUpdateUserInfo,
} from '@modules/home/hooks/useHome';
import Loader from '@modules/shared/components/loader';
import { KEYS } from '@utils/constants';
import { displayNotification } from '@utils/helpers';
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
import { useState } from 'react';
import './Details.scss';

const { Text, Title } = Typography;

const Details = () => {
  const [editMode, setEditMode] = useState(false);
  const [detailsForm] = Form.useForm();

  const { data: countryList, isLoading } = useCountryList({
    select: (data) => data?.countryList,
    onSuccess: (data) =>
      detailsForm.setFieldValue('dialCode', data[0].dialCode),
  });

  const { isLoading: isUpdating, mutateAsync: updateUserInfo } =
    useUpdateUserInfo();

  const { isLoading: isInfoLoading } = useGetUserInfo({
    select: (data) => data?.userInfo,
    onSuccess: (data) =>
      detailsForm.setFieldsValue({
        ...data,
        phoneNumber: data.phoneNumber.slice(2),
        birthDate: dayjs(data.birthDate).format('YYYY-MM-DD'),
      }),
  });

  const updateDetails = async (values) => {
    const payload = {
      firstName: values.firstName,
      lastName: values.lastName,
      birthDate: +new Date(values.birthDate),
      phoneNumber: `${values.dialCode.slice(1)}${values.phoneNumber}`,
      updatedEmail: values.email,
    };

    await updateUserInfo(payload);
    displayNotification({ description: 'User Info Updated!' });
    closeEdit();
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
        disabled={!editMode}
      />
    </Form.Item>
  );

  const closeEdit = () => setEditMode(false);

  if (isInfoLoading) return <Loader />;

  return (
    <Row className='details'>
      <Col span={24}>
        <Card className='details__card'>
          <Row>
            <Col span={24}>
              <Title level={3}>My Details</Title>
            </Col>
          </Row>

          <Row
            justify={'space-between'}
            align={'middle'}
            gutter={48}
            className='details__infoRow'
          >
            <Col>
              <Text type='secondary'>Personal Information</Text>
            </Col>

            {!editMode && (
              <Col>
                <Button type='primary' onClick={() => setEditMode(true)}>
                  Edit
                </Button>
              </Col>
            )}
          </Row>

          <Divider />

          <Row gutter={24}>
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
                        { required: true, message: KEYS.FIRST_NAME.MESSAGE },
                      ]}
                    >
                      <Input disabled={!editMode} />
                    </Form.Item>
                  </Col>

                  <Col span={12}>
                    <Form.Item
                      label={KEYS.LAST_NAME.LABEL}
                      name={KEYS.LAST_NAME.NAME}
                      rules={[
                        { required: true, message: KEYS.LAST_NAME.MESSAGE },
                      ]}
                    >
                      <Input disabled={!editMode} />
                    </Form.Item>
                  </Col>

                  <Col span={12}>
                    <Form.Item
                      label={KEYS.EMAIL.LABEL}
                      name={KEYS.EMAIL.NAME}
                      rules={[
                        { required: true, message: KEYS.EMAIL.MESSAGE },
                        {
                          pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: KEYS.EMAIL.VALID_MESSAGE,
                        },
                      ]}
                    >
                      <Input type='email' disabled={!editMode} />
                    </Form.Item>
                  </Col>

                  <Col span={12}>
                    <Form.Item
                      label={KEYS.BIRTH_DATE.LABEL}
                      name={KEYS.BIRTH_DATE.NAME}
                      rules={[
                        { required: true, message: KEYS.BIRTH_DATE.MESSAGE },
                      ]}
                    >
                      <Input type='date' disabled={!editMode} />
                    </Form.Item>
                  </Col>

                  <Col span={12}>
                    <Form.Item
                      label={KEYS.PHONE_NUMBER.LABEL}
                      name={KEYS.PHONE_NUMBER.NAME}
                      rules={[
                        { required: true, message: KEYS.PHONE_NUMBER.MESSAGE },
                        {
                          pattern: /^\d{10}$/,
                          message: KEYS.PHONE_NUMBER.VALID_MESSAGE,
                        },
                      ]}
                    >
                      <Input
                        addonBefore={prefixSelector}
                        disabled={!editMode}
                      />
                    </Form.Item>
                  </Col>
                </Row>

                {editMode && (
                  <Row gutter={24}>
                    <Col span={3}>
                      <Form.Item>
                        <Button onClick={closeEdit} disabled={isUpdating}>
                          Cancel
                        </Button>
                      </Form.Item>
                    </Col>

                    <Col span={3}>
                      <Form.Item>
                        <Button
                          type='primary'
                          htmlType='submit'
                          loading={isUpdating}
                        >
                          Update
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

export default Details;
