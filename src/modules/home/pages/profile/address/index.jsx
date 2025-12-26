import AddressForm from '@modules/home/components/addressForm';
import {
  useDeleteUserAddress,
  useGetUserAddressList,
} from '@modules/home/hooks';
import Loader from '@modules/shared/components/loader';
import { Icons } from '@utils/constants';
import { displayNotification } from '@utils/helpers';
import { Card, Col, Divider, Dropdown, Modal, Row, Typography } from 'antd';
import { useState } from 'react';
import './Address.scss';

const { Text, Title } = Typography;

const Address = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAddressId, setSelectedAddressId] = useState('');

  const { data: addressList, isLoading } = useGetUserAddressList({
    select: (data) => data.userAddresses,
  });
  const { isLoading: isDeleting, mutateAsync: deleteUserAddress } =
    useDeleteUserAddress();

  const handleDelete = async () => {
    await deleteUserAddress({ id: selectedAddressId });
    displayNotification({ description: 'User Address deleted!' });
    setIsModalOpen(false);
    setSelectedAddressId('');
  };

  const handleSelectedAddress = (id) => {
    setIsModalOpen(true);
    setSelectedAddressId(id);
  };

  const handleCancel = () => setIsModalOpen(false);

  const items = (id) => [
    {
      key: 'edit',
      label: (
        <div className='address__more__item'>
          <Icons.edit />
          Edit
        </div>
      ),
    },
    {
      key: 'delete',
      label: (
        <div
          className='address__more__item'
          onClick={() => handleSelectedAddress(id)}
        >
          <Icons.delete />
          Delete
        </div>
      ),
      danger: true,
    },
  ];

  if (isLoading) return <Loader />;

  return (
    <Row className='address'>
      <Col span={24}>
        <Card className='address__card'>
          <Row>
            <Col span={24}>
              <Title level={3}>My Addresses</Title>
            </Col>
          </Row>

          <Row
            justify='space-between'
            align='middle'
            gutter={48}
            className='address__infoRow'
          >
            <Col>
              <Text type='secondary'>Available Addresses</Text>
            </Col>

            {(addressList || []).length < 5 && (
              <Col>
                <AddressForm />
              </Col>
            )}
          </Row>

          <Divider />

          <Row gutter={24} className='address__list'>
            {(addressList || []).length ? (
              addressList.map((address) => (
                <Col span={24} key={address._id} className='address__item'>
                  <div className='address__info'>
                    <p className='address__info__type'>
                      <span className='address__info__type-name'>
                        {address.type.toUpperCase()}
                      </span>
                      {address.isDefault && (
                        <span className='address__info__type--default'>
                          <Icons.check />
                        </span>
                      )}
                    </p>

                    <p className='address__name'>
                      <span>{address.name}</span>
                      <span>{address.phone}</span>
                    </p>

                    <p className='address__data'>
                      {address.addressLine1}, {address.addressLine2},{' '}
                      {address.city}, {address.state} -{' '}
                      <span>{address.pincode}</span>
                    </p>
                  </div>

                  <Dropdown
                    menu={{ items: items(address._id) }}
                    trigger={['click']}
                  >
                    <Icons.more />
                  </Dropdown>
                </Col>
              ))
            ) : (
              <div className='address__noData'>No Address Added</div>
            )}
          </Row>
        </Card>
      </Col>

      <Modal
        title='Delete Address'
        open={isModalOpen}
        onOk={handleDelete}
        onCancel={handleCancel}
        okText='Delete'
        okType='danger'
        confirmLoading={isDeleting}
      >
        Are you sure to delete this address?
      </Modal>
    </Row>
  );
};

export default Address;
