import {
  DeleteOutlined,
  MinusCircleOutlined,
  PlusCircleOutlined,
} from '@ant-design/icons';
import { cartItemsAtom, productSearchQueryAtom } from '@store/globalState';
import { formatCurrency } from '@utils/helpers';
import { Button, Empty } from 'antd';
import { useRecoilState, useRecoilValue } from 'recoil';
import './Cart.scss';

const Cart = () => {
  const productSearchQuery = useRecoilValue(productSearchQueryAtom);
  const [cartItems, setCartItems] = useRecoilState(cartItemsAtom);

  const totalAmount = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const filteredCartItems = cartItems.filter((item) =>
    item?.title?.toLowerCase().includes(productSearchQuery?.toLowerCase())
  );

  const updateCart = (id, count) => {
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.id === id);

      if (existingItem) {
        const currentCount = existingItem.quantity + count;

        if (currentCount <= 0) return prev.filter((item) => item.id !== id);

        return prev.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + count } : item
        );
      }

      return [...prev, { id, quantity: Math.max(1, count) }];
    });
  };

  const removeItem = (id) =>
    setCartItems((prev) => prev.filter((item) => item.id !== id));

  return (
    <div className='cart'>
      <div className='cart__header'>
        <h2>My Cart</h2>
        {cartItems.length > 0 && (
          <span className='cart__headerCount'>
            {totalItems} {totalItems === 1 ? 'item' : 'items'}
          </span>
        )}
      </div>

      {cartItems.length > 0 ? (
        <div className='cart__content'>
          <div className='cart__items'>
            {filteredCartItems.length > 0 ? (
              filteredCartItems.map((item) => (
                <div key={item.id} className='cart__item'>
                  <div className='cart__itemImageContainer'>
                    <img
                      src={item?.imageUrl}
                      alt={item?.title}
                      className='cart__itemImage'
                    />
                  </div>

                  <div className='cart__itemDetails'>
                    <h4 className='cart__itemTitle'>{item?.title}</h4>

                    <div className='cart__itemPriceInfo'>
                      <div className='cart__itemPriceRow'>
                        <span className='cart__itemPriceLabel'>
                          Unit Price:
                        </span>
                        <span className='cart__itemPriceValue'>
                          {formatCurrency(item?.price)}
                        </span>
                      </div>
                      <div className='cart__itemPriceRow'>
                        <span className='cart__itemPriceLabel'>Quantity:</span>
                        <span className='cart__itemPriceValue'>
                          {item?.quantity}
                        </span>
                      </div>
                      <div className='cart__itemPriceRow cart__itemPriceRow--total'>
                        <span className='cart__itemPriceLabel'>Subtotal:</span>
                        <span className='cart__itemPriceValue cart__itemPriceValue--total'>
                          {formatCurrency(item?.price * item?.quantity)}
                        </span>
                      </div>
                    </div>

                    <div className='cart__itemControls'>
                      <div className='cart__itemQuantity'>
                        <Button
                          className='cart__itemButton'
                          onClick={() => updateCart(item.id, -1)}
                          icon={<MinusCircleOutlined />}
                        />
                        <span className='cart__itemQuantityValue'>
                          {item.quantity}
                        </span>
                        <Button
                          className='cart__itemButton'
                          onClick={() => updateCart(item.id, 1)}
                          disabled={item.quantity >= item?.quantityAvailable}
                          icon={<PlusCircleOutlined />}
                        />
                      </div>
                      <Button
                        className='cart__itemRemove'
                        danger
                        onClick={() => removeItem(item.id)}
                        icon={<DeleteOutlined />}
                      >
                        Remove
                      </Button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className='cart__empty'>
                <Empty description='No items in cart matching the search query' />
              </div>
            )}
          </div>

          <div className='cart__summary'>
            <div className='cart__summaryHeader'>
              <h3>Order Summary</h3>
            </div>
            <div className='cart__summaryContent'>
              <div className='cart__summaryRow'>
                <span className='cart__summaryLabel'>Total Items:</span>
                <span className='cart__summaryValue'>{totalItems}</span>
              </div>
              <div className='cart__summaryRow cart__summaryRow--total'>
                <span className='cart__summaryLabel'>Total Amount:</span>
                <span className='cart__summaryValue cart__summaryValue--total'>
                  {formatCurrency(totalAmount)}
                </span>
              </div>
            </div>
            <Button
              type='primary'
              size='large'
              className='cart__checkoutButton'
            >
              Proceed to Checkout
            </Button>
          </div>
        </div>
      ) : (
        <div className='cart__empty'>
          <Empty description='No items in cart' />
        </div>
      )}
    </div>
  );
};

export default Cart;
