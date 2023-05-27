import axios from 'axios';
import { errorHandler } from './errorHandler';
import { getValue } from '../storeManagement';

const morpheus = axios.create({
  baseURL: import.meta.env.VITE_APP_API_BASE_URL,
});

// morpheus.interceptors.response.use(null, async (error) => {
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
//         return morpheus.request(error.config);
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
//   return await morpheus.post('/user/v1/token/refresh');
// };

// const setAuthorizationRefreshHeader = () => {
//   morpheus.defaults.headers.common['Authorization'] = `Bearer ${getValue(
//     'refreshToken'
//   )}`;
// };

const setAuthorizationHeader = () => {
  let token = getValue('accessToken');
  if (token) {
    morpheus.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }
};

export const apiPost = async (url, body, headers = {}) => {
  setAuthorizationHeader();
  return morpheus
    .post(url, body, { headers })
    .then((response) => {
      return response.data.data;
    })
    .catch((error) => {
      errorHandler(error);
      throw error;
    });
};

export const apiGet = async (url) => {
  setAuthorizationHeader();
  return morpheus
    .get(url)
    .then((response) => {
      return response.data.data;
    })
    .catch((error) => {
      errorHandler(error);
      throw error;
    });
};

export const apiPut = async (url, body) => {
  setAuthorizationHeader();
  return morpheus
    .put(url, body)
    .then((response) => {
      return response.data.data;
    })
    .catch((error) => {
      errorHandler(error);
      throw error;
    });
};

export const apiDelete = async (url, body) => {
  setAuthorizationHeader();
  return morpheus
    .delete(url, {
      data: body,
    })
    .then((response) => {
      return response.data.data;
    })
    .catch((error) => {
      errorHandler(error);
      throw error;
    });
};
