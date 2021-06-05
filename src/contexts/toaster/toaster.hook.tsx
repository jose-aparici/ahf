import { Dispatch, SetStateAction, useCallback, useState } from 'react';

import { Notification } from 'domain/notification/notification.types';

interface ToasterHook {
  displayNotification: (notification: Notification) => void;
  notification: Notification | undefined;
  showNotification: boolean;
  setShowNotification: Dispatch<SetStateAction<boolean>>;
}

export const useToaster = (): ToasterHook => {
  const [showNotification, setShowNotification] = useState(false);
  const [notification, setNotification] = useState<Notification>();

  const displayNotification = useCallback((notification: Notification) => {
    setNotification(notification);
    setShowNotification(true);
  }, []);

  return {
    displayNotification,
    notification,
    showNotification,
    setShowNotification,
  };
};
