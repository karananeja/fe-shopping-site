import React from 'react';
import Product from '../pages/product';
import Cart from '../pages/cart';
import Cards from '../components/cards';
import Profile from '../pages/profile';
import Error from '../pages/error';
import Home from '../pages/home';

const DashboardRoutes = [
  {
    path: '/',
    element: <Home />,
    children: [
      { path: '', element: <Cards /> },
      { path: 'products/:productID', element: <Product /> },
      { path: 'cart', element: <Cart /> },
    ],
    errorElement: <Error />,
  },
  { path: 'profile', element: <Profile /> },
];

export default DashboardRoutes;
