import React from 'react';
import SignIn from '../pages/userService/signIn';
import SignUp from '../pages/userService/signUp';
import AuthHome from '../pages/userService';

const AuthRoutes = {
  path: 'auth',
  element: <AuthHome />,
  children: [
    { path: 'signin', element: <SignIn /> },
    { path: 'signup', element: <SignUp /> },
    { path: 'set-password', element: <SetPassword /> },
  ],
};

export default AuthRoutes;
