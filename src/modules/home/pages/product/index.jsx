import { Icons } from '@utils/constants';
import { Button } from 'antd';
import { useParams } from 'react-router-dom';
import sampleData from '../../../../utils/sampleData.json';
import './Product.scss';

const Product = () => {
  const { productID } = useParams();

  const productInfo = sampleData.find(({ id }) => id === parseInt(productID));

  return (
    <div className='product'>
      <div className='product__imgContainer'>
        <Icons.left />
        <img
          className='product__img'
          src={productInfo?.imageUrl}
          alt={productInfo?.title}
        />
        <Icons.right />
      </div>
      <div className='product__content'>
        {productInfo?.title && (
          <h3 className='product__title'>
            <span>Product Title - {productInfo?.title}</span>
          </h3>
        )}

        {productInfo?.price && (
          <p className='product__price'>
            <span>Price - {productInfo?.price}</span> ({productInfo?.loan})
          </p>
        )}

        {productInfo?.description && (
          <p className='product__description'>
            <span>Description</span> - {productInfo?.description}
          </p>
        )}

        {productInfo?.workingWidth && (
          <p className='product__workingWidth'>
            <span>Working Width</span> -{' '}
            {productInfo?.workingWidth?.map((width) => (
              <span key={width}>{width}&#34; </span>
            ))}
          </p>
        )}

        {productInfo?.shuttleBox && (
          <p className='product__shuttleBox'>
            <span>Shuttle Box</span> -{' '}
            {productInfo?.shuttleBox?.map((box) => (
              <span key={box}>{box} </span>
            ))}
          </p>
        )}

        {productInfo?.shedding && (
          <p className='product__shedding'>
            <span>Shedding</span> - {productInfo?.shedding}
          </p>
        )}

        {productInfo?.quantityAvailable && (
          <p className='product__quantityAvailable'>
            <span>Available</span> - {productInfo?.quantityAvailable}{' '}
            {productInfo?.quantityAvailable > 1 ||
            productInfo?.quantityAvailable === 0
              ? 'pieces'
              : 'piece'}
          </p>
        )}
      </div>

      <div className='product__buttons'>
        <Button className='product__button'>
          Add to Cart -
          <Icons.addShoppingCart />
        </Button>
      </div>
    </div>
  );
};

export default Product;
