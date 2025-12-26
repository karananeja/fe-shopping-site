import { Icons } from '@utils/constants';
import { formatCurrency } from '@utils/helpers';
import { Link } from 'react-router-dom';
import './Card.scss';

const Card = ({ id, imageUrl, title, price }) => {
  return (
    <div className='card'>
      <Link to={`products/${id}`} className='card__link'>
        <div className='card__imgContainer'>
          <img className='card__img' src={imageUrl} alt={title} />
          <div className='card__overlay'>
            <Icons.openInBrowser className='card__icon' />
          </div>
        </div>
        <div className='card__content'>
          <h3 className='card__title'>{title}</h3>
          {price && <div className='card__price'>{formatCurrency(price)}</div>}
        </div>
      </Link>
    </div>
  );
};

export default Card;
