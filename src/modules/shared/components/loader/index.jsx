import { Spin } from 'antd';
import './loader.scss';

const Loader = () => {
  return (
    <div className='loader'>
      <Spin size='default' />
    </div>
  );
};

export default Loader;
