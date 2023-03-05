import { OpenInBrowserOutlined } from '@mui/icons-material';
import React from 'react';
import { Link } from 'react-router-dom';
import './Card.scss';

const Card = ({ id, imageUrl, title }) => {
  return (
    <div className='card'>
      <img className='card__img' src={imageUrl} alt={title} />
      <h3 className='card__title'>
        <Link to={`products/${id}`}>
          {title} <OpenInBrowserOutlined />
        </Link>
      </h3>
    </div>
  );
};

export default Card;
