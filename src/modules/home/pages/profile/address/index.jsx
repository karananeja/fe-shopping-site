import AddressForm from '@modules/home/components/addressForm';
import { Icons } from '@utils/constants';
import { Card, Col, Divider, Row, Typography } from 'antd';
import './Address.scss';

const { Text, Title } = Typography;

const addresses = [
  {
    id: 1,
    type: 'Home',
    name: 'Karan Kumar Aneja R',
    phone: '9980672016',
    addressLine1: '43, 3rd cross, shirdi sai nagar',
    addressLine2: 'k narayanapura',
    city: 'bengaluru',
    state: 'Karnataka',
    pincode: 560077,
    isDefault: true,
  },
  {
    id: 11,
    type: 'Home',
    name: 'Karan Kumar Aneja R',
    phone: '9980672016',
    addressLine1: '43, 3rd cross, shirdi sai nagar',
    addressLine2: 'k narayanapura',
    city: 'bengaluru',
    state: 'Karnataka',
    pincode: 560077,
    isDefault: false,
  },
  {
    id: 111,
    type: 'Home',
    name: 'Karan Kumar Aneja R',
    phone: '9980672016',
    addressLine1: '43, 3rd cross, shirdi sai nagar',
    addressLine2: 'k narayanapura',
    city: 'bengaluru',
    state: 'Karnataka',
    pincode: 560077,
    isDefault: false,
  },
  {
    id: 1111,
    type: 'Home',
    name: 'Karan Kumar Aneja R',
    phone: '9980672016',
    addressLine1: '43, 3rd cross, shirdi sai nagar',
    addressLine2: 'k narayanapura',
    city: 'bengaluru',
    state: 'Karnataka',
    pincode: 560077,
    isDefault: false,
  },
  {
    id: 11111,
    type: 'Home',
    name: 'Karan Kumar Aneja R',
    phone: '9980672016',
    addressLine1: '43, 3rd cross, shirdi sai nagar',
    addressLine2: 'k narayanapura',
    city: 'bengaluru',
    state: 'Karnataka',
    pincode: 560077,
    isDefault: false,
  },
];

const Address = () => {
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

            <Col>
              <AddressForm />
            </Col>
          </Row>

          <Divider />

          <Row gutter={24} className='address__list'>
            {addresses.length ? (
              addresses.map((address) => (
                <Col span={24} key={address.id} className='address__item'>
                  <div className='address__info'>
                    <span className='address__type'>
                      {address.type.toUpperCase()}
                    </span>

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

                  <Icons.more />
                </Col>
              ))
            ) : (
              <div className='address__noData'>No Address Added</div>
            )}
          </Row>
        </Card>
      </Col>
    </Row>
  );
};

export default Address;
