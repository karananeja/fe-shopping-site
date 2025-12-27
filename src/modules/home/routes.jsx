import PrivateRoute from '@modules/shared/components/PrivateRoute';
import Cards from './components/cards';
import Home from './index';
import Cart from './pages/cart';
import Product from './pages/product';
import Profile from './pages/profile';
import AccountSettings from './pages/profile/account-settings';
import Address from './pages/profile/address';
import Details from './pages/profile/details';
import Orders from './pages/profile/orders';

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
          { path: 'orders', element: <Orders /> },
          { path: 'account-settings', element: <AccountSettings /> },
        ],
      },
    ],
  },
];

export default HomeRoutes;
