import { displayNotification } from '@utils/helpers';

export const errorHandler = (error) => {
  const errMsg =
    (error.response && error.response.data.data.errMessage) ||
    error.message ||
    error.toString();

  displayNotification({
    type: 'error',
    message: 'Something went wrong!',
    description: errMsg,
  });
};
