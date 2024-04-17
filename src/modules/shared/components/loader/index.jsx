import { Spin } from 'antd';
import './Loader.scss';

const Loader = () => {
  return (
    <div className='loader'>
      <Spin size='default' />
    </div>
  );
};

export default Loader;
