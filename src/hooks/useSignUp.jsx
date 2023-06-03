import { useMutation } from 'react-query';
import { setPassword, signUpUser } from '../infrastructure/network/authConnect';

/**
 * @summary This method is used to sign up
 * @param {object} options
 */
export const useSignUp = (options = {}) => {
  return useMutation(signUpUser, { ...options });
};

/**
 * @summary This method is used to set password
 * @param {object} options
 */
export const useSetPassword = (options = {}) => {
  return useMutation(setPassword, { ...options });
};
