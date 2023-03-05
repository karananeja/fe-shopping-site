import {
  AddShoppingCartOutlined,
  ArrowCircleLeftOutlined,
  ArrowCircleRightOutlined,
} from '@mui/icons-material';
import { Button } from '@mui/material';
import React from 'react';
import { useParams } from 'react-router-dom';
import sampleData from '../../utils/sampleData.json';
import './Product.scss';

const Product = () => {
  const { productID } = useParams();

  const productInfo = sampleData.filter(
    ({ id }) => id === parseInt(productID)
  )[0];

  return (
    <div className='product'>
      <div className='product__imgContainer'>
        <ArrowCircleLeftOutlined />
        <img
          className='product__img'
          src={productInfo?.imageUrl}
          alt={productInfo?.title}
        />
        <ArrowCircleRightOutlined />
      </div>
      <div className='product__content'>
        {productInfo?.title && (
          <h3 className='product__title'>
            <span style={{ color: 'black', fontWeight: 'bold' }}>
              Product Title - {productInfo?.title}
            </span>
          </h3>
        )}

        {productInfo?.price && (
          <p className='product__price'>
            <span style={{ color: 'black', fontWeight: 'bold' }}>
              Price - {productInfo?.price}
            </span>{' '}
            ({productInfo?.loan})
          </p>
        )}

        {productInfo?.description && (
          <p className='product__description'>
            <span style={{ color: 'black', fontWeight: 'bold' }}>
              Description
            </span>{' '}
            - {productInfo?.description}
          </p>
        )}

        {productInfo?.workingWidth && (
          <p className='product__workingWidth'>
            <span style={{ color: 'black', fontWeight: 'bold' }}>
              Working Width
            </span>{' '}
            -{' '}
            {productInfo?.workingWidth?.map((width) => (
              <span key={width}>{width}&#34; </span>
            ))}
          </p>
        )}

        {productInfo?.shuttleBox && (
          <p className='product__shuttleBox'>
            <span style={{ color: 'black', fontWeight: 'bold' }}>
              Shuttle Box
            </span>{' '}
            -{' '}
            {productInfo?.shuttleBox?.map((box) => (
              <span key={box}>{box} </span>
            ))}
          </p>
        )}

        {productInfo?.shedding && (
          <p className='product__shedding'>
            <span style={{ color: 'black', fontWeight: 'bold' }}>Shedding</span>{' '}
            - {productInfo?.shedding}
          </p>
        )}

        {productInfo?.quantityAvailable && (
          <p className='product__quantityAvailable'>
            <span style={{ color: 'black', fontWeight: 'bold' }}>
              Available
            </span>{' '}
            - {productInfo?.quantityAvailable}{' '}
            {productInfo?.quantityAvailable > 1 ||
            productInfo?.quantityAvailable === 0
              ? 'pieces'
              : 'piece'}
          </p>
        )}
      </div>
      <div className='product__buttons'>
        <Button className='product__button'>
          Add to Cart - <AddShoppingCartOutlined />
        </Button>
      </div>
    </div>
  );
};

export default Product;
