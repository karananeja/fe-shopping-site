import {
  DeleteOutlined,
  MinusCircleOutlined,
  PlusCircleOutlined,
} from '@ant-design/icons';
import { cartItemsAtom } from '@store/globalState';
import { Icons } from '@utils/constants';
import { formatCurrency } from '@utils/helpers';
import { Button } from 'antd';
import { useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import sampleData from '../../../../utils/sampleData.json';
import './Product.scss';

const Product = () => {
  const { productID } = useParams();

  const [cartItems, setCartItems] = useRecoilState(cartItemsAtom);

  const productInfo = sampleData.find(({ id }) => id === parseInt(productID));

  const existingItem = cartItems.find((item) => item.id === productInfo?.id);

  const updateCart = (count) => {
    if (!productInfo) return;

    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.id === productInfo.id);

      if (existingItem) {
        const currentCount = existingItem.quantity + count;

        if (currentCount <= 0)
          return prev.filter((item) => item.id !== productInfo.id);

        return prev.map((item) =>
          item.id === productInfo.id
            ? { ...item, quantity: item.quantity + count }
            : item
        );
      }

      return [...prev, { ...productInfo, quantity: Math.max(1, count) }];
    });
  };

  const removeItem = (id) =>
    setCartItems((prev) => prev.filter((item) => item.id !== id));

  return (
    <div className='product'>
      <div className='product__container'>
        <div className='product__imgSection'>
          <div className='product__imgContainer'>
            <button className='product__navButton--left product__navButton'>
              <Icons.left />
            </button>
            <div className='product__imgWrapper'>
              <img
                className='product__img'
                src={productInfo?.imageUrl}
                alt={productInfo?.title}
              />
            </div>
            <button className='product__navButton--right product__navButton'>
              <Icons.right />
            </button>
          </div>
        </div>

        <div className='product__infoSection'>
          <div className='product__header'>
            {productInfo?.title && (
              <h1 className='product__title'>{productInfo?.title}</h1>
            )}

            {productInfo?.price && (
              <div className='product__priceSection'>
                <span className='product__price'>
                  {formatCurrency(productInfo?.price)}
                </span>
                {productInfo?.loan && (
                  <span className='product__loan'>({productInfo?.loan})</span>
                )}
              </div>
            )}
          </div>

          <div className='product__content'>
            {productInfo?.description && (
              <div className='product__detailCard'>
                <h3 className='product__detailLabel'>Description</h3>
                <p className='product__detailValue'>
                  {productInfo?.description}
                </p>
              </div>
            )}

            <div className='product__specs'>
              {productInfo?.workingWidth && (
                <div className='product__specItem'>
                  <span className='product__specLabel'>Working Width</span>
                  <span className='product__specValue'>
                    {productInfo?.workingWidth?.map((width, index) => (
                      <span key={width}>
                        {width}&#34;
                        {index < productInfo?.workingWidth?.length - 1 && ', '}
                      </span>
                    ))}
                  </span>
                </div>
              )}

              {productInfo?.shuttleBox && (
                <div className='product__specItem'>
                  <span className='product__specLabel'>Shuttle Box</span>
                  <span className='product__specValue'>
                    {productInfo?.shuttleBox?.map((box, index) => (
                      <span key={box}>
                        {box}
                        {index < productInfo?.shuttleBox?.length - 1 && ', '}
                      </span>
                    ))}
                  </span>
                </div>
              )}

              {productInfo?.shedding && (
                <div className='product__specItem'>
                  <span className='product__specLabel'>Shedding</span>
                  <span className='product__specValue'>
                    {productInfo?.shedding}
                  </span>
                </div>
              )}

              {productInfo?.quantityAvailable !== undefined && (
                <div className='product__specItem'>
                  <span className='product__specLabel'>Available</span>
                  <span className='product__specValue'>
                    {productInfo?.quantityAvailable}{' '}
                    {productInfo?.quantityAvailable > 1 ||
                    productInfo?.quantityAvailable === 0
                      ? 'pieces'
                      : 'piece'}
                  </span>
                </div>
              )}
            </div>
          </div>

          <div className='product__actions'>
            {existingItem && existingItem.quantity > 0 ? (
              <div className='product__cartControls'>
                <div className='product__quantityControls'>
                  <Button
                    className='product__quantityButton'
                    onClick={() => updateCart(-1)}
                    icon={<MinusCircleOutlined />}
                  />
                  <span className='product__quantityValue'>
                    {existingItem.quantity}
                  </span>
                  <Button
                    className='product__quantityButton'
                    onClick={() => updateCart(1)}
                    disabled={
                      existingItem.quantity >= productInfo?.quantityAvailable
                    }
                    icon={<PlusCircleOutlined />}
                  />
                </div>

                <Button
                  className='product__removeButton'
                  danger
                  onClick={() => removeItem(productInfo.id)}
                  icon={<DeleteOutlined />}
                >
                  Remove
                </Button>
              </div>
            ) : (
              <Button
                className='product__addButton'
                type='primary'
                size='large'
                onClick={() => updateCart(1)}
                icon={<Icons.addShoppingCart />}
              >
                Add to Cart
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
