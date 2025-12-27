import {
  addUserAddress,
  deleteUserAddress,
  getUserAddressList,
  getUserInfo,
  resetPassword,
  updateUserAddress,
  updateUserInfo,
} from '@services/user-client';
import { getCountryList } from '@services/utils-connect';
import { QUERY_KEYS } from '@utils/constants';
import { useMutation, useQuery, useQueryClient } from 'react-query';

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

/**
 * @summary This method is used to get the user address list
 * @param {object} options
 */
export const useGetUserAddressList = (options = {}) => {
  return useQuery(QUERY_KEYS.USER_ADDRESS_LIST, getUserAddressList, options);
};

/**
 * @summary This method is used to add the user address
 * @param {object} options
 */
export const useAddUserAddress = (options = {}) => {
  const queryClient = useQueryClient();
  return useMutation(addUserAddress, {
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.USER_ADDRESS_LIST,
      }),
    ...options,
  });
};

/**
 * @summary This method is used to delete the user address
 * @param {object} options
 */
export const useDeleteUserAddress = (options = {}) => {
  const queryClient = useQueryClient();
  return useMutation(deleteUserAddress, {
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.USER_ADDRESS_LIST,
      }),
    ...options,
  });
};

/**
 * @summary This method is used to update the user address
 * @param {object} options
 */
export const useUpdateUserAddress = (options = {}) => {
  const queryClient = useQueryClient();
  return useMutation(updateUserAddress, {
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.USER_ADDRESS_LIST,
      }),
    ...options,
  });
};

/**
 * @summary This method is used to reset the user password
 * @param {object} options
 */
export const useResetPassword = (options = {}) => {
  return useMutation(resetPassword, options);
};
