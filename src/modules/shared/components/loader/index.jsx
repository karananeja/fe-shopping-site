import React from 'react';
import { Spin } from 'antd';

const Loader = () => {
  return (
    <div className='loader'>
      <Spin size='default' />
    </div>
  );
};

export default Loader;
