import { searchQueryAtom } from '@store/globalState';
import { Empty } from 'antd';
import { useRecoilValue } from 'recoil';
import data from '../../../../utils/sampleData.json';
import Card from '../card';
import './Cards.scss';

const Cards = () => {
  const searchQuery = useRecoilValue(searchQueryAtom);

  const filteredProducts = data.filter(({ title }) =>
    title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className='cards'>
      {filteredProducts.length > 0 ? (
        filteredProducts.map(({ id, imageUrl, title, price }) => (
          <Card
            key={id}
            id={id}
            imageUrl={imageUrl}
            title={title}
            price={price}
          />
        ))
      ) : (
        <div className='cards__empty'>
          <Empty description='No products found' />
        </div>
      )}
    </div>
  );
};

export default Cards;
