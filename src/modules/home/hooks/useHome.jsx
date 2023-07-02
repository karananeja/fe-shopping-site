import { getCountryList } from '@services/utilsConnect';
import { QUERY_KEYS } from '@utils/constants';
import { useQuery } from 'react-query';

/**
 * @summary This method is used to get the country list
 * @param {object} options
 */
export const useCountryList = (options = {}) => {
  return useQuery(QUERY_KEYS.COUNTRY_LIST, getCountryList, { ...options });
};
