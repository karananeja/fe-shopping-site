import React from 'react';
import Home from './index';
import Cards from './components/cards';
import Product from './pages/product';
import Cart from './pages/cart';
import Profile from './pages/profile';
import PrivateRoute from '@modules/shared/components/PrivateRoute';
import Details from './pages/profile/details';

const HomeRoutes = [
  {
    path: '/',
    element: <Home />,
    children: [
      { path: '', element: <Cards /> },
      { path: 'products/:productID', element: <Product /> },
      { path: 'cart', element: <Cart /> },
      {
        path: 'profile',
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
        children: [{ path: 'details', element: <Details /> }],
      },
    ],
  },
];

export default HomeRoutes;
