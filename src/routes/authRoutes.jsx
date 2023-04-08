import React from 'react';
import SignIn from '../pages/userService/signIn';
import SignUp from '../pages/userService/signUp';
import SetPassword from '../pages/userService/setPassword';

const AuthRoutes = {
  path: 'auth',
  children: [
    { path: 'signin', element: <SignIn /> },
    { path: 'signup', element: <SignUp /> },
    { path: 'set-password', element: <SetPassword /> },
  ],
};

export default AuthRoutes;
