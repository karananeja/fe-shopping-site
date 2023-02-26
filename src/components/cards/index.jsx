import React, { useState } from 'react';
import './Cards.scss';
import data from '../../utils/sampleData.json';
import { Button } from '@mui/material';
import { LaunchOutlined, ShoppingCartOutlined } from '@mui/icons-material';

const Cards = () => {
  const [cardData] = useState(data);

  return (
    <div className='cards'>
      {cardData.map(({ title, imageUrl }, index) => (
        <div key={index}>
          <img className='cards__img' src={imageUrl} alt={title} />
          <h3 className='cards__title'>{title}</h3>
          <div className='cards__buttons'>
            <Button>
              Open <LaunchOutlined />
            </Button>
            <Button>
              Add to <ShoppingCartOutlined />
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
