import { apiGet, apiPost } from './apiClient';

//register user which accepts an email id to send the verification link
export const signUpUser = (body) => {
  return apiPost('/user/v1/register', body);
};

//verify the token in the email
export const verifySignUpToken = (query) => {
  return apiGet(`/user/v1/verify${query}`);
};

//set password
export const setPassword = (body) => {
  return apiPost('/user/v1/password/set', body);
};

//forgot Password
export const forgotPassword = (body) => {
  return apiPost('/user/v1/password/forgot', body);
};

//verify reset password token
export const verifyResetPasswordToken = (query) => {
  return apiGet(`/user/v1/password/forgot/verify${query}`);
};
