import { apiPost } from './apiClient';

//register user which accepts an email id to send the verification link
export const signUpUser = (body) => {
  return apiPost('/user/v1/register', body);
};

//set password
export const setPassword = (body) => {
  return apiPost('/user/v1/password/set', body);
};

//forgot Password
export const forgotPassword = (body) => {
  return apiPost('/user/v1/password/forgot', body);
};

//sign in user
export const signInUser = (body) => {
  return apiPost('/user/v1/sign-in', body);
};
