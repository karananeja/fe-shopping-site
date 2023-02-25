import React, { useState } from 'react';
import Card from '../card';
import './Cards.scss';
import data from '../../utils/sampleData.json';

const Cards = () => {
  const [cardData] = useState(data);

  return (
    <div className='cards'>
      {cardData.map(({ title, imageUrl }, index) => (
        <Card key={index} title={title} imageUrl={imageUrl} />
      ))}
    </div>
  );
};

export default Cards;
