import { apiGet, apiPost } from './apiClient';

export const updateUserInfo = (body) => {
  return apiPost('/user/update-info', body);
};

export const getUserInfo = () => {
  return apiGet('/user/get-info');
};
