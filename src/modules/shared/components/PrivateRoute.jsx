import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthStatus } from '@modules/auth/hooks/useAuthStatus';
import { deleteValue } from '@utils/helpers';
import { KEYS } from '@utils/constants';
import Loader from './loader';

const PrivateRoute = ({ children }) => {
  const { loggedIn, checkingStatus } = useAuthStatus();

  useEffect(() => {
    if (!checkingStatus && !loggedIn) {
      deleteValue(KEYS.ACCESS_TOKEN);
    }
  }, [loggedIn, checkingStatus]);

  if (checkingStatus) return <Loader />;

  return loggedIn ? children : <Navigate to='/' />;
};

export default PrivateRoute;
