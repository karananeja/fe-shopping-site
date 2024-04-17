import data from '../../../../utils/sampleData.json';
import Card from '../card';
import './Cards.scss';

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
