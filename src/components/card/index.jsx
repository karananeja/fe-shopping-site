import { LaunchOutlined, ShoppingCartOutlined } from '@mui/icons-material';
import { Button } from '@mui/material';
import React from 'react';
import './Card.scss';

const Card = ({ title, imageUrl }) => {
  return (
    <div className='card'>
      <img className='card__img' src={imageUrl} alt={title} />
      <h3 className='card__title'>{title}</h3>
      <div className='card__buttons'>
        <Button>
          Open <LaunchOutlined />
        </Button>
        <Button>
          Add to <ShoppingCartOutlined />
        </Button>
      </div>
    </div>
  );
};

export default Card;
