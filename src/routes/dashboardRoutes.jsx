import React from 'react';
import NavBar from '../components/navBar';
import Product from '../pages/product';
import Cart from '../pages/cart';
import Cards from '../components/cards';
import Profile from '../pages/profile';
import Error from '../pages/error';

const DashboardRoutes = [
  {
    path: '/',
    element: <NavBar />,
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
