import { apiGet } from './apiClient';

export const getCountryList = () => {
  return apiGet('/country-list');
};
