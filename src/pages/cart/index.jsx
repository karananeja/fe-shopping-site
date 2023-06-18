import React from 'react';
import './Cart.scss';
import { Button, Result } from 'antd';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const navigate = useNavigate();

  return (
    <div className='cart'>
      <Result
        status='404'
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
    </div>
  );
};

export default Cart;
