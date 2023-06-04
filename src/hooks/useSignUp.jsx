import { useMutation } from 'react-query';
import { signUpUser } from '../infrastructure/network/authConnect';

/**
 * @summary This method is used to sign up
 * @param {object} options
 */
export const useSignUp = (options = {}) => {
  return useMutation(signUpUser, { ...options });
};
