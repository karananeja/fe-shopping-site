import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import NavBar from '../../components/navBar';
import { useAuthStatus } from '../../hooks/useAuthStatus';

const Home = () => {
  const { loggedIn, checkingStatus } = useAuthStatus();
  const navigate = useNavigate();

  useEffect(() => {
    if (loggedIn && !checkingStatus) {
      navigate('/');
    }
  }, [loggedIn, checkingStatus, navigate]);

  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default Home;
