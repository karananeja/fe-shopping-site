import { Icons, KEYS } from '@utils/constants';
import { Button, Col, Form, Input, Modal, Row } from 'antd';
import { useState } from 'react';
import './AddressForm.scss';

const AddressForm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [addressForm] = Form.useForm();

  const showModal = () => setIsModalOpen(true);

  const handleCancel = () => setIsModalOpen(false);

  const handleOk = () => {
    const values = addressForm.getFieldsValue();
    console.log({ values });
    setIsModalOpen(false);
  };

  return (
    <>
      <Button type='primary' className='address__addBtn' onClick={showModal}>
        <Icons.add /> Add New
      </Button>
      <Modal
        title='Add a New Address'
        open={isModalOpen}
        onOk={handleOk}
        okText='Save'
        onCancel={handleCancel}
      >
        <Form
          layout='vertical'
          autoComplete='off'
          form={addressForm}
          requiredMark={false}
        >
          <Row gutter={24}>
            <Col span={12}>
              <Form.Item
                label={KEYS.FIRST_NAME.LABEL}
                name={KEYS.FIRST_NAME.NAME}
                rules={[{ required: true, message: KEYS.FIRST_NAME.MESSAGE }]}
              >
                <Input />
              </Form.Item>
            </Col>

            <Col span={12}>
              <Form.Item
                label={KEYS.LAST_NAME.LABEL}
                rules={[{ required: true, message: KEYS.LAST_NAME.MESSAGE }]}
              >
                <Input />
              </Form.Item>
            </Col>

            <Col span={12}>
              <Form.Item
                label={KEYS.EMAIL.LABEL}
                rules={[
                  { required: true, message: KEYS.EMAIL.MESSAGE },
                  {
                    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: KEYS.EMAIL.VALID_MESSAGE,
                  },
                ]}
              >
                <Input type='email' />
              </Form.Item>
            </Col>

            <Col span={12}>
              <Form.Item
                label={KEYS.BIRTH_DATE.LABEL}
                rules={[{ required: true, message: KEYS.BIRTH_DATE.MESSAGE }]}
              >
                <Input type='date' />
              </Form.Item>
            </Col>

            <Col span={12}>
              <Form.Item
                label={KEYS.PHONE_NUMBER.LABEL}
                rules={[
                  { required: true, message: KEYS.PHONE_NUMBER.MESSAGE },
                  {
                    pattern: /^\d{10}$/,
                    message: KEYS.PHONE_NUMBER.VALID_MESSAGE,
                  },
                ]}
              ></Form.Item>
            </Col>
          </Row>
        </Form>
      </Modal>
    </>
  );
};

export default AddressForm;
