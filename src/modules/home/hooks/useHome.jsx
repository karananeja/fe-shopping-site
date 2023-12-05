import { getUserInfo, updateUserInfo } from '@services/userClient';
import { getCountryList } from '@services/utilsConnect';
import { QUERY_KEYS } from '@utils/constants';
import { useMutation, useQuery } from 'react-query';

/**
 * @summary This method is used to get the country list
 * @param {object} options
 */
export const useCountryList = (options = {}) => {
  return useQuery(QUERY_KEYS.COUNTRY_LIST, getCountryList, {
    staleTime: Infinity,
    ...options,
  });
};

/**
 * @summary This method is used to update the user info
 * @param {object} options
 */
export const useUpdateUserInfo = (options = {}) => {
  return useMutation(updateUserInfo, options);
};

/**
 * @summary This method is used to get the user info
 * @param {object} options
 */
export const useGetUserInfo = (options = {}) => {
  return useQuery(QUERY_KEYS.USER_INFO, getUserInfo, options);
};
