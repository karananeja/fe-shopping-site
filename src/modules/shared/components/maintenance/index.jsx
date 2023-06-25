import { Button, Result } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Maintenance = () => {
  const navigate = useNavigate();

  return (
    <Result
      status='500'
      subTitle={
        <>
          Sorry, the page you visited is under <b>construction/maintenance</b>
        </>
      }
      extra={
        <Button type='primary' onClick={() => navigate('/')}>
          Back Home
        </Button>
      }
    />
  );
};

export default Maintenance;
