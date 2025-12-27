import { useUpdateUserAddress } from '@modules/home/hooks';
import { Checkbox, Col, Form, Input, Modal, Row, Select } from 'antd';
import { useEffect, useState } from 'react';
import '../address-form/address-form.scss';

const { Option } = Select;

const EditAddressForm = ({ addressData, onClose }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [addressForm] = Form.useForm();

  const { mutateAsync: updateUserAddress, isLoading: isUpdating } =
    useUpdateUserAddress();

  useEffect(() => {
    if (!addressData) return;
    setIsModalOpen(true);
    addressForm.setFieldsValue({
      name: addressData.name,
      phone: addressData.phone,
      type: addressData.type,
      isDefault: addressData.isDefault,
      addressLine1: addressData.addressLine1,
      addressLine2: addressData.addressLine2,
      city: addressData.city,
      state: addressData.state,
      pincode: addressData.pincode,
    });
  }, [addressData, addressForm]);

  const handleCancel = () => {
    setIsModalOpen(false);
    addressForm.resetFields();
    if (onClose) onClose();
  };

  const handleOk = () => {
    addressForm
      .validateFields()
      .then(async (values) => {
        await updateUserAddress({ id: addressData._id, ...values });
        setIsModalOpen(false);
        addressForm.resetFields();
        if (onClose) onClose();
      })
      .catch((info) => console.log('Validate Failed:', info));
  };

  if (!addressData) return null;

  return (
    <Modal
      title='Edit Address'
      open={isModalOpen}
      onOk={handleOk}
      okText='Update'
      loading={isUpdating}
      disabled={isUpdating}
      onCancel={handleCancel}
      className='addressForm__modal'
      width={700}
    >
      <Form
        layout='vertical'
        autoComplete='off'
        form={addressForm}
        requiredMark={false}
        className='addressForm'
      >
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label='Name'
              name='name'
              rules={[{ required: true, message: 'Please enter name' }]}
            >
              <Input placeholder='Enter full name' />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item
              label='Phone Number'
              name='phone'
              rules={[
                { required: true, message: 'Please enter phone number' },
                {
                  pattern: /^[6-9]\d{9}$/,
                  message: 'Please enter a valid 10-digit phone number',
                },
              ]}
            >
              <Input placeholder='Enter phone number' maxLength={10} />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item
              label='Address Type'
              name='type'
              rules={[
                { required: true, message: 'Please select address type' },
              ]}
            >
              <Select placeholder='Select address type'>
                <Option value='home'>Home</Option>
                <Option value='work'>Work</Option>
                <Option value='other'>Other</Option>
              </Select>
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item
              name='isDefault'
              valuePropName='checked'
              className='addressForm__checkboxItem'
            >
              <Checkbox>Set as default address</Checkbox>
            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item
              label='Address Line 1'
              name='addressLine1'
              rules={[
                { required: true, message: 'Please enter address line 1' },
              ]}
            >
              <Input placeholder='Street address, P.O. box' />
            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item label='Address Line 2' name='addressLine2'>
              <Input placeholder='Apartment, suite, unit, building, floor, etc.' />
            </Form.Item>
          </Col>

          <Col span={8}>
            <Form.Item
              label='City'
              name='city'
              rules={[{ required: true, message: 'Please enter city' }]}
            >
              <Input placeholder='Enter city' />
            </Form.Item>
          </Col>

          <Col span={8}>
            <Form.Item
              label='State'
              name='state'
              rules={[{ required: true, message: 'Please enter state' }]}
            >
              <Input placeholder='Enter state' />
            </Form.Item>
          </Col>

          <Col span={8}>
            <Form.Item
              label='Pincode'
              name='pincode'
              rules={[
                { required: true, message: 'Please enter pincode' },
                {
                  pattern: /^\d{6}$/,
                  message: 'Please enter a valid 6-digit pincode',
                },
              ]}
            >
              <Input placeholder='Enter pincode' maxLength={6} />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};

export default EditAddressForm;
