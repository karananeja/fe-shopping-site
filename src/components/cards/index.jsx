import React, { useState } from 'react';
import Card from '../card';
import './Cards.scss';
import data from '../../utils/sampleData.json';

const Cards = () => {
  const [cardData] = useState(data);

  return (
    <div className='cards'>
      {cardData.map(({ id, imageUrl, title }) => (
        <Card key={id} id={id} imageUrl={imageUrl} title={title} />
      ))}
    </div>
  );
};

export default Cards;
