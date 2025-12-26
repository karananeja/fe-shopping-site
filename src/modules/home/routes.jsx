import PrivateRoute from '@modules/shared/components/PrivateRoute';
import Cards from './components/cards';
import Home from './index';
import Cart from './pages/cart';
import Product from './pages/product';
import Profile from './pages/profile';
import Address from './pages/profile/address';
import Details from './pages/profile/details';

const HomeRoutes = [
  {
    path: '',
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
        children: [
          { path: 'details', element: <Details /> },
          { path: 'address', element: <Address /> },
        ],
      },
    ],
  },
];

export default HomeRoutes;
