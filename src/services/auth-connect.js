import { apiPost } from './api-client';

//register user which accepts an email id to send the verification link
export const signUpUser = (body) => {
  return apiPost('/user/register', body);
};

//forgot Password
export const forgotPassword = (body) => {
  return apiPost('/user/password/forgot', body);
};

//sign in user
export const signInUser = (body) => {
  return apiPost('/user/get-token', body);
};
