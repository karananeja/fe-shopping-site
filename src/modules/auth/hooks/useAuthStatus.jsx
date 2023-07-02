import { useState, useEffect } from 'react';
import { getValue } from '@utils/helpers/localStorageManagement';
import { KEYS } from '@utils/constants';

export const useAuthStatus = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [checkingStatus, setCheckingStatus] = useState(true);
  const accessToken = getValue(KEYS.ACCESS_TOKEN);

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
