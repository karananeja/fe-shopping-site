import { useMutation } from 'react-query';
import { signInUser } from '@services/authConnect';

/**
 * @summary This method is used to sign up
 * @param {object} options
 */
export const useSignIn = (options = {}) => {
  return useMutation(signInUser, { ...options });
};
