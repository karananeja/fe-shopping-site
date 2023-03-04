import React from 'react';
import { useParams } from 'react-router-dom';
import sampleData from '../../utils/sampleData.json';
import './Product.scss';

const Product = () => {
  const { productID } = useParams();

  const { description, imageUrl, price, title } = sampleData.filter(
    ({ id }) => id === parseInt(productID)
  )[0];

  return (
    <div className='product'>
      <img className='product__img' src={imageUrl} alt={title} />
      <h3 className='product__title'>{title}</h3>
      <p className='product__price'>{price}</p>
      <p className='product__description'>{description}</p>
    </div>
  );
};

export default Product;
