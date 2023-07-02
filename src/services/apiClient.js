import axios from 'axios';
import { KEYS } from '@utils/constants';
import { getValue } from '@utils/helpers/localStorageManagement';
import { errorHandler } from './errorHandler';

const shoppingSite = axios.create({
  baseURL: import.meta.env.VITE_APP_API_BASE_URL,
});

// shoppingSite.interceptors.response.use(null, async (error) => {
//   console.log(error);
//   if (
//     error.config &&
//     error.response &&
//     error.response.data.err?.requestrefresh
//   ) {
//     return refreshAccessToken()
//       .then((response) => {
//         setValue('accessToken', response.data.accessToken);
//         error.config.headers.Authorization = `Bearer ${response.data.accessToken}`;
//         return shoppingSite.request(error.config);
//       })
//       .catch((err) => {
//         console.log({ err });
//         deleteValue('accessToken');
//         deleteValue('refreshToken');
//         window.location.reload();
//       });
//   }
//   return Promise.reject(error);
// });

// const refreshAccessToken = async () => {
//   setAuthorizationRefreshHeader();
//   return await shoppingSite.post('/user/v1/token/refresh');
// };

// const setAuthorizationRefreshHeader = () => {
//   shoppingSite.defaults.headers.common['Authorization'] = `Bearer ${getValue(
//     'refreshToken'
//   )}`;
// };

const setAuthorizationHeader = () => {
  let token = getValue(KEYS.ACCESS_TOKEN);
  if (token) {
    shoppingSite.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }
};

export const apiPost = async (url, body, headers = {}) => {
  setAuthorizationHeader();
  return shoppingSite
    .post(url, body, headers)
    .then((response) => response.data.data)
    .catch((error) => {
      errorHandler(error);
      throw error;
    });
};

export const apiGet = async (url) => {
  setAuthorizationHeader();
  return shoppingSite
    .get(url)
    .then((response) => response.data.data)
    .catch((error) => {
      errorHandler(error);
      throw error;
    });
};

export const apiPut = async (url, body) => {
  setAuthorizationHeader();
  return shoppingSite
    .put(url, body)
    .then((response) => response.data.data)
    .catch((error) => {
      errorHandler(error);
      throw error;
    });
};

export const apiDelete = async (url, body) => {
  setAuthorizationHeader();
  return shoppingSite
    .delete(url, {
      data: body,
    })
    .then((response) => response.data.data)
    .catch((error) => {
      errorHandler(error);
      throw error;
    });
};
