import axios from 'axios';
import { KEYS } from '@utils/constants';
import { getValue } from '@utils/helpers/localStorageManagement';
import { errorHandler } from './errorHandler';

const shoppingSite = axios.create({
  baseURL: import.meta.env.VITE_APP_API_BASE_URL,
});

const setAuthorizationHeader = () => {
  const token = getValue(KEYS.ACCESS_TOKEN);
  if (token) {
    shoppingSite.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }
};

export const apiPost = async (url, body, headers = {}) => {
  setAuthorizationHeader();
  return await shoppingSite
    .post(url, body, headers)
    .then((response) => response.data.data)
    .catch((error) => {
      errorHandler(error);
      throw error;
    });
};

export const apiGet = async (url) => {
  setAuthorizationHeader();
  return await shoppingSite
    .get(url)
    .then((response) => response.data.data)
    .catch((error) => {
      errorHandler(error);
      throw error;
    });
};

export const apiPut = async (url, body) => {
  setAuthorizationHeader();
  return await shoppingSite
    .put(url, body)
    .then((response) => response.data.data)
    .catch((error) => {
      errorHandler(error);
      throw error;
    });
};

export const apiDelete = async (url, body) => {
  setAuthorizationHeader();
  return await shoppingSite
    .delete(url, { data: body })
    .then((response) => response.data.data)
    .catch((error) => {
      errorHandler(error);
      throw error;
    });
};
