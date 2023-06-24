import { notification } from 'antd';

/**
 * @summary It is used to set the notification duration
 */
export const NOTIFICATION_DURATION = 1.5;

/**
 * @summary This method is used to display notification
 * @param {object} notificationConfig
 */
notification.config({ maxCount: 1 });
export const displayNotification = ({
  type = 'success',
  message = 'Success!',
  description = '',
  duration = NOTIFICATION_DURATION,
}) => notification[type]({ message, description, duration });
