import AddressForm from '@modules/home/components/address-form';
import EditAddressForm from '@modules/home/components/edit-address-form';
import {
  useDeleteUserAddress,
  useGetUserAddressList,
} from '@modules/home/hooks';
import Loader from '@modules/shared/components/loader';
import { searchQueryAtom } from '@store/global-state';
import { Icons } from '@utils/constants';
import { displayNotification } from '@utils/helpers';
import { Card, Col, Divider, Dropdown, Modal, Row, Typography } from 'antd';
import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import './address.scss';

const { Text, Title } = Typography;

const Address = () => {
  const searchQuery = useRecoilValue(searchQueryAtom);

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedAddressId, setSelectedAddressId] = useState('');
  const [editingAddress, setEditingAddress] = useState(null);

  const { data: addressList = [], isLoading } = useGetUserAddressList({
    select: (data) => data.userAddresses,
  });
  const { isLoading: isDeleting, mutateAsync: deleteUserAddress } =
    useDeleteUserAddress();

  const filteredAddressList = addressList.filter((address) =>
    address.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDelete = async () => {
    await deleteUserAddress({ id: selectedAddressId });
    displayNotification({ description: 'User Address deleted!' });
    setIsDeleteModalOpen(false);
    setSelectedAddressId('');
  };

  const handleSelectedAddress = (id) => {
    setIsDeleteModalOpen(true);
    setSelectedAddressId(id);
  };

  const handleCancelDelete = () => setIsDeleteModalOpen(false);

  const handleEdit = (address) => setEditingAddress(address);

  const handleCloseEdit = () => setEditingAddress(null);

  const items = (address) => [
    {
      key: 'edit',
      label: (
        <div
          className='address__more__item'
          onClick={() => handleEdit(address)}
        >
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
          onClick={() => handleSelectedAddress(address._id)}
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
            {filteredAddressList.length ? (
              filteredAddressList.map((address) => (
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
                    menu={{ items: items(address) }}
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

      {editingAddress && (
        <EditAddressForm
          addressData={editingAddress}
          onClose={handleCloseEdit}
        />
      )}

      <Modal
        title='Delete Address'
        open={isDeleteModalOpen}
        onOk={handleDelete}
        onCancel={handleCancelDelete}
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
