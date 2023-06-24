import React from 'react';
import Card from '../card';
import './Cards.scss';
import data from '../../../../utils/sampleData.json';

const Cards = () => {
  return (
    <div className='cards'>
      {data.map(({ id, imageUrl, title }) => (
        <Card key={id} id={id} imageUrl={imageUrl} title={title} />
      ))}
    </div>
  );
};

export default Cards;
