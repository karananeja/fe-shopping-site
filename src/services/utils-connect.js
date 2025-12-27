import { apiGet } from './api-client';

export const getCountryList = () => {
  return apiGet('/country-list');
};
