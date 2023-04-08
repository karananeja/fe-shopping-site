import { apiGet, apiPost } from './morpheus';

//register user which accepts an email id to sent the verification link
export const signUpUser = (body) => {
  return apiPost('/user/v1/register', body);
};

//verify the token in the email
export const verifySignUpToken = (query) => {
  return apiGet(`/user/v1/verify${query}`);
};

//set password
export const setPassword = (token, body) => {
  const headers = { Authorization: `Bearer ${token}` };

  return apiPost('/user/v1/password/set', body, headers);
};

//forgot Password
export const forgotPassword = (body) => {
  return apiPost('/user/v1/password/forgot', body);
};

//verify reset password token
export const verifyResetPasswordToken = (query) => {
  return apiGet(`/user/v1/password/forgot/verify${query}`);
};
