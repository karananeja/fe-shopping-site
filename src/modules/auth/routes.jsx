import AuthHome from '.';
import SignIn from './pages/sign-in';
import SignUp from './pages/sign-up';

const AuthRoutes = {
  path: 'auth',
  element: <AuthHome />,
  children: [
    { path: 'sign-in', element: <SignIn /> },
    { path: 'sign-up', element: <SignUp /> },
  ],
};

export default AuthRoutes;
