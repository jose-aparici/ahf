import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from 'react';

import { Notification } from 'domain/notification/notification.types';

interface ToasterHook {
  showNotification: (notification: Notification) => void;
  showToaster: boolean;
  setShowToaster: Dispatch<SetStateAction<boolean>>;
  currentNotification: Notification | undefined;
}

export const useToaster = (): ToasterHook => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [showToaster, setShowToaster] = useState(false);
  const [currentNotification, setCurrentNotification] = useState<
    Notification
  >();

  useEffect(() => {
    if (notifications.length && !currentNotification) {
      setCurrentNotification({ ...notifications[0] });
      setNotifications((prev) => prev.slice(1));
      setShowToaster(true);
    }
  }, [currentNotification, notifications]);

  const showNotification = useCallback((notification: Notification) => {
    setCurrentNotification(undefined);
    setNotifications((prev) => [...prev, notification]);
  }, []);

  return {
    showNotification,
    showToaster,
    setShowToaster,
    currentNotification,
  };
};
