import { apiDelete, apiGet, apiPost, apiPut } from './apiClient';

export const updateUserInfo = (body) => {
  return apiPost('/user/update-info', body);
};

export const getUserInfo = () => {
  return apiGet('/user/get-info');
};

export const getUserAddressList = () => {
  return apiGet('/user/list-address');
};

export const addUserAddress = (body) => {
  return apiPost('/user/add-address', body);
};

export const deleteUserAddress = (body) => {
  return apiDelete('/user/delete-address', body);
};

export const updateUserAddress = (body) => {
  return apiPut('/user/update-address', body);
};

export const resetPassword = (body) => {
  return apiPut('/user/reset-password', body);
};
