import { searchQueryAtom } from '@store/global-state';
import { formatCurrency } from '@utils/helpers';
import { Card, Col, Row, Tag, Typography } from 'antd';
import dayjs from 'dayjs';
import { useRecoilValue } from 'recoil';
import sampleOrdersData from '../../../../../utils/sampleOrdersData.json';
import './orders.scss';

const { Text, Title } = Typography;

const getStatusColor = (status) => {
  switch (status) {
    case 'delivered':
      return 'success';
    case 'shipped':
      return 'processing';
    case 'processing':
      return 'warning';
    case 'cancelled':
      return 'error';
    default:
      return 'default';
  }
};

const formatDate = (dateString) => {
  return dayjs(dateString).format('MMM DD, YYYY');
};

const formatDateTime = (dateString) => {
  return dayjs(dateString).format('MMM DD, YYYY [at] hh:mm A');
};

const Orders = () => {
  const searchQuery = useRecoilValue(searchQueryAtom);

  const filteredOrders = sampleOrdersData.filter((order) =>
    order.id.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Row className='orders'>
      <Col span={24}>
        <Card className='orders__card'>
          <Row>
            <Col span={24}>
              <Title level={3}>My Orders</Title>
            </Col>
          </Row>

          <Row
            justify='space-between'
            align='middle'
            gutter={48}
            className='orders__infoRow'
          >
            <Col>
              <Text type='secondary'>
                {sampleOrdersData.length}{' '}
                {sampleOrdersData.length === 1 ? 'order' : 'orders'} found
              </Text>
            </Col>
          </Row>

          <div className='orders__list'>
            {filteredOrders.length > 0 ? (
              filteredOrders.map((order) => (
                <Card key={order.id} className='orders__item' hoverable>
                  <div className='orders__itemHeader'>
                    <div className='orders__itemHeaderLeft'>
                      <Text strong className='orders__orderId'>
                        Order #{order.id}
                      </Text>
                      <Text type='secondary' className='orders__orderDate'>
                        Placed on {formatDateTime(order.orderDate)}
                      </Text>
                    </div>
                    <div className='orders__itemHeaderRight'>
                      <Tag
                        color={getStatusColor(order.status)}
                        className='orders__statusTag'
                      >
                        {order.status.toUpperCase()}
                      </Tag>
                    </div>
                  </div>

                  <div className='orders__itemsList'>
                    {order.items.map((item, index) => (
                      <div key={index} className='orders__orderItem'>
                        <div className='orders__orderItemImage'>
                          <img src={item.imageUrl} alt={item.title} />
                        </div>
                        <div className='orders__orderItemDetails'>
                          <Text strong className='orders__orderItemTitle'>
                            {item.title}
                          </Text>
                          <div className='orders__orderItemInfo'>
                            <Text type='secondary'>
                              Quantity: {item.quantity}
                            </Text>
                            <Text strong className='orders__orderItemPrice'>
                              {formatCurrency(item.price * item.quantity)}
                            </Text>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className='orders__itemFooter'>
                    <div className='orders__itemFooterLeft'>
                      <div className='orders__shippingAddress'>
                        <Text
                          type='secondary'
                          className='orders__shippingLabel'
                        >
                          Shipping Address:
                        </Text>
                        <Text className='orders__shippingText'>
                          {order.shippingAddress.name},{' '}
                          {order.shippingAddress.phone}
                          <br />
                          {order.shippingAddress.addressLine1},{' '}
                          {order.shippingAddress.addressLine2}
                          <br />
                          {order.shippingAddress.city},{' '}
                          {order.shippingAddress.state} -{' '}
                          {order.shippingAddress.pincode}
                        </Text>
                      </div>
                    </div>
                    <div className='orders__itemFooterRight'>
                      <div className='orders__totalAmount'>
                        <Text type='secondary' className='orders__totalLabel'>
                          Total Amount:
                        </Text>
                        <Text strong className='orders__totalValue'>
                          {formatCurrency(order.totalAmount)}
                        </Text>
                      </div>
                      {order.deliveryDate && (
                        <Text type='secondary' className='orders__deliveryDate'>
                          Delivered on {formatDate(order.deliveryDate)}
                        </Text>
                      )}
                      {order.estimatedDeliveryDate && (
                        <Text type='secondary' className='orders__deliveryDate'>
                          Estimated delivery:{' '}
                          {formatDate(order.estimatedDeliveryDate)}
                        </Text>
                      )}
                    </div>
                  </div>
                </Card>
              ))
            ) : (
              <div className='orders__noData'>No orders found</div>
            )}
          </div>
        </Card>
      </Col>
    </Row>
  );
};

export default Orders;
