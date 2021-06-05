import { Dispatch, SetStateAction, useCallback, useState } from 'react';

import { Notification } from 'domain/notification/notification.types';

interface ToasterHook {
  displayNotification: (notification: Notification) => void;
  notification: Notification | undefined;
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
}

export const useToaster = (): ToasterHook => {
  const [show, setShow] = useState(false);
  const [notification, setNotification] = useState<Notification>();

  const displayNotification = useCallback((notification: Notification) => {
    setNotification(notification);
    setShow(true);
  }, []);

  return {
    displayNotification,
    notification,
    show,
    setShow,
  };
};
