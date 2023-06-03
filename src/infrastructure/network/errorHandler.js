import { displayNotification } from '../../utils/helper';

export const errorHandler = (error) => {
  const errMsg =
    (error.response && error.response.data.data.errmessage) ||
    error.message ||
    error.toString();

  displayNotification({
    type: 'error',
    message: 'Something went wrong!',
    description: errMsg,
  });
};
