import React from 'react';
import { Spin } from 'antd';

const Loader = () => {
  return (
    <div style={{ display: 'grid', placeContent: 'center', height: '100%' }}>
      <Spin size='default' />
    </div>
  );
};

export default Loader;
