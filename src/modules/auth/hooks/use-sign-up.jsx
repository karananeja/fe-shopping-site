import { useMutation } from 'react-query';
import { signUpUser } from '@services/auth-connect';

/**
 * @summary This method is used to sign up
 * @param {object} options
 */
export const useSignUp = (options = {}) => {
  return useMutation(signUpUser, options);
};
