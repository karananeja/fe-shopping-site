import { useMutation } from 'react-query';
import { setPassword, signUpUser } from '../infrastructure/network/authConnect';

export const useSignUp = (options = {}) => {
  return useMutation('user_signup', signUpUser, { ...options });
};

export const useSetPassword = (options = {}) => {
  return useMutation('user_set_password', setPassword, { ...options });
};
