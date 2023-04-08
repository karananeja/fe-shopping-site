import { notification } from 'antd';

export const errorHandler = (error) => {
  const errMsg =
    (error.response && error.response.data && error.response.data.msg) ||
    error.message ||
    error.toString();

  notification.error({
    message: 'Something went wrong!',
    description: errMsg,
    duration: 3,
  });
};
