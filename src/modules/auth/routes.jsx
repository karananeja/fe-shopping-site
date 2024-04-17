import AuthHome from '.';
import SignIn from './pages/signIn';
import SignUp from './pages/signUp';

const AuthRoutes = {
  path: 'auth',
  element: <AuthHome />,
  children: [
    { path: 'signin', element: <SignIn /> },
    { path: 'signup', element: <SignUp /> },
  ],
};

export default AuthRoutes;
