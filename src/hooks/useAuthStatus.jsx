import { useState, useEffect } from 'react';
import { getValue } from '../infrastructure/storeManagement';
import { keys } from '../utils/constants/keys';

export const useAuthStatus = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [checkingStatus, setCheckingStatus] = useState(true);
  const accessToken = getValue(keys.ACCESS_TOKEN);

  useEffect(() => {
    if (accessToken) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
    setCheckingStatus(false);
  }, [accessToken]);

  return { loggedIn, checkingStatus };
};
