import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useAuthStatus } from './hooks';

const AuthHome = () => {
  const { loggedIn, checkingStatus } = useAuthStatus();
  const navigate = useNavigate();

  useEffect(() => {
    if (loggedIn && !checkingStatus) navigate('/');
  }, [loggedIn, checkingStatus, navigate]);

  return <Outlet />;
};

export default AuthHome;
